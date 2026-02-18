import React from 'react';
import { motion } from 'framer-motion';
import { ReservationForm } from '../components/ReservationForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-maroon mb-4">Visit Us</h1>
          <p className="text-muted text-lg">Find a Navratna outlet near you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <div className="bg-maroon text-white p-10 rounded-2xl shadow-xl">
               <h3 className="text-2xl font-serif mb-8 text-gold">Locations</h3>
               
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <MapPin className="text-gold mt-1" />
                    <div>
                      <p className="font-semibold text-lg text-gold">Indiranagar (Flagship)</p>
                      <p className="text-white/70">12th Main Road, Bangalore</p>
                      <p className="text-white/50 text-sm mt-1">+91 80 1234 5678</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                    <MapPin className="text-gold mt-1" />
                    <div>
                      <p className="font-semibold text-lg text-gold">Jayanagar</p>
                      <p className="text-white/70">4th Block, Near Cool Joint, Bangalore</p>
                      <p className="text-white/50 text-sm mt-1">+91 80 8765 4321</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <MapPin className="text-gold mt-1" />
                    <div>
                      <p className="font-semibold text-lg text-gold">Koramangala</p>
                      <p className="text-white/70">80ft Road, 6th Block, Bangalore</p>
                      <p className="text-white/50 text-sm mt-1">+91 80 1122 3344</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-maroon/5">
              <div className="flex items-center gap-3 mb-6">
                 <Clock className="text-gold" />
                 <h3 className="text-2xl font-serif text-maroon">Opening Hours</h3>
              </div>
              <ul className="space-y-3 text-muted">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Breakfast</span> <span>7:00 AM - 11:30 AM</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Lunch</span> <span>12:00 PM - 3:30 PM</span></li>
                <li className="flex justify-between pb-2"><span>Snacks & Dinner</span> <span>4:00 PM - 10:30 PM</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ReservationForm />
          </motion.div>

        </div>
      </div>
    </div>
  );
};