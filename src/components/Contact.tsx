import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
      
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 rounded-full glow-blue opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 rounded-full glow-purple opacity-5 blur-[120px] pointer-events-none" />

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
            Get In Touch
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
            Feel free to contact me for career opportunities, projects, or just to say hi!
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                Contact Information
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Have an exciting project in mind? Or looking to hire a full-stack engineer for your team? Shoot me a message, and I will get back to you within 24 hours.
              </p>

              <div className="space-y-6 pt-4">
                
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Email Me</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-200 hover:text-blue-400 font-semibold transition-colors break-all">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Call Me</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-gray-200 hover:text-purple-400 font-semibold transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Location</span>
                    <span className="text-gray-200 font-semibold">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-900 border ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                      } px-4 py-3 rounded-xl text-white text-sm focus:outline-none transition-colors`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center mt-1">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-900 border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                      } px-4 py-3 rounded-xl text-white text-sm focus:outline-none transition-colors`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center mt-1">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-900 border ${
                      errors.subject ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                    } px-4 py-3 rounded-xl text-white text-sm focus:outline-none transition-colors`}
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 flex items-center mt-1">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-900 border ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                    } px-4 py-3 rounded-xl text-white text-sm focus:outline-none transition-colors resize-none`}
                    placeholder="Tell me more about your requirements..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 flex items-center mt-1">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button with states */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 active:scale-97 disabled:opacity-50 cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.span
                        key="idle"
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </motion.span>
                    )}
                    {status === 'submitting' && (
                      <motion.span
                        key="submitting"
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Sending...
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2" />
                      </motion.span>
                    )}
                    {status === 'success' && (
                      <motion.span
                        key="success"
                        className="flex items-center text-green-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Message Sent Successfully!
                        <CheckCircle2 className="w-4 h-4 ml-2 text-green-400" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
