import { Phone } from "lucide-react";

const ReassuranceSection = () => {
  return (
    <section id="reassurance-section" className="py-12 md:py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6">
          <Phone className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Un appel et on s'occupe de tout
        </h3>
        
        <p className="text-base md:text-lg text-text-dark leading-relaxed">
          👉 Votre contrat est comparé et activé rapidement. Vos anciens contrats sont résiliés correctement, 
          sans interruption de couverture. Nos conseillers vous guident pas à pas, en toute simplicité.
        </p>
      </div>
    </section>
  );
};

export default ReassuranceSection;