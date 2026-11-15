import React from 'react';
import type { Section } from '../types/assessment';

interface HeaderProps {
  sections: Section[];
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
}) => {
  return (
    <header className="border-b border-gray-200 bg-[#f8f9fa] sticky top-0 z-30 select-none">
      <div className="flex items-center justify-center px-4">
        <nav className="flex space-x-12 -mb-px">
          {sections.map((section) => {
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                onClick={() => onSelectSection(section.id)}
                className={`py-3 px-1 text-sm tracking-tight transition-colors relative cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#1a73e8] font-medium border-b-2 border-[#1a73e8]'
                    : 'text-gray-700 hover:text-gray-900 border-b-2 border-transparent font-normal'
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
