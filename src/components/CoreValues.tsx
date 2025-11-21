import { motion } from 'motion/react';
import { Heart, Zap, Shield, Lock, Users, Award } from 'lucide-react';

export function CoreValues() {
  const values = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Fostering a healthy environment where our team thrives.',
    },
    {
      icon: Zap,
      title: 'Streamlined Supply Chain',
      description: 'Efficient logistics ensuring timely delivery.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Conducting business with honesty and transparency.',
    },
    {
      icon: Lock,
      title: 'Supply Chain Security',
      description: 'Ensuring reliable sourcing and secure distribution.',
    },
    {
      icon: Users,
      title: 'Client-Centered Service',
      description: 'Putting customer needs first with personalized solutions.',
    },
    {
      icon: Award,
      title: 'Operational Excellence',
      description: 'Continuous improvement in quality standards.',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-linear-to-br from-blue-50/50 via-slate-50 to-cyan-50/30">
      {/* Curved Wave Bottom - smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <defs>
            <linearGradient id="coreValuesWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f1f5f9', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#e0f2fe', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#f8fafc', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#coreValuesWave)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built on principles that guide our operations and relationships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-linear-to-br from-[#29ABE2]/40 via-cyan-400/30 to-blue-500/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-xl shadow-blue-500/5 group-hover:border-white/80 transition-all duration-300">
                <div className="w-16 h-16 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/30">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl text-slate-800 mb-3">
                  {value.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative glassmorphic gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-[#29ABE2]/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-linear-to-tl from-blue-500/10 to-cyan-300/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-cyan-300/5 to-blue-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}
