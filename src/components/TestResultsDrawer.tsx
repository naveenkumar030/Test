import React, { useState } from 'react';
import type { TestCase, ExecutionResult } from '../types/assessment';
import { ChevronUp, ChevronDown, Info, Play, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

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
    <div className="border-t border-gray-200 bg-white flex flex-col shrink-0 select-none shadow-xs">
      {/* Drawer Header Bar - exactly matching screenshot media_1794757061242_866cb918.jpg */}
      <div className="h-10 px-4 bg-white border-b border-gray-200 flex items-center justify-between">
        {/* Left: Collapsible toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition cursor-pointer"
        >
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          <span>Test & Results</span>
        </button>

        {/* Right Action Buttons: Blue Submit + Green Finish */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={onSubmitCode}
            disabled={isSubmitting}
            className={`px-4 py-1.5 text-xs font-medium text-white rounded transition shadow-2xs flex items-center space-x-1 cursor-pointer ${
              isProblemSubmitted
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
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
            className="px-4 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 active:bg-green-800 rounded transition shadow-2xs cursor-pointer"
          >
            Finish
          </button>
        </div>
      </div>

      {/* Drawer Content */}
      {isOpen && (
        <div className="h-56 flex flex-col bg-white">
          {/* Sub Tabs: Custom Input vs Test Cases */}
          <div className="flex border-b border-gray-200 px-4">
            <button
              onClick={() => setActiveTab('custom')}
              className={`py-2 px-3 text-xs font-medium transition cursor-pointer border-b-2 ${
                activeTab === 'custom'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Custom Input
            </button>
            <button
              onClick={() => setActiveTab('testcases')}
              className={`py-2 px-3 text-xs font-medium transition cursor-pointer border-b-2 flex items-center space-x-1.5 ${
                activeTab === 'testcases'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              <span>Test Cases</span>
              {testCasesResult && (
                <span
                  className={`w-2 h-2 rounded-full ${
                    testCasesResult.status === 'passed' ? 'bg-emerald-500' : 'bg-red-500'
                  }`}
                />
              )}
            </button>
          </div>

          {/* Tab 1: Custom Input Mode */}
          {activeTab === 'custom' && (
            <div className="flex-1 p-3 flex flex-col space-y-2 overflow-y-auto">
              {/* Input row */}
              <div className="flex items-start space-x-3">
                <div className="flex-1">
                  <textarea
                    value={customInput}
                    onChange={(e) => onCustomInputChange(e.target.value)}
                    placeholder="Custom Input"
                    rows={2}
                    className="w-full text-xs font-mono p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none bg-gray-50/50"
                  />
                </div>

                {/* Info icon and Run Code button - matching screenshot */}
                <div className="flex items-center space-x-2 pt-1 shrink-0">
                  <div title="Custom standard input passed to your program via stdin" className="text-gray-400 hover:text-gray-600 cursor-help">
                    <Info className="w-4 h-4" />
                  </div>

                  <button
                    onClick={onRunCustomInput}
                    disabled={isRunningCustom}
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-medium rounded transition flex items-center space-x-1 shadow-2xs cursor-pointer disabled:opacity-60"
                  >
                    {isRunningCustom ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Running...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Output row - matching screenshot: 'Output: Run the code to see the output' */}
              <div className="flex-1 border border-gray-200 rounded p-2.5 bg-[#f9fafb] text-xs font-mono overflow-y-auto">
                <div className="text-gray-500 text-[11px] font-sans font-medium mb-1">Output:</div>
                {!hasRunCustom ? (
                  <div className="text-gray-400 italic">Run the code to see the output</div>
                ) : customError ? (
                  <div className="text-red-600 whitespace-pre-wrap">{customError}</div>
                ) : (
                  <div className="text-gray-900 whitespace-pre-wrap font-mono">
                    {customOutput || <span className="text-gray-400">(Process finished with empty output)</span>}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Test Cases Mode */}
          {activeTab === 'testcases' && (
            <div className="flex-1 flex flex-col p-3 overflow-hidden">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                {/* Horizontal tabs for test cases */}
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
                            ? 'bg-blue-100 text-blue-800 font-semibold border border-blue-300'
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
                        <span>{tc.isHidden ? `Hidden Case ${idx + 1}` : `Case ${idx + 1}`}</span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={onRunTestCases}
                  disabled={isRunningTestCases}
                  className="px-3.5 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition flex items-center space-x-1 shrink-0 cursor-pointer disabled:opacity-60"
                >
                  {isRunningTestCases ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Running Tests...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span>Run All Cases</span>
                    </>
                  )}
                </button>
              </div>

              {/* Selected test case details */}
              {allTestCases[selectedTestCaseIdx] && (
                <div className="flex-1 pt-2 overflow-y-auto grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <div className="text-[11px] font-sans font-medium text-gray-500 mb-0.5">Input:</div>
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 whitespace-pre-wrap">
                      {allTestCases[selectedTestCaseIdx].isHidden ? '[Hidden Input]' : allTestCases[selectedTestCaseIdx].input}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-sans font-medium text-gray-500 mb-0.5">Expected Output:</div>
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 whitespace-pre-wrap">
                      {allTestCases[selectedTestCaseIdx].isHidden ? '[Hidden Output]' : allTestCases[selectedTestCaseIdx].output}
                    </div>
                  </div>

                  <div className="col-span-2">
                    <div className="text-[11px] font-sans font-medium text-gray-500 mb-0.5 flex items-center justify-between">
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
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 whitespace-pre-wrap">
                      {(() => {
                        const tc = allTestCases[selectedTestCaseIdx];
                        const r = testCasesResult?.testCaseResults?.find(res => res.testCaseId === tc.id);
                        if (!r) return <span className="text-gray-400 italic font-sans">Run tests to see output</span>;
                        return r.actualOutput || <span className="text-gray-400 italic">(Empty output)</span>;
                      })()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
