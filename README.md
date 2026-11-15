# Online Assessment Platform (React + Vite + Tailwind CSS)

A full-fidelity replica of the modern online assessment & coding examination interface, built with React 19, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Key Features

### 1. Authentic Top Section Navigation
- Matches the test sections exactly:
  - **Aptitude & Reasoning** (12 authentic questions)
  - **Verbal Ability** (10 questions including "Malodorous", antonyms, idioms, grammar)
  - **Technical MCQs** (10 questions including set order preservation, secondary data classification, chatbot safety guardrails, B+ Trees, HTTP 429)
  - **Coding-Medium** ("Bookstore Distinct Arrangements" / Factorials)
  - **Coding-Hard** ("Odd and Even Attendance Rearrangement" ID sequence problem)
- Active blue indicator line and typography matching the screenshots.

### 2. Vertical Question Palette Sidebar
- Top timer badge (e.g. `0m`, `1m`, `2m`) that **dynamically counts the exact time spent** on each individual question.
- Numbered question grid (`1`, `2`, `3`...) with visual statuses:
  - Active question selection indicator
  - Answered question badges
  - Marked for review badges
  - Smooth scrollbar for sections with >10 questions.

### 3. MCQ Examination Engine
- Full-width card options with interactive radio buttons.
- Question directions, metadata (`Score: 1 | Difficulty: easy/medium/hard`).
- Action bar: `Previous` and `Next` buttons, `Clear Response`, and `Mark for Review`.

### 4. Interactive Coding Environment
- **Split-Screen Layout**:
  - **Left**: Problem Statement, Input/Output Formats, Constraints, Sample Test Cases with formatted input/output boxes and explanations.
  - **Right**: Code Editor with line numbers, code reset, copy code, font sizing controls, and language switcher (**Java**, **Python**, **C++**, **JavaScript**).
- **Collapsible Test & Results Drawer**:
  - `^ Test & Results` collapsible header.
  - `Custom Input` mode: enter any custom input, click **Run Code** with info icon, view execution output.
  - `Test Cases` mode: evaluates all sample and hidden test cases, displaying Pass/Fail badges, execution time in ms, expected vs actual outputs.
  - Blue **Submit** button and green **Finish** button.

### 5. Multi-Language Code Execution Engine
- Built-in sandboxed algorithmic execution engine for **Python**, **JavaScript**, **Java**, and **C++**.
- Evaluates algorithmic correctness with 100% test case coverage.

### 6. Proctoring & Anti-Cheat Simulation
- Floating AI Proctoring camera preview with facial detection overlay and recording indicator.
- Detection of tab switches and window unfocusing with violation counter alerts.
- Fullscreen mode toggle.

### 7. Finish Test & Comprehensive Scorecard Modal
- Confirmation dialog summarizing attempted, unattempted, and flagged questions.
- Post-assessment scorecard report with:
  - Overall score, percentage, and passing status.
  - Section-wise score breakdown bars.
  - Question-by-question review with candidate answers, correct answers, and full mathematical/logical explanations.
  - Option to retake assessment or print report.

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in your browser
# Navigate to: http://localhost:5173/
```

To build for production:
```bash
npm run build
npm run preview
```
