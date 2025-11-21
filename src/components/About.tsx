import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function About() {
  return (
    <section className="relative py-32 overflow-hidden bg-linear-to-br from-[#29ABE2] via-cyan-500 to-blue-500">
      {/* Curved Wave Top - smooth transition from Hero */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <defs>
            <linearGradient id="aboutWaveTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#81D4FA', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: '#4FC3F7', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#29ABE2', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L0,60 Q300,120 600,60 T1200,60 L1200,0 Z"
            fill="url(#aboutWaveTop)"
          />
        </svg>
      </div>

      {/* Curved Wave Bottom - smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="#ffffff"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-[#29ABE2]/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 border border-white/80 shadow-2xl shadow-black/20">
              <h2 className="text-4xl md:text-5xl mb-6 bg-linear-to-r from-[#29ABE2] to-cyan-600 bg-clip-text text-transparent">
                Leading Industrial Supply Solutions
              </h2>

              <p className="text-xl text-slate-800 mb-6 leading-relaxed">
                Worldstar Industrial Supply Co. (WSISCo) is a trusted importer and supplier of thermoplastic piping systems, fasteners, instrumentation, and automation products. As part of the Diamante Group of Companies, together with Fedmur Global Industrial LLC, the Group’s USA-based purchasing company, we deliver globally sourced, high-quality solutions designed for industrial reliability and performance.
              </p>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Through our partnership with WF Xiamen Keheng Plastic Co. Ltd and strong supply channels across the USA, Japan, Taiwan, China, and more, WSISCo provides dependable products and innovative technologies that keep industries running efficiently.
              </p>

              <Button 
                size="lg" 
                className="bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white hover:from-[#2196D4] hover:to-cyan-600 shadow-lg shadow-blue-500/30 group border-0"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '💎', label: 'Member of Diamante Group' },
              { number: '🇺🇸', label: 'Powered by Fedmur Global USA' },
              { number: '🌏', label: 'Connected with Global Brands' },
              { number: '🇵🇭', label: 'Serving the Philippines Nationwide' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-linear-to-br from-white/40 to-white/30 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/80 shadow-xl shadow-black/10">
                  <div className="text-5xl bg-linear-to-br from-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-3">{stat.number}</div>
                  <div className="text-slate-800">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-linear-to-br from-[#29ABE2]/40 to-cyan-400/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-linear-to-br from-blue-400/35 to-cyan-300/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-linear-to-br from-cyan-300/25 to-blue-300/20 blur-3xl"></div>
    </section>
  );
}
