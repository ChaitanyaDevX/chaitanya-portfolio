import { motion } from 'motion/react';
import { GraduationCap, Code2, Smartphone, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const highlights = [
  {
    icon: Terminal,
    title: 'Java Backend Systems',
    description: 'Skilled in building solid backend business logic using Core Java, Spring Boot, and REST APIs.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Android Applications',
    description: 'Hands-on experience developing integrated Android apps with local and remote databases.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code2,
    title: 'Testing & Verification',
    description: 'Strong interest in software reliability, systematic debugging, and structured code verification.',
    color: 'from-indigo-500 to-violet-500'
  },
  {
    icon: GraduationCap,
    title: 'Strong Academic Record',
    description: 'Maintained 94% in SSC, 91.54% in Diploma, and an 8.59 CGPA in Information Technology studies.',
    color: 'from-emerald-500 to-teal-500'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Decorative background glows */}
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
            About Me
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
            Get to know my professional background, coursework, and technical drivers.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Who is Chaitanya?
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              {personalInfo.bio}
            </p>
            
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              During my engineering journey, I have focused heavily on practical problem-solving. My internships at Mountreach Solution and Elevate Labs allowed me to work directly on application business logic, REST APIs development, systematic debugging, and database connectivity.
            </p>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I am also deeply intrigued by how modern AI tools can increase code reliability. I actively experiment with LLMs, the Gemini API, and ChatGPT API to investigate AI-assisted code generation and automated testing.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                🚀 Java Developer
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                📱 Android Builder
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                🧪 Software Tester
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                🤖 AI Integrations
              </span>
            </div>
          </motion.div>

          {/* Highlights Grid Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col space-y-4 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${item.color} text-white shadow-md`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
