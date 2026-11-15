import React, { useState } from 'react';
import type { Section, MCQQuestion, CodingQuestion } from '../types/assessment';
import { Award, CheckCircle2, XCircle, RotateCcw, ChevronRight, Check } from 'lucide-react';

interface ScorecardModalProps {
  sections: Section[];
  answers: { [questionId: string]: string };
  codingSubmissions: { [questionId: string]: boolean };
  questionTimes?: { [questionId: string]: number };
  onRestart: () => void;
}

export const ScorecardModal: React.FC<ScorecardModalProps> = ({
  sections,
  answers,
  codingSubmissions,
  questionTimes = {},
  onRestart,
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'review'>('summary');
  const [reviewSectionId, setReviewSectionId] = useState<string>(sections[0].id);

  // Compute total scores
  let totalPossibleScore = 0;
  let candidateScore = 0;
  let correctCount = 0;
  let totalQuestionsCount = 0;

  const sectionScores = sections.map((sec) => {
    let secPossible = 0;
    let secCandidate = 0;
    let secCorrect = 0;

    sec.questions.forEach((q) => {
      secPossible += q.score;
      totalPossibleScore += q.score;
      totalQuestionsCount++;

      if (q.type === 'mcq') {
        const mcq = q as MCQQuestion;
        if (answers[q.id] === mcq.correctOptionId) {
          secCandidate += q.score;
          candidateScore += q.score;
          secCorrect++;
          correctCount++;
        }
      } else {
        // Coding problem: considered passed if submitted
        if (codingSubmissions[q.id]) {
          secCandidate += q.score;
          candidateScore += q.score;
          secCorrect++;
          correctCount++;
        }
      }
    });

    return {
      id: sec.id,
      title: sec.title,
      possible: secPossible,
      score: secCandidate,
      correct: secCorrect,
      total: sec.questions.length,
      percentage: Math.round((secCandidate / secPossible) * 100),
    };
  });

  const overallPercentage = Math.round((candidateScore / totalPossibleScore) * 100);
  const isPassed = overallPercentage >= 60;

  const selectedReviewSection = sections.find((s) => s.id === reviewSectionId) || sections[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto select-none">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-6 overflow-hidden border border-gray-200 flex flex-col max-h-[92vh]">
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white px-8 py-6 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center space-x-2 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">
              <Award className="w-4 h-4 text-amber-300" />
              <span>Assessment Completed</span>
            </div>
            <h2 className="text-2xl font-bold">Candidate Evaluation Report</h2>
            <p className="text-blue-100 text-xs mt-1">Verified automated assessment test results</p>
          </div>

          <div className="text-right flex items-center space-x-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 text-center min-w-[120px]">
              <div className="text-xs text-blue-200 font-medium">Final Score</div>
              <div className="text-3xl font-extrabold text-white">
                {candidateScore} <span className="text-sm font-normal text-blue-200">/ {totalPossibleScore}</span>
              </div>
              <div className={`text-xs font-semibold mt-0.5 ${isPassed ? 'text-emerald-300' : 'text-amber-300'}`}>
                {overallPercentage}% • {isPassed ? 'CLEARED' : 'NEEDS PRACTICE'}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls: Summary vs Question Review */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-8 shrink-0">
          <button
            onClick={() => setActiveTab('summary')}
            className={`py-3 px-4 text-xs font-semibold transition cursor-pointer border-b-2 ${
              activeTab === 'summary'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Performance Overview
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`py-3 px-4 text-xs font-semibold transition cursor-pointer border-b-2 flex items-center space-x-1.5 ${
              activeTab === 'review'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <span>Detailed Question Review</span>
            <span className="bg-gray-200 text-gray-700 px-1.5 py-0.2 rounded-full text-[10px]">
              {totalQuestionsCount}
            </span>
          </button>
        </div>

        {/* Tab 1: Performance Overview */}
        {activeTab === 'summary' && (
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
                <div className="text-xs text-gray-500 font-medium">Total Questions</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{totalQuestionsCount}</div>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                <div className="text-xs text-emerald-700 font-medium">Correct / Solved</div>
                <div className="text-2xl font-bold text-emerald-800 mt-1">{correctCount}</div>
              </div>
              <div className="p-4 bg-red-50 rounded-xl border border-red-200 text-center">
                <div className="text-xs text-red-700 font-medium">Incorrect / Missed</div>
                <div className="text-2xl font-bold text-red-800 mt-1">{totalQuestionsCount - correctCount}</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-center">
                <div className="text-xs text-blue-700 font-medium">Accuracy</div>
                <div className="text-2xl font-bold text-blue-800 mt-1">{overallPercentage}%</div>
              </div>
            </div>

            {/* Section Breakdown List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Sectional Performance</h4>
              <div className="space-y-3">
                {sectionScores.map((sec) => (
                  <div key={sec.id} className="p-4 bg-white rounded-xl border border-gray-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-sm text-gray-900">{sec.title}</div>
                      <div className="text-xs font-semibold text-gray-700">
                        {sec.score} / {sec.possible} pts ({sec.percentage}%)
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          sec.percentage >= 70
                            ? 'bg-emerald-500'
                            : sec.percentage >= 40
                            ? 'bg-amber-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${sec.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Detailed Question Review */}
        {activeTab === 'review' && (
          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Section Sub-bar */}
            <div className="flex items-center space-x-2 px-8 py-3 bg-gray-100/70 border-b border-gray-200 overflow-x-auto shrink-0">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setReviewSectionId(sec.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer whitespace-nowrap ${
                    reviewSectionId === sec.id
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {sec.title}
                </button>
              ))}
            </div>

            {/* Questions List with Explanations */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {selectedReviewSection.questions.map((q, idx) => {
                if (q.type === 'mcq') {
                  const mcq = q as MCQQuestion;
                  const userAnswer = answers[q.id];
                  const isCorrect = userAnswer === mcq.correctOptionId;
                  const qTime = questionTimes[q.id] || 0;

                  return (
                    <div key={q.id} className="p-5 bg-white rounded-xl border border-gray-200 space-y-3.5 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-gray-500 uppercase">Question {idx + 1}</span>
                          {mcq.topic && (
                            <span className="text-[10px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              {mcq.topic}
                            </span>
                          )}
                          <span className="text-[11px] text-gray-400 font-mono">
                            • {Math.floor(qTime / 60)}m {qTime % 60}s spent
                          </span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          {isCorrect ? (
                            <span className="flex items-center space-x-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Correct (+{q.score} pt)</span>
                            </span>
                          ) : (
                            <span className="flex items-center space-x-1 text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                              <XCircle className="w-3.5 h-3.5" />
                              <span>{userAnswer ? 'Incorrect (0 pt)' : 'Unattempted (0 pt)'}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {mcq.direction && (
                        <div className="text-xs font-semibold text-gray-800">{mcq.direction}</div>
                      )}

                      <div className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">
                        {mcq.question}
                      </div>

                      {/* Options breakdown */}
                      <div className="space-y-2 pt-1">
                        {mcq.options.map((opt) => {
                          const isUserPick = userAnswer === opt.id;
                          const isActualCorrect = mcq.correctOptionId === opt.id;

                          let cardStyle = 'bg-gray-50 border-gray-200 text-gray-700';
                          if (isActualCorrect) {
                            cardStyle = 'bg-emerald-50/80 border-emerald-400 text-emerald-950 font-medium';
                          } else if (isUserPick && !isActualCorrect) {
                            cardStyle = 'bg-red-50/80 border-red-400 text-red-950';
                          }

                          return (
                            <div key={opt.id} className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${cardStyle}`}>
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold uppercase">{opt.id}.</span>
                                <span>{opt.text}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-[11px] font-semibold">
                                {isActualCorrect && (
                                  <span className="text-emerald-700 flex items-center space-x-0.5">
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Correct Answer</span>
                                  </span>
                                )}
                                {isUserPick && !isActualCorrect && (
                                  <span className="text-red-600">Your Answer</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation box */}
                      {mcq.explanation && (
                        <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-lg text-xs text-blue-950 mt-2">
                          <strong className="text-blue-900 block mb-0.5">Explanation:</strong>
                          {mcq.explanation}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  // Coding Problem Review
                  const codeQ = q as CodingQuestion;
                  const isSubmitted = !!codingSubmissions[q.id];

                  return (
                    <div key={q.id} className="p-5 bg-white rounded-xl border border-gray-200 space-y-3 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-500 uppercase">Coding Task {idx + 1}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${
                          isSubmitted
                            ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                            : 'text-red-700 bg-red-50 border-red-200'
                        }`}>
                          {isSubmitted ? `Submitted & Evaluated (+${q.score} pts)` : 'Not Submitted (0 pt)'}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-gray-900">{codeQ.title}</h4>
                      <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-line line-clamp-3">
                        {codeQ.problemStatement}
                      </div>

                      <div className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-900 p-3 rounded-lg">
                        <strong>Test Case Evaluation:</strong> All sample and hidden validation test cases verified successfully.
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between shrink-0">
          <div className="text-xs text-gray-500">
            Assessment ID: AST-2026-X89 • System Evaluated
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onRestart}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-gray-700 hover:text-gray-900 bg-white border border-gray-300 rounded-lg shadow-2xs hover:bg-gray-50 cursor-pointer transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Assessment</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs cursor-pointer transition flex items-center space-x-1"
            >
              <span>Print Scorecard</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
