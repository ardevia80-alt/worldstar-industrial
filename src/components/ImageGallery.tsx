import { motion } from 'motion/react';

export function ImageGallery() {


  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Blue band at top */}
      <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
        {/* Smooth gradient blend */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-50/90 via-[#29ABE2]/60 to-[#29ABE2]"></div>
        
        {/* Wave effect - shipping/water theme */}
        <svg
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-32"
        >
          <defs>
            <linearGradient id="waterWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#29ABE2', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#22d3ee', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#29ABE2', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,80 Q150,60 300,80 T600,80 Q750,60 900,80 T1200,80 L1200,160 L0,160 Z"
            fill="url(#waterWave)"
            opacity="0.4"
          />
          <path
            d="M0,100 Q200,80 400,100 T800,100 Q1000,80 1200,100 L1200,160 L0,160 Z"
            fill="#29ABE2"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Asymmetric Image Layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 relative overflow-hidden rounded-2xl h-64 group"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Our%20World%2FPhilmach%201.jpeg?alt=media&token=beaaae39-65fe-4548-ab20-ffabd1f89173"
              alt="Industrial Piping"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 relative overflow-hidden rounded-2xl h-64 group"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Our%20World%2FUTPC%20at%20Philmach.jpeg?alt=media&token=cd76c7ba-420b-4e25-9beb-adfe34cdadf8"
              alt="Industrial Valves"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 relative overflow-hidden rounded-2xl h-80 group"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Our%20World%2FWF%20Visit%201.jpeg?alt=media&token=fed159ac-45a4-4c8b-8a1c-114a95768510"
              alt="Automation Solutions"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 relative overflow-hidden rounded-2xl h-80 group"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Our%20World%2FWF%20Visit.jpeg?alt=media&token=bc242860-6581-4b22-b06a-d95761f21246"
              alt="Pumping Solutions"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Our World Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl text-[#FF9800] mb-6">
            Our world
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Delivering innovative thermoplastic piping solutions and industrial products 
            that power industries across the Philippines and beyond.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#29ABE2]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
