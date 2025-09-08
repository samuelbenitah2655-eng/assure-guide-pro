import Hero from "../components/Hero";
import Footer from "../components/Footer";
import StickyCallButton from "../components/StickyCallButton";

const ContactezNous = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Hero />
        <div className="bg-primary/5 py-3 px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
            Contactez-nous
          </h1>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-6">CONTACTEZ-NOUS</h2>
            
            <p className="mb-6">
              Pour contacter l'équipe Comparé.fr, poser une question, nous faire part d'une remarque à propos de notre site, établir un partenariat commercial ou proposer vos services en tant qu'assureur, écrivez-nous à :
            </p>
            
            <p className="mb-8 text-lg">
              📧 <a href="mailto:contact@compare.fr" className="text-primary hover:text-primary/80 font-semibold">contact@compare.fr</a>
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Vous souhaitez nous contacter au sujet de vos données personnelles ?</h3>
            
            <p className="mb-8 text-lg">
              📧 Écrivez directement à : <a href="mailto:dpo@compare.fr" className="text-primary hover:text-primary/80 font-semibold">dpo@compare.fr</a>
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Pour une réclamation</h3>
            
            <p className="mb-4">
              Si vous souhaitez déposer une réclamation concernant l'un de nos services, vous pouvez nous écrire à :
            </p>
            
            <p className="mb-6 text-lg">
              📧 <a href="mailto:reclamation@compare.fr" className="text-primary hover:text-primary/80 font-semibold">reclamation@compare.fr</a>
            </p>

            <p className="font-semibold">
              Nous nous engageons à traiter votre demande dans les meilleurs délais.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default ContactezNous;