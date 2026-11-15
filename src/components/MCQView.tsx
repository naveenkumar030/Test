import React from 'react';
import type { MCQQuestion } from '../types/assessment';
import { Bookmark, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

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
  onClearResponse,
  onToggleMarkForReview,
  isMarkedForReview,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
      {/* Top Meta Bar: Score & Difficulty aligned to top right */}
      <div className="flex justify-end items-center px-8 pt-4 pb-2">
        <span className="text-xs text-gray-500 font-medium">
          Score: {question.score} | Difficulty: {question.difficulty}
        </span>
      </div>

      {/* Main Question & Options Body */}
      <div className="flex-1 overflow-y-auto px-8 py-2 max-w-5xl">
        {/* Direction Text (if any) */}
        {question.direction && (
          <div className="text-sm font-semibold text-gray-800 mb-3 leading-relaxed">
            {question.direction}
          </div>
        )}

        {/* Question Text */}
        <div className="text-base text-gray-900 font-normal mb-8 leading-relaxed whitespace-pre-line">
          {question.question}
        </div>

        {/* Options List - styled exactly like the screenshot with light grey cards */}
        <div className="space-y-3.5">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            return (
              <div
                key={option.id}
                onClick={() => onSelectOption(option.id)}
                className={`flex items-center px-4 py-3.5 rounded transition-all cursor-pointer select-none border ${
                  isSelected
                    ? 'bg-[#e5ecf6] border-blue-400 shadow-2xs'
                    : 'bg-[#edf0f5] border-transparent hover:bg-[#e4e8ef]'
                }`}
              >
                {/* Radio Button */}
                <div className="mr-4 flex items-center justify-center shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-blue-600 bg-white ring-2 ring-blue-500/20'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                  </div>
                </div>

                {/* Option Text */}
                <span className={`text-sm ${isSelected ? 'text-gray-950 font-medium' : 'text-gray-800'}`}>
                  {option.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Footer Bar */}
      <div className="px-8 py-3.5 border-t border-gray-100 flex items-center justify-between bg-white shrink-0">
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleMarkForReview}
            className={`flex items-center space-x-1 px-3 py-1.5 text-xs font-medium rounded border transition cursor-pointer ${
              isMarkedForReview
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'text-gray-600 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>{isMarkedForReview ? 'Marked for Review' : 'Mark for Review'}</span>
          </button>

          {selectedOptionId && (
            <button
              onClick={onClearResponse}
              className="flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-800 rounded border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Response</span>
            </button>
          )}
        </div>

        {/* Previous and Next Buttons - exactly styled as shown in screenshot bottom-right */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onPrevious}
            disabled={!hasPrevious}
            className={`flex items-center space-x-1 px-4 py-1.5 text-xs font-medium rounded border transition ${
              hasPrevious
                ? 'text-blue-600 border-blue-300 hover:bg-blue-50 cursor-pointer'
                : 'text-gray-300 border-gray-200 cursor-not-allowed bg-gray-50'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <button
            onClick={onNext}
            className={`flex items-center space-x-1 px-5 py-1.5 text-xs font-medium rounded border border-blue-600 transition cursor-pointer ${
              hasNext
                ? 'text-blue-600 hover:bg-blue-50'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <span>{hasNext ? 'Next' : 'Next Section'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
