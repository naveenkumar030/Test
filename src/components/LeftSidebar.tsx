import React, { useRef, useState, useEffect, useCallback } from 'react';
import type { Question } from '../types/assessment';

interface LeftSidebarProps {
  sectionId?: string;
  questions: Question[];
  currentQuestionIndex: number;
  onSelectQuestion: (index: number) => void;
  questionTimes: { [questionId: string]: number }; // in seconds
  answers: { [questionId: string]: string | boolean }; // selected option id or code submitted
  markedForReview: { [questionId: string]: boolean };
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  sectionId,
  questions,
  currentQuestionIndex,
  onSelectQuestion,
  questionTimes,
  answers,
  markedForReview,
}) => {
  const [showExactSeconds, setShowExactSeconds] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];

  const timeSpentSec = (currentQuestion ? questionTimes[currentQuestion.id] : 0) || 0;
  const timeSpentMin = Math.floor(timeSpentSec / 60);
  const timeSpentSecRem = timeSpentSec % 60;
  const formattedExact = `${timeSpentMin}:${timeSpentSecRem.toString().padStart(2, '0')}`;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const selectedBtnRef = useRef<HTMLButtonElement>(null);

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(1);
  const [clientHeight, setClientHeight] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartScrollTop = useRef(0);

  // Measure container dimensions
  const updateMetrics = useCallback(() => {
    if (scrollContainerRef.current) {
      setScrollTop(scrollContainerRef.current.scrollTop);
      setScrollHeight(scrollContainerRef.current.scrollHeight);
      setClientHeight(scrollContainerRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    updateMetrics();
    const timer = setTimeout(updateMetrics, 100);
    window.addEventListener('resize', updateMetrics);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateMetrics);
    };
  }, [updateMetrics, questions.length]);

  // Auto-scroll active question into view
  useEffect(() => {
    if (selectedBtnRef.current) {
      selectedBtnRef.current.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [currentQuestionIndex]);

  // Handle native scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollTop(scrollContainerRef.current.scrollTop);
    }
  };

  // Scroll arrow up
  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -70, behavior: 'smooth' });
    }
  };

  const isAptitude = sectionId === 'aptitude';

  // Scroller thumb size - increased for Aptitude & Reasoning to match screenshot media_1794758976476_1cc59d78.png
  const trackHeight = Math.max(80, clientHeight - 24);
  const thumbHeight = isAptitude
    ? Math.max(170, Math.min(trackHeight - 30, trackHeight * 0.75))
    : Math.min(70, Math.max(40, trackHeight * 0.28));

  const maxScroll = Math.max(1, scrollHeight - clientHeight);
  const maxThumbTravel = Math.max(1, trackHeight - thumbHeight);
  const thumbTop = Math.min(maxThumbTravel, Math.max(0, (scrollTop / maxScroll) * maxThumbTravel));

  // Drag handling
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScrollTop.current = scrollContainerRef.current ? scrollContainerRef.current.scrollTop : 0;
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollContainerRef.current) return;
      const deltaY = e.clientY - dragStartY.current;
      const scrollRatio = maxScroll / maxThumbTravel;
      scrollContainerRef.current.scrollTop = dragStartScrollTop.current + deltaY * scrollRatio;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, maxScroll, maxThumbTravel]);

  // Track click to jump
  const handleTrackClick = (e: React.MouseEvent) => {
    if (!trackRef.current || !scrollContainerRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const targetRatio = Math.max(0, Math.min(1, (clickY - thumbHeight / 2) / maxThumbTravel));
    scrollContainerRef.current.scrollTo({
      top: targetRatio * maxScroll,
      behavior: 'smooth',
    });
  };

  return (
    <aside className="w-13 shrink-0 flex flex-col items-center py-2.5 bg-[#edf0f3] border-r border-[#d1d5db] select-none h-full overflow-hidden">
      {/* Top Question Time Badge - exactly matching the screenshot, click to toggle seconds/minutes */}
      <button
        onClick={() => setShowExactSeconds((prev) => !prev)}
        className="w-9 h-8 mb-3 rounded-md flex items-center justify-center text-xs font-normal text-[#dc2626] bg-[#cfd3db] shadow-2xs shrink-0 cursor-pointer hover:bg-[#c2c7d0] transition relative group"
        title={`Time spent on this question: ${timeSpentMin}m ${timeSpentSecRem}s (Click to toggle view)`}
      >
        {showExactSeconds ? (
          <span className="text-[10px] font-mono font-medium tracking-tighter text-[#dc2626]">
            {formattedExact}
          </span>
        ) : (
          <span className="text-[#dc2626] font-normal text-xs">{timeSpentMin}m</span>
        )}

        {/* Hover Tooltip */}
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          Time: {timeSpentMin}m {timeSpentSecRem}s
          <div className="text-[9px] text-gray-400">Click to toggle seconds</div>
        </div>
      </button>

      {/* Main Questions & Scrollbar Workspace */}
      <div className="flex-1 w-full flex relative overflow-hidden">
        {/* Scrollable Questions Column */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className={`w-full h-full overflow-y-auto no-scrollbar flex flex-col items-center space-y-2.5 py-1 ${
            isAptitude ? 'pr-3 pb-24' : 'px-1'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {questions.map((q, idx) => {
            const isSelected = idx === currentQuestionIndex;
            const isAnswered = !!answers[q.id];
            const isMarked = !!markedForReview[q.id];

            return (
              <button
                key={q.id}
                ref={isSelected ? selectedBtnRef : undefined}
                onClick={() => onSelectQuestion(idx)}
                className={`w-9 h-8 text-xs rounded-md transition-all flex items-center justify-center cursor-pointer relative shrink-0 ${
                  isSelected
                    ? 'bg-[#cfd3db] text-[#374151] font-normal shadow-2xs'
                    : 'text-[#4b5563] hover:bg-black/5 font-normal'
                }`}
                title={`Question ${idx + 1}${isAnswered ? ' (Answered)' : ''}${isMarked ? ' (Marked for Review)' : ''}`}
              >
                <span>{idx + 1}</span>

                {/* Status dot */}
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

        {/* Scrollbar Track Column - ONLY for Aptitude & Reasoning */}
        {isAptitude && (
          <div className="absolute right-1.5 top-0 bottom-1 flex flex-col items-center w-2">
            {/* Top Arrow ▲ */}
            <button
              onClick={scrollUp}
              className="text-[#4b5563] hover:text-black cursor-pointer text-[8px] leading-none mb-1 select-none active:scale-90 transition-transform"
              title="Scroll up"
            >
              &#9650;
            </button>

            {/* Track and Draggable Dark Thumb */}
            <div
              ref={trackRef}
              onClick={handleTrackClick}
              className="flex-1 w-2 relative cursor-pointer flex justify-center pb-2"
            >
              <div
                onMouseDown={handleThumbMouseDown}
                style={{
                  height: `${thumbHeight}px`,
                  transform: `translateY(${thumbTop}px)`,
                }}
                className="w-1 bg-[#4b5563] rounded-full transition-colors cursor-grab active:cursor-grabbing hover:bg-gray-800"
                title="Drag to scroll questions"
              />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
