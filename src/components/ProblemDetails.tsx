import React from 'react';
import type { CodingQuestion } from '../types/assessment';

interface ProblemDetailsProps {
  question: CodingQuestion;
}

export const ProblemDetails: React.FC<ProblemDetailsProps> = ({ question }) => {
  const isCodingHard = question.id === 'code-hard-1';

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white border-r border-gray-200">
      {/* Scrollable Problem Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 text-xs space-y-5 text-gray-800 leading-normal">
        {/* Problem Statement Header */}
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-2.5">Problem Statement</h2>

          {isCodingHard ? (
            <div className="space-y-3 leading-relaxed">
              <p>
                A training center assigns identification numbers from{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">1</span> to{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">N</span> to
                participants registered for a large event. Before printing the final attendance sheet, the
                organizers decide to arrange these identification numbers using a special rule. All odd
                identification numbers from{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">1</span> to{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">N</span> are
                written first in increasing order. After that, all even identification numbers from{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">1</span> to{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">N</span> are
                written in increasing order.
              </p>

              <p>
                For example, when{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">N = 10</span>, the
                final arrangement becomes:{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1.5 py-0.5 rounded text-xs font-mono">
                  1 3 5 7 9 2 4 6 8 10
                </span>
                . The number of participants can be extremely large, so constructing the entire arrangement is not
                practical. Given{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">N</span> and a
                position{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">K</span>,
                determine the identification number that appears at the{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">K</span>-th position
                in this arrangement. Positions are numbered starting from{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded text-xs font-mono">1</span>.
              </p>
            </div>
          ) : (
            <div className="space-y-3 leading-relaxed">
              <p>
                A bookstore's display case can hold a set of distinct books in any order, and the store wants to know
                exactly how many distinct arrangements are possible for a given set of books. Each additional book
                multiplies the number of possible arrangements by one more factor, compounding one book at a time; a
                set of 1 has exactly 1 arrangement, a set of 2 has 2, a set of 3 has 6, and so on.
              </p>
              <p>
                Given the number of books, print the number of possible arrangements. A set of 0 books has exactly one
                arrangement; the empty one.
              </p>
            </div>
          )}
        </div>

        {/* Input Format */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-2">Input Format</h3>
          {isCodingHard ? (
            <ul className="list-disc pl-5 space-y-1">
              <li>
                The only line contains two space-separated integers:
                <ul className="list-[circle] pl-5 space-y-0.5 mt-1">
                  <li>
                    <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded font-mono text-[11px]">N</span>
                    {' \u2192 the largest identification number.'}
                  </li>
                  <li>
                    <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded font-mono text-[11px]">K</span>
                    {' \u2192 the position whose value must be determined.'}
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Line 1:{' '}
                <span className="bg-[#fce7f3] text-[#9d174d] px-1 py-0.5 rounded font-mono text-[11px]">num_books</span>
                {' ; number of distinct books'}
              </li>
            </ul>
          )}
        </div>

        {/* Output Format */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-1.5">Output Format</h3>
          {isCodingHard ? (
            <ul className="list-disc pl-5">
              <li>Print a single integer representing the identification number at the K-th position.</li>
            </ul>
          ) : (
            <ul className="list-disc pl-5">
              <li>Line 1: the number of possible arrangements</li>
            </ul>
          )}
        </div>

        {/* Constraints */}
        {question.constraints && (
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">Constraints</h3>
            <ul className="list-disc pl-5">
              {question.constraints.map((c, i) => (
                <li key={i} className="font-mono text-xs text-gray-800">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sample Test Cases */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            {isCodingHard ? 'Sample Test Cases' : 'Sample Test Cases'}
          </h3>
          <div className="space-y-4">
            {question.sampleTestCases.map((tc, idx) => (
              <div key={tc.id} className="space-y-1.5">
                <div className="text-xs text-gray-700 font-normal">Sample Test Case {idx + 1}</div>

                {/* Input box */}
                <div>
                  <div className="text-xs font-semibold text-gray-700 mb-1">Input:</div>
                  <div className="bg-[#e8eaed] px-3 py-1.5 rounded text-xs font-mono text-[#991b1b] whitespace-pre select-text">
                    {tc.input}
                  </div>
                </div>

                {/* Output box */}
                <div>
                  <div className="text-xs font-semibold text-gray-700 mb-1">Output:</div>
                  <div className="bg-[#e8eaed] px-3 py-1.5 rounded text-xs font-mono text-[#991b1b] whitespace-pre select-text">
                    {tc.output}
                  </div>
                </div>

                {/* Explanation */}
                {tc.explanation && (
                  <div>
                    <div className="text-xs font-semibold text-gray-700 mb-0.5">Explanation:</div>
                    <div className="text-xs text-gray-700 leading-normal">{tc.explanation}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom left score & difficulty */}
      <div className="px-6 py-2 border-t border-gray-100 bg-white shrink-0">
        <span className="text-[11px] text-gray-500 font-normal">
          Score: {question.score} | Difficulty: {question.difficulty}
        </span>
      </div>
    </div>
  );
};
