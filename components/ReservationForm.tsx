import React from 'react';
import { Button } from './Button';

export const ReservationForm: React.FC = () => {
  return (
    <form className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-serif text-maroon">Catering & Enquiries</h3>
        <p className="text-muted text-sm">Planning an event or have a query? Send us a message.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-muted font-medium">Name</label>
          <input 
            type="text" 
            placeholder="Your Name"
            className="w-full border-b border-gray-200 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-muted font-medium">Email</label>
          <input 
            type="email" 
            placeholder="yourname@example.com"
            className="w-full border-b border-gray-200 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-muted font-medium">Phone Number</label>
          <input 
            type="tel" 
            placeholder="+91 99999 99999"
            className="w-full border-b border-gray-200 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-muted font-medium">Enquiry Type</label>
          <select className="w-full border-b border-gray-200 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent">
            <option>General Feedback</option>
            <option>Outdoor Catering</option>
            <option>Bulk Order</option>
            <option>Franchise Enquiry</option>
          </select>
        </div>
        <div className="space-y-1">
           <label className="text-xs uppercase tracking-wider text-muted font-medium">Message</label>
           <textarea 
             rows={4}
             placeholder="How can we help you?"
             className="w-full border-b border-gray-200 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent resize-none"
           ></textarea>
        </div>
      </div>

      <div className="pt-4">
        <Button className="w-full">Send Message</Button>
      </div>
    </form>
  );
};