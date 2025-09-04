const EducationalSections = () => {
  return (
    <div className="space-y-16 md:space-y-20 py-12 md:py-16 px-4">
      {/* Section 1: Économies */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Et pourquoi ne pas en profiter pour faire des économies sur vos assurances ?
        </h2>
        <div className="prose prose-lg mx-auto text-text-dark">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Vous avez acheté un nouveau véhicule, signé un crédit immobilier, ou simplement atteint l'échéance de votre contrat ? C'est le moment idéal pour comparer les offres d'assurance !
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Nos conseillers analysent vos besoins (auto, habitation, santé, emprunteur…) et identifient le contrat le plus adapté à votre profil. L'économie annuelle moyenne constatée par nos utilisateurs atteint plusieurs centaines d'euros, à garanties comparables.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Avec l'ouverture du marché et les lois récentes (loi Hamon, loi Bourquin, résiliation infra-annuelle), vous êtes libre de changer d'assurance plus facilement que jamais. La couverture reste assurée sans interruption, et les démarches sont simplifiées par nos conseillers.
          </p>
        </div>
      </section>

      {/* Section 2: Comment choisir */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          COMMENT CHOISIR SON ASSURANCE ?
        </h2>
        <div className="text-text-dark">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Chaque année, des millions de contrats sont souscrits ou renouvelés en France. Les besoins diffèrent selon votre situation : type de véhicule, valeur de votre logement, état de santé, montant du prêt immobilier…
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Comparer permet d'éviter les doublons, de réduire les cotisations inutiles et surtout d'ajuster vos garanties à vos vrais besoins.
          </p>
        </div>
      </section>

      {/* Section 3: Démarches */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Quelles sont les démarches pour changer ?
        </h2>
        <div className="text-text-dark">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Changer d'assurance est une démarche simple et encadrée par la loi :
          </p>
          <ul className="space-y-4 mb-6 text-base md:text-lg leading-relaxed">
            <li><strong>Assurance Auto / Habitation :</strong> résiliation possible à l'échéance, et après 1 an à tout moment (loi Hamon).</li>
            <li><strong>Assurance Emprunteur :</strong> résiliation possible à tout moment (loi Lemoine), sous réserve d'équivalence de garanties.</li>
            <li><strong>Complémentaire Santé :</strong> résiliation possible à échéance, parfois en cours d'année selon les conditions.</li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Nos conseillers s'occupent de tout : souscription du nouveau contrat et résiliation de l'ancien. Vous êtes protégé en continu.
          </p>
        </div>
      </section>

      {/* Section 4: Offres adaptées */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Quelles offres d'assurance sont adaptées à vos besoins ?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">🚗 Auto</h4>
              <p className="text-sm text-text-dark">responsabilité civile obligatoire, garanties tous risques, assistance 0 km, véhicule de remplacement…</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">🏠 Habitation</h4>
              <p className="text-sm text-text-dark">multirisques habitation, dégâts des eaux, incendie, vol, protection juridique.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">🏥 Santé</h4>
              <p className="text-sm text-text-dark">hospitalisation, dentaire, optique, audio, remboursement rapide.</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">🏦 Emprunteur</h4>
              <p className="text-sm text-text-dark">décès, invalidité, incapacité de travail, couverture personnalisée pour votre prêt.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-base md:text-lg text-text-dark">
            Chaque offre est évaluée selon 4 critères : prix, garanties, franchises, exclusions.
          </p>
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