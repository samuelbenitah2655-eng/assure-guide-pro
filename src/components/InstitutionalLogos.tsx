import franceAssureursLogo from "/lovable-uploads/d6823375-ffbe-47d8-8a28-c1d4e2865d19.png";
import banqueFranceLogo from "/lovable-uploads/fe247eea-95c3-401b-a534-ca5b7cd8b5ef.png";

const InstitutionalLogos = () => {
  return (
    <section className="py-6 md:py-8 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 justify-items-center">
          <div className="flex items-center justify-center p-2">
            <img 
              src={franceAssureursLogo}
              alt="Fédération Française de l'Assurance"
              className="h-12 md:h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-2">
            <img 
              src={banqueFranceLogo}
              alt="ACPR - Banque de France"
              className="h-12 md:h-12 w-auto object-contain"
            />
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 max-w-3xl mx-auto">
          <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide font-medium">
            LES OFFRES COMPARÉES PAR COMPARÉ SONT PROPOSÉES PAR DES ASSUREURS AGRÉÉS ET CONFORMES À LA RÉGLEMENTATION FRANÇAISE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalLogos;