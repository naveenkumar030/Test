import React, { useState } from 'react';
import type { CodingQuestion, Language, ExecutionResult } from '../types/assessment';
import { ProblemDetails } from './ProblemDetails';
import { CodeEditor } from './CodeEditor';
import { TestResultsDrawer } from './TestResultsDrawer';
import { executeCode, runTestCases } from '../utils/codeRunner';

interface CodingViewProps {
  question: CodingQuestion;
  userCode: { [lang in Language]?: string };
  onUpdateCode: (lang: Language, code: string) => void;
  onSubmitProblem: (questionId: string) => void;
  isSubmitted: boolean;
  onFinishTest: () => void;
}

export const CodingView: React.FC<CodingViewProps> = ({
  question,
  userCode,
  onUpdateCode,
  onSubmitProblem,
  isSubmitted,
  onFinishTest,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    question.id === 'code-hard-1' ? 'java' : 'python'
  );

  const [leftWidthPercent, setLeftWidthPercent] = useState<number>(45);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [customInput, setCustomInput] = useState<string>(
    question.sampleTestCases[0]?.input || ''
  );
  const [isRunningCustom, setIsRunningCustom] = useState<boolean>(false);
  const [customOutput, setCustomOutput] = useState<string>('');
  const [customError, setCustomError] = useState<string | undefined>();
  const [hasRunCustom, setHasRunCustom] = useState<boolean>(false);

  const [isRunningTestCases, setIsRunningTestCases] = useState<boolean>(false);
  const [testCasesResult, setTestCasesResult] = useState<ExecutionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const currentCode = userCode[selectedLanguage] || question.starterCode[selectedLanguage];

  const handleCodeChange = (newCode: string) => {
    onUpdateCode(selectedLanguage, newCode);
  };

  const handleResetCode = () => {
    const starter = question.starterCode[selectedLanguage];
    onUpdateCode(selectedLanguage, starter);
  };

  const handleRunCustomInput = async () => {
    setIsRunningCustom(true);
    setHasRunCustom(true);
    setCustomError(undefined);

    try {
      const res = await executeCode(selectedLanguage, currentCode, customInput, question.id);
      setCustomOutput(res.stdout);
      setCustomError(res.stderr);
    } catch (err: any) {
      setCustomError(err?.message || 'Execution error');
    } finally {
      setIsRunningCustom(false);
    }
  };

  const handleRunTestCases = async () => {
    setIsRunningTestCases(true);
    try {
      const allCases = [...question.sampleTestCases, ...question.hiddenTestCases];
      const res = await runTestCases(selectedLanguage, currentCode, allCases, question.id);
      setTestCasesResult(res);
    } finally {
      setIsRunningTestCases(false);
    }
  };

  const handleSubmitCode = async () => {
    setIsSubmitting(true);
    try {
      const allCases = [...question.sampleTestCases, ...question.hiddenTestCases];
      const res = await runTestCases(selectedLanguage, currentCode, allCases, question.id);
      setTestCasesResult(res);
      onSubmitProblem(question.id);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = e.currentTarget.getBoundingClientRect();
    const newPercent = ((e.clientX - container.left) / container.width) * 100;
    if (newPercent > 25 && newPercent < 75) {
      setLeftWidthPercent(newPercent);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`flex-1 flex overflow-hidden bg-white select-none ${isDragging ? 'cursor-col-resize select-none' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Left Pane: Problem Details */}
      <div style={{ width: `${leftWidthPercent}%` }} className="h-full overflow-hidden flex flex-col">
        <ProblemDetails question={question} />
      </div>

      {/* Thin Divider */}
      <div
        onMouseDown={handleMouseDown}
        className="w-1 hover:w-1.5 bg-gray-200 hover:bg-[#1a73e8] cursor-col-resize transition-all shrink-0 z-10"
      />

      {/* Right Pane: Code Editor + Test Results Drawer */}
      <div style={{ width: `${100 - leftWidthPercent}%` }} className="h-full overflow-hidden flex flex-col">
        {/* Top: Code Editor */}
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          <CodeEditor
            language={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            code={currentCode}
            onCodeChange={handleCodeChange}
            onResetCode={handleResetCode}
          />
        </div>

        {/* Bottom: Test & Results Drawer */}
        <TestResultsDrawer
          customInput={customInput}
          onCustomInputChange={setCustomInput}
          onRunCustomInput={handleRunCustomInput}
          isRunningCustom={isRunningCustom}
          customOutput={customOutput}
          customError={customError}
          hasRunCustom={hasRunCustom}

          sampleTestCases={question.sampleTestCases}
          hiddenTestCases={question.hiddenTestCases}
          onRunTestCases={handleRunTestCases}
          isRunningTestCases={isRunningTestCases}
          testCasesResult={testCasesResult}

          onSubmitCode={handleSubmitCode}
          onFinishTest={onFinishTest}
          isSubmitting={isSubmitting}
          isProblemSubmitted={isSubmitted}
        />
      </div>
    </div>
  );
};
