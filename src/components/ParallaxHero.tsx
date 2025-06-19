
import { useState, useEffect } from 'react';

interface ParallaxHeroProps {
  isDarkMode: boolean;
}

const ParallaxHero = ({ isDarkMode }: ParallaxHeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background layers with parallax */}
      <div 
        className={`absolute inset-0 transition-colors duration-1000 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900' 
            : 'bg-gradient-to-b from-blue-400 via-cyan-300 to-emerald-400'
        }`}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Mountain silhouettes */}
      <div 
        className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-green-800 to-transparent"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      {/* Island silhouette */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-48 bg-green-700 rounded-t-full"
        style={{ transform: `translate(-50%, ${scrollY * 0.2}px)` }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Green Quest
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-white/90 mb-8">
            Island Rescue
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join the mission to restore paradise. Clean up pollution, save marine life, 
            and bring the island back to its natural beauty.
          </p>
          
          {/* Ripple effect button */}
          <button className="relative bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
            <span className="relative z-10">Start Your Mission</span>
            <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
