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
  hasPrevious,
}) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
      {/* Top Meta Bar: Score & Difficulty aligned to top right - exactly matching screenshot */}
      <div className="flex justify-end items-center px-8 pt-3 pb-2">
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

      {/* Bottom Action Footer Bar: Previous and Next Buttons - identical styling matching screenshot */}
      <div className="px-8 py-3.5 flex items-center justify-end space-x-3 bg-white shrink-0">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className={`px-4 py-1.5 text-xs rounded-lg border transition cursor-pointer bg-white ${
            hasPrevious
              ? 'border-[#b8c7db] text-[#1e3a8a] hover:bg-gray-50'
              : 'border-[#b8c7db]/60 text-[#1e3a8a]/60 cursor-not-allowed'
          }`}
        >
          Previous
        </button>

        <button
          onClick={onNext}
          className="px-5 py-1.5 text-xs rounded-lg border border-[#b8c7db] text-[#1e3a8a] bg-white hover:bg-gray-50 transition cursor-pointer font-normal"
        >
          Next
        </button>
      </div>
    </div>
  );
};
