import CallToAction from "./CallToAction";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <CallToAction className="mb-8" />
        
        <div className="text-center pt-6 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-2xl mx-auto">
            <a href="#" className="text-sm text-text-light hover:text-primary transition-colors">
              Qui sommes-nous ?
            </a>
            <a href="#" className="text-sm text-text-light hover:text-primary transition-colors">
              Contactez-nous
            </a>
            <a href="#" className="text-sm text-text-light hover:text-primary transition-colors">
              Charte de protection des données
            </a>
            <a href="#" className="text-sm text-text-light hover:text-primary transition-colors">
              Mentions légales
            </a>
          </div>
          
          <p className="text-xs text-text-light leading-relaxed mb-4">
            Comparé est un service indépendant.
          </p>
          
          <p className="text-xs text-text-light leading-relaxed">
            En validant, vous acceptez d'être contacté pour le traitement de votre demande, et vous acceptez de recevoir des informations commerciales de la part de l'éditeur de ce site. Les appels téléphoniques effectués dans le cadre de votre demande ne seront pas considérés comme des actions de démarchage téléphonique et pourront donc intervenir même si vous êtes inscrit sur la liste nationale d'opposition. Vous disposez d'un droit d'accès, de modifications, de rectifications et de suppression des données qui vous concernent (art.34 de la loi Informatiques et libertés).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;