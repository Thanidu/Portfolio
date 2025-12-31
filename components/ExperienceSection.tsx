
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="md:w-1/4">
                <p className="text-emerald-600 font-bold text-lg">{exp.period}</p>
                <p className="text-slate-500 font-medium">{exp.location}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                <h4 className="text-lg text-emerald-700 font-semibold mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start text-slate-600">
                      <span className="text-emerald-500 mr-2">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
