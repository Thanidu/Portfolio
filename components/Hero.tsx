
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-700 uppercase bg-emerald-50 rounded-full">
            Engineering Portfolo
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name.split(' ')[0]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-10">
            {PERSONAL_INFO.objective}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl border-2 border-emerald-100 hover:border-emerald-600 transition-all"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl rotate-6 blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src="/images/profile.jpg" 
              alt={PERSONAL_INFO.name} 
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
