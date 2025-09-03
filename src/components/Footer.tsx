import CallToAction from "./CallToAction";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <CallToAction className="mb-8" />
        
        <div className="text-center pt-8 border-t border-border">
          <p className="text-xs md:text-sm text-text-light leading-relaxed">
            👉 Comparé est un service indépendant de tout comparateur ou assureur officiel. 
            Les logos de marques éventuellement cités sont la propriété de leurs détenteurs respectifs 
            et sont utilisés à titre informatif. Ce site n'est pas le service client d'un comparateur officiel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;