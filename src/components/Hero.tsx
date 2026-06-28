import { motion } from 'motion/react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/10 w-[40vw] h-[40vw] rounded-full glow-blue blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[45vw] h-[45vw] rounded-full glow-purple blur-[120px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/25"
            >
              <span>Welcome to my portfolio</span>
            </motion.div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400"
              >
                Hi there, I am
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none"
              >
                <span className="block">{personalInfo.name}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-text-gradient bg-[length:200%_auto] mt-2">
                  Java Full Stack Developer
                </span>
              </motion.h1>
            </div>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 max-w-xl font-medium leading-relaxed"
            >
              {personalInfo.introduction}
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-97 transition-all duration-200 group"
              >
                Hire Me
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
               href="/Chaitanya_Bodkhe_Java_FullStack_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-5 pt-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 active:scale-90"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 active:scale-90"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 active:scale-90"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>

          </div>

          {/* Hero Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px]"
            >
              {/* Outer Decorative Ring 1 */}
              <motion.div
                className="absolute inset-0 rounded-full border border-purple-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              {/* Outer Decorative Ring 2 */}
              <motion.div
                className="absolute inset-4 rounded-full border border-dashed border-blue-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Backglow element */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-[30px]" />

              {/* Main Avatar Container */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-white/10 bg-slate-900 shadow-2xl flex items-center justify-center group">
                <img
                  src="/image.png"
                  alt="Chaitanya Bodkhe Avatar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback in case of image load issues
                    e.currentTarget.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop";
                  }}
                />
              </div>

              {/* Animated Floating Badges */}
              <motion.div
                className="absolute -top-2 right-4 glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xs font-semibold text-gray-200">🚀 Java Full Stack</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-4 glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-xs font-semibold text-gray-200">💻 Software Engineer</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
