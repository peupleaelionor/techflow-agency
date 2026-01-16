import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";

interface CalendlyWidgetProps {
  url?: string;
  title?: string;
  description?: string;
}

export default function CalendlyWidget({
  url = "https://calendly.com/techflow",
  title = "Réservez votre consultation gratuite",
  description = "Choisissez un créneau qui vous convient pour discuter de votre projet avec nos experts."
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-black border-t-4 border-black dark:border-gray-700">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase mb-4">{title}</h2>
            <p className="font-mono text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </Reveal>

        <Reveal width="100%">
          <div className="max-w-2xl mx-auto border-4 border-black dark:border-gray-700 overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url={url}
              style={{ minHeight: "600px" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              Vous préférez un autre format? <a href="mailto:Techflow@outlook.fr" className="text-[#CCFF00] hover:underline">Contactez-nous directement</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
