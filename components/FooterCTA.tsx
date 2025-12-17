import React from 'react';
import { Section, Button } from './ui/Layout';
import { BarChart2, Mail, Phone, Calendar } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <div id="audit" className="bg-navy py-24 px-4 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Stop Guessing?</h2>
        <p className="text-xl text-white/70 mb-12">
          Join 127 brands using Bicycle to turn data into profit. Get your free audit today.
        </p>

        <form className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
             <div>
               <label className="block text-sm font-semibold text-navy mb-2">Work Email</label>
               <input type="email" placeholder="you@brand.com" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:outline-none" />
             </div>
             <div>
               <label className="block text-sm font-semibold text-navy mb-2">Company Name</label>
               <input type="text" placeholder="Brand Inc." className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:outline-none" />
             </div>
             <div>
               <label className="block text-sm font-semibold text-navy mb-2">Monthly Revenue</label>
               <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:outline-none bg-white">
                 <option>$5M - $10M ARR</option>
                 <option>$10M - $20M ARR</option>
                 <option>$20M+ ARR</option>
                 <option>&lt; $5M ARR (Waitlist)</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-semibold text-navy mb-2">Biggest Challenge</label>
               <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:outline-none bg-white">
                 <option>Wasted Ad Spend</option>
                 <option>Inventory/Stockouts</option>
                 <option>Profitability/Margins</option>
                 <option>Attribution</option>
               </select>
             </div>
          </div>
          <Button fullWidth primary>Get Your Free Data Audit</Button>
          <div className="text-center mt-4 text-xs text-gray-400">
            No credit card required. Free 30-minute discovery call included.
          </div>
        </form>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white/60 py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <BarChart2 className="w-6 h-6" />
            <span className="text-xl font-bold">Bicycle</span>
          </div>
          <p className="text-sm">Know why it happened. Know what to do next.</p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#how-it-works" className="hover:text-white transition">How it Works</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#results" className="hover:text-white transition">Case Studies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@bicycle.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Book a Demo</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs">
        © 2025 Bicycle Analytics. All rights reserved.
      </div>
    </footer>
  );
};