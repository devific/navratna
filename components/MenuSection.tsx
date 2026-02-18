import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Leaf, Flame } from 'lucide-react';
import { MenuCategory } from '../types';

interface MenuSectionProps {
  category: MenuCategory;
  defaultOpen?: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-maroon/10 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between group text-left"
      >
        <h3 className="text-2xl font-serif text-maroon group-hover:text-gold transition-colors">
          {category.title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-muted group-hover:text-gold transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item) => (
                <div key={item.id} className="flex justify-between gap-4 group cursor-default">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-serif font-medium text-lg text-charcoal group-hover:text-maroon transition-colors">
                        {item.name}
                      </h4>
                      {item.isVegetarian && (
                        <span title="Vegetarian">
                          <Leaf size={14} className="text-green-600" />
                        </span>
                      )}
                      {item.isSpicy && (
                        <span title="Spicy">
                          <Flame size={14} className="text-red-500" />
                        </span>
                      )}
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-serif font-semibold text-gold text-lg">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};