import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { ProgramModules } from './components/ProgramModules';
import { CountdownTimer } from './components/CountdownTimer';
import { EnrollmentForm } from './components/EnrollmentForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=2850&q=80" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Break Into <span className="text-red-600">AML/KYC</span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Transform your financial services expertise into a lucrative career. Join thousands of professionals making the leap into AML and compliance.
            </p>
            <button
              onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center bg-red-600 px-8 py-3 rounded-md text-white font-medium hover:bg-red-700 transition"
            >
              Start Your Journey Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <Benefits />
      <ProgramModules />
      <Testimonials />

      {/* CTA Section with Form */}
      <div className="relative py-24" id="enrollment-form">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2850&q=80" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-black/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Limited Time Offer</h2>
          <CountdownTimer />
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join our comprehensive AML/KYC training program and take the first step towards a rewarding career in financial compliance.
          </p>
          <EnrollmentForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <span className="text-xl font-bold">Become AML Expert</span>
              </div>
              <p className="mt-4 text-neutral-400">Transform your career with expert-led AML/KYC training and certification.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
                <li><a href="#modules" className="hover:text-white">Program Modules</a></li>
                <li><a href="#testimonials" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-center">
                  Email: finserviceexpert@gmail.com
                </li>
                <li className="flex items-center">
                  <button
                    onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white"
                  >
                    Book a Discovery Call
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400">
            <p>© 2024 AML Expert Training. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;