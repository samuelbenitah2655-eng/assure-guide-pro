import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import InsuranceLogos from "../components/InsuranceLogos";
import InstitutionalLogos from "../components/InstitutionalLogos";
import ReassuranceSection from "../components/ReassuranceSection";
import EducationalSections from "../components/EducationalSections";
import Footer from "../components/Footer";
import StickyCallButton from "../components/StickyCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Hero />
        <div className="bg-primary/5 py-3 px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
            Appelez un conseiller
          </h1>
          <h2 className="text-base md:text-lg lg:text-xl text-text-dark">
            pour toute question relative à la comparaison de vos contrats d'assurance
          </h2>
        </div>
      </header>

      <main>
        <section className="py-4 md:py-6">
          <CallToAction />
        </section>

        <InsuranceLogos />
        <InstitutionalLogos />
        <ReassuranceSection />
        <EducationalSections />
      </main>

      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Index;