import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData';

// Animation variants for container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animation variants for skill items
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
} as const;


export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/20">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 rounded-full glow-blue opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 rounded-full glow-purple opacity-5 blur-[120px] pointer-events-none" />

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
            My Tech Stack
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
            A breakdown of my technical skills, tools, and languages.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={cardVariants}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/15 shadow-xl transition-all duration-300 flex flex-col space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Category Skills List */}
              <div className="space-y-5 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Track */}
                    <div className="h-2.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      {/* Animated Fill */}
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
