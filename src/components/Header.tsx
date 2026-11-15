import React from 'react';
import type { Section } from '../types/assessment';
import { Clock, ShieldCheck, Maximize2, Minimize2, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  sections: Section[];
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
  timeRemainingSeconds: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onFinishClick: () => void;
  answeredCount: number;
  totalQuestions: number;
}

export const Header: React.FC<HeaderProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
  timeRemainingSeconds,
  isFullscreen,
  onToggleFullscreen,
  onFinishClick,
  answeredCount,
  totalQuestions,
}) => {
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isTimeLow = timeRemainingSeconds < 300; // less than 5 mins

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-30 select-none shadow-xs">
      {/* Top Utility Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 text-xs border-b border-gray-100 bg-gray-50/70">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 font-semibold text-gray-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="tracking-wide">ASSESSMENT PORTAL</span>
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center space-x-1 text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Proctored Session #84920</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-gray-600 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Progress: {answeredCount}/{totalQuestions} Answered</span>
          </div>

          <div
            className={`flex items-center space-x-1.5 px-2.5 py-0.5 rounded font-mono font-semibold text-xs border ${
              isTimeLow
                ? 'bg-red-50 text-red-600 border-red-200 animate-pulse'
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Time Left: {formatTime(timeRemainingSeconds)}</span>
          </div>

          <button
            onClick={onToggleFullscreen}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 px-2 py-0.5 rounded hover:bg-gray-200/60 transition cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Exit Fullscreen</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Section Navigation Bar - Exactly matching the screenshot */}
      <div className="flex items-center justify-between px-6 overflow-x-auto">
        <nav className="flex space-x-8 -mb-px">
          {sections.map((section) => {
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                onClick={() => onSelectSection(section.id)}
                className={`py-3.5 px-1 text-sm font-medium transition-colors relative cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                }`}
              >
                {section.title}
              </button>
            );
          })}
        </nav>

        <button
          onClick={onFinishClick}
          className="ml-4 my-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded shadow-xs transition cursor-pointer"
        >
          Finish Test
        </button>
      </div>
    </header>
  );
};
