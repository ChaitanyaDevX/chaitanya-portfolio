import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen, Briefcase } from 'lucide-react';
import { educationData, experienceData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/20">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 rounded-full glow-purple opacity-5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full glow-blue opacity-5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
          >
            Education & Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-400 mt-4 text-base sm:text-lg font-medium"
          >
            A timeline of my academic background and professional developer internships.
          </motion.p>
        </div>

        {/* Dual Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* EDUCATION COLUMN */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </span>
              Academic Journey
            </h3>
            
            {/* Timeline Line */}
            <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-slate-800" />
            
            <div className="space-y-10 relative">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-[11px] top-6 w-4 h-4 rounded-full bg-slate-950 border-4 border-blue-500 -translate-x-[2px] z-10" />
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/25 transition-all duration-300 shadow-xl"
                  >
                    {/* Header Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                      <h4 className="text-lg font-bold text-white tracking-wide">
                        {item.degree}
                      </h4>
                      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/15 w-max">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {item.period}
                      </span>
                    </div>

                    {/* Score / Institute */}
                    <div className="mt-3 space-y-1">
                      <p className="text-sm font-bold text-gray-200">{item.institution}</p>
                      <p className="text-xs font-bold text-purple-400">{item.score}</p>
                    </div>

                    {/* Key details list */}
                    <ul className="mt-4 space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-xs sm:text-sm text-gray-400 leading-relaxed">
                          <BookOpen className="w-4 h-4 mr-2 text-blue-400/70 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE COLUMN */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Briefcase className="w-5 h-5" />
              </span>
              Developer Internships
            </h3>
            
            {/* Timeline Line */}
            <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-slate-800" />
            
            <div className="space-y-10 relative">
              {experienceData.map((item, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-[11px] top-6 w-4 h-4 rounded-full bg-slate-950 border-4 border-purple-500 -translate-x-[2px] z-10" />
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/25 transition-all duration-300 shadow-xl"
                  >
                    {/* Header Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                      <h4 className="text-lg font-bold text-white tracking-wide">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/15 w-max">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {item.period}
                      </span>
                    </div>

                    {/* Company */}
                    <div className="mt-3">
                      <p className="text-sm font-bold text-gray-200">{item.company}</p>
                    </div>

                    {/* Key details list */}
                    <ul className="mt-4 space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-xs sm:text-sm text-gray-400 leading-relaxed">
                          <BookOpen className="w-4 h-4 mr-2 text-purple-400/70 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
