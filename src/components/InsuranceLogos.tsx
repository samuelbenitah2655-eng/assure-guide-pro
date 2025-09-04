import axaLogo from "/lovable-uploads/427d53a2-985f-442c-bb8f-f34e0b5b337b.png";
import maifLogo from "/lovable-uploads/e1ce619b-4d13-4f2f-a021-f74277badedc.png";
import groupamaLogo from "/lovable-uploads/c27f5bd3-e050-4d5d-9cfe-317859b1020a.png";
import allianzLogo from "/lovable-uploads/1771c13d-4ebe-4a07-9dc6-1a70b3dd8464.png";

const InsuranceLogos = () => {
  const logos = [
    { name: "AXA", logo: axaLogo },
    { name: "MAIF", logo: maifLogo },
    { name: "Groupama", logo: groupamaLogo },
    { name: "Allianz", logo: allianzLogo }
  ];

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-3">
              <img 
                src={logo.logo}
                alt={`Logo ${logo.name}`}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xs md:text-sm text-text-light leading-relaxed">
            Nous comparons pour vous les tarifs des assureurs (auto, habitation, santé, emprunteur) et facilitons vos démarches. 
            Nous vous aidons également pour la souscription de vos contrats complémentaires (protection juridique, prévoyance, assistance).
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsuranceLogos;