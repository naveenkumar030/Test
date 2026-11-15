import { useState, useEffect, useRef } from 'react';
import { assessmentSections } from './data/assessmentData';
import type { Language } from './types/assessment';
import { Header } from './components/Header';
import { LeftSidebar } from './components/LeftSidebar';
import { MCQView } from './components/MCQView';
import { CodingView } from './components/CodingView';
import { FinishModal } from './components/FinishModal';
import { ScorecardModal } from './components/ScorecardModal';
import { ProctoringBar } from './components/ProctoringBar';

export function App() {
  const sections = assessmentSections;

  // Active section state
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0].id);

  // Question index per section
  const [sectionQuestionIndices, setSectionQuestionIndices] = useState<{ [secId: string]: number }>({
    aptitude: 0,
    verbal: 0,
    technical: 0,
    'coding-medium': 0,
    'coding-hard': 0,
  });

  // MCQ Answers: { questionId: selectedOptionId }
  const [answers, setAnswers] = useState<{ [qId: string]: string }>({});

  // Marked for Review: { questionId: boolean }
  const [markedForReview, setMarkedForReview] = useState<{ [qId: string]: boolean }>({});

  // Coding problems user code: { [questionId]: { [lang in Language]?: string } }
  const [userCodes, setUserCodes] = useState<{ [qId: string]: { [lang in Language]?: string } }>({});

  // Coding problem submissions: { questionId: boolean }
  const [codingSubmissions, setCodingSubmissions] = useState<{ [qId: string]: boolean }>({});

  // Time spent per question in seconds: { [questionId]: number }
  const [questionTimes, setQuestionTimes] = useState<{ [qId: string]: number }>({});

  // Overall test timer in seconds (60 minutes = 3600s)
  const [timeRemaining, setTimeRemaining] = useState<number>(3600);

  // Modal and completion states
  const [isFinishModalOpen, setIsFinishModalOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Proctoring & Fullscreen
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [tabSwitchViolations, setTabSwitchViolations] = useState<number>(0);

  // Identify current section & question
  const currentSection = sections.find((s) => s.id === activeSectionId) || sections[0];
  const currentQuestionIndex = sectionQuestionIndices[activeSectionId] || 0;
  const currentQuestion = currentSection.questions[currentQuestionIndex] || currentSection.questions[0];

  const currentQuestionIdRef = useRef<string>(currentQuestion.id);
  currentQuestionIdRef.current = currentQuestion.id;

  // Live timer for question time tracking (increments seconds on the currently active question)
  useEffect(() => {
    if (isSubmitted) return;

    const interval = setInterval(() => {
      // Increment active question time
      const activeQId = currentQuestionIdRef.current;
      if (activeQId) {
        setQuestionTimes((prev) => ({
          ...prev,
          [activeQId]: (prev[activeQId] || 0) + 1,
        }));
      }

      // Decrement overall remaining time
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted]);

  // Tab switch & visibility detector (standard assessment anti-cheat simulation)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !isSubmitted) {
        setTabSwitchViolations((prev) => prev + 1);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isSubmitted]);

  // Fullscreen toggle handler
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Switch active section
  const handleSelectSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
  };

  // Select question index in current section
  const handleSelectQuestion = (index: number) => {
    setSectionQuestionIndices((prev) => ({
      ...prev,
      [activeSectionId]: index,
    }));
  };

  // MCQ Selection handler
  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleClearResponse = () => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  const handleToggleMarkForReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  // Coding update handlers
  const handleUpdateCode = (lang: Language, code: string) => {
    setUserCodes((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...(prev[currentQuestion.id] || {}),
        [lang]: code,
      },
    }));
  };

  const handleSubmitProblem = (questionId: string) => {
    setCodingSubmissions((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  // Navigation handlers (Previous / Next)
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      handleSelectQuestion(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      handleSelectQuestion(currentQuestionIndex + 1);
    } else {
      // At the end of current section: advance to the next section if available
      const currentSectionIndex = sections.findIndex((s) => s.id === activeSectionId);
      if (currentSectionIndex < sections.length - 1) {
        const nextSec = sections[currentSectionIndex + 1];
        setActiveSectionId(nextSec.id);
        handleSelectQuestion(0);
      } else {
        // Last question of last section -> trigger finish modal
        setIsFinishModalOpen(true);
      }
    }
  };

  // Reset/Restart entire assessment
  const handleRestart = () => {
    setAnswers({});
    setMarkedForReview({});
    setUserCodes({});
    setCodingSubmissions({});
    setQuestionTimes({});
    setTimeRemaining(3600);
    setIsSubmitted(false);
    setIsFinishModalOpen(false);
    setActiveSectionId(sections[0].id);
    setSectionQuestionIndices({
      aptitude: 0,
      verbal: 0,
      technical: 0,
      'coding-medium': 0,
      'coding-hard': 0,
    });
    setTabSwitchViolations(0);
  };

  // Count answered questions
  let answeredCount = 0;
  let totalQuestions = 0;
  sections.forEach((sec) => {
    sec.questions.forEach((q) => {
      totalQuestions++;
      if (q.type === 'coding') {
        if (codingSubmissions[q.id]) answeredCount++;
      } else {
        if (answers[q.id]) answeredCount++;
      }
    });
  });

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-white text-gray-900 font-sans">
      {/* Top Header & Section Tabs */}
      <Header
        sections={sections}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
        timeRemainingSeconds={timeRemaining}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onFinishClick={() => setIsFinishModalOpen(true)}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
      />

      {/* Main Workspace Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Vertical Question Palette */}
        <LeftSidebar
          questions={currentSection.questions}
          currentQuestionIndex={currentQuestionIndex}
          onSelectQuestion={handleSelectQuestion}
          questionTimes={questionTimes}
          answers={{ ...answers, ...codingSubmissions }}
          markedForReview={markedForReview}
        />

        {/* Question View: MCQ or Coding */}
        {currentQuestion.type === 'mcq' ? (
          <MCQView
            question={currentQuestion}
            selectedOptionId={answers[currentQuestion.id]}
            onSelectOption={handleSelectOption}
            onClearResponse={handleClearResponse}
            onToggleMarkForReview={handleToggleMarkForReview}
            isMarkedForReview={!!markedForReview[currentQuestion.id]}
            onPrevious={handlePrevious}
            onNext={handleNext}
            hasPrevious={currentQuestionIndex > 0}
            hasNext={currentQuestionIndex < currentSection.questions.length - 1}
          />
        ) : (
          <CodingView
            question={currentQuestion}
            userCode={userCodes[currentQuestion.id] || {}}
            onUpdateCode={handleUpdateCode}
            onSubmitProblem={handleSubmitProblem}
            isSubmitted={!!codingSubmissions[currentQuestion.id]}
            onFinishTest={() => setIsFinishModalOpen(true)}
          />
        )}
      </div>

      {/* Floating Proctoring Camera Box & Anti-cheat alert */}
      <ProctoringBar tabSwitchViolations={tabSwitchViolations} />

      {/* Finish Confirmation Modal */}
      <FinishModal
        isOpen={isFinishModalOpen}
        onClose={() => setIsFinishModalOpen(false)}
        onConfirmFinish={() => {
          setIsFinishModalOpen(false);
          setIsSubmitted(true);
        }}
        sections={sections}
        answers={answers}
        markedForReview={markedForReview}
        codingSubmissions={codingSubmissions}
      />

      {/* Post-Assessment Scorecard & Review Report */}
      {isSubmitted && (
        <ScorecardModal
          sections={sections}
          answers={answers}
          codingSubmissions={codingSubmissions}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
