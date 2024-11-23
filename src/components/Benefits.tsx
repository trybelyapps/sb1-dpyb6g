import React from 'react';
import { Target, Shield, TrendingUp, Users, BookOpen, Award } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Industry Recognition",
    description: "Join a field with high demand and excellent job security"
  },
  {
    icon: TrendingUp,
    title: "High Earning Potential",
    description: "Access roles with competitive salaries and growth opportunities"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from professionals with 20+ years of experience"
  },
  {
    icon: Target,
    title: "Practical Training",
    description: "Get hands-on experience with real-world scenarios"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Resources",
    description: "Receive detailed workbooks and ongoing support"
  },
  {
    icon: Award,
    title: "Career Advancement",
    description: "Position yourself for senior compliance roles"
  }
];

export function Benefits() {
  return (
    <div className="py-24 bg-neutral-900" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose AML Expert Training?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-neutral-800/50 rounded-lg border border-neutral-700">
              <benefit.icon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-neutral-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}