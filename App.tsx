
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectCard from './components/ProjectCard';
import { 
  PROJECTS, 
  PUBLICATIONS, 
  EDUCATIONS, 
  PERSONAL_INFO, 
  MEMBERSHIPS, 
  POSITIONS, 
  REFEREES 
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Navbar />
      
      <main>
        <Hero />

        {/* Education Section */}
        <section id="education" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
              <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all flex flex-col h-full">
                  <span className="text-emerald-600 font-bold text-xs block mb-2 uppercase tracking-wide">{edu.period}</span>
                  <h3 className="text-lg font-bold mb-3 flex-grow">{edu.institution}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExperienceSection />

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
              <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        <SkillsSection />

        {/* Leadership & Memberships */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Positions */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Leadership
                </h2>
                <div className="space-y-4">
                  {POSITIONS.map((pos, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-emerald-700 mb-1">{pos.role}</h4>
                      <p className="text-slate-600 text-sm">{pos.organization}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Memberships */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Professional Memberships
                </h2>
                <div className="space-y-4">
                  {MEMBERSHIPS.map((mem, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-800 mb-1">{mem.organization}</h4>
                      <p className="text-emerald-600 text-sm font-medium">{mem.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Research & Publications</h2>
              <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 group hover:bg-emerald-50 transition-all">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-900 mb-1">{pub.title}</h3>
                    <p className="text-sm text-slate-500 mb-2">{pub.authors} — {pub.year}</p>
                    <p className="text-sm italic text-emerald-700">{pub.journal}</p>
                  </div>
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-lg bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-all self-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Referees */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Referees</h2>
              <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {REFEREES.map((ref, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-6">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{ref.name}</h3>
                    <p className="text-emerald-700 font-semibold mb-1 text-sm">{ref.title}</p>
                    <p className="text-slate-500 text-sm mb-4">{ref.institution}</p>
                    <div className="space-y-1">
                      <p className="text-slate-600 text-xs flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        {ref.phone}
                      </p>
                      <p className="text-slate-600 text-xs flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        {ref.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-800 -skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                <p className="text-emerald-100 text-lg mb-10 leading-relaxed">
                  I'm always open to discussing sustainable energy solutions, engineering projects, or research opportunities. Feel free to reach out through any of the following channels.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center border border-emerald-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300 uppercase tracking-widest font-bold">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg hover:text-emerald-300 transition-colors">{PERSONAL_INFO.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center border border-emerald-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300 uppercase tracking-widest font-bold">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/thanidu-thennakoon/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-lg hover:text-emerald-300 transition-colors"
                      >
                        {PERSONAL_INFO.linkedin}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center border border-emerald-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300 uppercase tracking-widest font-bold">GitHub</p>
                      <a 
                        href={`https://github.com/${PERSONAL_INFO.github}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-lg hover:text-emerald-300 transition-colors"
                      >
                        {PERSONAL_INFO.github}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input type="text" className="w-full bg-emerald-800/50 border border-emerald-700 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input type="email" className="w-full bg-emerald-800/50 border border-emerald-700 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-emerald-800/50 border border-emerald-700 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-emerald-900 font-bold py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-xl">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-emerald-950 text-emerald-400 border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
