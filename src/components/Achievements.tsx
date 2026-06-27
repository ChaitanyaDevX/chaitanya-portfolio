import { motion } from 'motion/react';

import { Award, Flame, Calendar, Trophy, GitCommit, ArrowUpRight } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

// Map icon based on category type
const getIcon = (category: string) => {
  switch (category) {
    case 'problem-solving':
      return <Flame className="w-5 h-5 text-orange-400" />;
    case 'certification':
      return <Award className="w-5 h-5 text-blue-400" />;
    case 'events':
      return <Trophy className="w-5 h-5 text-yellow-400" />;
    case 'open-source':
      return <GitCommit className="w-5 h-5 text-purple-400" />;
    default:
      return <Award className="w-5 h-5 text-gray-400" />;
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'problem-solving': return 'DSA & Problem Solving';
    case 'certification': return 'Certifications';
    case 'events': return 'Hackathons & Events';
    case 'open-source': return 'Open Source';
    default: return 'Achievement';
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-purple opacity-[0.05] blur-[150px] pointer-events-none" />

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
            Achievements & Certifications
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
            Highlights of my technical certificates, problem-solving, and events.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/25 shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header Category and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center">
                      {getIcon(item.category)}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-xs text-gray-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Optional Link Footer */}
              {item.link && (
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-end">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
