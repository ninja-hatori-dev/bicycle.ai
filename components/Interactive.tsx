import React, { useState, useEffect } from 'react';
import { Section, Button, Badge } from './ui/Layout';
import { Bell, ArrowRight, DollarSign } from 'lucide-react';

// --- Alert Simulation ---
export const AlertDemo: React.FC = () => {
  const [activeAlert, setActiveAlert] = useState(0);
  
  const alerts = [
    {
      type: 'URGENT',
      title: 'CAC Spike Detection',
      desc: 'Meta CPA jumped to $89',
      save: 'Save $18K this week',
      color: 'border-coral text-coral bg-red-50'
    },
    {
      type: 'URGENT',
      title: 'Stockout Prevention',
      desc: 'Bestseller stockout in 6 days',
      save: 'Prevent $43K loss',
      color: 'border-coral text-coral bg-red-50'
    },
    {
      type: 'OPPORTUNITY',
      title: 'Demand Surge',
      desc: 'Influencer mention driven spike',
      save: 'Capture $28K revenue',
      color: 'border-orange text-orange bg-orange/10'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlert((prev) => (prev + 1) % alerts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section dark className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Losing Money to Problems You See Too Late</h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-12">Average client: 24 alerts/month, $288K annual savings.</p>

      <div className="max-w-xl mx-auto relative h-48">
        {alerts.map((alert, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full bg-white rounded-lg p-6 shadow-xl text-left border-l-4 transition-all duration-700 transform ${
              index === activeAlert 
                ? 'opacity-100 translate-y-0 scale-100 z-10' 
                : 'opacity-0 translate-y-4 scale-95 z-0'
            } ${alert.color.split(' ')[0]}`}
          >
             <div className="flex justify-between items-start mb-2">
                <div className={`flex items-center gap-2 font-bold text-sm ${alert.color.split(' ')[1]}`}>
                  <Bell className="w-4 h-4" /> {alert.type}
                </div>
                <span className="text-gray-400 text-xs">Just now</span>
              </div>
              <h3 className="text-navy text-lg font-bold">{alert.title}</h3>
              <p className="text-gray-600 mb-4">{alert.desc}</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-semibold text-navy flex items-center gap-1">
                  <DollarSign className="w-4 h-4" /> {alert.save}
                </span>
                <span className="text-sm text-gray-400">Review Action &rarr;</span>
              </div>
          </div>
        ))}
      </div>
    </Section>
  );
};