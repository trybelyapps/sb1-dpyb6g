import React from 'react';
import { BookOpen } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold">Become AML Expert</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#benefits" className="text-neutral-300 hover:text-white">Benefits</a>
              <a href="#modules" className="text-neutral-300 hover:text-white">Modules</a>
              <a href="#testimonials" className="text-neutral-300 hover:text-white">Success Stories</a>
              <button
                onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 px-4 py-2 rounded-md text-white font-medium hover:bg-red-700"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}