import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useState } from "react";
import { useLocation } from "wouter";
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, isEmailConfigured } from "@/config/email.config";
import { ShieldCheck, Clock, Lock, Mail, Building2, Globe, MapPin, Twitter, Instagram, Music } from "lucide-react";
import CalendlyWidget from "@/components/CalendlyWidget";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Prénom requis." }),
  lastName: z.string().min(2, { message: "Nom requis." }),
  email: z.string().email({ message: "Email invalide." }),
  phone: z.string().min(10, { message: "Numéro de téléphone valide requis." }),
  projectType: z.string().min(1, { message: "Veuillez sélectionner un type de projet." }),
  budget: z.string().min(1, { message: "Veuillez indiquer une fourchette de budget." }),
  timeline: z.string().min(1, { message: "Veuillez sélectionner un délai." }),
  message: z.string().min(10, { message: "Décrivez brièvement votre projet (min 10 caractères)." }),
});

const HONEYPOT_FIELD = 'website';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [, setLocation] = useLocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (honeypot !== '') return; // Anti-spam silencieux

    setIsSubmitting(true);

    try {
      const promises = [];

      // 1. Envoi EmailJS
      if (isEmailConfigured()) {
        promises.push(
          emailjs.init(EMAIL_CONFIG.publicKey),
          emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateId,
            {
              from_name: `${values.firstName} ${values.lastName}`,
              from_email: values.email,
              phone: values.phone,
              project_type: values.projectType,
              budget: values.budget,
              timeline: values.timeline,
              message: values.message,
              to_email: EMAIL_CONFIG.recipientEmail,
            }
          )
        );
      } else {
        console.log("EmailJS non configuré (simulation)");
      }

      // 2. Envoi Webhook Google Sheets (Mode Scale)
      const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      if (googleSheetUrl) {
        promises.push(
          fetch(googleSheetUrl, {
            method: 'POST',
            mode: 'no-cors', // Important pour Google Apps Script
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          })
        );
      }

      // Attendre que tout soit envoyé (ou simuler un délai si rien n'est configuré)
      if (promises.length > 0) {
        await Promise.all(promises);
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Redirection vers la page de confirmation
      setLocation("/confirmation");
      
    } catch (error) {
      console.error(error);
      toast.error("Erreur", { description: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Colonne Gauche : Intro & Bureaux */}
          <div className="flex flex-col gap-12 order-2 lg:order-1">
            <div>
              <Reveal>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase mb-6 md:mb-8">Contactez notre équipe</h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-mono text-base md:text-lg mb-6 md:mb-8 border-l-4 border-[#CCFF00] pl-4">
                  Une question ? Un projet ? Notre équipe de coordination centrale est à votre écoute et orientera votre demande vers les experts les plus pertinents dans notre réseau.
                </p>
              </Reveal>
            </div>

            {/* Section Nos Bureaux */}
            <Reveal delay={0.3}>
              <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-[#CCFF00] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                <h3 className="font-black uppercase text-xl mb-6 flex items-center gap-2">
                  <Globe className="text-[#CCFF00]" /> Nos Bureaux
                </h3>
                
                <div className="space-y-6 font-mono">
                  <div className="flex items-start gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
                    <Building2 size={20} className="mt-1 flex-shrink-0 text-gray-500" />
                    <div>
                      <strong className="block uppercase text-sm mb-1">Paris</strong>
                      <span className="text-gray-600 dark:text-gray-300">TechFlow - La Défense | Courbevoie, France</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
                    <Building2 size={20} className="mt-1 flex-shrink-0 text-gray-500" />
                    <div>
                      <strong className="block uppercase text-sm mb-1">Londres</strong>
                      <span className="text-gray-600 dark:text-gray-300">TechFlow - City of London | London, United Kingdom</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 size={20} className="mt-1 flex-shrink-0 text-gray-500" />
                    <div>
                      <strong className="block uppercase text-sm mb-1">New York</strong>
                      <span className="text-gray-600 dark:text-gray-300">TechFlow - Manhattan | New York, United States</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-300 dark:border-gray-700">
                  <p className="text-xs text-gray-500 italic flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                    Ces adresses correspondent à nos bureaux de représentation. Nos équipes interviennent globalement pour accompagner vos projets.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Témoignage de confiance */}
            <Reveal delay={0.6}>
              <div className="bg-[#F0F0F0] dark:bg-gray-800 border-l-8 border-[#CCFF00] p-6 relative">
                <div className="absolute -top-4 -left-2 bg-[#CCFF00] text-black font-black text-4xl px-2 border-2 border-black">"</div>
                <p className="font-mono italic text-lg mb-4 pt-2">
                  Ils ont livré la v1 de notre app en 3 semaines. La pression est retombée instantanément. Une équipe d'élite.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-black"></div>
                  <div>
                    <p className="font-bold uppercase text-sm">Alexandre M.</p>
                    <p className="text-xs text-gray-500 font-mono">Fondateur SaaS B2B</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Colonne Droite : Formulaire */}
          <Reveal delay={0.4} width="100%">
            <div className="bg-[#F0F0F0] dark:bg-gray-900 p-4 md:p-8 border-4 border-black dark:border-[#CCFF00] shadow-[8px_8px_0px_0px_#CCFF00] md:shadow-[16px_16px_0px_0px_#CCFF00] order-1 lg:order-2">
              <h2 className="font-black uppercase text-2xl mb-6 flex items-center gap-2">
                <Mail className="text-[#CCFF00]" /> Pour nous écrire
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot */}
                  <input type="text" name={HONEYPOT_FIELD} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ display: 'none' }} />

                  {/* 1. Identité */}
                  <div className="space-y-4">
                    <h3 className="font-black uppercase text-xl border-b-2 border-black pb-2">1. Identité</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField control={form.control} name="firstName" render={({ field }: any) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase">Prénom *</FormLabel>
                          <FormControl><Input placeholder="Votre prénom" {...field} className="bg-white border-2 border-black rounded-none p-4" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="lastName" render={({ field }: any) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase">Nom *</FormLabel>
                          <FormControl><Input placeholder="Votre nom" {...field} className="bg-white border-2 border-black rounded-none p-4" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField control={form.control} name="email" render={({ field }: any) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase">Email *</FormLabel>
                          <FormControl><Input placeholder="email@pro.com" {...field} className="bg-white border-2 border-black rounded-none p-4" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }: any) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase">Téléphone *</FormLabel>
                          <FormControl><Input placeholder="06 12 34 56 78" {...field} className="bg-white border-2 border-black rounded-none p-4" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  {/* 2. Projet */}
                  <div className="space-y-4">
                    <h3 className="font-black uppercase text-xl border-b-2 border-black pb-2">2. Projet</h3>
                    <FormField control={form.control} name="projectType" render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-bold uppercase">Type de projet *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-2 border-black rounded-none h-12">
                              <SelectValue placeholder="Sélectionner..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="web-app">Site Web / Application</SelectItem>
                            <SelectItem value="design">Design & UX</SelectItem>
                            <SelectItem value="marketing">Stratégie Marketing & Automatisation</SelectItem>
                            <SelectItem value="custom-ia">Projet Sur-Mesure</SelectItem>
                            <SelectItem value="unknown">Je ne sais pas encore</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="message" render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-bold uppercase">Description & Objectifs *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Ex : Je veux automatiser la génération de leads pour mon cabinet..." {...field} className="bg-white border-2 border-black rounded-none p-4 min-h-[100px]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* 3. Qualification */}
                  <div className="space-y-4">
                    <h3 className="font-black uppercase text-xl border-b-2 border-black pb-2">3. Qualification</h3>
                    
                    <FormField control={form.control} name="budget" render={({ field }: any) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="font-bold uppercase">Budget envisagé *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-3 space-y-0">
                              <RadioGroupItem value="<3k" id="r1" />
                              <FormLabel htmlFor="r1" className="font-mono cursor-pointer">&lt; 3k €</FormLabel>
                            </div>
                            <div className="flex items-center space-x-3 space-y-0">
                              <RadioGroupItem value="3k-7k" id="r2" />
                              <FormLabel htmlFor="r2" className="font-mono cursor-pointer">3k - 7k €</FormLabel>
                            </div>
                            <div className="flex items-center space-x-3 space-y-0">
                              <RadioGroupItem value="7k-15k" id="r3" />
                              <FormLabel htmlFor="r3" className="font-mono cursor-pointer">7k - 15k €</FormLabel>
                            </div>
                            <div className="flex items-center space-x-3 space-y-0">
                              <RadioGroupItem value=">15k" id="r4" />
                              <FormLabel htmlFor="r4" className="font-mono cursor-pointer">&gt; 15k €</FormLabel>
                            </div>
                            <div className="flex items-center space-x-3 space-y-0">
                              <RadioGroupItem value="discuss" id="r5" />
                              <FormLabel htmlFor="r5" className="font-mono cursor-pointer">À discuter</FormLabel>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="timeline" render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-bold uppercase">Délai idéal de lancement *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-2 border-black rounded-none h-12">
                              <SelectValue placeholder="Sélectionner..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="<2weeks">&lt; 2 semaines</SelectItem>
                            <SelectItem value="1month">1 mois</SelectItem>
                            <SelectItem value="1-3months">1-3 mois</SelectItem>
                            <SelectItem value=">3months">&gt; 3 mois / Idée en maturation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="pt-4">
                    {/* Badges de confiance */}
                    <div className="flex items-center justify-center gap-4 mb-4 text-xs font-mono text-gray-500">
                      <div className="flex items-center gap-1"><Lock size={14} /> Données sécurisées</div>
                      <div className="flex items-center gap-1"><ShieldCheck size={14} /> Pas de spam</div>
                      <div className="flex items-center gap-1"><Clock size={14} /> Réponse 24h</div>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#CCFF00] text-black font-bold uppercase py-4 border-4 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed text-xl">
                      {isSubmitting ? "Envoi en cours..." : "Obtenir mon audit gratuit →"}
                    </button>
                    <p className="text-center text-xs font-mono mt-2 text-gray-500">
                      Vous recevrez une proposition préliminaire sous 24h.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </Reveal>
        </div>
        {/* Alternative Contact Methods */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 border-t-4 border-black dark:border-gray-700">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black uppercase mb-3">Ou contactez-nous directement</h2>
                <p className="font-mono text-gray-600 dark:text-gray-400">Plusieurs façons de nous rejoindre</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {/* Email */}
              <Reveal>
                <a href="mailto:Techflow@outlook.fr" className="group block">
                  <div className="border-4 border-black dark:border-gray-700 p-6 bg-white dark:bg-gray-800 text-center hover:shadow-[8px_8px_0px_0px_#CCFF00] transition-all hover:border-[#CCFF00]">
                    <Mail className="mx-auto mb-4 group-hover:text-[#CCFF00] transition-colors" size={32} />
                    <h3 className="font-bold uppercase mb-2">Email</h3>
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Techflow@outlook.fr</p>
                  </div>
                </a>
              </Reveal>

              {/* X / Twitter */}
              <Reveal delay={0.1}>
                <a href="https://x.com/techflow201?s=21" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="border-4 border-black dark:border-gray-700 p-6 bg-white dark:bg-gray-800 text-center hover:shadow-[8px_8px_0px_0px_#CCFF00] transition-all hover:border-[#CCFF00]">
                    <Twitter className="mx-auto mb-4 group-hover:text-[#CCFF00] transition-colors" size={32} />
                    <h3 className="font-bold uppercase mb-2">X</h3>
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400">@techflow201</p>
                  </div>
                </a>
              </Reveal>

              {/* Instagram & TikTok */}
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <a href="https://www.instagram.com/tech.flowsolutions?igsh=MWRhMHZ0Y2g5NTZ5ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="border-4 border-black dark:border-gray-700 p-3 bg-white dark:bg-gray-800 text-center hover:shadow-[6px_6px_0px_0px_#CCFF00] transition-all hover:border-[#CCFF00]">
                      <Instagram className="mx-auto mb-2 group-hover:text-[#CCFF00] transition-colors" size={24} />
                      <p className="font-mono text-xs text-gray-600 dark:text-gray-400">Instagram</p>
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/@tech.flowsolutions?_r=1&_t=ZN-92hH9VBHEO6" target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="border-4 border-black dark:border-gray-700 p-3 bg-white dark:bg-gray-800 text-center hover:shadow-[6px_6px_0px_0px_#CCFF00] transition-all hover:border-[#CCFF00]">
                      <Music className="mx-auto mb-2 group-hover:text-[#CCFF00] transition-colors" size={24} />
                      <p className="font-mono text-xs text-gray-600 dark:text-gray-400">TikTok</p>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Calendly Widget */}
        <CalendlyWidget
          url="https://calendly.com/techflow"
          title="Réservez votre consultation gratuite"
          description="Choisissez un créneau qui vous convient pour discuter de votre projet avec nos experts. Consultation sans engagement de 30 minutes."
        />
      </main>
      <Footer />
    </div>
  );
}
