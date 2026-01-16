import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { pricingPlans, calculateROI, type ROICalculatorInput } from "@/data/pricingData";
import { Check, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export default function Pricing() {
  const [roiInput, setRoiInput] = useState<ROICalculatorInput>({
    currentRevenue: 50000,
    conversionRate: 2,
    avgOrderValue: 100,
    trafficIncrease: 40
  });

  const roi = calculateROI(roiInput);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <Reveal width="100%">
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">Tarification</h1>
            </Reveal>
            <Reveal delay={0.2} width="100%">
              <p className="text-xl font-mono text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Des prix transparents. Pas de frais cachés. Choisissez le plan qui correspond à vos ambitions.
              </p>
            </Reveal>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.id} delay={index * 0.2} width="100%">
                <div className={`border-4 ${plan.highlighted ? 'border-[#CCFF00] bg-[#CCFF00]' : 'border-black dark:border-[#CCFF00]'} ${plan.highlighted ? 'bg-[#CCFF00]' : 'bg-white dark:bg-gray-900'} p-8 flex flex-col h-full ${plan.highlighted ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative -mt-4' : ''}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-[#CCFF00] px-4 py-1 font-bold uppercase text-sm border-2 border-black">
                      Populaire
                    </div>
                  )}
                  
                  <h3 className={`text-2xl font-black uppercase mb-2 ${plan.highlighted ? 'text-black' : ''}`}>{plan.name}</h3>
                  <p className={`font-mono text-sm mb-6 ${plan.highlighted ? 'text-black' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className={`text-4xl font-black ${plan.highlighted ? 'text-black' : ''}`}>
                      €{plan.price.toLocaleString()}
                    </span>
                    <p className={`font-mono text-sm ${plan.highlighted ? 'text-black' : 'text-gray-600 dark:text-gray-400'}`}>
                      Investissement unique
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-3 font-mono text-sm ${plan.highlighted ? 'text-black' : ''}`}>
                        <Check size={18} className={plan.highlighted ? 'text-black' : 'text-[#CCFF00]'} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <button className={`w-full py-4 font-bold uppercase border-2 transition-all ${
                      plan.highlighted
                        ? 'bg-black text-[#CCFF00] border-black hover:bg-white hover:text-black'
                        : 'bg-black dark:bg-[#CCFF00] text-[#CCFF00] dark:text-black border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] dark:hover:bg-black hover:text-black dark:hover:text-[#CCFF00]'
                    }`}>
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ROI Calculator */}
          <Reveal width="100%" delay={0.6}>
            <section className="border-4 border-black dark:border-[#CCFF00] bg-[#F0F0F0] dark:bg-gray-900 p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp size={32} className="text-[#CCFF00]" />
                <h2 className="text-3xl font-black uppercase">Calculateur ROI</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block font-bold uppercase mb-2">Revenu mensuel actuel (€)</label>
                    <input
                      type="number"
                      value={roiInput.currentRevenue}
                      onChange={(e) => setRoiInput({ ...roiInput, currentRevenue: Number(e.target.value) })}
                      className="w-full px-4 py-3 border-2 border-black dark:border-[#CCFF00] bg-white dark:bg-black dark:text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold uppercase mb-2">Taux de conversion actuel (%)</label>
                    <input
                      type="number"
                      value={roiInput.conversionRate}
                      onChange={(e) => setRoiInput({ ...roiInput, conversionRate: Number(e.target.value) })}
                      className="w-full px-4 py-3 border-2 border-black dark:border-[#CCFF00] bg-white dark:bg-black dark:text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold uppercase mb-2">Panier moyen (€)</label>
                    <input
                      type="number"
                      value={roiInput.avgOrderValue}
                      onChange={(e) => setRoiInput({ ...roiInput, avgOrderValue: Number(e.target.value) })}
                      className="w-full px-4 py-3 border-2 border-black dark:border-[#CCFF00] bg-white dark:bg-black dark:text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold uppercase mb-2">Augmentation du trafic attendue (%)</label>
                    <input
                      type="number"
                      value={roiInput.trafficIncrease}
                      onChange={(e) => setRoiInput({ ...roiInput, trafficIncrease: Number(e.target.value) })}
                      className="w-full px-4 py-3 border-2 border-black dark:border-[#CCFF00] bg-white dark:bg-black dark:text-white font-mono"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <div className="border-4 border-black dark:border-[#CCFF00] bg-white dark:bg-black p-6">
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-2">Revenu mensuel actuel</p>
                    <p className="text-3xl font-black">€{roi.currentMonthlyRevenue.toLocaleString()}</p>
                  </div>

                  <div className="border-4 border-black dark:border-[#CCFF00] bg-white dark:bg-black p-6">
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-2">Revenu mensuel projeté</p>
                    <p className="text-3xl font-black text-[#CCFF00]">€{roi.projectedMonthlyRevenue.toLocaleString()}</p>
                  </div>

                  <div className="border-4 border-black dark:border-[#CCFF00] bg-white dark:bg-black p-6">
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-2">Revenu additionnel annuel</p>
                    <p className="text-3xl font-black">€{roi.annualAdditionalRevenue.toLocaleString()}</p>
                  </div>

                  <div className="border-4 border-[#CCFF00] bg-[#CCFF00] text-black p-6">
                    <p className="font-mono text-sm font-bold mb-2">ROI SUR 1 AN</p>
                    <p className="text-4xl font-black">{roi.roi}%</p>
                    <p className="font-mono text-sm mt-2">Retour sur investissement en {roi.paybackMonths} mois</p>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* FAQ */}
          <Reveal width="100%" delay={0.8}>
            <section className="mb-12">
              <h2 className="text-3xl font-black uppercase mb-8">Questions Fréquentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    q: "Quels sont les délais de livraison ?",
                    a: "Starter : 4-6 semaines | Growth : 8-12 semaines | Enterprise : 12-16 semaines"
                  },
                  {
                    q: "Proposez-vous de la maintenance ?",
                    a: "Oui, la maintenance est incluse pendant 3-6 mois selon le plan. Nous proposons également des contrats de maintenance à long terme."
                  },
                  {
                    q: "Puis-je changer de plan après ?",
                    a: "Absolument. Vous pouvez upgrader votre plan à tout moment. Le coût supplémentaire sera calculé au prorata."
                  },
                  {
                    q: "Offrez-vous des services de formation ?",
                    a: "Oui, pour les plans Growth et Enterprise. Nous formons votre équipe à la gestion du site et des contenus."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-4 border-black dark:border-[#CCFF00] p-6 bg-white dark:bg-gray-900">
                    <h3 className="font-bold uppercase mb-3">{item.q}</h3>
                    <p className="font-mono text-gray-700 dark:text-gray-300">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* CTA */}
          <Reveal width="100%" delay={1}>
            <section className="border-4 border-black dark:border-[#CCFF00] bg-black text-white p-12 text-center">
              <h2 className="text-3xl font-black uppercase mb-6">Prêt à transformer votre présence digitale ?</h2>
              <p className="font-mono text-gray-300 mb-8 max-w-2xl mx-auto">
                Parlons de votre projet. Nous analyserons vos besoins et vous proposerons la solution idéale.
              </p>
              <Link href="/contact">
                <button className="bg-[#CCFF00] text-black px-12 py-4 font-bold uppercase text-lg border-4 border-[#CCFF00] hover:bg-white transition-all shadow-[8px_8px_0px_0px_rgba(204,255,0,0.5)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(204,255,0,0.3)]">
                  Demander un devis
                </button>
              </Link>
            </section>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
