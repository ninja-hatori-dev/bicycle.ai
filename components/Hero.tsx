import React from 'react';
import { ArrowRight, TrendingUp, AlertTriangle, Activity } from 'lucide-react';
import { Section, Badge, Button } from './ui/Layout';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative bg-gradient-to-br from-canvas via-canvas-beige to-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <Badge type="urgent">30-Day 5x ROI Guarantee</Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mt-6 mb-6 leading-[1.1]">
              We Tell You Why & <span className="text-coral">What To Do Next</span> to Increase Revenue
            </h1>
            
            <p className="text-xl md:text-2xl text-navy/70 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Traditional analytics look backward. Bicycle looks forward with revenue-driving insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button onClick={() => scrollTo('audit')}>
                Get Your Free Data Audit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button primary={false} onClick={() => scrollTo('how-it-works')}>
                See How It Works
              </Button>
            </div>
          </div>
            

          {/* Hero Visual */}
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 animate-slide-up z-20">
              {/* Header of Mockup */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-semibold text-navy/40 uppercase tracking-wider">Daily Digest • 8:00 AM</div>
              </div>

              {/* Alert Card 1 */}
              <div className="bg-red-50 border-l-4 border-coral p-4 rounded-r-lg mb-4 transform transition hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 text-coral font-bold text-sm uppercase">
                    <AlertTriangle className="w-4 h-4" /> Urgent
                  </div>
                  <span className="text-xs text-navy/50">Just now</span>
                </div>
                <h3 className="font-semibold text-navy mb-1">CAC Spike Detected: Meta "Holiday-Broad"</h3>
                <p className="text-sm text-navy/70 mb-3">Campaign CPA rose 85% to $89 (Target: $45).</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-navy">Waste today: $892</span>
                  <button className="text-coral font-semibold hover:underline">Pause Campaign &rarr;</button>
                </div>
              </div>

              {/* Alert Card 2 */}
              <div className="bg-orange/10 border-l-4 border-orange p-4 rounded-r-lg mb-4 transform transition hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 text-orange font-bold text-sm uppercase">
                    <TrendingUp className="w-4 h-4" /> Opportunity
                  </div>
                  <span className="text-xs text-navy/50">12 min ago</span>
                </div>
                <h3 className="font-semibold text-navy mb-1">Demand Surge: Holiday Gift Box</h3>
                <p className="text-sm text-navy/70 mb-3">Unexpected 400% spike driven by @sarahstyle.</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-navy">Potential revenue: +$28K</span>
                  <button className="text-orange font-semibold hover:underline">Increase Budget &rarr;</button>
                </div>
              </div>

               {/* Stat Row */}
               <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-navy/50 mb-1">Revenue Forecast</div>
                    <div className="text-xl font-bold text-navy flex items-center gap-2">
                      $127K <Activity className="w-4 h-4 text-green-500" />
                    </div>
                 </div>
                 <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-navy/50 mb-1">Profit Margin</div>
                    <div className="text-xl font-bold text-navy flex items-center gap-2">
                      28.7% <span className="text-xs font-normal text-green-600">↑ 3.2%</span>
                    </div>
                 </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};