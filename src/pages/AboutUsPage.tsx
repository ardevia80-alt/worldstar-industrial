/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Users, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Metrics Showcase Component with Auto-Rotating Spotlight & Video Integration
function MetricsShowcase({ activeCard, setActiveCard }: { activeCard: number; setActiveCard: (index: number) => void }) {
  const [showVideo, setShowVideo] = useState(false);
  const [roundCount, setRoundCount] = useState(0);
  const [videoDisplayCount, setVideoDisplayCount] = useState(0);

  const metrics = [
    { 
      icon: Building2, 
      label: 'Established Excellence',
      metric: '40+',
      detail: 'Years of Industry Leadership',
      color: 'from-[#29ABE2] to-cyan-500'
    },
    { 
      icon: Globe, 
      label: 'Global Network',
      metric: '6+',
      detail: 'International Partners',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      icon: Award, 
      label: 'Quality Products',
      metric: '500+',
      detail: 'Premium Product Range',
      color: 'from-blue-500 to-[#29ABE2]'
    },
    { 
      icon: Users, 
      label: 'Trusted Nationwide',
      metric: '1000+',
      detail: 'Satisfied Corporate Clients',
      color: 'from-[#29ABE2] to-blue-600'
    }
  ];

  // Auto-rotate through cards and track rounds
  useEffect(() => {
    if (showVideo) {
      // Show video for 10 seconds
      const videoTimeout = setTimeout(() => {
        setShowVideo(false);
        setRoundCount(0);
        setActiveCard(0);
      }, 10000);

      return () => clearTimeout(videoTimeout);
    }

    const interval = setInterval(() => {
      // @ts-expect-error
      setActiveCard((prev) => {
        const nextCard = (prev + 1) % metrics.length;
        
        // Check if we completed a full round (back to card 0)
        if (nextCard === 0) {
          setRoundCount((count) => {
            const newCount = count + 1;
            // After 2 complete rounds (8 card transitions), show video
            if (newCount >= 2) {
              setShowVideo(true);
              setVideoDisplayCount((vc) => vc + 1);
              return 0;
            }
            return newCount;
          });
        }
        
        return nextCard;
      });
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [setActiveCard, metrics.length, showVideo]);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {showVideo ? (
          // YouTube Video View
          <motion.div
            key="video"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full"
          >
            <div className="relative group">
              {/* Video Container */}
              <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-white/70 shadow-2xl shadow-blue-500/10 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -inset-6 bg-linear-to-br from-[#29ABE2]/30 to-cyan-400/30 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#29ABE2] to-cyan-500 flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl text-slate-800">Company Showcase</h3>
                        <p className="text-sm text-[#29ABE2]">Watch Our Story</p>
                      </div>
                    </div>
                    
                    {/* Round Indicator */}
                    <div className="px-4 py-2 bg-linear-to-r from-[#29ABE2]/10 to-cyan-500/10 rounded-full border border-[#29ABE2]/20">
                      <span className="text-sm text-slate-600">Video #{videoDisplayCount}</span>
                    </div>
                  </div>

                  {/* YouTube Embed */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Z8GPZfrexf0?autoplay=1&mute=1"
                      title="WSISCo Company Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Info */}
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-slate-600">
                      Discover how WSISCo delivers excellence in industrial piping solutions
                    </p>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-sm text-[#29ABE2]"
                    >
                      Returning to metrics...
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          // Metrics Cards View
          <motion.div
            key="metrics"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {metrics.map((item, index) => {
                const isActive = activeCard === index;
                
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      y: isActive ? -12 : 0,
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onHoverStart={() => setActiveCard(index)}
                    className="relative group cursor-pointer"
                  >
                    {/* Animated Pulsing Glow - Spotlight Effect */}
                    <motion.div 
                      className={`absolute -inset-3 bg-linear-to-br ${item.color} rounded-2xl blur-2xl`}
                      animate={{
                        opacity: isActive ? [0.5, 0.8, 0.5] : 0.25,
                        scale: isActive ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Card Content */}
                    <motion.div 
                      className="relative h-full bg-white/80 backdrop-blur-2xl rounded-2xl p-8 border border-white/70 shadow-xl shadow-black/5"
                      animate={{
                        borderColor: isActive ? 'rgba(41, 171, 226, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                        boxShadow: isActive 
                          ? '0 20px 50px -12px rgba(41, 171, 226, 0.25)' 
                          : '0 20px 25px -5px rgba(0, 0, 0, 0.05)'
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Icon with Pulse Animation */}
                      <motion.div 
                        className={`w-14 h-14 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                        animate={{
                          scale: isActive ? [1, 1.1, 1] : 1,
                          rotate: isActive ? [0, 5, 0, -5, 0] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </motion.div>

                      {/* Metric Number with Count Animation */}
                      <motion.div 
                        className={`text-4xl bg-linear-to-br ${item.color} bg-clip-text text-transparent mb-2`}
                        animate={{
                          scale: isActive ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.metric}
                      </motion.div>

                      {/* Label */}
                      <h4 className="text-slate-800 mb-2">{item.label}</h4>
                      
                      {/* Detail with Fade */}
                      <motion.p 
                        className="text-sm text-slate-600 leading-relaxed"
                        animate={{
                          opacity: isActive ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.detail}
                      </motion.p>

                      {/* Active Indicator */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${item.color} rounded-b-2xl`}
                            style={{ transformOrigin: 'left' }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Progress Indicators */}
              <div className="col-span-full flex justify-center gap-2 mt-6">
                <div className="flex items-center gap-3">
                  {/* Card Dots */}
                  {metrics.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCard(index)}
                      className="relative group"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-slate-300"
                        animate={{
                          scale: activeCard === index ? 1.5 : 1,
                          backgroundColor: activeCard === index ? '#29ABE2' : '#cbd5e1'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>
                  ))}
                  
                  {/* Separator */}
                  <div className="w-px h-4 bg-slate-300 mx-2"></div>
                  
                  {/* Round Counter */}
                  <div className="text-xs text-slate-500 font-medium">
                    Round {roundCount + 1}/2
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AboutUsPage() {
  const [activeCard, setActiveCard] = useState(0);
   const leadership = [
    {
      name: 'ENGR. LINO S. DIAMANTE',
      title: 'CHIEF OPERATION OFFICER',
      bio: 'Engr. Lino S. Diamante brings over 40 years of experience to his role as founding chairman of the Diamante group of companies. He is a strategic thinker who has guided his companies\' expansion into new markets for the import and distribution of mechanical and construction fasteners and industrial pipes.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/About%20Us%2FEngr.%20Lino%20(1).png?alt=media&token=61aed1af-ca1b-40ee-a7b4-872a4c3c4fd0'
    },
    {
      name: 'LOUELLA BUENCUCHILLO',
      title: 'TREASURER',
      bio: 'Louella D. Buencuchillo is the corporate secretary of UTPC Industrial Techno-Piping Corp. (UTPC), another member of the Diamante Group of Corporations that serves the needs of top corporations in the Philippines.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/About%20Us%2FLouella.png?alt=media&token=cf3c19de-73f1-491c-8cd6-99af7bbf2157'
    },
    {
      name: 'ENEIDA PAREDES',
      title: 'CFO',
      bio: 'As Worldstar\'s Chief Financial Officer, Eneida Paredes drives the company\'s financial health and strategic growth. With a sharp eye for detail and a strong commitment to operational excellence, she ensures that resources are managed efficiently to support seamless business operations. Her leadership in financial planning, budgeting, and organizational stability plays a critical role in empowering Worldstar to consistently deliver exceptional service to its clients.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/About%20Us%2FNida.png?alt=media&token=df0baae8-a088-42ec-a650-8cb242980120'
    },
    {
      name: 'ENGR. JOSE REYES',
      title: 'TECHNICAL CONSULTANT',
      bio: 'Engr. Jose Reyes provides expert technical consulting services, bringing deep knowledge in industrial piping systems and engineering solutions to support our clients\' most complex projects.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FEngr.%20Jose%20Reyes.png?alt=media&token=a678432a-05a3-450f-95ec-ec8c008e1a7f'
    },
    {
      name: 'ENGR. RANIEL ATIENZA',
      title: 'TECHNICAL CONSULTANT',
      bio: 'Engr. Raniel Atienza leverages his extensive engineering expertise to deliver innovative technical solutions and strategic guidance for industrial piping applications.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FEngr.%20Raniel%20Atienza.png?alt=media&token=a07d3ccf-aea6-463d-bf42-fa87d61f9558'
    },
    {
      name: 'ENGR. REY GALVE',
      title: 'TECHNICAL CONSULTANT',
      bio: 'Engr. Rey Galve specializes in providing comprehensive technical consulting services, ensuring that our clients receive the most effective and reliable piping system solutions.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FEngr.%20Rey%20Galve.png?alt=media&token=1f7772f9-c66d-427b-9501-8bbf82c87ea4'
    },
    {
      name: 'ENGR. SWEET AUBREY PUGAL',
      title: 'TECHNICAL CONSULTANT',
      bio: 'Engr. Sweet Aubrey Pugal brings technical excellence and precision to every project, offering expert consulting on advanced piping systems and industrial applications.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FEngr.%20Sweet%20Aubrey%20Pugal.png?alt=media&token=bc7163ec-8ace-401d-8ddc-8dcc330f8974'
    },
    {
      name: 'AMINA GALVE',
      title: 'SALES CONSULTANT',
      bio: 'Amina Galve brings dedication and expertise to her role as Sales Consultant, helping clients find the right industrial solutions for their specific needs.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FMs.%20Amina%20Galve.png?alt=media&token=d86063cd-c71f-45fc-a3c8-d59e9beed88b'
    },
    {
      name: 'ENGR. CARLEEN DUNGO',
      title: 'SALES CONSULTANT',
      bio: 'Engr. Carleen Dungo combines technical knowledge with sales expertise to provide clients with comprehensive product recommendations and superior customer service.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FEngr.%20Carleen%20Dungo.png?alt=media&token=b96a6a51-b41d-43c1-8c0d-ae4ad2b2cf82'
    },
    {
      name: 'ENGR. ERIC ZUÑIGA',
      title: 'SALES CONSULTANT',
      bio: 'Engr. Eric Zuñiga delivers exceptional sales support, leveraging his engineering background to match clients with the most suitable piping system products.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FEngr.%20Eric%20Zu%C3%B1iga.png?alt=media&token=164fa0a0-1826-4059-adea-597d6bd96d7d'
    },
    {
      name: 'JANSSEN DUNGO',
      title: 'SALES CONSULTANT',
      bio: 'Janssen Dungo is committed to building strong client relationships and delivering tailored solutions that meet the unique requirements of each customer.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FJanssen%20Dungo.png?alt=media&token=1df0965b-cbed-443d-a20f-7c8c1fcc6419'
    },
    {
      name: 'ROGER SUAVERDEZ',
      title: 'SALES CONSULTANT',
      bio: 'Roger Suaverdez provides professional sales consultation, ensuring clients receive expert guidance throughout their purchasing journey.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FRoger%20Suaverdez.png?alt=media&token=ce06b0ad-a634-4005-9784-14a84873e61d'
    },
    {
      name: 'JUN JAYME',
      title: 'SALES CONSULTANT',
      bio: 'Jun Jayme offers dedicated sales support and product expertise, helping clients navigate our comprehensive range of industrial piping solutions.',
      image: ''
    },
    {
      name: 'RYAN MORADOS',
      title: 'DIGITAL MARKETING CONSULTANT',
      bio: 'Ryan Morados drives our digital marketing strategy, ensuring that WSISCo maintains a strong online presence and effectively reaches our target audience.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FRyan%20Morados.png?alt=media&token=0e1bdb8c-afc3-4027-ab74-fb23e12e4ac5'
    },
    {
      name: 'MERLIN BOBIS',
      title: 'DIGITAL MARKETING CONSULTANT',
      bio: 'Merlin Bobis specializes in creating engaging digital content and marketing campaigns that showcase our products and connect with industry professionals.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FMerlin%20Bobis.png?alt=media&token=d56c0521-34d3-4cb5-9049-f8a943168374'
    },
    {
      name: 'ROGER BASSI',
      title: 'DIGITAL MARKETING CONSULTANT',
      bio: 'Roger Bassi leverages data-driven marketing strategies to enhance brand visibility and drive customer engagement across digital platforms.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FRoger%20Bassi.png?alt=media&token=e2b80a35-b395-4174-9511-ad4887eeeab6'
    },
    {
      name: 'DENVER BIGAYAN',
      title: 'DIGITAL MARKETING CONSULTANT',
      bio: 'Denver Bigayan brings innovative digital marketing approaches to strengthen WSISCo\'s market position and effectively communicate our value proposition to clients.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Consultants%2FDenver%20Bigayan.png?alt=media&token=00e71d47-2972-4ea2-bd1f-0c8f851c81c9'
    },
    {
      name: 'ENGR. RAFFY TALACAY',
      title: 'SALES CONSULTANT',
      bio: 'Engr. Raffy Talacay brings extensive expertise in industrial sales and client relations. His deep understanding of piping systems and technical solutions enables him to provide tailored recommendations that meet the specific needs of our diverse client base.',
      image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/About%20Us%2FEngr.%20Lino%20(4).png?alt=media&token=e1c3de5c-2cef-4f82-9230-2561bfe64a89'
    }
  ];



  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-linear-to-br from-[#29ABE2] via-cyan-500 to-blue-500">
        {/* Curved Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-24 md:h-32"
          >
            <path
              d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
              fill="#ffffff"
              opacity="0.9"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl mb-6 text-white drop-shadow-2xl">
              About Us
            </h1>
            <p className="text-2xl text-white/95 leading-relaxed drop-shadow-lg">
              Delivering cutting-edge industrial solutions nationwide
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-linear-to-br from-white/20 to-cyan-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-linear-to-br from-blue-300/20 to-white/20 blur-3xl"></div>
      </section>

      {/* Company Overview */}
      <section className="relative py-32 overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-6">
              Powering Industries Nationwide
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Established excellence in industrial supply solutions
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Left: Company Story */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group"
              >
                <div className="absolute -inset-6 bg-linear-to-br from-[#29ABE2]/30 to-cyan-400/30 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl p-10 border border-white/70 shadow-2xl shadow-blue-500/10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#29ABE2] to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/30">
                      <Building2 className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-3xl text-slate-800">Our Foundation</h3>
                      <p className="text-[#29ABE2]">Since Establishment</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    World Star Industrial Supply Co. (WSISCo) was established with a vision to deliver not only cutting-edge thermoplastic piping solutions, fasteners, instrumentation and automation products but new technologies and products nationwide.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    WSISCo provides reliable and high-performance products to meet the diverse needs of industries, backed by decades of expertise and unwavering commitment to excellence.
                  </p>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Globe className="w-5 h-5 text-[#29ABE2]" />
                      <span>Member of Diamante Group of Companies</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Global Sourcing */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group"
              >
                <div className="absolute -inset-6 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl p-10 border border-white/70 shadow-2xl shadow-cyan-500/10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl shadow-cyan-500/30">
                      <Globe className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-3xl text-slate-800">Global Network</h3>
                      <p className="text-cyan-600">World-Class Partners</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Our thermoplastic piping materials are sourced from the world's leading suppliers in the USA, Japan, Taiwan, China, and more.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100/50">
                      <h4 className="text-slate-800 mb-3">Product Range Excellence</h4>
                      <div className="flex flex-wrap gap-2">
                        {['PVC', 'UPVC', 'CPVC', 'ABS', 'HDPE', 'PVDF', 'PPH'].map((material) => (
                          <span key={material} className="px-3 py-1 bg-white rounded-lg text-sm text-slate-700 shadow-sm border border-white/60">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-linear-to-r from-cyan-50 to-blue-50 rounded-2xl p-5 border border-cyan-100/50">
                      <h4 className="text-slate-800 mb-2">Industry Compliance</h4>
                      <p className="text-slate-600">Meeting stringent requirements across all industrial sectors</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Advanced Metrics Grid with Auto-Rotating Spotlight */}
            <MetricsShowcase activeCard={activeCard} setActiveCard={setActiveCard} />
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-linear-to-br from-[#29ABE2]/8 to-cyan-300/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-linear-to-tl from-blue-400/8 to-cyan-300/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-linear-to-br from-cyan-300/5 to-blue-300/5 rounded-full blur-3xl"></div>
      </section>

      {/* Leadership Section */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/30 to-white">
        {/* Curved Wave Top */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-24 md:h-32"
          >
            <path
              d="M0,60 Q300,120 600,60 T1200,60 L1200,0 L0,0 Z"
              fill="#ffffff"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving WSISCo's excellence and innovation
            </p>
          </motion.div>

          {/* Hierarchical Leadership Layout */}
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Top Level - COO */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.01 }}
                className="relative group cursor-pointer"
              >
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-6 bg-linear-to-br from-[#29ABE2]/50 via-cyan-400/40 to-blue-500/50 rounded-[2.5rem] blur-3xl opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:blur-[80px]"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-transparent via-[#29ABE2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.25rem]"></div>
                
                <div className="relative bg-linear-to-br from-white via-white/98 to-blue-50/40 backdrop-blur-2xl rounded-[2.25rem] overflow-hidden border-2 border-[#29ABE2]/20 shadow-2xl shadow-[#29ABE2]/20 group-hover:border-[#29ABE2]/40 transition-all duration-500">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image Section */}
                    <div className="relative md:col-span-2 aspect-square md:aspect-auto overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-blue-100/60 z-0"></div>
                      <ImageWithFallback
                        src={leadership[0].image}
                        alt={leadership[0].name}
                        className="relative z-10 w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 z-20 bg-linear-to-t md:bg-linear-to-r from-slate-900/60 via-slate-900/30 to-transparent"></div>
                      
                      {/* CEO Badge */}
                      <div className="absolute top-6 left-6 z-30">
                        <div className="bg-linear-to-br from-[#29ABE2] to-cyan-600 rounded-2xl px-4 py-2 shadow-xl shadow-blue-500/50 border border-white/20">
                          <span className="text-sm text-white">Chief Operation Officer</span>
                        </div>
                      </div>
                      
                      {/* Corner Accent */}
                      <div className="absolute bottom-0 right-0 z-20 w-32 h-32 bg-linear-to-tl from-[#29ABE2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 p-10 bg-linear-to-br from-white/95 to-blue-50/30 relative">
                      {/* Decorative Accent */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-1 bg-linear-to-r from-[#29ABE2] via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-400/60"></div>
                        <div className="w-3 h-3 rounded-full bg-linear-to-br from-[#29ABE2] to-cyan-500 shadow-lg shadow-blue-400/50"></div>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl text-slate-900 mb-3 group-hover:text-[#29ABE2] transition-colors duration-300">
                        {leadership[0].name}
                      </h3>
                      <p className="text-xl text-[#29ABE2] mb-6 tracking-wide">
                        {leadership[0].title}
                      </p>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {leadership[0].bio}
                      </p>
                      
                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-transparent via-[#29ABE2]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Second Level - CFO and Business Operations */}
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
              {leadership.slice(1, 3).map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className="relative group flex cursor-pointer"
                >
                  {/* Enhanced Glow Effect */}
                  <div className="absolute -inset-5 bg-linear-to-br from-[#29ABE2]/40 via-cyan-400/30 to-blue-500/40 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:blur-3xl"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[1.75rem]"></div>
                  
                  <div className="relative bg-linear-to-br from-white via-white to-blue-50/30 backdrop-blur-2xl rounded-[1.75rem] overflow-hidden border border-white/80 shadow-2xl shadow-slate-900/10 flex flex-col w-full group-hover:border-[#29ABE2]/30 transition-all duration-500">
                    {/* Image Section */}
                    <div className="relative aspect-square overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-blue-100/50 z-0"></div>
                      <ImageWithFallback
                        src={leader.image}
                        alt={leader.name}
                        className="relative z-10 w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-5 right-5 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                        <div className="bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-xl px-3 py-1.5 shadow-lg shadow-blue-500/50">
                          <span className="text-xs text-white">Leadership</span>
                        </div>
                      </div>
                      
                      {/* Corner Accent */}
                      <div className="absolute bottom-0 left-0 z-20 w-full h-28 bg-linear-to-t from-[#29ABE2]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Section */}
                    <div className="relative p-8 grow flex flex-col bg-linear-to-b from-white/95 to-blue-50/40">
                      {/* Accent Line with Glow */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex-1 h-0.5 bg-linear-to-r from-[#29ABE2] via-cyan-400 to-blue-500 rounded-full shadow-md shadow-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-400/70 transition-shadow duration-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-linear-to-br from-[#29ABE2] to-cyan-500 shadow-md shadow-blue-400/50"></div>
                      </div>
                      
                      <h3 className="text-2xl text-slate-900 mb-2 group-hover:text-[#29ABE2] transition-colors duration-300">
                        {leader.name}
                      </h3>
                      <p className="text-lg text-[#29ABE2] mb-4 tracking-wide">
                        {leader.title}
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        {leader.bio}
                      </p>
                      
                      {/* Bottom Gradient Accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#29ABE2]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technical Consultants Section */}
          <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-4">
                  Technical Consultants
                </h3>
                <p className="text-lg text-slate-600">
                  Expert engineering guidance and technical solutions
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {leadership.slice(3, 7).map((leader, index) => (
                  <motion.div
                    key={leader.name}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="relative group cursor-pointer flex"
                  >
                    {/* Animated Glow Effect */}
                    <div className="absolute -inset-4 bg-linear-to-br from-[#29ABE2]/40 via-cyan-400/30 to-blue-500/40 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:blur-3xl"></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute -inset-0.5 bg-linear-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[1.75rem]"></div>
                    
                    <div className="relative bg-linear-to-br from-white via-white to-blue-50/30 backdrop-blur-2xl rounded-[1.75rem] overflow-hidden border border-white/80 shadow-2xl shadow-slate-900/10 group-hover:border-[#29ABE2]/30 transition-all duration-500 flex flex-col w-full">
                      {/* Image Section with Overlay */}
                      <div className="relative aspect-square overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-blue-100/50 z-0"></div>
                        <ImageWithFallback
                          src={leader.image}
                          alt={leader.name}
                          className="relative z-10 w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                        
                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                          <div className="bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-full px-3 py-1.5 shadow-lg shadow-blue-500/50">
                            <span className="text-xs text-white">View Profile</span>
                          </div>
                        </div>
                        
                        {/* Corner Accent */}
                        <div className="absolute bottom-0 left-0 z-20 w-full h-24 bg-linear-to-t from-[#29ABE2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Content Section */}
                      <div className="relative p-6 bg-linear-to-b from-white/95 to-blue-50/40 flex flex-col grow">
                        {/* Accent Line with Glow */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex-1 h-0.5 bg-linear-to-r from-[#29ABE2] via-cyan-400 to-blue-500 rounded-full shadow-md shadow-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-400/70 transition-shadow duration-500"></div>
                          <div className="w-2 h-2 rounded-full bg-linear-to-br from-[#29ABE2] to-cyan-500 shadow-md shadow-blue-400/50"></div>
                        </div>
                        
                        <h4 className="text-lg text-slate-900 mb-2 group-hover:text-[#29ABE2] transition-colors duration-300">
                          {leader.name}
                        </h4>
                        <p className="text-sm text-[#29ABE2] mb-3 tracking-wide">
                          {leader.title}
                        </p>
                        <p className="text-xs text-slate-700 leading-relaxed line-clamp-3">
                          {leader.bio}
                        </p>
                        
                        {/* Bottom Gradient Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#29ABE2]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sales Consultants Section */}
            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-4">
                  Sales Consultants
                </h3>
                <p className="text-lg text-slate-600">
                  Dedicated professionals delivering exceptional customer service
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {leadership.slice(7, 13).map((leader, index) => (
                  <motion.div
                    key={leader.name}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.12, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="relative group cursor-pointer"
                  >
                    {/* Animated Glow Effect */}
                    <div className="absolute -inset-4 bg-linear-to-br from-cyan-400/40 via-blue-400/30 to-[#29ABE2]/40 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:blur-3xl"></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute -inset-0.5 bg-linear-to-r from-transparent via-cyan-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[1.75rem]"></div>
                    
                    <div className="relative bg-linear-to-br from-white via-white to-cyan-50/30 backdrop-blur-2xl rounded-[1.75rem] overflow-hidden border border-white/80 shadow-2xl shadow-slate-900/10 group-hover:border-cyan-400/30 transition-all duration-500">
                      {/* Image Section with Overlay */}
                      <div className="relative aspect-square overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-cyan-100/50 z-0"></div>
                        <ImageWithFallback
                          src={leader.image}
                          alt={leader.name}
                          className="relative z-10 w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                        
                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                          <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-full px-3 py-1.5 shadow-lg shadow-cyan-500/50">
                            <span className="text-xs text-white">View Profile</span>
                          </div>
                        </div>
                        
                        {/* Corner Accent */}
                        <div className="absolute bottom-0 left-0 z-20 w-full h-24 bg-linear-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Content Section */}
                      <div className="relative p-6 bg-linear-to-b from-white/95 to-cyan-50/40">
                        {/* Accent Line with Glow */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex-1 h-0.5 bg-linear-to-r from-cyan-500 via-blue-400 to-cyan-600 rounded-full shadow-md shadow-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/70 transition-shadow duration-500"></div>
                          <div className="w-2 h-2 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-400/50"></div>
                        </div>
                        
                        <h4 className="text-lg text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                          {leader.name}
                        </h4>
                        <p className="text-sm text-cyan-600 mb-3 tracking-wide">
                          {leader.title}
                        </p>
                        <p className="text-xs text-slate-700 leading-relaxed line-clamp-3">
                          {leader.bio}
                        </p>
                        
                        {/* Bottom Gradient Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Centered Sales Consultant with Slider Animation */}
              <div className="max-w-md mx-auto mt-12">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 80,
                    delay: 0.3 
                  }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="relative group cursor-pointer"
                >
                  {/* Animated Glow Effect */}
                  <motion.div 
                    className="absolute -inset-6 bg-linear-to-br from-cyan-400/50 via-[#29ABE2]/40 to-blue-500/50 rounded-[2.5rem] blur-3xl opacity-60"
                    animate={{
                      opacity: [0.6, 0.8, 0.6],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  {/* Shimmer Effect */}
                  <motion.div 
                    className="absolute -inset-0.5 bg-linear-to-r from-transparent via-cyan-200/80 to-transparent rounded-4xl"
                    animate={{
                      x: [-200, 200],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  ></motion.div>
                  
                  <div className="relative bg-linear-to-br from-white via-white to-cyan-50/40 backdrop-blur-2xl rounded-4xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-500">
                    {/* Image Section with Overlay */}
                    <div className="relative aspect-square overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-cyan-100/60 z-0"></div>
                      <ImageWithFallback
                        src={leadership[17].image}
                        alt={leadership[17].name}
                        className="relative z-10 w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ease-out"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-900/70 via-slate-900/30 to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                        <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-full px-3 py-1.5 shadow-lg shadow-cyan-500/50">
                          <span className="text-xs text-white">View Profile</span>
                        </div>
                      </div>
                      
                      {/* Corner Accent */}
                      <div className="absolute bottom-0 left-0 z-20 w-full h-32 bg-linear-to-t from-cyan-500/30 to-transparent opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Section */}
                    <div className="relative p-8 bg-linear-to-b from-white/95 to-cyan-50/50">
                      {/* Accent Line with Glow */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex-1 h-1 bg-linear-to-r from-cyan-500 via-[#29ABE2] to-blue-500 rounded-full shadow-lg shadow-cyan-400/70"></div>
                        <motion.div 
                          className="w-3 h-3 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-400/70"
                          animate={{
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              "0 0 20px rgba(6, 182, 212, 0.7)",
                              "0 0 30px rgba(6, 182, 212, 0.9)",
                              "0 0 20px rgba(6, 182, 212, 0.7)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                      </div>
                      
                      <h4 className="text-2xl text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                        {leadership[17].name}
                      </h4>
                      <p className="text-lg text-cyan-600 mb-4 tracking-wide">
                        {leadership[17].title}
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        {leadership[17].bio}
                      </p>
                      
                      {/* Bottom Gradient Accent */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-transparent via-cyan-500/70 to-transparent"
                        animate={{
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Digital Marketing Consultants Section */}
            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-4">
                  Digital Marketing Consultants
                </h3>
                <p className="text-lg text-slate-600">
                  Driving online presence and digital engagement strategies
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {leadership.slice(13, 17).map((leader, index) => (
                  <motion.div
                    key={leader.name}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="relative group cursor-pointer"
                  >
                    {/* Animated Glow Effect */}
                    <div className="absolute -inset-4 bg-linear-to-br from-blue-500/40 via-cyan-400/30 to-blue-600/40 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:blur-3xl"></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute -inset-0.5 bg-linear-to-r from-transparent via-blue-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[1.75rem]"></div>
                    
                    <div className="relative bg-linear-to-br from-white via-white to-blue-50/40 backdrop-blur-2xl rounded-[1.75rem] overflow-hidden border border-white/80 shadow-2xl shadow-slate-900/10 group-hover:border-blue-400/30 transition-all duration-500">
                      {/* Image Section with Overlay */}
                      <div className="relative aspect-square overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-blue-100/60 z-0"></div>
                        <ImageWithFallback
                          src={leader.image}
                          alt={leader.name}
                          className="relative z-10 w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                        
                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                          <div className="bg-linear-to-br from-blue-600 to-cyan-500 rounded-full px-3 py-1.5 shadow-lg shadow-blue-500/50">
                            <span className="text-xs text-white">View Profile</span>
                          </div>
                        </div>
                        
                        {/* Corner Accent */}
                        <div className="absolute bottom-0 left-0 z-20 w-full h-24 bg-linear-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Content Section */}
                      <div className="relative p-6 bg-linear-to-b from-white/95 to-blue-50/50">
                        {/* Accent Line with Glow */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex-1 h-0.5 bg-linear-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full shadow-md shadow-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-400/70 transition-shadow duration-500"></div>
                          <div className="w-2 h-2 rounded-full bg-linear-to-br from-blue-600 to-cyan-500 shadow-md shadow-blue-400/50"></div>
                        </div>
                        
                        <h4 className="text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {leader.name}
                        </h4>
                        <p className="text-sm text-blue-600 mb-3 tracking-wide">
                          {leader.title}
                        </p>
                        <p className="text-xs text-slate-700 leading-relaxed line-clamp-3">
                          {leader.bio}
                        </p>
                        
                        {/* Bottom Gradient Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

        
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-linear-to-br from-[#29ABE2]/5 to-cyan-300/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-linear-to-br from-blue-400/5 to-cyan-300/5 blur-3xl"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-white via-slate-50 to-blue-50/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Guiding principles that drive our success
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-linear-to-br from-[#29ABE2]/30 to-cyan-400/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative h-full bg-white/90 backdrop-blur-2xl rounded-3xl p-10 border border-white/70 shadow-2xl shadow-blue-500/10">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#29ABE2] to-cyan-500 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/30">
                  <Award className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-3xl text-slate-800 mb-6">Our Mission</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To provide high-quality industrial piping systems and related products that meet international standards, ensuring customer satisfaction through reliable service, technical expertise, and innovative solutions.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative h-full bg-white/90 backdrop-blur-2xl rounded-3xl p-10 border border-white/70 shadow-2xl shadow-cyan-500/10">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 shadow-xl shadow-cyan-500/30">
                  <Globe className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-3xl text-slate-800 mb-6">Our Vision</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To be the leading provider of industrial piping solutions in the Philippines, recognized for our commitment to quality, innovation, and customer success in all sectors we serve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-linear-to-br from-[#29ABE2]/5 to-cyan-300/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-linear-to-br from-blue-400/5 to-cyan-300/5 blur-3xl"></div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-6">
              Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The foundation of everything we do
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Excellence', description: 'Commitment to delivering the highest quality in every project' },
              { icon: Users, title: 'Integrity', description: 'Building trust through honest and transparent business practices' },
              { icon: Globe, title: 'Innovation', description: 'Continuously adapting to meet evolving industry needs' },
              { icon: Building2, title: 'Customer Focus', description: 'Putting our clients\' success at the heart of our operations' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute -inset-3 bg-linear-to-br from-[#29ABE2]/20 to-cyan-400/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative h-full bg-white/80 backdrop-blur-2xl rounded-2xl p-8 border border-white/60 shadow-xl shadow-black/5">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#29ABE2] to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                    <value.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-linear-to-br from-cyan-300/5 to-blue-300/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-linear-to-br from-[#29ABE2]/5 to-cyan-300/5 blur-3xl"></div>
      </section>
    </div>
  );
}