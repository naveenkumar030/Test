import React, { useRef } from 'react';
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -60, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 60, behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-13 shrink-0 flex flex-col items-center py-2.5 bg-[#edf0f3] border-r border-[#d1d5db] select-none h-full">
      {/* Top Question Time Badge - exactly matching the screenshot with solid gray box and red text */}
      <div
        className="w-9 h-8 mb-4 rounded-md flex items-center justify-center text-xs font-normal text-[#dc2626] bg-[#cfd3db] shadow-2xs"
        title={`Time spent on this question: ${timeSpentMin}m ${timeSpentSec % 60}s`}
      >
        {timeSpentMin}m
      </div>

      {/* Question numbers area with integrated scroll bar & arrows */}
      <div className="flex-1 w-full flex items-start justify-center relative overflow-hidden">
        {/* Scrollable Questions Column */}
        <div
          ref={scrollContainerRef}
          className="w-full h-full overflow-y-auto no-scrollbar flex flex-col items-center space-y-1.5 py-1 pr-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {questions.map((q, idx) => {
            const isSelected = idx === currentQuestionIndex;
            const isAnswered = !!answers[q.id];
            const isMarked = !!markedForReview[q.id];

            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(idx)}
                className={`w-9 h-8 text-xs rounded-md transition flex items-center justify-center cursor-pointer relative shrink-0 ${
                  isSelected
                    ? 'bg-[#cfd3db] text-[#374151] font-normal shadow-2xs'
                    : 'text-[#4b5563] hover:bg-black/5 font-normal'
                }`}
                title={`Question ${idx + 1}${isAnswered ? ' (Answered)' : ''}${isMarked ? ' (Marked for Review)' : ''}`}
              >
                <span>{idx + 1}</span>

                {/* Subtle answered indicator */}
                {isAnswered && !isSelected && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                )}
                {isMarked && !isAnswered && !isSelected && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Custom Scrollbar Column matching screenshot exactly */}
        <div className="absolute right-1.5 top-0 bottom-1 flex flex-col items-center justify-between w-2 pointer-events-none">
          {/* Top Arrow ▲ */}
          <button
            onClick={scrollUp}
            className="pointer-events-auto text-[#4b5563] hover:text-black cursor-pointer text-[7px] leading-none mb-0.5"
            title="Scroll up"
          >
            &#9650;
          </button>

          {/* Dark Gray Scrollbar Thumb */}
          <div className="flex-1 w-1 bg-[#4b5563] rounded-full my-0.5 opacity-90"></div>

          {/* Bottom Arrow ▼ (optional for smooth control) */}
          <button
            onClick={scrollDown}
            className="pointer-events-auto text-[#4b5563] hover:text-black cursor-pointer text-[7px] leading-none mt-0.5 opacity-60 hover:opacity-100"
            title="Scroll down"
          >
            &#9660;
          </button>
        </div>
      </div>
    </aside>
  );
};
