import React from 'react';
import type { Section } from '../types/assessment';

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
}) => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-30 select-none">
      {/* Section Navigation Tabs - exactly matching the screenshot */}
      <div className="flex items-center justify-center px-6">
        <nav className="flex space-x-10 -mb-px">
          {sections.map((section) => {
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                onClick={() => onSelectSection(section.id)}
                className={`py-3 px-2 text-sm transition-colors relative cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent font-normal'
                }`}
              >
                {section.title}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
