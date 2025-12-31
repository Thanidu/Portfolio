
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
      <div className="h-48 bg-emerald-900 relative overflow-hidden">
        <img 
          src={`https://picsum.photos/seed/${project.title}/600/400`} 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
          alt={project.title}
        />
        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-emerald-900/80 to-transparent">
          <span className="text-white text-xs font-bold uppercase tracking-widest">{project.date}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 font-medium mb-4">{project.subtitle}</p>
        
        <ul className="mb-6 space-y-1.5 flex-1">
          {project.details.map((detail, idx) => (
            <li key={idx} className="text-sm text-slate-600 flex items-start">
              <span className="text-emerald-500 mr-2 text-xs mt-1">▶</span>
              {detail}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
