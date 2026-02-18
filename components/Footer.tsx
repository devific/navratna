import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, UtensilsCrossed } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-maroon text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <UtensilsCrossed className="w-6 h-6 text-gold" />
               <span className="text-2xl font-serif font-bold tracking-wider">NAVRATNA</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Authentic Indian Vegetarian Cuisine. Serving smiles and piping hot tiffins since 1980.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-maroon transition-all"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-maroon transition-all"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-maroon transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Locations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Head Office</h4>
            <ul className="space-y-4 text-white/70">
              <li>12th Main, Indiranagar<br />Bangalore, KA 560038</li>
              <li>+91 80 1234 5678</li>
              <li>hello@navratna.in</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex justify-between"><span>Mon - Sun</span> <span>7:00 AM - 10:30 PM</span></li>
              <li className="mt-2 text-xs text-white/40">Open for Breakfast, Lunch & Dinner</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 gap-4">
          <p>&copy; 2026 Navratna Restaurants Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};