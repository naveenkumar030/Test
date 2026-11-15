export type QuestionType = 'mcq' | 'coding';

export type QuestionStatus = 'not_visited' | 'unanswered' | 'answered' | 'marked_for_review' | 'answered_and_marked';

export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQQuestion {
  id: string;
  type: 'mcq';
  direction?: string;
  topic?: string;
  question: string;
  options: MCQOption[];
  correctOptionId: string;
  explanation?: string;
  score: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface TestCase {
  id: string;
  input: string;
  output: string;
  explanation?: string;
  isHidden?: boolean;
}

export interface CodingQuestion {
  id: string;
  type: 'coding';
  title: string;
  problemStatement: string;
  inputFormat: string[];
  outputFormat: string[];
  constraints?: string[];
  sampleTestCases: TestCase[];
  hiddenTestCases: TestCase[];
  score: number;
  difficulty: 'easy' | 'medium' | 'hard';
  starterCode: {
    [key in Language]: string;
  };
}

export type Question = MCQQuestion | CodingQuestion;

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export type Language = 'java' | 'python' | 'cpp' | 'javascript';

export interface ExecutionResult {
  stdout: string;
  stderr?: string;
  executionTimeMs: number;
  status: 'passed' | 'failed' | 'error' | 'idle';
  testCaseResults?: {
    testCaseId: string;
    passed: boolean;
    actualOutput: string;
    expectedOutput: string;
    executionTimeMs: number;
    isHidden?: boolean;
  }[];
}
