import React, { useState } from 'react';
import type { TestCase, ExecutionResult } from '../types/assessment';
import { ChevronDown, ChevronUp, Info, Play, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

interface TestResultsDrawerProps {
  customInput: string;
  onCustomInputChange: (val: string) => void;
  onRunCustomInput: () => void;
  isRunningCustom: boolean;
  customOutput: string;
  customError?: string;
  hasRunCustom: boolean;

  sampleTestCases: TestCase[];
  hiddenTestCases: TestCase[];
  onRunTestCases: () => void;
  isRunningTestCases: boolean;
  testCasesResult: ExecutionResult | null;

  onSubmitCode: () => void;
  onFinishTest: () => void;
  isSubmitting: boolean;
  isProblemSubmitted: boolean;
}

export const TestResultsDrawer: React.FC<TestResultsDrawerProps> = ({
  customInput,
  onCustomInputChange,
  onRunCustomInput,
  isRunningCustom,
  customOutput,
  customError,
  hasRunCustom,

  sampleTestCases,
  hiddenTestCases,
  onRunTestCases,
  isRunningTestCases,
  testCasesResult,

  onSubmitCode,
  onFinishTest,
  isSubmitting,
  isProblemSubmitted,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'custom' | 'testcases'>('custom');
  const [selectedTestCaseIdx, setSelectedTestCaseIdx] = useState(0);

  const allTestCases = [...sampleTestCases, ...hiddenTestCases];

  return (
    <div className="border-t border-gray-200 bg-white flex flex-col shrink-0 select-none">
      {/* Header Bar - exactly matching the screenshot: 'v Test & Results' and blue Submit + green Finish */}
      <div className="h-11 px-4 bg-white border-b border-gray-200 flex items-center justify-between">
        {/* Left: Collapsible toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 text-xs font-normal text-[#1a73e8] hover:underline cursor-pointer"
        >
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          <span>Test & Results</span>
        </button>

        {/* Right: Blue Submit + Green Finish Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onSubmitCode}
            disabled={isSubmitting}
            className={`px-4 py-1.5 text-xs font-medium text-white rounded transition shadow-2xs flex items-center space-x-1 cursor-pointer ${
              isProblemSubmitted
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-[#1a73e8] hover:bg-[#1557b0]'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>Evaluating...</span>
              </>
            ) : isProblemSubmitted ? (
              <>
                <CheckCircle2 className="w-3 h-3" />
                <span>Submitted</span>
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>

          <button
            onClick={onFinishTest}
            className="px-4 py-1.5 text-xs font-medium text-white bg-[#00a843] hover:bg-[#008f39] rounded transition shadow-2xs cursor-pointer"
          >
            Finish
          </button>
        </div>
      </div>

      {/* Expanded Drawer Content - exactly matching media_1794758415281_75f202fa.jpg */}
      {isOpen && (
        <div className="h-56 flex bg-white overflow-hidden">
          {/* Left Side: Vertical Tabs */}
          <div className="w-32 shrink-0 border-r border-gray-200 py-3 flex flex-col space-y-3 px-3">
            {/* Custom Input Tab with blue indicator bar */}
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex items-center justify-between text-xs font-normal text-left cursor-pointer transition ${
                activeTab === 'custom'
                  ? 'text-[#1a73e8] font-medium'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <span>Custom Input</span>
              {activeTab === 'custom' && (
                <span className="w-0.5 h-4 bg-[#1a73e8] rounded-full"></span>
              )}
            </button>

            {/* Test Cases Tab */}
            <button
              onClick={() => setActiveTab('testcases')}
              className={`flex items-center justify-between text-xs font-normal text-left cursor-pointer transition ${
                activeTab === 'testcases'
                  ? 'text-[#1a73e8] font-medium'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <span>Test Cases</span>
              {activeTab === 'testcases' && (
                <span className="w-0.5 h-4 bg-[#1a73e8] rounded-full"></span>
              )}
            </button>
          </div>

          {/* Right Side: Tab Content */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2.5">
            {activeTab === 'custom' ? (
              <>
                {/* Custom Input Textarea */}
                <div className="w-full">
                  <textarea
                    value={customInput}
                    onChange={(e) => onCustomInputChange(e.target.value)}
                    placeholder="Custom Input"
                    rows={2}
                    className="w-full text-xs font-mono p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none bg-white text-gray-900"
                  />
                </div>

                {/* Info Icon & Run Code Button - aligned to right */}
                <div className="flex items-center justify-end space-x-2">
                  <div
                    title="Provide standard input as expected by your program"
                    className="text-gray-500 hover:text-gray-700 cursor-help"
                  >
                    <Info className="w-4 h-4" />
                  </div>

                  <button
                    onClick={onRunCustomInput}
                    disabled={isRunningCustom}
                    className="px-4 py-1.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium rounded transition flex items-center space-x-1 cursor-pointer disabled:opacity-60"
                  >
                    {isRunningCustom ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Running...</span>
                      </>
                    ) : (
                      <span>Run Code</span>
                    )}
                  </button>
                </div>

                {/* Output Container - exact style from screenshot */}
                <div className="flex-1 bg-[#edf0f4] rounded p-3 text-xs overflow-y-auto min-h-[70px]">
                  <div className="text-gray-700 font-normal text-xs mb-1.5">Output:</div>
                  {!hasRunCustom ? (
                    <div className="text-gray-600 text-xs">Run the code to see the output</div>
                  ) : customError ? (
                    <div className="text-red-600 font-mono text-xs whitespace-pre-wrap">{customError}</div>
                  ) : (
                    <div className="text-gray-900 font-mono text-xs whitespace-pre-wrap">
                      {customOutput || <span className="text-gray-500">(Empty output)</span>}
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Test Cases Tab Content */
              <div className="flex-1 flex flex-col space-y-2">
                <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                  <div className="flex items-center space-x-1.5 overflow-x-auto">
                    {allTestCases.map((tc, idx) => {
                      const result = testCasesResult?.testCaseResults?.find(r => r.testCaseId === tc.id);
                      const isSelected = selectedTestCaseIdx === idx;

                      return (
                        <button
                          key={tc.id}
                          onClick={() => setSelectedTestCaseIdx(idx)}
                          className={`px-2.5 py-1 text-xs rounded transition flex items-center space-x-1 cursor-pointer ${
                            isSelected
                              ? 'bg-blue-100 text-[#1a73e8] font-medium border border-blue-300'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                          }`}
                        >
                          {result && (
                            result.passed ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <XCircle className="w-3 h-3 text-red-600" />
                            )
                          )}
                          <span>{tc.isHidden ? `Hidden ${idx + 1}` : `Case ${idx + 1}`}</span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={onRunTestCases}
                    disabled={isRunningTestCases}
                    className="px-3.5 py-1 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium rounded transition flex items-center space-x-1 cursor-pointer disabled:opacity-60"
                  >
                    {isRunningTestCases ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Testing...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run All Cases</span>
                      </>
                    )}
                  </button>
                </div>

                {allTestCases[selectedTestCaseIdx] && (
                  <div className="flex-1 grid grid-cols-2 gap-2.5 text-xs font-mono">
                    <div>
                      <div className="text-[11px] font-sans text-gray-600 mb-0.5">Input:</div>
                      <div className="bg-[#edf0f4] p-2 rounded text-gray-900 whitespace-pre-wrap">
                        {allTestCases[selectedTestCaseIdx].isHidden ? '[Hidden]' : allTestCases[selectedTestCaseIdx].input}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-sans text-gray-600 mb-0.5">Expected Output:</div>
                      <div className="bg-[#edf0f4] p-2 rounded text-gray-900 whitespace-pre-wrap">
                        {allTestCases[selectedTestCaseIdx].isHidden ? '[Hidden]' : allTestCases[selectedTestCaseIdx].output}
                      </div>
                    </div>

                    <div className="col-span-2">
                      <div className="text-[11px] font-sans text-gray-600 mb-0.5 flex items-center justify-between">
                        <span>Your Output:</span>
                        {(() => {
                          const tc = allTestCases[selectedTestCaseIdx];
                          const r = testCasesResult?.testCaseResults?.find(res => res.testCaseId === tc.id);
                          if (!r) return null;
                          return (
                            <span className={`text-[11px] font-bold ${r.passed ? 'text-emerald-600' : 'text-red-600'}`}>
                              {r.passed ? `PASSED (${r.executionTimeMs} ms)` : `FAILED (${r.executionTimeMs} ms)`}
                            </span>
                          );
                        })()}
                      </div>
                      <div className="bg-[#edf0f4] p-2 rounded text-gray-900 whitespace-pre-wrap">
                        {(() => {
                          const tc = allTestCases[selectedTestCaseIdx];
                          const r = testCasesResult?.testCaseResults?.find(res => res.testCaseId === tc.id);
                          if (!r) return <span className="text-gray-500 italic font-sans">Run cases to see output</span>;
                          return r.actualOutput || <span className="text-gray-500 italic">(Empty output)</span>;
                        })()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
