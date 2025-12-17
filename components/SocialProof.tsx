import React from 'react';
import { Section, Badge } from './ui/Layout';
import { ArrowUpRight, Check, X, ShieldCheck } from 'lucide-react';
import { CaseStudy } from '../types';

export const SocialProof: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      title: "The Bleeding Brand",
      industry: "Apparel, $8M ARR",
      revenue: "$8M",
      before: [{ label: "Profit", value: "-$12K/mo" }],
      after: [{ label: "Profit", value: "+$31K/mo" }],
      quote: "Bicycle showed us we were scaling the wrong products.",
      metrics: [
        { label: "CAC", value: "-34%", trend: 'down' },
        { label: "LTV", value: "+56%", trend: 'up' }
      ]
    },
    {
      title: "The Attribution Mess",
      industry: "Beauty, $14M ARR",
      revenue: "$14M",
      before: [{ label: "Ad Spend", value: "$80K/mo" }],
      after: [{ label: "Savings", value: "$180K/yr" }],
      quote: "Meta was stealing credit for YouTube sales. We fixed it.",
      metrics: [
        { label: "True CAC", value: "-47%", trend: 'down' },
        { label: "New Cust", value: "+22%", trend: 'up' }
      ]
    },
    {
      title: "Inventory Nightmare",
      industry: "Home Goods, $11M ARR",
      revenue: "$11M",
      before: [{ label: "Stockouts", value: "8-12/mo" }],
      after: [{ label: "Stockouts", value: "1-2/mo" }],
      quote: "Freed $180K in working capital in 4 months.",
      metrics: [
        { label: "Cash Freed", value: "$180K", trend: 'up' },
        { label: "Revenue", value: "+$37K/mo", trend: 'up' }
      ]
    }
  ];

  return (
    <>
      {/* Case Studies */}
      <Section id="results" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">Proven Results from Real Brands</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, idx) => (
            <div key={idx} className="bg-canvas border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
               <div className="text-sm font-bold text-navy/40 uppercase mb-2">{study.industry}</div>
               <h3 className="text-xl font-bold text-navy mb-4">"{study.title}"</h3>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="bg-red-50 p-3 rounded">
                    <div className="text-xs text-red-400">Before</div>
                    <div className="font-bold text-navy">{study.before[0].value}</div>
                 </div>
                 <div className="bg-green-50 p-3 rounded">
                    <div className="text-xs text-green-600">After</div>
                    <div className="font-bold text-navy">{study.after[0].value}</div>
                 </div>
               </div>

               <p className="text-navy/70 italic mb-6">"{study.quote}"</p>
               
               <div className="border-t pt-4 flex justify-between">
                 {study.metrics.map((m, i) => (
                    <div key={i}>
                       <div className="text-xs text-navy/50">{m.label}</div>
                       <div className={`font-bold ${m.trend === 'up' || m.label.includes('CAC') ? 'text-green-600' : 'text-navy'}`}>
                         {m.value}
                       </div>
                    </div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section className="bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Why We're Different</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="p-4 text-left">Comparison</th>
                  <th className="p-4 text-center bg-coral">Bicycle</th>
                  <th className="p-4 text-center">Analytics Tools</th>
                  <th className="p-4 text-center">Consultants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { row: "Output", us: "Action Plans", them1: "Dashboards", them2: "Long Reports" },
                  { row: "Time Required", us: "30 min/week", them1: "10+ hrs/week", them2: "Hours of meetings" },
                  { row: "Predictive?", us: "Yes (AI)", them1: "No (Historical)", them2: "Sometimes" },
                  { row: "Cost", us: "$799-$2,499/mo", them1: "$300-$1K/mo", them2: "$10K+/mo" }
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="p-4 font-semibold text-navy">{r.row}</td>
                    <td className="p-4 text-center font-bold text-navy bg-coral/5 border-x border-coral/10">{r.us}</td>
                    <td className="p-4 text-center text-navy/60">{r.them1}</td>
                    <td className="p-4 text-center text-navy/60">{r.them2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Guarantee */}
      <Section className="bg-white text-center">
        <div className="max-w-3xl mx-auto border-2 border-navy/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-coral to-orange"></div>
          <ShieldCheck className="w-16 h-16 text-coral mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-navy mb-4">30-Day 5x ROI Guarantee</h2>
          <p className="text-lg text-navy/70 mb-8">
            We will identify opportunities worth <span className="font-bold text-navy">5x your investment</span> in the first 30 days. 
            If we don't, you get a full refund. No questions asked.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
             <div className="bg-canvas p-4 rounded">
               <div className="font-bold text-navy">$799 Plan</div>
               <div className="text-coral">We find $47K+</div>
             </div>
             <div className="bg-canvas p-4 rounded">
               <div className="font-bold text-navy">$2,499 Plan</div>
               <div className="text-coral">We find $149K+</div>
             </div>
             <div className="bg-canvas p-4 rounded">
               <div className="font-bold text-navy">Custom Plan</div>
               <div className="text-coral">Contact Team</div>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};