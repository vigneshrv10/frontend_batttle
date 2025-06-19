
import { useState } from 'react';

const tools = [
  { id: 1, name: 'Net Sweeper', icon: '🥅', description: 'Remove plastic debris from water' },
  { id: 2, name: 'Oil Skimmer', icon: '🛢️', description: 'Clean oil spills from ocean surface' },
  { id: 3, name: 'Trash Collector', icon: '🗑️', description: 'Gather litter from beaches' },
  { id: 4, name: 'Water Filter', icon: '💧', description: 'Purify contaminated water sources' },
  { id: 5, name: 'Soil Restorer', icon: '🌱', description: 'Rehabilitate damaged soil' },
];

interface ToolCarouselProps {
  onToolUse: (toolName: string) => void;
}

const ToolCarousel = ({ onToolUse }: ToolCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToolUse = (tool: typeof tools[0]) => {
    setIsAnimating(true);
    onToolUse(tool.name);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const nextTool = () => {
    setActiveIndex((prev) => (prev + 1) % tools.length);
  };

  const prevTool = () => {
    setActiveIndex((prev) => (prev - 1 + tools.length) % tools.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Cleanup Tools</h3>
      
      <div className="relative">
        {/* Carousel container */}
        <div className="flex overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {tools.map((tool) => (
              <div key={tool.id} className="w-full flex-shrink-0 p-4">
                <div className="text-center">
                  <div className="text-8xl mb-4 transform transition-transform duration-300 hover:scale-110">
                    {tool.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{tool.name}</h4>
                  <p className="text-gray-600 mb-6">{tool.description}</p>
                  <button
                    onClick={() => handleToolUse(tool)}
                    disabled={isAnimating}
                    className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                      isAnimating 
                        ? 'bg-green-500 text-white animate-pulse' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105'
                    }`}
                  >
                    {isAnimating ? 'Using Tool...' : 'Use Tool'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevTool}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
        >
          <span className="text-2xl">←</span>
        </button>
        <button
          onClick={nextTool}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
        >
          <span className="text-2xl">→</span>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {tools.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolCarousel;
