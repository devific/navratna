import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-white hover:text-gold hover:shadow-lg border border-transparent",
    outline: "border border-gold text-gold hover:bg-gold hover:text-white",
    ghost: "bg-transparent text-white border border-white/30 hover:bg-white hover:text-charcoal backdrop-blur-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};