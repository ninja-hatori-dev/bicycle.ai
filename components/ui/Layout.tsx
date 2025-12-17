import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 md:px-8 relative overflow-hidden scroll-mt-24 ${
        dark ? 'bg-navy text-white' : ''
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </section>
  );
};

export const Badge: React.FC<{ children: ReactNode; type?: 'default' | 'urgent' | 'success' }> = ({ children, type = 'default' }) => {
  const styles = {
    default: 'bg-navy/5 text-navy border-navy/10',
    urgent: 'bg-red-50 text-coral border-coral/20',
    success: 'bg-green-50 text-green-700 border-green-200'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${styles[type]}`}>
      {children}
    </span>
  );
};

export const Button: React.FC<{ 
  children: ReactNode; 
  primary?: boolean; 
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}> = ({ children, primary = true, onClick, className = '', fullWidth = false }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryStyle = "bg-coral text-white hover:bg-coral-hover shadow-lg hover:shadow-coral/30 focus:ring-coral";
  const secondaryStyle = "bg-white text-navy border border-navy/10 hover:border-navy/30 hover:bg-gray-50 focus:ring-navy";
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};