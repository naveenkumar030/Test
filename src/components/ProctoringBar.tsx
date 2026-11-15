import React, { useState } from 'react';
import { Camera, CameraOff, Video, ShieldAlert } from 'lucide-react';

interface ProctoringBarProps {
  tabSwitchViolations: number;
}

export const ProctoringBar: React.FC<ProctoringBarProps> = ({
  tabSwitchViolations,
}) => {
  const [isCameraActive, setIsCameraActive] = useState<boolean>(true);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-2 select-none">
      {/* Violations Warning Pill */}
      {tabSwitchViolations > 0 && (
        <div className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center space-x-1.5 animate-bounce">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Tab switches detected: {tabSwitchViolations}</span>
        </div>
      )}

      {/* Floating Proctoring Camera Box */}
      <div className="bg-white/95 backdrop-blur-md border border-gray-300 rounded-xl shadow-xl p-2 w-48 flex flex-col space-y-2">
        <div className="flex items-center justify-between text-[11px] font-semibold text-gray-700 px-1">
          <div className="flex items-center space-x-1 text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>AI Proctoring</span>
          </div>

          <button
            onClick={() => setIsCameraActive(!isCameraActive)}
            className="text-gray-400 hover:text-gray-700 p-0.5 rounded transition cursor-pointer"
            title={isCameraActive ? 'Turn off camera simulation' : 'Turn on camera simulation'}
          >
            {isCameraActive ? <Camera className="w-3.5 h-3.5" /> : <CameraOff className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Video Canvas / Simulator */}
        <div className="w-full h-28 bg-gray-900 rounded-lg overflow-hidden relative flex items-center justify-center border border-gray-700">
          {isCameraActive ? (
            <div className="w-full h-full relative flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-950">
              {/* Simulated Candidate Silhouette */}
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-200 text-xs font-bold shadow-inner">
                YOU
              </div>
              <div className="w-20 h-8 rounded-t-full bg-blue-500/10 border-t border-blue-400/30 mt-1"></div>

              {/* Face mesh overlay simulation */}
              <div className="absolute inset-2 border border-emerald-500/30 rounded pointer-events-none flex items-center justify-center">
                <span className="text-[9px] text-emerald-400/80 font-mono absolute top-1 left-1">FACE DETECTED</span>
              </div>

              {/* REC Dot */}
              <div className="absolute bottom-1.5 right-2 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[9px] font-mono text-red-400 font-bold">REC</span>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-xs flex flex-col items-center space-x-1">
              <Video className="w-5 h-5 mb-1" />
              <span>Camera Muted</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
