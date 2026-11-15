import React, { useRef } from 'react';
import type { Language } from '../types/assessment';
import { RotateCcw, ChevronDown, Copy, Check } from 'lucide-react';

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
  onResetCode,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = React.useState(false);
  const [fontSize, setFontSize] = React.useState<number>(13);

  const lines = code.split('\n');
  const lineCount = Math.max(lines.length, 18);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Handle Tab key
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

    // Auto-closing brackets and quotes
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

    // Handle Enter key for auto-indent
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

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const languageLabels: Record<Language, string> = {
    java: 'Java',
    python: 'Python',
    cpp: 'C++',
    javascript: 'JavaScript',
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#fafafa] overflow-hidden">
      {/* Editor Top Bar */}
      <div className="h-10 border-b border-gray-200 bg-white px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-2">
          <button
            onClick={onResetCode}
            className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-100 transition cursor-pointer"
            title="Reset to starter code"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-100 transition cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <div className="flex items-center space-x-1 pl-2 text-xs text-gray-400">
            <button
              onClick={() => setFontSize(prev => Math.max(11, prev - 1))}
              className="px-1.5 py-0.5 rounded hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              title="Decrease Font Size"
            >
              A-
            </button>
            <span className="text-[11px] font-mono text-gray-600">{fontSize}px</span>
            <button
              onClick={() => setFontSize(prev => Math.min(18, prev + 1))}
              className="px-1.5 py-0.5 rounded hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              title="Increase Font Size"
            >
              A+
            </button>
          </div>
        </div>

        {/* Language Selector Dropdown - matching the screenshot top right: "Java v" or "Python v" */}
        <div className="relative inline-block">
          <div className="flex items-center border border-gray-300 rounded bg-white px-3 py-1 text-xs font-medium text-gray-800 shadow-2xs">
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="appearance-none bg-transparent pr-5 outline-none cursor-pointer text-gray-900 font-medium"
            >
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="javascript">JavaScript</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Editor Body with Gutter & Textarea */}
      <div className="flex-1 flex overflow-hidden relative bg-white">
        {/* Line Numbers Gutter */}
        <div className="w-10 bg-[#f7f8fa] border-r border-gray-200 select-none py-3 text-right pr-2 text-gray-400 font-mono text-xs overflow-hidden shrink-0">
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} style={{ lineHeight: `${fontSize * 1.5}px`, fontSize: `${fontSize}px` }}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* Interactive Text Area */}
        <div className="flex-1 relative h-full">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: `${fontSize * 1.5}px`,
            }}
            className="w-full h-full p-3 font-mono bg-white text-gray-900 resize-none outline-none border-none overflow-auto whitespace-pre selection:bg-blue-100 selection:text-blue-900"
            placeholder={`// Write your ${languageLabels[language]} code here...`}
          />
        </div>
      </div>
    </div>
  );
};
