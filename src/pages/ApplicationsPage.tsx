import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Droplets, Cpu, Waves, FlaskConical, Pickaxe, Fish, Heart, Beaker, UtensilsCrossed, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function ApplicationsPage() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const applications = [
    {
      icon: FlaskConical,
      title: 'Chemical Industry',
      description: 'Used for transporting corrosive, acidic, and alkaline chemicals with high durability and chemical-resistant materials.',
      gradient: 'from-purple-500 to-indigo-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FChemical%20industry.png?alt=media&token=bfd6c4d6-14a4-47b0-9fe1-244e30347ed4',
    },
    {
      icon: Cpu,
      title: 'Electronic Industry',
      description: 'Suitable for semiconductor and electronics manufacturing environments requiring clean, non-contaminating fluid handling systems.',
      gradient: 'from-blue-500 to-cyan-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FElectronic.png?alt=media&token=653421ce-c6d7-4669-b93f-070cf5acf359',
    },
    {
      icon: Waves,
      title: 'Sewage Treatment',
      description: 'Ideal for wastewater and sewage transfer systems due to strong corrosion resistance and long-term reliability.',
      gradient: 'from-teal-500 to-emerald-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FSewage%20treatment.png?alt=media&token=4c6e2318-6f68-4595-aaa4-ca3daa6a6dab',
    },
    {
      icon: Droplets,
      title: 'Water Treatment',
      description: 'Applicable in filtration, desalination, purification, and industrial water processing lines.',
      gradient: 'from-cyan-500 to-blue-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FWater%20treatment.png?alt=media&token=48bbc2ae-4729-4395-acd2-fcf0ee72571b',
    },
    {
      icon: Pickaxe,
      title: 'Mining Industry',
      description: 'Utilized in processes like mineral extraction, slurry handling, and chemical leaching—especially environments with harsh media.',
      gradient: 'from-amber-500 to-orange-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FMining.png?alt=media&token=5186a95f-a120-4cad-8c20-f09eec2a47f7',
    },
    {
      icon: Fish,
      title: 'Aquaculture',
      description: 'Used for water circulation, aeration, and waste management in fish farms and aquatic production facilities.',
      gradient: 'from-blue-400 to-teal-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FAquaculture.png?alt=media&token=7dd9595b-7702-40d4-a9aa-bb7bd630ccd4',
    },
    {
      icon: Heart,
      title: 'Healthcare Industry',
      description: 'Suitable for pharmaceutical manufacturing, medical fluid transfer, and clean-system applications requiring high purity.',
      gradient: 'from-pink-500 to-rose-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FHealthcare.png?alt=media&token=963e0098-02bb-4c0a-abdf-93315018b48c',
    },
    {
      icon: Beaker,
      title: 'Chemical Processing',
      description: 'Designed for pipelines that handle aggressive process chemicals, high temperatures, and demanding industrial workflows.',
      gradient: 'from-violet-500 to-purple-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FChemical%20industry.png?alt=media&token=bfd6c4d6-14a4-47b0-9fe1-244e30347ed4',
    },
    {
      icon: UtensilsCrossed,
      title: 'Food & Beverage',
      description: 'Applicable in non-toxic, hygienic fluid transport systems where cleanliness and material safety are required.',
      gradient: 'from-green-500 to-lime-600',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FFood%20processing.png?alt=media&token=240a514e-8c1a-4838-b86a-f88d62a9e6cf',
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setRotation(prev => prev + diff * 0.2);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setRotation(prev => prev + e.deltaY * 0.1);
  };

  const rotateCarousel = (direction: 'left' | 'right') => {
    const angle = 360 / applications.length;
    setRotation(prev => prev + (direction === 'left' ? -angle : angle));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#29ABE2] via-[#1e88c7] to-[#1565a0]"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXN8ZW58MXx8fHwxNzYyNjY2Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industrial Applications"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        {/* Animated Circles */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
                <span className="text-white/90">Industry Solutions</span>
              </div>
            </motion.div>

            <h1 className="text-white mb-6">
              Industrial Piping Applications
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Delivering reliable, high-performance piping systems across critical industries. 
              From chemical processing to water treatment, our solutions meet the most demanding operational requirements.
            </p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto"
            >
              {[
                { number: '9+', label: 'Industries Served' },
                { number: '100%', label: 'Quality Assured' },
                { number: '24/7', label: 'Technical Support' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-24"
          >
            <path
              d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Applications Grid Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#29ABE2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-5 py-2 bg-linear-to-r from-[#29ABE2]/10 to-cyan-400/10 border border-[#29ABE2]/20 rounded-full">
                <span className="text-[#29ABE2]">Industry Solutions</span>
              </div>
            </div>
            <h2 className="text-[#1e3a5f] mb-4">
              Applications Across Industries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our piping systems are engineered to excel in diverse industrial environments, 
              providing unmatched performance and reliability.
            </p>
          </motion.div>

          {/* 3D Carousel */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* 3D Perspective Container */}
            <div 
              className="relative w-full h-full"
              style={{ perspective: '2000px' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              {/* Carousel Stage */}
              <div
                className="absolute top-1/2 left-1/2 w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translate(-50%, -50%) rotateY(${rotation}deg)`,
                  transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {applications.map((app, index) => {
                  const angle = (360 / applications.length) * index;
                  const radius = 800; // Distance from center

                  return (
                    <div
                      key={app.title}
                      className="absolute top-1/2 left-1/2 w-[380px] group"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: `
                          translate(-50%, -50%)
                          rotateY(${angle}deg)
                          translateZ(${radius}px)
                        `,
                      }}
                    >
                      {/* Card Glow Effect */}
                      <div className={`absolute -inset-0.5 bg-linear-to-r ${app.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                      
                      {/* Card */}
                      <div className="relative h-full bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                        {/* Water Splash Effect */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {/* Droplets */}
                          {[...Array(12)].map((_, i) => {
                            return (
                              <div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 opacity-70"
                                style={{
                                  animation: `splash-${i} 0.8s ease-out forwards`,
                                  animationDelay: `${i * 0.05}s`,
                                }}
                              />
                            );
                          })}
                          {/* Water ripple circles */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-cyan-400/40 rounded-full animate-[ripple1_0.8s_ease-out_forwards]"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-blue-400/30 rounded-full animate-[ripple2_0.8s_ease-out_0.1s_forwards]"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-cyan-300/20 rounded-full animate-[ripple3_0.8s_ease-out_0.2s_forwards]"></div>
                        </div>

                    {/* Water Splash Effect */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {/* Droplets */}
                          {[...Array(12)].map((_, i) => {
                            return (
                              <div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 opacity-70"
                                style={{
                                  animation: `splash-${i} 0.8s ease-out forwards`,
                                  animationDelay: `${i * 0.05}s`,
                                }}
                              />
                            );
                          })}
                          {/* Water ripple circles */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-cyan-400/40 rounded-full animate-[ripple1_0.8s_ease-out_forwards]"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-blue-400/30 rounded-full animate-[ripple2_0.8s_ease-out_0.1s_forwards]"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-cyan-300/20 rounded-full animate-[ripple3_0.8s_ease-out_0.2s_forwards]"></div>
                        </div>

                        {/* Image Section with Gradient Overlay */}
                        <div className="relative h-56 overflow-hidden">
                          <ImageWithFallback
                            src={app.image}
                            alt={`${app.title} application`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-linear-to-t ${app.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-500`}></div>
                          
                          {/* Floating Icon Badge */}
                          <div className="absolute top-4 right-4">
                            <div className={`p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                              <app.icon className={`w-6 h-6 bg-linear-to-br ${app.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6">
                          <h3 className="text-[#1e3a5f] mb-3 group-hover:text-[#29ABE2] transition-colors duration-300">
                            {app.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {app.description}
                          </p>

                          {/* Bottom Gradient Line */}
                          <div className={`mt-4 h-1 bg-linear-to-r ${app.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group"
              onClick={() => rotateCarousel('left')}
            >
              <ChevronLeft className="w-6 h-6 text-[#29ABE2] group-hover:text-[#1e88c7]" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group"
              onClick={() => rotateCarousel('right')}
            >
              <ChevronRight className="w-6 h-6 text-[#29ABE2] group-hover:text-[#1e88c7]" />
            </button>
          </div>

          {/* Interaction Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <p className="text-gray-500 text-sm">Drag to rotate • Scroll to spin • Click arrows to navigate</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-linear-to-br from-slate-100 to-blue-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Glassmorphic Background */}
              <div className="absolute -inset-2 bg-linear-to-r from-[#29ABE2]/20 to-cyan-400/20 rounded-3xl blur-2xl"></div>
              
              <div className="relative bg-linear-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl overflow-hidden">
                {/* Ambient Glow Effects */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-linear-to-br from-[#29ABE2]/20 to-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-linear-to-br from-blue-400/20 to-[#29ABE2]/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex justify-center mb-12">
                  <div className="relative inline-block max-w-3xl">
                    {/* Elegant Container */}
                    <div className="relative bg-linear-to-br from-white/60 via-blue-50/40 to-cyan-50/60 backdrop-blur-2xl rounded-3xl p-12 border border-white/40 shadow-[0_8px_32px_rgba(41,171,226,0.12)]">
                      
                      {/* Flowing Top Accent */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-[#29ABE2] to-transparent rounded-full"></div>
                      
                      {/* Floating Orbs - Subtle Elegance */}
                      <div className="absolute -top-8 left-12 w-16 h-16 bg-linear-to-br from-[#29ABE2]/20 to-cyan-400/20 rounded-full blur-xl animate-pulse-slow"></div>
                      <div className="absolute -top-6 right-16 w-12 h-12 bg-linear-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                      
                      {/* Elegant Corner Flourishes */}
                      <div className="absolute top-0 left-0 w-24 h-24 opacity-30">
                        <div className="absolute top-4 left-4 w-12 h-0.5 bg-linear-to-r from-[#29ABE2]/60 to-transparent rounded-full"></div>
                        <div className="absolute top-4 left-4 w-0.5 h-12 bg-linear-to-b from-[#29ABE2]/60 to-transparent rounded-full"></div>
                        <div className="absolute top-5 left-5 w-2 h-2 bg-[#29ABE2]/40 rounded-full"></div>
                      </div>
                      
                      <div className="absolute top-0 right-0 w-24 h-24 opacity-30">
                        <div className="absolute top-4 right-4 w-12 h-0.5 bg-linear-to-l from-[#29ABE2]/60 to-transparent rounded-full"></div>
                        <div className="absolute top-4 right-4 w-0.5 h-12 bg-linear-to-b from-[#29ABE2]/60 to-transparent rounded-full"></div>
                        <div className="absolute top-5 right-5 w-2 h-2 bg-[#29ABE2]/40 rounded-full"></div>
                      </div>
                      
                      {/* Decorative Side Elements */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className="w-20 h-20 bg-linear-to-br from-[#29ABE2]/10 to-cyan-400/10 rounded-full backdrop-blur-sm border border-white/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-linear-to-br from-[#29ABE2]/20 to-cyan-400/20 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                        <div className="w-20 h-20 bg-linear-to-br from-cyan-400/10 to-[#29ABE2]/10 rounded-full backdrop-blur-sm border border-white/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-linear-to-br from-cyan-400/20 to-[#29ABE2]/20 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Subtle Ambient Glow */}
                      <div className="absolute inset-0 bg-linear-to-r from-[#29ABE2]/5 via-transparent to-cyan-400/5 rounded-3xl"></div>
                      
                      {/* Elegant Heading with Subtle Accent */}
                      <div className="relative">
                        {/* Top Decorative Line */}
                        <div className="flex items-center justify-center mb-6">
                          <div className="h-px w-12 bg-linear-to-r from-transparent to-[#29ABE2]/40"></div>
                          <div className="mx-4 flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]/60"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]/40"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]/60"></div>
                          </div>
                          <div className="h-px w-12 bg-linear-to-l from-transparent to-[#29ABE2]/40"></div>
                        </div>
                        
                        <h2 className="text-[#1e3a5f] text-center relative px-4">
                          Why Choose WSISCo for Your Industry
                        </h2>
                        
                        {/* Bottom Decorative Element */}
                        <div className="flex items-center justify-center mt-6">
                          <div className="h-1 w-24 bg-linear-to-r from-transparent via-[#29ABE2] to-transparent rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Flowing Bottom Accent */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-40 h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                      
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  {[
                    {
                      title: 'Superior Materials',
                      description: 'Chemical-resistant, durable materials engineered for harsh industrial environments',
                      icon: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FSuperior.png?alt=media&token=3cf28812-60a1-4a13-9e13-ee6995b5f100',
                      gradient: 'from-purple-500 to-indigo-600'
                    },
                    {
                      title: 'Global Standards',
                      description: 'Compliant with international standards including ASTM, DIN, JIS, and ISO certifications',
                      icon: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FGlobal%20Standard.png?alt=media&token=9a4d67f6-4d2e-4845-b017-97ab84bfbd4b',
                      gradient: 'from-blue-500 to-cyan-600'
                    },
                    {
                      title: 'Expert Support',
                      description: 'Technical consultation and engineering support for optimal system design',
                      icon: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Applications%2FExpert%20support.png?alt=media&token=ce7ef763-59d0-4b02-9241-bc4bcf0d8b8e',
                      gradient: 'from-teal-500 to-emerald-600'
                    },
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative"
                      style={{ perspective: '1000px' }}
                    >
                      {/* 3D Card with Glow */}
                      <div className={`absolute -inset-0.5 bg-linear-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-60 transition-all duration-500`}></div>
                      
                      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:-translate-y-2" style={{ transformStyle: 'preserve-3d' }}>
                        {/* Icon Container with 3D Effect */}
                        <div className="relative mb-6 mx-auto w-24 h-24 group-hover:transform-[rotateY(360deg)] transition-transform duration-700" style={{ transformStyle: 'preserve-3d' }}>
                          {/* Icon Glow Background */}
                          <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                          
                          {/* Icon Image */}
                          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl">
                            <ImageWithFallback
                              src={feature.icon}
                              alt={feature.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          </div>
                          
                          {/* Floating Shimmer Effect */}
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out] transition-opacity duration-300" style={{ transform: 'translateX(-100%)' }}></div>
                        </div>
                        
                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-[#1e3a5f] mb-3 group-hover:text-[#29ABE2] transition-colors duration-300">{feature.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                          
                          {/* Bottom Accent Line */}
                          <div className={`mt-6 h-1 bg-linear-to-r ${feature.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#29ABE2] via-[#1e88c7] to-[#2c5282]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-white mb-6">
              Need a Customized Solution?
            </h2>
            <p className="text-white/90 text-xl mb-10 leading-relaxed">
              Our engineering team specializes in designing piping systems tailored to your specific 
              industrial requirements. Let us help you optimize your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#29ABE2] rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 shadow-xl">
                Request Technical Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:border-white/50">
                Download Industry Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}