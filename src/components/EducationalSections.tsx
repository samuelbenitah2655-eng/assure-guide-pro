const EducationalSections = () => {
  return (
    <div className="space-y-16 md:space-y-20 py-12 md:py-16 px-4">
      {/* Section 1: Avoir le choix */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Avoir le choix de son assurance, c'est important
        </h2>
        <div className="prose prose-lg mx-auto text-text-dark">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Choisir son assurance n'est pas qu'une question de prix. C'est aussi une question de garanties, 
            de franchise, de service client et de rapidité d'indemnisation. Avec plus de 300 compagnies 
            d'assurance en France, il est essentiel de comparer pour trouver l'offre qui vous correspond vraiment.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Économies garanties</h4>
              <p className="text-sm md:text-base">Jusqu'à 300€ d'économies par an sur vos contrats d'assurance</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Service personnalisé</h4>
              <p className="text-sm md:text-base">Un conseiller dédié pour vous accompagner dans vos démarches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Comment changer */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Comment changer d'assurance ?
        </h2>
        <div className="text-text-dark">
          <p className="text-base md:text-lg leading-relaxed mb-8 text-center">
            Depuis la loi Hamon et la résiliation annuelle, changer d'assurance n'a jamais été aussi simple.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white border border-border rounded-lg">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="font-semibold text-primary mb-3">Appelez-nous</h4>
              <p className="text-sm">Un conseiller analyse vos besoins et compare les offres</p>
            </div>
            <div className="text-center p-6 bg-white border border-border rounded-lg">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="font-semibold text-primary mb-3">Souscrivez</h4>
              <p className="text-sm">Validation de votre nouveau contrat en quelques minutes</p>
            </div>
            <div className="text-center p-6 bg-white border border-border rounded-lg">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="font-semibold text-primary mb-3">Nous gérons tout</h4>
              <p className="text-sm">Résiliation de l'ancien contrat sans interruption de couverture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comment choisir */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Comment choisir son contrat ?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">🚗 Assurance Auto</h4>
              <p className="text-sm text-text-dark">Responsabilité civile, vol, incendie, tous risques... Adaptez votre couverture à votre véhicule et votre profil.</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">🏠 Assurance Habitation</h4>
              <p className="text-sm text-text-dark">Multirisques habitation, garantie dégât des eaux, vol, responsabilité civile vie privée.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">🏥 Complémentaire Santé</h4>
              <p className="text-sm text-text-dark">Remboursement des soins, hospitalisation, optique, dentaire selon vos besoins de santé.</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">🏦 Assurance Emprunteur</h4>
              <p className="text-sm text-text-dark">Décès, invalidité, incapacité de travail pour sécuriser votre crédit immobilier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Questions fréquentes */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Questions fréquentes
        </h2>
        <div className="space-y-6">
          <div className="bg-white border border-border rounded-lg p-6">
            <h4 className="font-semibold text-primary mb-3">Est-ce vraiment gratuit ?</h4>
            <p className="text-sm md:text-base text-text-dark">Oui, notre service de comparaison et nos conseils sont entièrement gratuits. Nous sommes rémunérés par les assureurs partenaires.</p>
          </div>
          <div className="bg-white border border-border rounded-lg p-6">
            <h4 className="font-semibold text-primary mb-3">Combien de temps pour changer d'assurance ?</h4>
            <p className="text-sm md:text-base text-text-dark">En moyenne 15 minutes au téléphone pour faire le point sur vos besoins et souscrire. Nous nous occupons ensuite de toutes les démarches.</p>
          </div>
          <div className="bg-white border border-border rounded-lg p-6">
            <h4 className="font-semibold text-primary mb-3">Y a-t-il une interruption de couverture ?</h4>
            <p className="text-sm md:text-base text-text-dark">Jamais. Nous coordonnons la prise d'effet du nouveau contrat avec la résiliation de l'ancien pour une continuité parfaite.</p>
          </div>
          <div className="bg-white border border-border rounded-lg p-6">
            <h4 className="font-semibold text-primary mb-3">Que se passe-t-il en cas de sinistre ?</h4>
            <p className="text-sm md:text-base text-text-dark">Vous bénéficiez de l'accompagnement de votre nouvel assureur et de notre équipe si besoin. Le processus reste le même qu'avec votre ancien contrat.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalSections;