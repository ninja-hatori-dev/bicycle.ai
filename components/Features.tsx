import React, { useState } from 'react';
import { Section } from './ui/Layout';
import { 
  AlertOctagon, 
  TrendingDown, 
  PackageX, 
  Layers, 
  Brain, 
  CheckSquare, 
  Database,
  Calendar,
  Zap
} from 'lucide-react';

// --- Problem Section ---
export const Problem: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">You're Flying Blind (And Bleeding Money)</h2>
        <p className="text-lg text-navy/70">Most brands discover problems 2-3 weeks too late. By then, the profit is already gone.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-canvas p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <TrendingDown className="w-7 h-7 text-coral" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Wasted Ad Spend</h3>
          <p className="text-navy/70">Average $22K/month going to the wrong channels or fatigued creatives while you wait for monthly reports.</p>
        </div>
        
        <div className="bg-canvas p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <AlertOctagon className="w-7 h-7 text-coral" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Hidden Product Losses</h3>
          <p className="text-navy/70">"Bestsellers" that actually lose money once returns, shipping, and true CAC are factored in.</p>
        </div>
        
        <div className="bg-canvas p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <PackageX className="w-7 h-7 text-coral" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Preventable Stockouts</h3>
          <p className="text-navy/70">$50K+ monthly revenue lost because inventory velocity changes weren't caught in time.</p>
        </div>
      </div>
      
      <div className="mt-12 text-center bg-navy/5 rounded-full inline-block px-6 py-2 mx-auto w-full md:w-auto">
        <span className="text-navy font-semibold">⚠️ Typical Result:</span> <span className="text-coral font-bold">$63,000 lost</span> while you wait for data.
      </div>
    </Section>
  );
};

// --- Solution Flow ---
export const Solution: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-canvas">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-orange font-bold tracking-wider uppercase text-sm mb-2 block">The Decision Advantage</span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">We Tell You Why & What To Do Next to Increase Revenue</h2>
        <p className="text-lg text-navy/70">Traditional analytics look backward. Bicycle looks forward with revenue-driving insights.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-navy/10 z-0 transform translate-y-1/2"></div>

        {[
          { icon: Layers, title: "1. We Unify Your Data", desc: "40+ sources (Shopify, Meta, Klaviyo) cleaned and connected into one truth." },
          { icon: Brain, title: "2. AI Analyzes Everything", desc: "Our ML finds profit leaks, stockout risks, and hidden opportunities instantly." },
          { icon: CheckSquare, title: "3. You Get Clear Actions", desc: "No dashboards to decipher. Just a daily checklist of high-impact moves." }
        ].map((item, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-canvas">
              <item.icon className="w-10 h-10 text-navy" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
            <p className="text-sm text-navy/60 max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Tabbed Features ---
export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Data Unification", icon: Database },
    { name: "Daily Intelligence", icon: Zap },
    { name: "Weekly Strategy", icon: Calendar }
  ];

  return (
    <Section className="bg-white">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">Your Complete Growth Engine</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-canvas p-1.5 rounded-xl">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all ${
                activeTab === idx 
                  ? 'bg-white text-navy shadow-md' 
                  : 'text-navy/60 hover:text-navy hover:bg-navy/5'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-canvas border border-gray-100 rounded-2xl p-6 md:p-12 min-h-[500px] flex flex-col md:flex-row gap-12 items-center">
        {activeTab === 0 && (
          <>
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-navy">40+ Platforms. One Source of Truth.</h3>
              <p className="text-navy/70 leading-relaxed">
                We break down data silos. By connecting Shopify, ad platforms, email tools, and operations data, 
                we create a unified customer view that platform-native reporting can't match.
              </p>
              <ul className="space-y-3">
                {[
                  "True multi-touch attribution (no more 'last-click' lies)",
                  "Product profitability after ALL costs (returns, shipping, CAC)",
                  "Customer LTV prediction by acquisition channel",
                  "Predictive inventory forecasting by SKU"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckSquare className="w-3 h-3 text-green-600" /></div>
                    <span className="text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
               <div className="text-center text-sm font-semibold text-navy/40 mb-4 uppercase tracking-wider">Integration Diagram</div>
               <div className="flex justify-center items-center gap-4 flex-wrap opacity-80">
                  {/* Visual representation of logos */}
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-800">Meta</div>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center font-bold text-green-800">Shopify</div>
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center font-bold text-red-800">Ads</div>
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-800">Klaviyo</div>
               </div>
               <div className="flex justify-center my-4">
                 <div className="w-1 h-12 bg-navy/10"></div>
               </div>
               <div className="bg-navy text-white rounded-lg p-4 text-center mx-auto w-3/4">
                 <div className="font-bold text-lg">Bicycle Data Layer</div>
                 <div className="text-xs text-white/60">Unified Identity • Cleaned Data</div>
               </div>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-navy">Daily Decision Digest</h3>
              <p className="text-navy/70 leading-relaxed">
                Delivered every morning at 8 AM. We don't overwhelm you with charts. 
                We give you the top 3 critical actions to take to save money or make money today.
              </p>
              <div className="bg-blue-50 border-l-4 border-navy p-4 rounded-r-lg">
                <p className="italic text-navy/80">"It's like having a McKinsey consultant review your business every night while you sleep."</p>
              </div>
            </div>
            <div className="md:w-1/2">
               <div className="space-y-4">
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-coral">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-bold text-coral">URGENT</span>
                      <span className="text-gray-400">8:01 AM</span>
                    </div>
                    <div className="font-bold text-navy">Pause Meta Campaign "Q4-Holiday"</div>
                    <div className="text-sm text-gray-600 mt-1">CAC is $89 (vs target $45). Waste today: $1,800.</div>
                    <div className="mt-2 text-xs font-semibold bg-gray-100 inline-block px-2 py-1 rounded text-navy">Action: Shift budget to Retargeting</div>
                 </div>
                 
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-orange">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-bold text-orange">OPPORTUNITY</span>
                      <span className="text-gray-400">8:01 AM</span>
                    </div>
                    <div className="font-bold text-navy">Flash Sale: Winter Scarves</div>
                    <div className="text-sm text-gray-600 mt-1">Holding cost $312/day. Velocity slowed 40%.</div>
                    <div className="mt-2 text-xs font-semibold bg-gray-100 inline-block px-2 py-1 rounded text-navy">Action: Email 30% off to VIP segment</div>
                 </div>
               </div>
            </div>
          </>
        )}

        {activeTab === 2 && (
          <>
             <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-navy">Expert Strategy, Not Just Software</h3>
              <p className="text-navy/70 leading-relaxed">
                You get a dedicated analyst who knows your business. Every week, we meet for 30-60 minutes to review strategic deep dives, profitability reality checks, and predictive intelligence.
              </p>
              <ul className="space-y-3">
                {[
                  "Profitability Reality Check (True margins per SKU)",
                  "Customer Health & Cohort LTV",
                  "Channel Performance Truth",
                  "Black Friday & Peak Season Forecasting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckSquare className="w-3 h-3 text-green-600" /></div>
                    <span className="text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full max-w-sm text-center">
                 <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                   <img src="https://picsum.photos/200/200" alt="Analyst" className="w-full h-full object-cover" />
                 </div>
                 <div className="font-bold text-navy text-lg">Alex</div>
                 <div className="text-sm text-gray-500 mb-4">Your Dedicated Analyst</div>
                 <div className="bg-navy/5 p-3 rounded-lg text-left text-sm">
                   <div className="font-semibold text-navy mb-1">Next Session: Thursday, 2pm</div>
                   <div className="text-gray-600">Agenda: Q4 Contribution Margin Analysis & Inventory Prep</div>
                 </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};