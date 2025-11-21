import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

import { Button } from './ui/button';
import { ArrowRight, Package, CheckCircle2 } from 'lucide-react';

const pipesImg = "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2Fprod-17%20Polyethylene%20pipe%20for%20water%20supply.jpg?alt=media&token=8613c81c-c435-42f4-bd09-299b58e23e28";

const valveImg =  "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FProd%2023%20Bracket%20integrated%20pneumatic%20double%20by%20the%20ball%20valve.jpg?alt=media&token=e1b0aebd-e812-4ec5-9609-b7ed59348ea1";

const elbowImg = "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2Ffit-cpvc-ansi-01%20CPVC90%C2%B0%20Elbow%20(ANSI).jpg?alt=media&token=b0c93f3f-814c-4776-b404-169b090408f8";


export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);
  
  const products = [
    { image: pipesImg, name: 'Industrial Pipes' },
    { image: elbowImg, name: 'Elbow Fittings' },
    { image: valveImg, name: 'Ball Valves' }
  ];

  const backgroundImages = [
    'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FWorldstar%20home.png?alt=media&token=2aae4bf7-d7b3-43c8-b280-8d84bc572ae1',
    'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FXiamen%20Keheng%20Mfg.jpg?alt=media&token=2d2d8c68-72b4-4943-ac6a-99199057cfc0',
    'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FDiamante%20Group%20(2).png?alt=media&token=1267a8e6-9003-4b70-9aaa-ac14deba6b2d',
    'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FWF%20Valves.jpg?alt=media&token=e76a8aba-3690-48cf-90ca-b7c0fc041555',
    'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FMfg%201.jpg?alt=media&token=64f5e441-3511-4731-b9b2-6c34af82c3bb'
  ];

  // Dynamic hero content for each background image
  const heroContent = [
    {
      title: 'Welcome to Worldstar',
      subtitle: 'Import and Supply for the Industries That Move the World.',
      description: 'Your premier source for industrial piping systems, valves, fittings, and automation solutions in the Philippines.'
    },
    {
      title: 'Exclusive Business Partner of Xiamen Keheng Plastic Co., Ltd.',
      subtitle: 'Delivering Quality Industrial Piping Solutions',
      description: 'Bringing Xiamen Keheng’s world-class piping systems to the local market with trusted quality and reliability.'
    },
    {
      title: 'Member of the Diamante Group of Companies',
      subtitle: 'Strength in Partnership, Excellence in Service.',
      description: 'Part of a trusted group committed to quality, innovation, and global standards.'
    },
    {
      title: 'Trusted Supply Partner',
      subtitle: 'Delivering Excellence Across the Philippines.',
      description: 'From warehousing to last-mile delivery, we ensure your industrial supplies arrive on time, every time.'
    },
    {
      title: 'Global Sourcing. Local Trust',
      subtitle: 'Supported by Fedmur Global Industrial LLC, USA.',
      description: 'The USA Purchasing arm of the Diamante Group of Companies.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [products.length]);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds
    return () => clearInterval(bgInterval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={backgroundImages[bgImageIndex]}
              alt={heroContent[bgImageIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/20"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-32 pb-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6"
            >
              
              <span className="text-white">In Partnership with Fedmur USA</span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1 
                key={`title-${bgImageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white mb-6 text-5xl md:text-7xl"
              >
                {heroContent[bgImageIndex].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${bgImageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-3xl text-white/90 mb-8"
              >
                {heroContent[bgImageIndex].subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${bgImageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-white/80 mb-10 max-w-2xl"
              >
                {heroContent[bgImageIndex].description}
              </motion.p>
            </AnimatePresence>

            {/* Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-linear-to-r from-[#29ABE2] to-cyan-500 hover:from-[#2196D4] hover:to-cyan-600 text-white border-0 shadow-2xl shadow-[#29ABE2]/50 group px-8 py-6 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Package className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-xl px-8 py-6 text-lg group"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#29ABE2]" />
                <span className="text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#29ABE2]" />
                <span className="text-sm">24hr Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#29ABE2]" />
                <span className="text-sm">Expert Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Curved Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="w-full h-32 md:h-48"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#29ABE2', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#4FC3F7', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#81D4FA', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q300,0 600,100 T1200,100 L1200,200 L0,200 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Circular Product Showcase with Connections */}
      <motion.div
        className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="relative w-80 h-80">
          {/* Center Circle with Featured Product */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white shadow-2xl flex items-center justify-center z-20 overflow-hidden border-4 border-[#29ABE2]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full flex flex-col items-center justify-center p-3"
              >
                <img 
                  src={products[activeIndex].image} 
                  alt={products[activeIndex].name}
                  className="w-full h-24 object-contain mb-1"
                />
                <span className="text-[#29ABE2] text-xs text-center">{products[activeIndex].name}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Product thumbnails arranged in a circle - 6 positions */}
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const angle = (index * 60 * Math.PI) / 180 - Math.PI / 2; // Start from top
            const radius = 130;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const productIndex = index % products.length;
            
            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 cursor-pointer"
                style={{
                  transform: `translate(${x - 28}px, ${y - 28}px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                }}
                transition={{ 
                  delay: 0.6 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ scale: 1.15 }}
                onClick={() => setActiveIndex(productIndex)}
              >
                <div className={`w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center p-2 border-2 transition-all duration-300 ${
                  activeIndex === productIndex ? 'border-[#29ABE2] ring-4 ring-[#29ABE2]/30' : 'border-gray-300'
                }`}>
                  <img 
                    src={products[productIndex].image} 
                    alt={products[productIndex].name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            );
          })}

          {/* Animated Connection Lines/Pipes */}
          <svg 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
            viewBox="0 0 320 320"
          >
            {/* Main connecting circle */}
            <motion.circle
              cx="160"
              cy="160"
              r="130"
              fill="none"
              stroke="#29ABE2"
              strokeWidth="3"
              strokeDasharray="12 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
            
            {/* Animated flow indicators - moving dots around the circle */}
            {[0, 1, 2].map((dotIndex) => {
              return (
                <motion.circle
                  key={dotIndex}
                  r="4"
                  fill="#29ABE2"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    offsetDistance: ['0%', '100%']
                  }}
                  transition={{
                    opacity: { duration: 2, repeat: Infinity, ease: "linear" },
                    offsetDistance: { duration: 4, repeat: Infinity, ease: "linear", delay: dotIndex * 0.5 }
                  }}
                  style={{
                    offsetPath: 'path("M 160 30 A 130 130 0 1 1 159.99 30")',
                    offsetRotate: '0deg'
                  }}
                >
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path="M 160 30 A 130 130 0 1 1 159.99 30 Z"
                    begin={`${dotIndex * 0.5}s`}
                  />
                </motion.circle>
              );
            })}

            {/* Connection lines from center to active thumbnail */}
            {[0, 1, 2, 3, 4, 5].map((index) => {
              const angle = (index * 60 * Math.PI) / 180 - Math.PI / 2;
              const outerX = 160 + Math.cos(angle) * 130;
              const outerY = 160 + Math.sin(angle) * 130;
              const productIndex = index % products.length;
              
              return (
                <motion.line
                  key={`line-${index}`}
                  x1="160"
                  y1="160"
                  x2={outerX}
                  y2={outerY}
                  stroke="#29ABE2"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: activeIndex === productIndex ? 1 : 0.3,
                    opacity: activeIndex === productIndex ? 0.6 : 0.15,
                    strokeWidth: activeIndex === productIndex ? 3 : 1.5
                  }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}
          </svg>

          {/* Progress Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index 
                    ? 'w-8 h-2 bg-[#29ABE2]' 
                    : 'w-2 h-2 bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Show ${products[index].name}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}