import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";

export default function Services() {
  const services = [
    {
      title: "Développement Web",
      price: "À partir de 2000€",
      features: ["Sites Vitrines React", "E-commerce Shopify/WooCommerce", "Applications Web Sur-mesure", "Optimisation Performance"],
      image: "/images/insta-post-2.jpg"
    },
    {
      title: "Design UI/UX",
      price: "À partir de 1500€",
      features: ["Maquettes Figma", "Prototypage Interactif", "Systèmes de Design", "Audit Ergonomique"],
      image: "/images/insta-post-1.jpg"
    },
    {
      title: "Stratégie Digitale",
      price: "Sur Devis",
      features: ["Audit SEO Technique", "Stratégie de Contenu", "Publicité (Ads)", "Analyse de Données"],
      image: "/images/insta-post-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0] dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <Reveal width="100%">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center">Nos Services</h1>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="bg-white border-4 border-black flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform duration-300 h-full">
                <div className="h-48 overflow-hidden border-b-4 border-black relative group">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute top-0 right-0 bg-[#CCFF00] text-black font-bold px-3 py-1 border-l-4 border-b-4 border-black">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h2 className="text-2xl font-black uppercase mb-2">{service.title}</h2>
                  <p className="text-[#CCFF00] bg-black inline-block px-2 py-1 font-mono font-bold mb-6 self-start">{service.price}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start font-mono text-sm">
                        <span className="mr-2 text-black font-bold">/</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <button className="w-full bg-white text-black border-4 border-black py-3 font-bold uppercase hover:bg-black hover:text-[#CCFF00] transition-colors">
                      Commander
                    </button>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
