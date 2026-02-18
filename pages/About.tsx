import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center"
         >
           <h1 className="text-5xl md:text-6xl font-serif text-maroon mb-6">Our Tradition</h1>
           <p className="text-muted text-lg max-w-3xl mx-auto">
             For over four decades, Navratna has been the preferred destination for authentic South Indian vegetarian cuisine.
           </p>
         </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
         initial={{ scale: 0.95, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.8 }}
         className="max-w-7xl mx-auto px-6 mb-24"
      >
        <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
           <img src={IMAGES.aboutHero} alt="Spices and Ingredients" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
         <div className="space-y-8">
            <h3 className="text-3xl font-serif text-maroon">From Udupi to the World</h3>
            <p className="text-muted leading-relaxed">
              Founded in 1980 by Sri Krishna Bhat, Navratna started as a small darshini in the heart of Bangalore. Our vision was simple: serve wholesome, hygienic, and delicious food at affordable prices.
            </p>
            <p className="text-muted leading-relaxed">
              Today, with over 15 outlets across the city, we stay true to our roots. Our chutneys are ground fresh every hour, our sambar masala is a guarded family secret, and our coffee beans are sourced directly from Chikmagalur. We believe in the philosophy of "Atithi Devo Bhava" - The Guest is God.
            </p>
         </div>
         
         <div className="bg-white p-10 rounded-2xl shadow-lg border border-maroon/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -mr-10 -mt-10"></div>
            <h3 className="text-3xl font-serif text-maroon mb-6">Our Promise</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                <span className="text-charcoal font-medium">No Artificial Colors or Preservatives</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                <span className="text-charcoal font-medium">Pure Ghee & Cold Pressed Oils</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                <span className="text-charcoal font-medium">Farm Fresh Vegetables</span>
              </li>
               <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                <span className="text-charcoal font-medium">Sustainable & Eco-friendly Packaging</span>
              </li>
            </ul>
         </div>
      </div>
    </div>
  );
};