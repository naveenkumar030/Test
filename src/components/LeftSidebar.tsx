import React from 'react';
import type { Question } from '../types/assessment';

interface LeftSidebarProps {
  questions: Question[];
  currentQuestionIndex: number;
  onSelectQuestion: (index: number) => void;
  questionTimes: { [questionId: string]: number }; // in seconds
  answers: { [questionId: string]: string | boolean }; // selected option id or code submitted
  markedForReview: { [questionId: string]: boolean };
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  questions,
  currentQuestionIndex,
  onSelectQuestion,
  questionTimes,
  answers,
  markedForReview,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const timeSpentSec = (currentQuestion ? questionTimes[currentQuestion.id] : 0) || 0;
  const timeSpentMin = Math.floor(timeSpentSec / 60);

  return (
    <aside className="w-14 shrink-0 flex flex-col items-center py-3 border-r border-gray-200 bg-white select-none">
      {/* Top Question Time Badge - exactly matching the screenshot '0m', '1m', '2m' */}
      <div
        className="w-9 h-6 mb-3 rounded flex items-center justify-center text-xs font-mono font-medium text-red-500 bg-red-50/80 border border-red-200 shadow-2xs"
        title={`Time spent on this question: ${timeSpentMin}m ${timeSpentSec % 60}s`}
      >
        {timeSpentMin}m
      </div>

      {/* Vertical list of Question Number buttons */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden flex flex-col items-center space-y-1.5 px-1.5 py-1">
        {questions.map((q, idx) => {
          const isSelected = idx === currentQuestionIndex;
          const isAnswered = !!answers[q.id];
          const isMarked = !!markedForReview[q.id];

          // Determine button style matching the screenshot
          let btnClasses = 'w-9 h-8 text-xs font-medium rounded transition flex items-center justify-center cursor-pointer relative ';

          if (isSelected) {
            // Selected question from screenshots has a light grayish background with subtle border
            btnClasses += 'bg-gray-300 text-gray-900 font-semibold shadow-inner border border-gray-400';
          } else if (isAnswered && isMarked) {
            btnClasses += 'bg-purple-100 text-purple-800 border border-purple-300 hover:bg-purple-200';
          } else if (isAnswered) {
            btnClasses += 'bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200';
          } else if (isMarked) {
            btnClasses += 'bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200';
          } else {
            // Unanswered default
            btnClasses += 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(idx)}
              className={btnClasses}
              title={`Question ${idx + 1}${isAnswered ? ' (Answered)' : ''}${isMarked ? ' (Marked for Review)' : ''}`}
            >
              <span>{idx + 1}</span>

              {/* Status dot indicators */}
              {isAnswered && !isSelected && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
              )}
              {isMarked && !isAnswered && !isSelected && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white"></span>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
