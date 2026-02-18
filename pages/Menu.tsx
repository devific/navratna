import React from 'react';
import { motion } from 'framer-motion';
import { MenuSection } from '../components/MenuSection';
import { MENU_DATA } from '../constants';

export const Menu: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-semibold">Tiffins, Chaats & Meals</span>
          <h1 className="text-5xl md:text-6xl font-serif text-maroon mt-4 mb-6">Our Menu</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Fresh, hot, and delicious. Discover our wide range of South Indian specialties and North Indian snacks.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-maroon/5">
          {MENU_DATA.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              <MenuSection category={category} defaultOpen={index === 0} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 text-muted text-sm">
          <p>All items are prepared in 100% vegetarian kitchens.</p>
          <p className="mt-2">Prices are inclusive of taxes.</p>
        </div>

      </div>
    </div>
  );
};