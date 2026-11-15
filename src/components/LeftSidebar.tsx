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
    <aside className="w-12 shrink-0 flex flex-col items-center py-2.5 border-r border-gray-200 bg-white select-none">
      {/* Top Question Time Badge - exactly matching the screenshot '0m', '1m', '2m' */}
      <div
        className="w-8 h-6 mb-3 rounded flex items-center justify-center text-xs font-mono font-medium text-red-500 bg-[#fef2f2] border border-red-300 shadow-2xs"
        title={`Time spent on this question: ${timeSpentMin}m ${timeSpentSec % 60}s`}
      >
        {timeSpentMin}m
      </div>

      {/* Vertical list of Question Number buttons */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden flex flex-col items-center space-y-1 px-1">
        {questions.map((q, idx) => {
          const isSelected = idx === currentQuestionIndex;
          const isAnswered = !!answers[q.id];
          const isMarked = !!markedForReview[q.id];

          return (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(idx)}
              className={`w-7 h-7 text-xs rounded transition flex items-center justify-center cursor-pointer relative ${
                isSelected
                  ? 'bg-[#cfd3db] text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-100 font-normal'
              }`}
              title={`Question ${idx + 1}${isAnswered ? ' (Answered)' : ''}${isMarked ? ' (Marked for Review)' : ''}`}
            >
              <span>{idx + 1}</span>

              {/* Status indicator */}
              {isAnswered && !isSelected && (
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              )}
              {isMarked && !isAnswered && !isSelected && (
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
