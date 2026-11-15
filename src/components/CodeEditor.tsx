import React, { useRef } from 'react';
import type { Language } from '../types/assessment';
import { ChevronDown } from 'lucide-react';

interface CodeEditorProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  code: string;
  onCodeChange: (code: string) => void;
  onResetCode: () => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  onLanguageChange,
  code,
  onCodeChange,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lines = code.split('\n');
  const lineCount = Math.max(lines.length, 25);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      onCodeChange(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      }, 0);
    }

    const pairs: { [key: string]: string } = {
      '(': ')',
      '[': ']',
      '{': '}',
      '"': '"',
      "'": "'",
    };

    if (pairs[e.key]) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      if (start === end) {
        e.preventDefault();
        const closing = pairs[e.key];
        const newCode = code.substring(0, start) + e.key + closing + code.substring(end);
        onCodeChange(newCode);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 1;
        }, 0);
      }
    }

    if (e.key === 'Enter') {
      const start = textarea.selectionStart;
      const currentLine = code.substring(0, start).split('\n').pop() || '';
      const match = currentLine.match(/^\s*/);
      const indentation = match ? match[0] : '';
      const extraIndent = currentLine.trim().endsWith('{') || currentLine.trim().endsWith(':') ? '    ' : '';

      e.preventDefault();
      const newCode = code.substring(0, start) + '\n' + indentation + extraIndent + code.substring(start);
      onCodeChange(newCode);

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1 + indentation.length + extraIndent.length;
      }, 0);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white overflow-hidden">
      {/* Top Bar with Language Selector on the right - matching screenshot */}
      <div className="h-9 border-b border-gray-200 bg-white px-4 flex items-center justify-end shrink-0">
        <div className="relative inline-block">
          <div className="flex items-center rounded bg-white px-2 py-0.5 text-xs text-gray-700">
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="appearance-none bg-transparent pr-5 outline-none cursor-pointer text-gray-700 text-xs font-normal"
            >
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="javascript">JavaScript</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-1 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 flex overflow-hidden relative bg-white">
        {/* Line Numbers Gutter */}
        <div className="w-8 bg-white select-none py-2 text-right pr-2 text-gray-400 font-mono text-xs overflow-hidden shrink-0 border-r border-gray-100">
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} className="leading-5 text-[11px]">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Textarea */}
        <div className="flex-1 relative h-full">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            className="w-full h-full p-2 font-mono text-[11px] leading-5 bg-white text-gray-900 resize-none outline-none border-none overflow-auto whitespace-pre selection:bg-blue-100"
          />
        </div>
      </div>
    </div>
  );
};
