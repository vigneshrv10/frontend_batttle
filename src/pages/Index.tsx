import { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import ParallaxHero from '../components/ParallaxHero';
import PollutionHotspot from '../components/PollutionHotspot';
import ToolCarousel from '../components/ToolCarousel';
import StatsCounter from '../components/StatsCounter';
import TestimonialSection from '../components/TestimonialSection';
import FeatureCards from '../components/FeatureCards';
import ThemeToggle from '../components/ThemeToggle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [stats, setStats] = useState({
    barrelsRemoved: 0,
    oilLiters: 0,
    trashCollected: 0,
    animationTrigger: 0
  });

  const visibleElements = useScrollAnimation();

  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('island-rescue-theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('island-rescue-theme', newTheme ? 'dark' : 'light');
  };

  const handleCleanup = () => {
    setStats(prev => ({
      barrelsRemoved: prev.barrelsRemoved + Math.floor(Math.random() * 5) + 1,
      oilLiters: prev.oilLiters + Math.floor(Math.random() * 10) + 5,
      trashCollected: prev.trashCollected + Math.floor(Math.random() * 8) + 3,
      animationTrigger: prev.animationTrigger + 1
    }));
  };

  const handleToolUse = (toolName: string) => {
    console.log(`Using tool: ${toolName}`);
    handleCleanup();
  };

  const hotspots = [
    {
      title: 'Toxic Waste Barrels',
      description: 'Industrial waste containers scattered across the beach need immediate removal.',
      pollutionType: 'Chemical contamination'
    },
    {
      title: 'Oil Spill Zone',
      description: 'Large oil spill affecting marine life and coral reefs in the area.',
      pollutionType: 'Petroleum pollution'
    },
    {
      title: 'Plastic Debris Field',
      description: 'Massive accumulation of plastic waste threatening sea turtle nesting sites.',
      pollutionType: 'Plastic pollution'
    },
    {
      title: 'Contaminated Waters',
      description: 'Chemical runoff has polluted the lagoon where dolphins feed.',
      pollutionType: 'Water contamination'
    }
  ];

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
      
      {/* Navigation */}
      <nav className={`py-4 px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Green Quest
          </h1>
          <a
            href="/assets"
            className={`px-4 py-2 rounded-md ${
              isDarkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors duration-200`}
          >
            View Assets Library
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <ParallaxHero isDarkMode={isDarkMode} />

      {/* Mission Briefing */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Mission Briefing</h2>
          <p className="text-xl leading-relaxed mb-8">
            This once-pristine island has been severely impacted by pollution. Your mission is to identify 
            and clean up contaminated areas, rescue affected wildlife, and restore the natural ecosystem. 
            Each cleanup action brings us closer to returning this paradise to its former glory.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-red-100 rounded-lg">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-2 text-red-800">Critical Pollution</h3>
              <p className="text-red-700">Multiple contamination sources identified</p>
            </div>
            <div className="p-6 bg-yellow-100 rounded-lg">
              <div className="text-4xl mb-4">🐢</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-800">Wildlife at Risk</h3>
              <p className="text-yellow-700">Marine animals need immediate help</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Mission Objective</h3>
              <p className="text-green-700">Restore the island to 100% clean status</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pollution Hotspots */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Pollution Hotspots
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Click on contaminated areas to start cleanup operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotspots.map((hotspot, index) => (
              <div key={index} data-scroll-id={`hotspot-${index}`}>
                <PollutionHotspot
                  {...hotspot}
                  onCleanup={handleCleanup}
                  isVisible={visibleElements.has(`hotspot-${index}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4" data-scroll-id="tools">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Cleanup Arsenal
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Select your tools and start the restoration process
            </p>
          </div>
          <ToolCarousel onToolUse={handleToolUse} />
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4" data-scroll-id="stats">
          <StatsCounter {...stats} />
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${isDarkMode ? 'bg-gray-800' : ''}`}>
        <TestimonialSection />
      </section>

      {/* Feature Cards */}
      <FeatureCards />

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Green Quest: Island Rescue</h3>
          <p className="text-gray-300 mb-6">
            Together, we can restore our planet's natural beauty, one island at a time.
          </p>
          <div className="flex justify-center space-x-6">
            <span className="text-3xl">🌊</span>
            <span className="text-3xl">🐢</span>
            <span className="text-3xl">🌱</span>
            <span className="text-3xl">♻️</span>
            <span className="text-3xl">🌍</span>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            © 2025 Green Quest. All rights reserved. | Built with love for our planet 🌍
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
