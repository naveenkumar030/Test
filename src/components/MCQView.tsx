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
    <div className="flex-1 flex flex-col h-full overflow-y-auto bg-white px-8 pt-3 pb-8">
      {/* Top Meta Bar: Score & Difficulty aligned to top right - exactly matching photo */}
      <div className="flex justify-end items-center mb-3">
        <span className="text-[11px] text-gray-500 font-normal select-none">
          Score: {question.score} | Difficulty: {question.difficulty}
        </span>
      </div>

      {/* Main Question Body */}
      <div className="w-full">
        {/* Direction Text (if any) */}
        {question.direction && (
          <div className="text-xs font-bold text-gray-900 mb-4 leading-relaxed">
            {question.direction}
          </div>
        )}

        {/* Question Text */}
        <div className="text-[13px] text-gray-900 font-normal mb-6 leading-relaxed whitespace-pre-line">
          {question.question}
        </div>

        {/* Options List - styled exactly like the photo with light grey cards */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            return (
              <div
                key={option.id}
                onClick={() => onSelectOption(option.id)}
                className={`flex items-center px-4 py-3 rounded-[3px] transition-all cursor-pointer select-none ${
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

        {/* Action Buttons: Previous & Next placed directly below the options, aligned to the right edge */}
        <div className="flex justify-end items-center space-x-3 mt-4">
          <button
            onClick={onPrevious}
            className="px-4 py-1 text-xs rounded-[4px] border border-[#93b4db] text-[#1a73e8] hover:bg-blue-50/50 hover:border-[#1a73e8] transition cursor-pointer font-normal bg-white select-none active:scale-[0.98]"
          >
            Previous
          </button>

          <button
            onClick={onNext}
            className="px-4 py-1 text-xs rounded-[4px] border border-[#93b4db] text-[#1a73e8] hover:bg-blue-50/50 hover:border-[#1a73e8] transition cursor-pointer font-normal bg-white select-none active:scale-[0.98]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
