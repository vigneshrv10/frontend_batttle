
import { useState, useEffect } from 'react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDarkMode, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-all duration-300 group"
      aria-label={isDarkMode ? 'Switch to day mode' : 'Switch to night mode'}
    >
      <div className="relative w-8 h-8">
        {/* Sun icon */}
        <div className={`absolute inset-0 transition-all duration-500 ${isDarkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
          <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
            ☀️
          </div>
        </div>
        
        {/* Moon icon */}
        <div className={`absolute inset-0 transition-all duration-500 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}`}>
          <div className="w-full h-full bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
            🌙
          </div>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isDarkMode ? 'Day Mode' : 'Night Mode'}
      </div>
    </button>
  );
};

export default ThemeToggle;
