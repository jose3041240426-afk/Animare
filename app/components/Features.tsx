export default function Features() {
  const features = [
    {
      title: "Interactive Storytelling",
      description: "Engaging narratives that respond to user interaction in real-time.",
      icon: "✨"
    },
    {
      title: "Motion Excellence",
      description: "Fluid 60fps animations optimized for all devices and platforms.",
      icon: "🚀"
    },
    {
      title: "Artistic Direction",
      description: "Unique visual styles tailored to match your brand's unique identity.",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-24 bg-transparent text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} 
                 className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
