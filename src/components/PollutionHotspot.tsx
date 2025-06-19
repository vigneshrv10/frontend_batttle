
import { useState } from 'react';

interface PollutionHotspotProps {
  title: string;
  description: string;
  pollutionType: string;
  onCleanup: () => void;
  isVisible: boolean;
}

const PollutionHotspot = ({ title, description, pollutionType, onCleanup, isVisible }: PollutionHotspotProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCleaned, setIsCleaned] = useState(false);

  const handleCleanup = () => {
    setIsCleaned(true);
    onCleanup();
    setTimeout(() => setIsModalOpen(false), 1000);
  };

  return (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div 
        className={`p-8 rounded-lg cursor-pointer transition-all duration-500 transform hover:scale-105 ${
          isCleaned 
            ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-green-200' 
            : 'bg-gradient-to-r from-red-400 to-orange-500 shadow-red-200'
        } shadow-xl`}
        onClick={() => setIsModalOpen(true)}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isCleaned ? 'bg-green-200' : 'bg-red-200 animate-pulse'}`}></div>
          <span className="text-white font-medium">
            {isCleaned ? 'Cleaned!' : 'Needs Cleanup'}
          </span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full transform animate-scale-in">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            
            {!isCleaned ? (
              <div className="space-y-4">
                <p className="text-orange-600 font-medium">
                  ⚠️ {pollutionType} detected!
                </p>
                <button
                  onClick={handleCleanup}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Clean Up Now! 🧹
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-green-600 font-bold text-xl">Area Cleaned!</p>
                <p className="text-gray-600 mt-2">Great job protecting the environment!</p>
              </div>
            )}
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PollutionHotspot;
