import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, ExternalLink, Globe2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';



export function DiamanteGroupPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const companies = [
    {
      name: 'Fedmur Global Industrial LLC',
      shortName: 'Fedmur Global',
      location: 'Las Vegas,Nevada, USA',
      tagline: 'Global Procurement Excellence',
      description: 'Strategic USA-based purchasing arm providing international procurement excellence and global sourcing solutions for the entire Diamante Group.',
      website: '',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2F1.png?alt=media&token=f3858a8b-52c1-4e49-8cdf-f37cb819d87e',
      color: 'from-blue-600 to-blue-700',
      logo: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2FFedmur_Global__Purchasing_Company_-removebg-preview-removebg-preview.png?alt=media&token=baa2ff89-54c0-43a4-b6b6-a1cbaea9cfc9', // Replace with: 'https://your-image-url.com/fedmur-logo.png'
      logoType: 'image'
    },
    {
      name: 'Crossflow Engineering Construction Corporation',
      shortName: 'Crossflow Engineering',
      location: 'Las Piñas, Philippines',
      tagline: 'Engineering & Construction Solutions',
      description: 'Delivering world-class engineering and construction solutions with precision and excellence across industrial infrastructure projects.',
      website: 'https://www.crossflowengg.com/',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2F2.png?alt=media&token=cdc006f9-6aed-4fd3-b2d8-b7ea0565927c',
      color: 'from-emerald-600 to-teal-700',
      logo: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2Fcrossflow%20final%20logo.png?alt=media&token=2a712c07-de2f-4a31-96a2-5b75d361902a', // Replace with: 'https://your-image-url.com/crossflow-logo.png'
      logoType: 'image' 
    },
    {
      name: 'Worldstar Industrial Supply Co',
      shortName: 'Worldstar Industrial',
      location: 'Las Piñas, Philippines',
      tagline: 'Industrial Supply Leader',
      description: 'Premier supplier of cutting-edge industrial piping systems, delivering innovative solutions to industries nationwide.',
      website: '/',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FWF%20Valves.jpg?alt=media&token=e76a8aba-3690-48cf-90ca-b7c0fc041555',
      color: 'from-[#29ABE2] to-[#1E88C7]',
      logo: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2Fwsiscologo2.png?alt=media&token=2c7fb851-b265-4550-9b18-3d1198811719', // Replace with: 'https://your-image-url.com/worldstar-logo.png'
      logoType: 'image' 
    },
    {
      name: 'GIE Inc',
      shortName: 'GIE Inc',
      location: 'Manila, Philippines',
      tagline: 'Industrial & Automotive Fastener Solutions',
      description: 'GIE provides durable and precise fasteners for industrial, mechanical, and automotive needs.',
      website: '',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2F3.png?alt=media&token=451249a0-11d6-4dda-9d61-5f357007c08c',
      color: 'from-purple-600 to-indigo-700',
      logo: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2FGIE.png?alt=media&token=55cfa563-b9d7-43cc-9392-3887d1598bc0', // Replace with: 'https://your-image-url.com/gie-logo.png'
      logoType: 'image' 
    },
    {
      name: 'Universal Techno Piping Corporation',
      shortName: 'Universal Techno',
      location: 'Las Piñas, Philippines',
      tagline: 'Your Solution for a Complete Piping System',
      description: 'Your trusted partner for advanced thermoplastic piping and instrumentation systems.',
      website: 'https://utpc.com.ph/',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2FUTPC.jpg?alt=media&token=c2a066ff-a474-4f88-9caf-61b117c15fb8',
      color: 'from-orange-600 to-amber-700',
      logo: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2FUTPC__1_-removebg-preview-removebg-preview%20(3).png?alt=media&token=90ecbe5a-61fd-4ebf-bf86-461207c70166', // Replace with your actual logo URL
      logoType: 'image'
    },
    {
      name: 'Global Techno Purchasing Society Inc',
      shortName: 'Global Techno',
      location: 'Manila, Philippines',
      tagline: 'Strategic Procurement & International Trade',
      description: 'Global purchasing and international trade advocacy arm of the Diamante Group, dedicated to knowledge sharing and advancing procurement excellence.',
      website: '',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2F4.png?alt=media&token=39b80dbe-8f8c-4dc8-9421-b554e0eab902',
      color: 'from-rose-600 to-pink-700',
      logo: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Diamante%20Group%2FGlobal%20Techno%20Purchasing.png?alt=media&token=6d06b260-5472-4bd5-88aa-41555aac254a', // Replace with: 'https://your-image-url.com/global-techno-logo.png'
      logoType: 'image' 
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % companies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [companies.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % companies.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + companies.length) % companies.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleCompanyClick = (website: string) => {
    if (website) {
      if (website === '/') {
        window.location.href = '/#/';
      } else {
        window.open(website, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section with Company Carousel */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Main Carousel */}
        <div className="relative h-screen">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${companies[currentSlide].image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95" />
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px'
                  }}></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left: Company Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        {/* Logo */}
                        <div className="mb-8">
                          {/* Gradient Border Container */}
                          <div className={`inline-block p-1 rounded-3xl bg-linear-to-br ${companies[currentSlide].color} shadow-2xl mb-6`}>
                            {/* White Background for Logo */}
                            <div className="w-32 h-32 rounded-[1.375rem] bg-white flex items-center justify-center overflow-hidden">
                              {companies[currentSlide].logoType === 'image' ? (
                                <img 
                                  src={companies[currentSlide].logo} 
                                  alt={`${companies[currentSlide].name} logo`}
                                  className="w-full h-full object-contain p-6"
                                />
                              ) : (
                                <span className={`text-5xl bg-linear-to-br ${companies[currentSlide].color} bg-clip-text text-transparent`}>
                                  {companies[currentSlide].logo}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Company Name */}
                        <h1 className="text-5xl md:text-6xl text-white mb-4">
                          {companies[currentSlide].name}
                        </h1>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-white/70 mb-6">
                          <Globe2 className="w-5 h-5" />
                          <span className="text-lg">{companies[currentSlide].location}</span>
                        </div>

                        {/* Tagline */}
                        <div className={`inline-block bg-linear-to-r ${companies[currentSlide].color} px-6 py-3 rounded-xl mb-8`}>
                          <p className="text-white">{companies[currentSlide].tagline}</p>
                        </div>

                        {/* Description */}
                        <p className="text-xl text-white/90 leading-relaxed mb-10">
                          {companies[currentSlide].description}
                        </p>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleCompanyClick(companies[currentSlide].website)}
                          className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300"
                        >
                          <span className="text-lg">Visit Website</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </motion.div>

                      {/* Right: Company Card Preview */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="hidden lg:block"
                      >
                        <div className="relative">
                          {/* Decorative Background */}
                          <div className={`absolute -inset-8 bg-linear-to-br ${companies[currentSlide].color} rounded-[3rem] blur-3xl opacity-30`} />
                          
                          {/* Card */}
                          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                            <div className={`h-4 bg-linear-to-r ${companies[currentSlide].color}`} />
                            <div className="p-10">
                              {/* Gradient Border Container for Logo */}
                              <div className={`inline-block p-1 rounded-2xl bg-linear-to-br ${companies[currentSlide].color} mb-6 shadow-xl`}>
                                {/* White Background for Logo */}
                                <div className="w-24 h-24 rounded-[0.875rem] bg-white flex items-center justify-center overflow-hidden">
                                  {companies[currentSlide].logoType === 'image' ? (
                                    <img 
                                      src={companies[currentSlide].logo} 
                                      alt={`${companies[currentSlide].name} logo`}
                                      className="w-full h-full object-contain p-4"
                                    />
                                  ) : (
                                    <span className={`text-4xl bg-linear-to-br ${companies[currentSlide].color} bg-clip-text text-transparent`}>
                                      {companies[currentSlide].logo}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <h3 className="text-3xl text-white mb-4">{companies[currentSlide].shortName}</h3>
                              <p className="text-white/80 leading-relaxed text-lg">
                                {companies[currentSlide].description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10">
            <button
              onClick={prevSlide}
              className="ml-4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="mr-4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-10">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-white rounded-full'
                    : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Cards Grid - All Companies Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
              All Our Companies
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Click any company to explore their unique offerings
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => handleCompanyClick(company.website)}
                className="group cursor-pointer"
              >
                <div className="relative h-full bg-white rounded-2xl border-2 border-slate-200 hover:border-[#29ABE2] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${company.image})` }}
                    />
                    <div className={`absolute inset-0 bg-linear-to-br ${company.color} opacity-80`} />
                    
                    {/* Logo Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Gradient Border Container */}
                      <div className={`p-1 rounded-2xl bg-linear-to-br ${company.color} shadow-2xl`}>
                        {/* White Background for Logo */}
                        <div className="w-20 h-20 rounded-[0.875rem] bg-white flex items-center justify-center overflow-hidden">
                          {company.logoType === 'image' ? (
                            <img 
                              src={company.logo} 
                              alt={`${company.name} logo`}
                              className="w-full h-full object-contain p-3"
                            />
                          ) : (
                            <span className={`text-3xl bg-linear-to-br ${company.color} bg-clip-text text-transparent`}>
                              {company.logo}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Visit Badge */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 py-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm text-white">Visit</span>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl text-slate-900 mb-2 group-hover:text-[#29ABE2] transition-colors duration-300">
                      {company.shortName}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Globe2 className="w-4 h-4" />
                      <span className="text-sm">{company.location}</span>
                    </div>

                    <div className={`inline-block bg-linear-to-r ${company.color} bg-opacity-10 rounded-lg px-3 py-1.5 mb-4`}>
                      <p className="text-sm text-white">{company.tagline}</p>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">
                      {company.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Diamante Group */}
      <section className="py-20 bg-linear-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl overflow-hidden relative"
            >
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-linear-to-br from-[#29ABE2] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Building2 className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-4xl md:text-5xl text-white mb-6">
                  United by Excellence
                </h2>
                
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  The Diamante Group represents a comprehensive network of specialized companies spanning from the USA to the Philippines. Together, we provide end-to-end solutions for industrial operations—from global sourcing and procurement to engineering, supply, and installation.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <div>
                    <div className="text-5xl text-[#29ABE2] mb-2">6</div>
                    <div className="text-white/80">Companies</div>
                  </div>
                  <div>
                    <div className="text-5xl text-[#29ABE2] mb-2">2</div>
                    <div className="text-white/80">Countries</div>
                  </div>
                  <div>
                    <div className="text-5xl text-[#29ABE2] mb-2">100+</div>
                    <div className="text-white/80">Years Combined</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.a
                    href="mailto:sales@worldstarindustrial.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1E88C7] text-white px-8 py-4 rounded-xl transition-colors duration-300"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    href="tel:+6328525161"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-colors duration-300"
                  >
                    <span>Call Now</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}