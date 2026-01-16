import { Link } from 'wouter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center px-4">
          <h1 className="text-9xl font-black text-black dark:text-white mb-4">404</h1>
          <div className="w-32 h-2 bg-[#CCFF00] mx-auto mb-8"></div>
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Page non trouvée
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link href="/">
            <a className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg border-4 border-black dark:border-white hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(204,255,0,1)]">
              Retour à l'accueil
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
