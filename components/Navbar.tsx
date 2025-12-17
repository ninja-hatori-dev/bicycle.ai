import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';
import { Button } from './ui/Layout';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="bg-navy text-white p-1.5 rounded-lg">
            <BarChart2 className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-navy">Bicycle</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('how-it-works')} className="text-navy/70 hover:text-navy font-medium transition-colors">How It Works</button>
          <button onClick={() => scrollTo('pricing')} className="text-navy/70 hover:text-navy font-medium transition-colors">Pricing</button>
          <button onClick={() => scrollTo('results')} className="text-navy/70 hover:text-navy font-medium transition-colors">Results</button>
          <Button onClick={() => scrollTo('audit')} className="!py-2.5 !px-5 text-sm">
            Get Free Audit
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-navy p-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          <button onClick={() => scrollTo('how-it-works')} className="text-left p-2 font-medium text-navy">How It Works</button>
          <button onClick={() => scrollTo('pricing')} className="text-left p-2 font-medium text-navy">Pricing</button>
          <button onClick={() => scrollTo('results')} className="text-left p-2 font-medium text-navy">Results</button>
          <Button onClick={() => scrollTo('audit')} fullWidth>
            Get Free Audit
          </Button>
        </div>
      )}
    </nav>
  );
};