import React from 'react';
import type { MCQQuestion } from '../types/assessment';

interface MCQViewProps {
  question: MCQQuestion;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
  onClearResponse: () => void;
  onToggleMarkForReview: () => void;
  isMarkedForReview: boolean;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const MCQView: React.FC<MCQViewProps> = ({
  question,
  selectedOptionId,
  onSelectOption,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
      {/* Top Meta Bar: Topic tag on left, Score & Difficulty on right */}
      <div className="flex justify-between items-center px-8 pt-3 pb-2">
        {question.topic ? (
          <span className="text-[11px] font-medium text-[#1a73e8] bg-blue-50/80 border border-blue-200/60 px-2.5 py-0.5 rounded">
            Topic: {question.topic}
          </span>
        ) : (
          <div />
        )}
        <span className="text-[11px] text-gray-500 font-normal">
          Score: {question.score} | Difficulty: {question.difficulty}
        </span>
      </div>

      {/* Main Question & Options Body */}
      <div className="flex-1 overflow-y-auto px-8 py-2 max-w-5xl">
        {/* Direction Text (if any) */}
        {question.direction && (
          <div className="text-xs font-bold text-gray-900 mb-4 leading-relaxed">
            {question.direction}
          </div>
        )}

        {/* Question Text */}
        <div className="text-sm text-gray-900 font-normal mb-8 leading-relaxed whitespace-pre-line">
          {question.question}
        </div>

        {/* Options List - styled exactly like the screenshot with light grey cards */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            return (
              <div
                key={option.id}
                onClick={() => onSelectOption(option.id)}
                className={`flex items-center px-4 py-3 rounded transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#e2e8f1] border border-[#cbd5e1]'
                    : 'bg-[#edf0f4] hover:bg-[#e4e8ef] border border-transparent'
                }`}
              >
                {/* Radio Button */}
                <div className="mr-3.5 flex items-center justify-center shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-[#1a73e8] bg-white'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-[#1a73e8]"></div>}
                  </div>
                </div>

                {/* Option Text */}
                <span className="text-xs text-gray-900 font-normal">
                  {option.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Footer Bar: Previous and Next Buttons - exact match for screenshot */}
      <div className="px-8 py-3.5 flex items-center justify-end space-x-2.5 bg-white shrink-0">
        <button
          onClick={onPrevious}
          className="px-3.5 py-1 text-xs rounded-[4px] border border-[#7ba4d5] text-[#2b6cb0] hover:bg-blue-50/40 transition cursor-pointer font-normal bg-white"
        >
          Previous
        </button>

        <button
          onClick={onNext}
          className="px-4 py-1 text-xs rounded-[4px] border border-[#7ba4d5] text-[#2b6cb0] hover:bg-blue-50/40 transition cursor-pointer font-normal bg-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};
