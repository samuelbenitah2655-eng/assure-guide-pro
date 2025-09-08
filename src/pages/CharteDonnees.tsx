import Hero from "../components/Hero";
import Footer from "../components/Footer";
import StickyCallButton from "../components/StickyCallButton";

const CharteDonnees = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Hero />
        <div className="bg-primary/5 py-3 px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
            Charte de protection des données
          </h1>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-muted-foreground mb-6">Date de dernière mise à jour : 04/09/2025</p>
            
            <p className="mb-6">
              Vous trouverez ci-dessous l'intégralité de la charte pour la protection des données personnelles de la société éditrice du site Comparé.fr.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Notre rôle vis-à-vis de vos données personnelles</h2>
            
            <p className="mb-4">
              Cette charte s'applique si vous visitez notre site Web ou si vous entrez en relation avec l'un de nos conseillers.
            </p>
            
            <p className="mb-6">
              Si vous acceptez d'être mis en relation avec un assureur par l'intermédiaire de Comparé.fr, vous devez également vérifier la charte de protection des données personnelles de l'assureur concerné.
            </p>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">Nos responsabilités</h3>
            
            <p className="mb-4">
              Les données personnelles sont collectées et traitées par l'éditeur de Comparé.fr, responsable du traitement.
              Cela signifie que nous déterminons comment et pourquoi vos données sont utilisées.
            </p>
            
            <p className="mb-6">
              Comparé.fr a désigné un Délégué à la Protection des Données (DPO) chargé de garantir vos droits (information, accès, rectification, opposition, effacement, limitation et portabilité).
              <br />📧 Vous pouvez le contacter à : <a href="mailto:dpo@compare.fr" className="text-primary hover:text-primary/80 font-semibold">dpo@compare.fr</a>
            </p>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">Vos responsabilités</h3>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Lire attentivement la présente charte.</li>
              <li>Vérifier les conditions de l'assureur si vous acceptez une mise en relation.</li>
              <li>Fournir uniquement des informations exactes et nécessaires à votre demande.</li>
            </ul>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Quand et comment collectons-nous les données ?</h2>
            
            <p className="mb-4">Nous collectons vos données dans les cas suivants :</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Lorsque vous naviguez sur Comparé.fr</li>
              <li>Lorsque vous remplissez un formulaire ou cliquez pour être rappelé</li>
              <li>Lorsque vous contactez notre service client par téléphone ou email</li>
              <li>Lorsque vous acceptez de recevoir nos communications</li>
            </ul>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Types de données que nous collectons</h2>
            
            <p className="mb-2"><strong>Informations transmises :</strong> nom, prénom, téléphone, email, informations relatives à vos contrats d'assurance.</p>
            
            <p className="mb-2"><strong>Données techniques :</strong> adresse IP, type de navigateur, fuseau horaire, système d'exploitation.</p>
            
            <p className="mb-6"><strong>Données d'utilisation :</strong> pages visitées, temps de consultation, actions effectuées sur le site.</p>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">Données sensibles</h3>
            
            <p className="mb-6">
              Nous ne collectons pas de données dites « sensibles » (origine raciale, opinions politiques, croyances religieuses, santé, orientation sexuelle, etc.).
            </p>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">Données concernant les mineurs</h3>
            
            <p className="mb-6">
              Comparé.fr est un service destiné aux personnes de 18 ans et plus. Nous ne collectons pas sciemment de données personnelles de mineurs.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Comment et pourquoi utilisons-nous vos données ?</h2>
            
            <p className="mb-4">Nous utilisons vos données pour :</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Faire fonctionner Comparé.fr (mise en relation, traitement des demandes, suivi des dossiers)</li>
              <li>Améliorer le site (tests, optimisation, analyses statistiques)</li>
              <li>Service client (réponse à vos demandes par téléphone, email ou SMS)</li>
              <li>Marketing et information (vous informer d'offres d'assurances pertinentes, toujours de façon raisonnable et encadrée)</li>
            </ul>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Destinataires de vos données</h2>
            
            <p className="mb-4">Vos données peuvent être transmises aux :</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Assureurs partenaires et courtiers</li>
              <li>Prestataires techniques (hébergement, emailing, téléphonie)</li>
            </ul>
            
            <p className="mb-6">Ces destinataires sont tenus de respecter la réglementation en vigueur.</p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Vos choix et vos droits</h2>
            
            <p className="mb-4">Conformément à la loi Informatique et Libertés et au RGPD, vous disposez des droits suivants :</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Accès à vos données</li>
              <li>Rectification de vos données</li>
              <li>Suppression (« droit à l'oubli »)</li>
              <li>Opposition à certains traitements</li>
              <li>Limitation et portabilité</li>
            </ul>
            
            <p className="mb-4">
              📧 Pour exercer vos droits : <a href="mailto:dpo@compare.fr" className="text-primary hover:text-primary/80 font-semibold">dpo@compare.fr</a>
            </p>
            
            <p className="mb-6">
              Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">www.cnil.fr</a>).
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Sécurité et conservation des données</h2>
            
            <p className="mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données.
              Toutefois, aucune transmission sur Internet n'étant totalement sécurisée, vous nous fournissez vos données à vos propres risques.
            </p>
            
            <p className="mb-4"><strong>Durée de conservation :</strong></p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Données clients/prospects : 3 ans après la dernière interaction</li>
              <li>Données techniques (cookies/navigation) : 6 mois</li>
              <li>Données liées aux réclamations : 5 ans (obligations légales)</li>
            </ul>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Cookies et technologies similaires</h2>
            
            <p className="mb-4">Un cookie est un fichier enregistré sur votre terminal lors de votre visite. Ils servent à :</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Analyser la fréquentation du site</li>
              <li>Adapter l'affichage à votre appareil</li>
              <li>Améliorer votre expérience utilisateur</li>
            </ul>
            
            <p className="mb-6">Vous pouvez paramétrer vos cookies via votre navigateur.</p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Contact et réclamations</h2>
            
            <p className="mb-4">
              Pour toute question sur la gestion de vos données, contactez :
              <br />📧 <a href="mailto:dpo@compare.fr" className="text-primary hover:text-primary/80 font-semibold">dpo@compare.fr</a>
            </p>
            
            <p>En cas de litige non résolu, vous pouvez saisir la CNIL.</p>
          </div>
        </div>
      </main>

      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default CharteDonnees;