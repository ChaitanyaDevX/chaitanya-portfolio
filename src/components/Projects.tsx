import { motion } from 'motion/react';
import { ExternalLink, Globe, Calendar, Clock } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Map mock illustrations by image key to match Chaitanya's projects
function ProjectIllustration({ image }: { image: string }) {
  switch (image) {
    case 'student_system': // Used for AgriMart - Smart Farming App
      return (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-950/80 to-blue-900/60 flex flex-col justify-between p-4 relative overflow-hidden border-b border-white/5">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />
          {/* Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-1.5 bg-slate-900/60 px-3 py-1 rounded-lg border border-white/5">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] text-gray-300 font-mono">agrimart_backend.java</span>
            </div>
            <div className="flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
          </div>
          {/* Schematic Content */}
          <div className="space-y-2.5 z-10 pt-4">
            <div className="h-6 w-3/4 bg-slate-900/50 rounded border border-white/5 flex items-center px-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              <span className="text-[10px] text-gray-400 font-mono">Market Feed: Connected</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-14 bg-slate-900/40 rounded border border-white/5 flex flex-col justify-around p-2">
                <span className="text-[9px] text-gray-500 font-bold uppercase">Products</span>
                <span className="text-sm font-extrabold text-white">450+</span>
              </div>
              <div className="h-14 bg-slate-900/40 rounded border border-white/5 flex flex-col justify-around p-2">
                <span className="text-[9px] text-gray-500 font-bold uppercase">Farmers</span>
                <span className="text-sm font-extrabold text-white">1,200</span>
              </div>
              <div className="h-14 bg-slate-900/40 rounded border border-white/5 flex flex-col justify-around p-2">
                <span className="text-[9px] text-gray-500 font-bold uppercase">API Status</span>
                <span className="text-sm font-extrabold text-blue-400">Online</span>
              </div>
            </div>
          </div>
        </div>
      );
    case 'ecommerce': // Used for BookMyTrain - Ticket Booking System
      return (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-950/80 to-purple-900/60 flex flex-col justify-between p-4 relative overflow-hidden border-b border-white/5">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/10 blur-xl pointer-events-none" />
          {/* Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-1.5 bg-slate-900/60 px-3 py-1 rounded-lg border border-white/5">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] text-gray-300 font-mono">BookingService.java</span>
            </div>
            <div className="flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
          </div>
          {/* Schematic Content */}
          <div className="space-y-2 z-10 pt-4">
            <div className="flex items-center justify-between bg-slate-900/40 p-2 rounded border border-white/5">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-xs">🎫</div>
                <div>
                  <div className="h-2 w-16 bg-gray-400 rounded" />
                  <div className="h-1.5 w-10 bg-gray-600 rounded mt-1.5" />
                </div>
              </div>
              <div className="h-4 w-12 bg-purple-500/20 rounded border border-purple-500/30 flex items-center justify-center text-[10px] text-purple-300 font-bold">Confirmed</div>
            </div>
            <div className="h-7 bg-slate-900/70 rounded border border-white/5 flex items-center justify-center text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
              Logical Validation: Verified
            </div>
          </div>
        </div>
      );
    case 'task_manager': // Used for Smart Task Scheduler
      return (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-950/80 to-emerald-950/60 flex flex-col justify-between p-4 relative overflow-hidden border-b border-white/5">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
          {/* Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-1.5 bg-slate-900/60 px-3 py-1 rounded-lg border border-white/5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] text-gray-300 font-mono">PriorityQueue.java</span>
            </div>
            <div className="flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
          </div>
          {/* Schematic Content */}
          <div className="grid grid-cols-2 gap-3 z-10 pt-4">
            <div className="bg-slate-900/50 p-2 rounded border border-white/5 space-y-1.5">
              <span className="text-[9px] text-yellow-400 font-bold uppercase">High Priority</span>
              <div className="h-1.5 w-12 bg-gray-400 rounded" />
              <div className="h-1 w-8 bg-gray-600 rounded" />
            </div>
            <div className="bg-slate-900/50 p-2 rounded border border-white/5 space-y-1.5">
              <span className="text-[9px] text-emerald-400 font-bold uppercase">Low Priority</span>
              <div className="h-1.5 w-12 bg-gray-400 rounded" />
              <div className="h-1 w-8 bg-gray-600 rounded" />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-blue opacity-[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
          >
            My Projects
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
            A curated list of web and backend software systems I have designed and engineered.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-blue-500/20 hover:shadow-2xl hover:shadow-indigo-950/20 transition-all duration-300 group"
            >
              {/* Illustration Header */}
              <ProjectIllustration image={project.image} />

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {project.longDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900 text-blue-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-gray-300 hover:text-white transition-colors group/btn"
                  >
                    <GithubIcon className="w-4.5 h-4.5 mr-1.5 text-gray-400 group-hover/btn:text-white transition-colors" />
                    GitHub
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group/btn2"
                    >
                      <ExternalLink className="w-4.5 h-4.5 mr-1.5 text-blue-400 group-hover/btn2:text-blue-300 transition-colors" />
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
