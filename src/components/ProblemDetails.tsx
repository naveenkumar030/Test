import React from 'react';
import type { CodingQuestion } from '../types/assessment';

interface ProblemDetailsProps {
  question: CodingQuestion;
}

export const ProblemDetails: React.FC<ProblemDetailsProps> = ({ question }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white border-r border-gray-200">
      {/* Scrollable Problem Content */}
      <div className="flex-1 overflow-y-auto px-6 py-5 text-sm space-y-6">
        {/* Title / Problem Statement Header */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Problem Statement</h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {question.problemStatement}
          </div>
        </div>

        {/* Input Format */}
        {question.inputFormat && question.inputFormat.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Input Format</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              {question.inputFormat.map((line, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-mono text-xs bg-gray-100 text-gray-800 px-1 py-0.5 rounded">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Output Format */}
        {question.outputFormat && question.outputFormat.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Output Format</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              {question.outputFormat.map((line, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-mono text-xs bg-gray-100 text-gray-800 px-1 py-0.5 rounded">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Constraints */}
        {question.constraints && question.constraints.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Constraints</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              {question.constraints.map((constraint, idx) => (
                <li key={idx} className="font-mono text-xs text-gray-800">
                  {constraint}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sample Test Cases */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Sample Test Cases</h3>
          <div className="space-y-5">
            {question.sampleTestCases.map((tc, idx) => (
              <div key={tc.id} className="space-y-2">
                <div className="text-xs font-semibold text-gray-600">Sample Test Case {idx + 1}</div>

                {/* Input box */}
                <div>
                  <div className="text-xs font-medium text-gray-700 mb-1">Input:</div>
                  <div className="bg-[#edeef2] px-3.5 py-2 rounded text-xs font-mono text-gray-900 whitespace-pre-wrap select-text">
                    {tc.input}
                  </div>
                </div>

                {/* Output box */}
                <div>
                  <div className="text-xs font-medium text-gray-700 mb-1">Output:</div>
                  <div className="bg-[#edeef2] px-3.5 py-2 rounded text-xs font-mono text-gray-900 whitespace-pre-wrap select-text">
                    {tc.output}
                  </div>
                </div>

                {/* Explanation */}
                {tc.explanation && (
                  <div>
                    <div className="text-xs font-medium text-gray-700 mb-0.5">Explanation:</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{tc.explanation}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom left score & difficulty bar */}
      <div className="px-6 py-2.5 border-t border-gray-100 bg-gray-50/50 shrink-0">
        <span className="text-xs text-gray-500 font-medium">
          Score: {question.score} | Difficulty: {question.difficulty}
        </span>
      </div>
    </div>
  );
};
