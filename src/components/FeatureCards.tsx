
import { useState } from 'react';

const features = [
  {
    id: 1,
    title: 'Eco Tours',
    description: 'Explore the restored island with guided sustainable tours',
    icon: '🚢',
    details: 'Join expert marine biologists for educational tours around the cleaned waters. Learn about marine ecosystems and conservation efforts.',
    action: 'Book Tour'
  },
  {
    id: 2,
    title: 'Volunteer Program',
    description: 'Join ongoing conservation efforts as a volunteer',
    icon: '🤝',
    details: 'Be part of regular cleanup drives, wildlife monitoring, and educational outreach programs in coastal communities.',
    action: 'Sign Up'
  },
  {
    id: 3,
    title: 'Adopt a Coral',
    description: 'Sponsor coral reef restoration projects',
    icon: '🪸',
    details: 'Support coral reef regeneration efforts. Your sponsorship helps plant new coral and monitor reef health.',
    action: 'Adopt Now'
  },
  {
    id: 4,
    title: 'Education Hub',
    description: 'Learn about marine conservation and sustainability',
    icon: '📚',
    details: 'Access courses, webinars, and resources about ocean conservation, sustainable living, and environmental protection.',
    action: 'Learn More'
  }
];

const FeatureCards = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (cardId: number) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What's Next?</h2>
          <p className="text-xl text-gray-600">
            Continue your conservation journey with these opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="perspective-1000">
              <div 
                className={`relative w-full h-80 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === feature.id ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleCardClick(feature.id)}
              >
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-6 text-blue-500 font-medium">Click to learn more →</div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl shadow-lg p-6 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/90 leading-relaxed">{feature.details}</p>
                  </div>
                  <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                    {feature.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
