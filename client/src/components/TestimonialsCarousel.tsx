import { useState, useEffect } from "react";
import { testimonials, testimonialStats } from "@/data/testimonialsData";
import { Reveal } from "@/components/Reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-black text-white border-t-4 border-[#CCFF00]">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl font-black uppercase mb-4 text-center">
            Nos clients nous font confiance
          </h2>
          <p className="font-mono text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Découvrez comment nous avons transformé les businesses de nos partenaires.
          </p>
        </Reveal>

        {/* Testimonial Carousel */}
        <Reveal width="100%" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="border-4 border-[#CCFF00] p-12 bg-gray-900 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCFF00] rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                {/* Avatar & Info */}
                <div className="flex items-start gap-6 mb-8">
                  <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className="w-24 h-24 rounded-lg object-cover border-4 border-[#CCFF00]" />
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="font-mono text-[#CCFF00] mb-1">
                      {currentTestimonial.role}
                    </p>
                    <p className="font-mono text-gray-400 text-sm">
                      {currentTestimonial.company} • {currentTestimonial.industry}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-xl font-light italic mb-8 leading-relaxed border-l-4 border-[#CCFF00] pl-6">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Metric */}
                <div className="flex items-center gap-8 mb-8">
                  <div className="border-2 border-[#CCFF00] p-6 bg-black">
                    <div className="text-4xl font-black text-[#CCFF00] mb-2">
                      {currentTestimonial.metric}
                    </div>
                    <div className="font-mono text-sm text-gray-400">
                      {currentTestimonial.metricLabel}
                    </div>
                  </div>
                  <div className="flex-1 font-mono text-gray-300">
                    <p className="mb-2">Résultat:</p>
                    <p className="text-lg font-bold text-[#CCFF00]">
                      {currentTestimonial.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t-2 border-gray-700">
                <button
                  onClick={goToPrevious}
                  className="p-3 bg-[#CCFF00] text-black hover:bg-white transition-all border-2 border-[#CCFF00]"
                  aria-label="Testimonial précédent"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsAutoPlay(false);
                      }}
                      className={`w-3 h-3 transition-all ${
                        index === currentIndex
                          ? "bg-[#CCFF00] w-8"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      aria-label={`Aller au testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="p-3 bg-[#CCFF00] text-black hover:bg-white transition-all border-2 border-[#CCFF00]"
                  aria-label="Testimonial suivant"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal width="100%" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {testimonialStats.map((stat, index) => (
              <div
                key={index}
                className="border-2 border-[#CCFF00] p-6 text-center bg-gray-900 hover:bg-black transition-all"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-black text-[#CCFF00] mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
