import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface AdvancedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export function AdvancedButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: AdvancedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = 'font-bold uppercase border-2 transition-all duration-300 relative overflow-hidden';

  const variantStyles = {
    primary:
      'bg-black dark:bg-[#CCFF00] text-white dark:text-black border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black dark:hover:bg-black dark:hover:text-[#CCFF00]',
    secondary:
      'bg-[#CCFF00] text-black border-[#CCFF00] hover:bg-black hover:text-[#CCFF00]',
    outline:
      'bg-transparent text-black dark:text-[#CCFF00] border-black dark:border-[#CCFF00] hover:bg-black hover:text-[#CCFF00]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const buttonContent = (
    <motion.button
      className={buttonClasses}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {/* Shimmer effect au survol */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
