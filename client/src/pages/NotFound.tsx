import { Link } from 'wouter';
import Header from '@/components/Header';
import { ROUTES } from '@/app/routes';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-8xl md:text-9xl font-black text-black dark:text-white mb-4">
            404
          </h1>
          <div className="w-32 h-2 bg-[#CCFF00] mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Page non trouvée
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.home}>
              <a className="inline-block px-8 py-4 bg-black dark:bg-[#CCFF00] text-white dark:text-black font-bold border-4 border-black dark:border-[#CCFF00] hover:shadow-lg transition">
                Retour à l'accueil
              </a>
            </Link>
            <Link href={ROUTES.contact}>
              <a className="inline-block px-8 py-4 bg-[#CCFF00] text-black font-bold border-4 border-[#CCFF00] hover:shadow-lg transition">
                Nous contacter
              </a>
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Vous cherchez peut-être :
            </p>
            <div className="space-y-2 text-sm">
              <Link href={ROUTES.home}>
                <a className="block text-[#CCFF00] hover:underline">🏠 Accueil</a>
              </Link>
              <Link href={ROUTES.portfolio}>
                <a className="block text-[#CCFF00] hover:underline">📁 Portfolio</a>
              </Link>
              <Link href={ROUTES.contact}>
                <a className="block text-[#CCFF00] hover:underline">💬 Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
