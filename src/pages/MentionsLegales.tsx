import Hero from "../components/Hero";
import Footer from "../components/Footer";
import StickyCallButton from "../components/StickyCallButton";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Hero />
        <div className="bg-primary/5 py-3 px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
            Mentions légales
          </h1>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-6">MENTIONS LÉGALES</h2>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Éditeur du site</h3>
            
            <p className="mb-4">Le site Comparé.fr est édité par la société :</p>
            
            <div className="bg-muted/30 p-4 rounded-lg mb-6">
              <p className="mb-2"><strong>Samuel BENITAH</strong></p>
              <p className="mb-2">Forme juridique : Entreprise individuelle</p>
              <p className="mb-2">RCS : 789 298 759 R.C.S. Evry</p>
              <p className="mb-2">Siège social : 2Bis allée de la pommeraie 91570 BIEVRES</p>
              <p className="mb-2">Directeur de la publication : Monsieur BENITAH</p>
              <p>Enregistré à l'ORIAS sous le numéro 25003275 (www.orias.fr) en qualité de courtier en assurances.</p>
            </div>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Hébergement</h3>
            
            <p className="mb-4">L'hébergement du site est assuré par :</p>
            
            <div className="bg-muted/30 p-4 rounded-lg mb-6">
              <p className="mb-2"><strong>OVH SAS</strong></p>
              <p className="mb-2">2, rue Kellermann</p>
              <p className="mb-2">59100 Roubaix – France</p>
              <p>Tél. : +33 9 72 10 10 07</p>
            </div>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Données personnelles et Cookies</h3>
            
            <p className="mb-6">
              Pour en savoir plus sur notre politique de gestion des données et des cookies, consultez la page :
              <br />👉 <Link to="/charte-donnees" className="text-primary hover:text-primary/80 font-semibold">Charte de protection des données personnelles</Link>.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Disponibilité du site et registres</h3>
            
            <p className="mb-4">
              Le site est en principe accessible 24h/24 et 7j/7, sauf interruption programmée ou non, notamment pour les besoins de maintenance ou en cas de force majeure.
            </p>
            
            <p className="mb-4">
              Nous ne saurions être tenus responsables de tout dommage, quelle qu'en soit la nature, résultant d'une indisponibilité du site.
            </p>
            
            <p className="mb-6">
              Les registres informatisés conservés dans nos systèmes dans le respect des normes de sécurité sont considérés comme preuves des échanges, commandes et communications intervenues entre vous et Comparé.fr.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Limitation de responsabilités</h3>
            
            <p className="mb-4">
              Les informations présentes sur le site Comparé.fr sont aussi précises que possible et régulièrement mises à jour. Toutefois, elles peuvent contenir des inexactitudes ou des omissions.
            </p>
            
            <p className="mb-4">
              Ces informations sont fournies à titre indicatif. Nous invitons les internautes à vérifier directement auprès des assureurs partenaires les conditions exactes, tarifs et garanties de leurs offres.
            </p>
            
            <p className="mb-4">
              Samuel BENITAH ne pourra en aucun cas être tenue pour responsable de tout dommage direct ou indirect résultant de l'utilisation des informations, offres ou services présentés sur le site.
            </p>
            
            <p className="mb-6">
              Les liens hypertextes présents sur Comparé.fr peuvent renvoyer vers d'autres sites tiers, sans que la responsabilité de Samuel BENITAH puisse être engagée quant à leur contenu.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Propriété intellectuelle</h3>
            
            <p className="mb-4">Comparé.fr est une marque déposée par Samuel BENITAH.</p>
            
            <p className="mb-4">
              Aucun texte, image, logo, capture d'écran ou contenu du site ne peut être reproduit sans autorisation préalable écrite.
            </p>
            
            <p className="mb-6">
              Les logos et marques cités appartiennent à leurs propriétaires respectifs et sont utilisés à titre purement informatif. Toute reproduction ou utilisation non autorisée est strictement interdite.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Crédits photo – images</h3>
            
            <p className="mb-4">Certaines images utilisées sur ce site proviennent de banques d'images libres de droits ou sous licence :</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Getty Images</li>
              <li>Unsplash</li>
              <li>Freepik</li>
              <li>Shutterstock</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default MentionsLegales;