
const testimonials = [
  {
    id: 1,
    animal: 'Sea Turtle',
    emoji: '🐢',
    message: "Thank you for removing the plastic from our waters! My family can swim safely again.",
    name: 'Marina the Turtle'
  },
  {
    id: 2,
    animal: 'Dolphin',
    emoji: '🐬',
    message: "The oil spills were making us sick. Your cleanup efforts saved our pod!",
    name: 'Echo the Dolphin'
  },
  {
    id: 3,
    animal: 'Seabird',
    emoji: '🐦',
    message: "Our nesting sites are clean and safe thanks to your hard work!",
    name: 'Sky the Pelican'
  },
  {
    id: 4,
    animal: 'Fish',
    emoji: '🐠',
    message: "The coral reef is colorful again! We can call this home once more.",
    name: 'Coral the Clownfish'
  }
];

const partners = [
  { name: 'Ocean Cleanup', logo: '🌊' },
  { name: 'Marine Rescue', logo: '🐋' },
  { name: 'Green Initiative', logo: '🌱' },
  { name: 'Eco Warriors', logo: '♻️' },
  { name: 'Blue Planet', logo: '🌍' },
  { name: 'Sea Guardians', logo: '🛡️' },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Voices from the Ocean</h2>
          <p className="text-xl text-gray-600 mb-12">
            Hear from the wildlife whose lives you've helped save
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4 text-center">{testimonial.emoji}</div>
                <blockquote className="text-gray-600 text-lg italic mb-4">
                  "{testimonial.message}"
                </blockquote>
                <div className="text-right">
                  <cite className="text-gray-800 font-semibold">— {testimonial.name}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Conservation Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-2 text-center">{partner.logo}</div>
                <div className="text-sm font-semibold text-gray-700 text-center">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
