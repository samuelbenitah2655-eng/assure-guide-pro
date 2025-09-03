const InsuranceLogos = () => {
  const logos = [
    { name: "AXA", color: "#00008F" },
    { name: "MAIF", color: "#E4003B" },
    { name: "Groupama", color: "#C8102E" },
    { name: "Allianz", color: "#003781" }
  ];

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <div 
                className="text-xl md:text-2xl font-bold px-4 py-2 rounded"
                style={{ color: logo.color, border: `2px solid ${logo.color}` }}
              >
                {logo.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm md:text-base text-text-light leading-relaxed">
            👉 Nous comparons pour vous les tarifs des assureurs (auto, habitation, santé, emprunteur) et facilitons vos démarches. 
            Nous vous aidons également pour la souscription de vos contrats complémentaires (protection juridique, prévoyance, assistance).
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsuranceLogos;