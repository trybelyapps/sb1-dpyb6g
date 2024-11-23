import React from 'react';
import { BookOpen, Shield, Users, Target, Award, TrendingUp } from 'lucide-react';

const modules = [
  {
    icon: Shield,
    title: "AML Fundamentals",
    description: "Master the core concepts of Anti-Money Laundering",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    week: "Week 1"
  },
  {
    icon: Users,
    title: "KYC Procedures",
    description: "Learn customer due diligence and risk assessment",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    week: "Week 2"
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Identify and mitigate financial crime risks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    week: "Week 3"
  },
  {
    icon: BookOpen,
    title: "Regulatory Framework",
    description: "Navigate international compliance regulations",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    week: "Week 4"
  },
  {
    icon: TrendingUp,
    title: "Transaction Monitoring",
    description: "Detect suspicious patterns and activities",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    week: "Week 5"
  },
  {
    icon: Award,
    title: "Career Development",
    description: "Prepare for top AML/KYC positions",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80",
    week: "Week 6"
  }
];

export function ProgramModules() {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-neutral-900" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Program Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[320px]">
                <span className="text-red-600 font-semibold mb-2">{module.week}</span>
                <div className="flex items-center gap-2 mb-3">
                  <module.icon className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold">{module.title}</h3>
                </div>
                <p className="text-neutral-300">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}