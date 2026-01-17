import { Reveal } from "./Reveal";
import Container from "./Container";

export default function ServicesSection() {
  const services = [
    {
      title: "Développement Web",
      desc: "Sites et applications intelligents conçus pour la performance et l'automatisation de vos processus.",
      icon: "💻"
    },
    {
      title: "Design UI/UX & Branding",
      desc: "Interfaces centrées utilisateur conçues pour maximiser l'engagement et la conversion.",
      icon: "🎨"
    },
    {
      title: "Stratégie Digitale",
      desc: "Audits complets et feuilles de route pour placer l'innovation au cœur de votre croissance.",
      icon: "🚀"
    },
    {
      title: "SEO & Marketing",
      desc: "Stratégies de contenu et optimisation SEO avancées pour dominer votre marché.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <Container>
        <Reveal width="100%">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 sm:mb-12 md:mb-16 text-center">
            Nos Services
          </h2>
        </Reveal>

        {/* Grid: 1 col mobile, 2 cols tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.15} width="100%">
              <div className="border-4 border-black p-6 sm:p-8 bg-white hover:bg-[#CCFF00] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group h-full flex flex-col">
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4 border-b-4 border-black pb-2 inline-block">
                  {service.title}
                </h3>
                <p className="font-mono text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
