import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

export function GlassCard({ children, className = '', delay = 0, index = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative overflow-hidden border-2 border-black dark:border-[#CCFF00] bg-white dark:bg-gray-900 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] dark:hover:shadow-[12px_12px_0px_0px_rgba(204,255,0,0.3)] transition-all duration-300 ${className}`}
    >
      {/* Gradient overlay au survol */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/0 to-[#CCFF00]/0 group-hover:from-[#CCFF00]/5 group-hover:to-[#CCFF00]/10 transition-all duration-300 pointer-events-none" />

      {/* Ligne de bordure animée */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Contenu */}
      <div className="relative z-10">{children}</div>

      {/* Effet de lumière au survol */}
      <div className="absolute -inset-full bg-gradient-to-r from-[#CCFF00]/0 via-[#CCFF00]/20 to-[#CCFF00]/0 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
