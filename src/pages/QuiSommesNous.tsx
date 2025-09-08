import Hero from "../components/Hero";
import Footer from "../components/Footer";
import StickyCallButton from "../components/StickyCallButton";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Hero />
        <div className="bg-primary/5 py-3 px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
            Qui sommes-nous ?
          </h1>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-6">QUI SOMMES-NOUS ?</h2>
            
            <p className="mb-6">
              Comparé.fr est une équipe spécialisée dans la comparaison d'assurances en ligne.
              Notre mission est simple : vous aider à trouver le contrat le plus adapté à vos besoins, au meilleur prix, en toute transparence.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Pourquoi Comparé.fr ?</h3>
            
            <p className="mb-6">
              Le monde de l'assurance est devenu de plus en plus complexe : auto, habitation, santé, emprunteur… Chaque contrat cache ses spécificités, ses exclusions, ses garanties optionnelles. Résultat : beaucoup de particuliers paient trop cher, ou sont mal couverts sans le savoir.
            </p>

            <p className="mb-6">
              Nous avons créé Comparé.fr pour simplifier ce processus et redonner du pouvoir d'achat aux assurés. Grâce à nos outils et à l'expertise de nos conseillers, comparer vos contrats ne prend que quelques minutes et peut représenter plusieurs centaines d'euros d'économies par an, à garanties équivalentes.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Comment fonctionne notre service ?</h3>
            
            <p className="mb-4">Notre travail consiste à :</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Rassembler et mettre à jour les offres des principaux assureurs du marché.</li>
              <li>Analyser objectivement chaque contrat (prix, garanties, exclusions, franchises).</li>
              <li>Restituer ces informations de façon claire et simple via notre site et nos conseillers.</li>
              <li>Vous accompagner dans la souscription et la résiliation, pour garantir une transition sans interruption de couverture.</li>
            </ul>

            <p className="mb-6">
              Nous proposons un service 100 % gratuit pour les consommateurs.
              Notre modèle repose sur les mises en relation avec les assureurs partenaires : c'est eux qui nous rémunèrent, jamais nos utilisateurs. Comparé.fr est totalement indépendant et n'a aucun lien capitalistique avec les compagnies d'assurance présentées.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">L'équipe Comparé.fr</h3>
            
            <p className="mb-4">
              Notre équipe est composée de spécialistes de l'assurance et de la relation client, organisés par secteur : auto, habitation, santé, assurance emprunteur.
            </p>
            
            <p className="mb-4">Notre ambition est double :</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>offrir aux particuliers un outil fiable, simple et transparent pour mieux choisir leur assurance,</li>
              <li>et présenter aux assureurs des clients informés, déjà accompagnés dans leur démarche.</li>
            </ul>

            <p>
              Comparé.fr a été lancé pour devenir un partenaire de confiance, à la fois des consommateurs et du marché de l'assurance.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default QuiSommesNous;