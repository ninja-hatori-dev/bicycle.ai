import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem, Solution, Features } from './components/Features';
import { AlertDemo } from './components/Interactive';
import { Pricing } from './components/Pricing';
import { SocialProof } from './components/SocialProof';
import { FinalCTA, Footer } from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-navy selection:bg-coral/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <AlertDemo />
        <Features />
        <Pricing />
        <SocialProof />
        
        {/* Getting Started Steps - Inline for simplicity in this file structure */}
        <section className="py-20 bg-canvas">
          <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-3xl font-bold text-center mb-12">Getting Started is Simple</h2>
             <div className="grid md:grid-cols-3 gap-8">
               <div className="text-center relative">
                 <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">1</div>
                 <h3 className="font-bold text-lg mb-2">Free Data Audit</h3>
                 <p className="text-sm text-navy/60">30 min call. Read-only access.</p>
               </div>
               <div className="text-center relative">
                 <div className="hidden md:block absolute top-6 right-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                 <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                 <div className="w-12 h-12 bg-coral text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">2</div>
                 <h3 className="font-bold text-lg mb-2">Receive Report</h3>
                 <p className="text-sm text-navy/60">We find 3-5 opportunities worth $50k+.</p>
               </div>
               <div className="text-center relative">
                 <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">3</div>
                 <h3 className="font-bold text-lg mb-2">Launch</h3>
                 <p className="text-sm text-navy/60">First Daily Digest in 2 weeks.</p>
               </div>
             </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;