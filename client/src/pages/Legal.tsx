import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Legal() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-black uppercase mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 font-mono max-w-3xl">
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">1. Éditeur du site</h2>
            <p>
              Le site TechFlow est édité par TechFlow Solutions.<br />
              Siège social : TechFlow - La Défense, Courbevoie, France.<br />
              Email : contact@techflow.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">2. Hébergement</h2>
            <p>
              Ce site est hébergé sur des infrastructures cloud sécurisées conformes aux normes internationales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">3. Modèle d'opération</h2>
            <p>
              TechFlow opère via un réseau international. Les adresses mentionnées à Paris, Londres et New York correspondent à nos bureaux de représentation commerciale. Nos prestations sont réalisées par notre réseau d'experts qualifiés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">5. Données personnelles</h2>
            <p>
              Les informations recueillies via le formulaire de contact sont destinées exclusivement à TechFlow pour le traitement de votre demande. Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de modification et de suppression de vos données.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
