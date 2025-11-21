import { motion } from 'motion/react';

export function MissionVision() {
  return (
    <section className="relative bg-linear-to-br from-white via-slate-50 to-blue-50/40 py-32 overflow-hidden">
      {/* Curved Wave Bottom - smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <path
            d="M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="#f8fafc"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-6">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-linear-to-br from-[#29ABE2]/30 to-cyan-400/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-10 border border-white/60 shadow-2xl shadow-blue-500/10">
                <div className="w-16 h-1.5 bg-linear-to-r from-[#29ABE2] to-cyan-500 rounded-full mb-6 shadow-lg shadow-blue-500/50"></div>
                <h3 className="text-3xl text-slate-800 mb-6">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  At World Star Industrial Supply Co. (WSISCo.) our mission is to be the premier distributor of thermoplastic piping materials, providing innovative and reliable solutions to industries nationwide. We are dedicated to delivering top-quality products sourced from global leaders, ensuring the success of our client projects while upholding the highest standard of integrity, sustainability and customer satisfaction.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-10 border border-white/60 shadow-2xl shadow-cyan-500/10">
                <div className="w-16 h-1.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full mb-6 shadow-lg shadow-cyan-500/50"></div>
                <h3 className="text-3xl text-slate-800 mb-6">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  WSISCo aspires to be the industry's go-to and sourcing partner for cutting-edge thermoplastic piping solutions, and other technology products, recognized for our commitment to excellence, innovation, and sustainable practices. We envision a future where our products contribute to the growth and success of diverse industries, making a positive impact on communities and the environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-[#29ABE2]/10 to-cyan-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-linear-to-tl from-blue-400/10 to-cyan-300/10 rounded-full blur-3xl"></div>
    </section>
  );
}
