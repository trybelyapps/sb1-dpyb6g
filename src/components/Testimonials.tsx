import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "James Chen",
    role: "Senior AML Analyst, Singapore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "This program fast-tracked my career transition into AML. The practical scenarios were invaluable.",
    flag: "🇸🇬"
  },
  {
    name: "Sarah Williams",
    role: "Compliance Officer, London",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "The expert mentorship and real-world applications made all the difference in landing my dream role.",
    flag: "🇬🇧"
  },
  {
    name: "Mohammed Al-Rashid",
    role: "KYC Manager, Dubai",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    text: "Comprehensive training that prepared me for the complexities of international compliance.",
    flag: "🇦🇪"
  },
  {
    name: "Maria Garcia",
    role: "AML Specialist, Mexico City",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    text: "The program's focus on practical applications helped me secure a senior position in compliance.",
    flag: "🇲🇽"
  },
  {
    name: "John Okonjo",
    role: "Compliance Manager, Lagos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    text: "Outstanding program that bridges the gap between theory and real-world compliance challenges.",
    flag: "🇳🇬"
  },
  {
    name: "Lisa Zhang",
    role: "KYC Team Lead, Hong Kong",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    text: "The career coaching and interview preparation were instrumental in my promotion.",
    flag: "🇭🇰"
  }
];

export function Testimonial({ name, role, image, text, flag }: { name: string; role: string; image: string; text: string; flag: string }) {
  return (
    <div className="bg-neutral-900/50 p-6 rounded-lg backdrop-blur-sm border border-neutral-800 hover:border-red-600/50 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-white flex items-center gap-2">
            {name} <span className="text-lg">{flag}</span>
          </h4>
          <p className="text-neutral-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-neutral-300">{text}</p>
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="py-24 bg-black" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Global Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}