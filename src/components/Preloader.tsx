
import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-600 via-slate-400 to-blue-300 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="text-center">
        <div className="relative mb-8">
          <div 
            className="w-64 h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-30 transition-opacity duration-1000"
            style={{ opacity: progress / 100 }}
          />
          <div 
            className="absolute inset-0 w-64 h-32 bg-gradient-to-r from-emerald-500 to-green-700 rounded-full transition-opacity duration-1000"
            style={{ opacity: Math.max(0, (progress - 50) / 50) }}
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            Island Rescue
          </h1>
        </div>
        <div className="w-64 bg-white/20 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-green-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white mt-4 font-medium">
          Discovering the island... {progress}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;
