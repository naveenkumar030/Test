import React from 'react';
import type { Section } from '../types/assessment';
import { AlertTriangle, CheckCircle2, HelpCircle, Bookmark, X } from 'lucide-react';

interface FinishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmFinish: () => void;
  sections: Section[];
  answers: { [questionId: string]: string };
  markedForReview: { [questionId: string]: boolean };
  codingSubmissions: { [questionId: string]: boolean };
}

export const FinishModal: React.FC<FinishModalProps> = ({
  isOpen,
  onClose,
  onConfirmFinish,
  sections,
  answers,
  markedForReview,
  codingSubmissions,
}) => {
  if (!isOpen) return null;

  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalMarked = 0;

  const sectionSummaries = sections.map((sec) => {
    let answered = 0;
    let marked = 0;

    sec.questions.forEach((q) => {
      totalQuestions++;
      if (q.type === 'coding') {
        if (codingSubmissions[q.id]) {
          answered++;
          totalAnswered++;
        }
      } else {
        if (answers[q.id]) {
          answered++;
          totalAnswered++;
        }
      }

      if (markedForReview[q.id]) {
        marked++;
        totalMarked++;
      }
    });

    return {
      title: sec.title,
      total: sec.questions.length,
      answered,
      unanswered: sec.questions.length - answered,
      marked,
    };
  });

  const totalUnanswered = totalQuestions - totalAnswered;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 select-none">
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full overflow-hidden border border-gray-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-semibold text-gray-900">Finish Assessment</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200/50 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Overview Badges */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div className="flex items-center justify-center space-x-1 text-emerald-700 text-xs font-medium mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Answered</span>
              </div>
              <div className="text-xl font-bold text-emerald-800">{totalAnswered}</div>
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-center space-x-1 text-gray-600 text-xs font-medium mb-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Unanswered</span>
              </div>
              <div className="text-xl font-bold text-gray-800">{totalUnanswered}</div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-center justify-center space-x-1 text-amber-700 text-xs font-medium mb-1">
                <Bookmark className="w-3.5 h-3.5" />
                <span>Marked</span>
              </div>
              <div className="text-xl font-bold text-amber-800">{totalMarked}</div>
            </div>
          </div>

          {totalUnanswered > 0 && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-800 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>
                You still have <strong>{totalUnanswered} unanswered</strong> question(s). Are you sure you want to finish?
              </span>
            </div>
          )}

          {/* Section-by-section breakdown table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden text-xs">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-gray-600 font-semibold">
                <tr>
                  <th className="px-3 py-2 text-left">Section</th>
                  <th className="px-2 py-2 text-center">Total</th>
                  <th className="px-2 py-2 text-center">Answered</th>
                  <th className="px-2 py-2 text-center">Remaining</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {sectionSummaries.map((sec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}>
                    <td className="px-3 py-2 font-medium text-gray-900">{sec.title}</td>
                    <td className="px-2 py-2 text-center">{sec.total}</td>
                    <td className="px-2 py-2 text-center text-emerald-600 font-medium">{sec.answered}</td>
                    <td className="px-2 py-2 text-center text-gray-500">{sec.unanswered}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-xs text-gray-500 text-center">
            Once submitted, your answers will be locked and an evaluation report will be generated.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-gray-700 hover:text-gray-900 bg-white border border-gray-300 rounded-md shadow-2xs hover:bg-gray-50 cursor-pointer transition"
          >
            Resume Test
          </button>
          <button
            onClick={onConfirmFinish}
            className="px-5 py-2 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-md shadow-xs cursor-pointer transition"
          >
            Yes, Finish Test
          </button>
        </div>
      </div>
    </div>
  );
};
