import React from 'react';
import { Section, Button, Badge } from './ui/Layout';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

export const Pricing: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Profit Clarity",
      price: 799,
      description: "Core analytics infrastructure & daily intelligence.",
      fit: "$5-10M ARR brands",
      cta: "Start Free Audit",
      features: [
        "Daily Decision Digest (5 days/week)",
        "Weekly Strategy Session (30 min)",
        "Core Analytics Infrastructure",
        "Product-level P&L Tracking",
        "Inventory Forecasting",
        "Monthly Executive Dashboard"
      ]
    },
    {
      name: "Growth Engine",
      price: 2499,
      description: "Predictive intelligence & testing for scaling brands.",
      fit: "$10-50M ARR brands",
      highlight: true,
      cta: "Start Free Audit",
      features: [
        "Everything in Profit Clarity",
        "Predictive Intelligence (Churn/LTV)",
        "Attribution & Incrementality",
        "Financial Modeling & Cash Flow",
        "Dedicated Senior Analyst",
        "Bi-weekly Strategy (60 min)"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Enterprise solutions with unlimited potential.",
      fit: "$50M+ ARR brands",
      cta: "Contact Sales",
      features: [
        "Unlimited Data Sources",
        "Custom Supply Chain Integration",
        "Board-Ready Reporting",
        "Weekly Executive Strategy",
        "Custom SLA & Support",
        "Multi-Brand Rollups"
      ]
    }
  ];

  return (
    <Section id="pricing" className="bg-canvas">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Choose Your Growth Path</h2>
        <p className="text-navy/70">All plans include our 30-Day 5x ROI Guarantee.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
              tier.highlight 
                ? 'bg-white border-coral shadow-2xl shadow-coral/10 scale-105 z-10' 
                : 'bg-white border-gray-100 shadow-lg'
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-coral text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
              <p className="text-sm text-navy/50 mt-1">{tier.fit}</p>
            </div>

            <div className="mb-6">
              {typeof tier.price === 'number' ? (
                <>
                  <span className="text-4xl font-bold text-navy">${tier.price}</span>
                  <span className="text-navy/60">/month</span>
                </>
              ) : (
                <span className="text-4xl font-bold text-navy">{tier.price}</span>
              )}
              <p className="text-sm text-navy/60 mt-2 min-h-[40px]">{tier.description}</p>
            </div>

            <Button 
              fullWidth 
              primary={tier.highlight} 
              className="mb-8"
              onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {tier.cta}
            </Button>

            <ul className="space-y-4">
              {tier.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm">
                  <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-coral' : 'text-green-500'}`} />
                  <span className="text-navy/80">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
           <Check className="w-4 h-4 text-green-600" />
           <span className="text-sm font-semibold text-green-800">We find 5x your monthly fee in opportunities or you don't pay.</span>
         </div>
      </div>
    </Section>
  );
};