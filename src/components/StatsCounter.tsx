
import { useState, useEffect } from 'react';

interface StatsCounterProps {
  barrelsRemoved: number;
  oilLiters: number;
  trashCollected: number;
  animationTrigger: number;
}

const StatsCounter = ({ barrelsRemoved, oilLiters, trashCollected, animationTrigger }: StatsCounterProps) => {
  const [displayBarrels, setDisplayBarrels] = useState(0);
  const [displayOil, setDisplayOil] = useState(0);
  const [displayTrash, setDisplayTrash] = useState(0);

  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void) => {
      const duration = 1000;
      const steps = 50;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, duration / steps);
    };

    animateCounter(barrelsRemoved, setDisplayBarrels);
    animateCounter(oilLiters, setDisplayOil);
    animateCounter(trashCollected, setDisplayTrash);
  }, [animationTrigger, barrelsRemoved, oilLiters, trashCollected]);

  const pollutionLevel = Math.max(0, 100 - (barrelsRemoved + oilLiters + trashCollected) * 2);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 shadow-xl">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Mission Progress</h3>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-2">🛢️</div>
          <div className="text-3xl font-bold text-red-600">{displayBarrels}</div>
          <div className="text-gray-600">Toxic Barrels Removed</div>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-2">💧</div>
          <div className="text-3xl font-bold text-blue-600">{displayOil}L</div>
          <div className="text-gray-600">Oil Cleaned</div>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-2">🗑️</div>
          <div className="text-3xl font-bold text-green-600">{displayTrash}kg</div>
          <div className="text-gray-600">Trash Collected</div>
        </div>
      </div>

      {/* Pollution Level Chart */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-4 text-gray-800">Island Pollution Level</h4>
        <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
          <div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 to-orange-400 transition-all duration-1000 ease-out"
            style={{ height: `${pollutionLevel}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white drop-shadow-lg">
              {Math.round(pollutionLevel)}% Pollution
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>Clean</span>
          <span>Heavily Polluted</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
