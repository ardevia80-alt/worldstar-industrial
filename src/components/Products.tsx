import { motion } from 'motion/react';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

// Dragon Pipe HDPE Featured Products
const featuredProducts = [
  {
    name: 'Dragonpipe HDPE PE80',
    image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FHDPE%20Pipe%2012.jpg?alt=media&token=de2ce850-7ab3-45ee-a4bf-384c2cd9e430',
  },
  {
    name: 'Dragonpipe HDPE PE100',
    image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FHDPE%20Pipe%201.png?alt=media&token=a862711b-710b-4f47-8d09-8abd6495bc2c',
  },
  {
    name: 'WF Pipes',
    image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FPipes.jpg?alt=media&token=b285e77f-aad2-42f0-acc4-f0da34a51efc',
  },
];

export function Products() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with center card (index 1)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    
    // Calculate position relative to active card
    if (diff === 0) {
      // Center/Active card
      return { rotateY: 0, z: 0, x: 0, scale: 1, opacity: 1, zIndex: 30 };
    } else if (diff === -1 || (activeIndex === 0 && index === featuredProducts.length - 1)) {
      // Left card
      return { rotateY: -35, z: -150, x: -280, scale: 0.88, opacity: 0.7, zIndex: 20 };
    } else if (diff === 1 || (activeIndex === featuredProducts.length - 1 && index === 0)) {
      // Right card
      return { rotateY: 35, z: -150, x: 280, scale: 0.88, opacity: 0.7, zIndex: 20 };
    } else {
      // Hidden cards
      return { rotateY: diff > 0 ? 60 : -60, z: -300, x: diff > 0 ? 400 : -400, scale: 0.7, opacity: 0, zIndex: 10 };
    }
  };

  return (
    <section id="products" className="py-32 relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/30">
      {/* Curved Wave Top with Gradient */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <defs>
            <linearGradient id="waveTopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#81D4FA', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: '#4FC3F7', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#29ABE2', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,0 Q300,100 600,0 T1200,0 L1200,100 L0,100 Z"
            fill="url(#waveTopGradient)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#29ABE2]/10 to-cyan-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-[#29ABE2]/20 mb-6">
            <Star className="h-5 w-5 text-[#29ABE2]" />
            <span className="text-[#29ABE2]">Premium Quality Products</span>
            <Star className="h-5 w-5 text-[#29ABE2]" />
          </div>
          
          <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our range of high-quality Dragon Pipe HDPE solutions for industrial applications
          </p>
        </motion.div>

        {/* 3D Slider Visualization */}
        <div 
          className="relative mb-16 flex items-center justify-center"
          style={{ 
            perspective: '1200px',
            perspectiveOrigin: 'center center',
            minHeight: '500px'
          }}
        >
          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl p-4 border-2 border-white/70 hover:bg-[#29ABE2] hover:border-[#29ABE2] transition-all duration-300 group"
            onClick={handlePrevious}
            aria-label="Previous product"
          >
            <ChevronLeft className="h-6 w-6 text-[#29ABE2] group-hover:text-white transition-colors" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl p-4 border-2 border-white/70 hover:bg-[#29ABE2] hover:border-[#29ABE2] transition-all duration-300 group"
            onClick={handleNext}
            aria-label="Next product"
          >
            <ChevronRight className="h-6 w-6 text-[#29ABE2] group-hover:text-white transition-colors" />
          </button>

          <div 
            className="relative flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              width: '100%',
              maxWidth: '1100px'
            }}
          >
            {featuredProducts.map((product, index) => {
              const pos = getCardPosition(index);
              
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.5, rotateY: pos.rotateY + 45 }}
                  whileInView={{ opacity: pos.opacity, scale: pos.scale, rotateY: pos.rotateY }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8, ease: 'easeOut' }}
                  className="group absolute"
                  style={{
                    transformStyle: 'preserve-3d',
                    width: '380px',
                    transform: `translateX(${pos.x}px) rotateY(${pos.rotateY}deg) translateZ(${pos.z}px) scale(${pos.scale})`,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    zIndex: pos.zIndex,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `translateX(${pos.x}px) rotateY(0deg) translateZ(150px) scale(1.08)`;
                    e.currentTarget.style.zIndex = '100';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateX(${pos.x}px) rotateY(${pos.rotateY}deg) translateZ(${pos.z}px) scale(${pos.scale})`;
                    e.currentTarget.style.zIndex = String(pos.zIndex);
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-linear-to-br from-[#29ABE2]/50 via-cyan-400/40 to-blue-500/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-500 pointer-events-none"></div>
                  
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-white/70 shadow-2xl">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden bg-linear-to-br from-slate-100 to-blue-50/50">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Glass overlay effect */}
                      <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/20 to-transparent"></div>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm border-2 border-white/40 text-sm">
                          <Star className="h-3.5 w-3.5 fill-white" />
                          <span>Featured</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Name */}
                    <div className="p-6 bg-white/70 backdrop-blur-sm">
                      <h3 className="text-slate-800 text-xl text-center group-hover:text-[#29ABE2] transition-colors duration-300">
                        {product.name}
                      </h3>
                    </div>

                    {/* Bottom Gradient Accent */}
                    <div className="h-1 bg-linear-to-r from-transparent via-[#29ABE2] to-transparent"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-linear-to-r from-[#29ABE2]/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-10 border border-[#29ABE2]/20"
        >
          <h3 className="text-3xl text-slate-800 mb-3">Want to Browse Our Full Catalogue?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Explore our complete range of industrial piping systems and equipment with detailed specifications and technical data.
          </p>
          <button 
            className="px-8 py-3 bg-linear-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white shadow-xl rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group border-0"
            onClick={() => document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Full Product Catalogue
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-linear-to-br from-cyan-300/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-tl from-[#29ABE2]/10 to-cyan-300/10 rounded-full blur-3xl"></div>

      {/* Curved Wave Bottom - smooth transition to Partners */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <defs>
            <linearGradient id="productsWaveBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#29ABE2', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#22d3ee', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#productsWaveBottom)"
          />
        </svg>
      </div>
    </section>
  );
}