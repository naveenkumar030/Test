import React, { useState, useEffect } from 'react';
import { Maximize2, ShieldAlert, AlertTriangle } from 'lucide-react';

interface StrictFullscreenGuardProps {
  onAutoSubmit: () => void;
  isTestSubmitted: boolean;
}

export const StrictFullscreenGuard: React.FC<StrictFullscreenGuardProps> = ({
  onAutoSubmit,
  isTestSubmitted,
}) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(!!document.fullscreenElement);
  const [violations, setViolations] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const maxViolations = 3;

  // Listen to fullscreen changes
  useEffect(() => {
    if (isTestSubmitted) return;

    const handleFullscreenChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreen(active);

      // If user has started and exits fullscreen -> record violation
      if (hasStarted && !active) {
        setViolations((prev) => {
          const next = prev + 1;
          if (next >= maxViolations) {
            setTimeout(onAutoSubmit, 1500);
          }
          return next;
        });
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, [hasStarted, isTestSubmitted, onAutoSubmit]);

  // Anti-cheat: prevent right-click context menu and F11/F12
  useEffect(() => {
    if (isTestSubmitted) return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F11 (manual fullscreen toggle) and F12 (DevTools)
      if (e.key === 'F11' || e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTestSubmitted]);

  // Request fullscreen
  const enterFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
      setIsFullscreen(true);
      setHasStarted(true);
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
      // Fallback if browser permission is blocked
      setIsFullscreen(true);
      setHasStarted(true);
    }
  };

  if (isTestSubmitted) return null;

  // Initial Entry Gate
  if (!hasStarted && !isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-md p-4 select-none">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 text-center border border-gray-200">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
            <Maximize2 className="w-6 h-6" />
          </div>

          <h3 className="text-base font-bold text-gray-900 mb-1.5">Strict Fullscreen Mode Required</h3>
          <p className="text-xs text-gray-600 mb-6 leading-relaxed">
            This examination is conducted in strict full-screen mode. Exiting full-screen or switching tabs will be
            flagged as a security violation.
          </p>

          <button
            onClick={enterFullscreen}
            className="w-full py-2.5 px-4 bg-[#1a73e8] hover:bg-[#1557b0] active:bg-[#0d47a1] text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
            <span>Enter Fullscreen & Begin Assessment</span>
          </button>
        </div>
      </div>
    );
  }

  // Violation / Exit Fullscreen Lockout Overlay
  if (!isFullscreen && hasStarted) {
    const isExceeded = violations >= maxViolations;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/95 backdrop-blur-md p-4 select-none">
        <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 text-center border-2 border-red-500 animate-in fade-in zoom-in-95 duration-150">
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
            <ShieldAlert className="w-6 h-6" />
          </div>

          <h3 className="text-base font-bold text-gray-950 mb-1">
            {isExceeded ? 'Assessment Locked: Maximum Violations Exceeded' : 'Fullscreen Violation Detected!'}
          </h3>

          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            {isExceeded
              ? 'You have exceeded the maximum allowed fullscreen violations. Your test is being automatically submitted.'
              : 'You have exited full-screen mode. In accordance with examination regulations, your assessment has been paused.'}
          </p>

          {/* Violation Counter Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-lg mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>
              Violation {violations} of {maxViolations} recorded
            </span>
          </div>

          {!isExceeded ? (
            <button
              onClick={enterFullscreen}
              className="w-full py-2.5 px-4 bg-[#1a73e8] hover:bg-[#1557b0] active:bg-[#0d47a1] text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Re-enter Fullscreen Mode to Resume</span>
            </button>
          ) : (
            <div className="text-xs text-red-600 font-semibold animate-pulse">
              Submitting your assessment now...
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};
