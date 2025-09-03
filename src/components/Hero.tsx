import heroImage from "../assets/teleoperators-hero.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-20 md:h-24 lg:h-28 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative h-full flex items-center justify-center px-4">
        <img 
          src="/lovable-uploads/112e80bd-c85e-4edd-8ebf-1d5211d945d3.png" 
          alt="Comparé - Comparateur d'assurance"
          className="h-12 md:h-16 lg:h-20 w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;