const InstitutionalLogos = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 justify-items-center">
          <div className="text-lg md:text-xl font-semibold text-gray-500 border-2 border-gray-300 px-4 py-2 rounded">
            France Assureurs
          </div>
          <div className="text-lg md:text-xl font-semibold text-gray-500 border-2 border-gray-300 px-4 py-2 rounded">
            Banque de France
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 max-w-3xl mx-auto">
          <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide font-medium">
            👉 LES OFFRES COMPARÉES PAR COMPARÉ SONT PROPOSÉES PAR DES ASSUREURS AGRÉÉS ET CONFORMES À LA RÉGLEMENTATION FRANÇAISE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalLogos;