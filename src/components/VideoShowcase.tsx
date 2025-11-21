import { motion } from 'motion/react';
import { Play, Youtube } from 'lucide-react';
import { useState } from 'react';

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 'DYSeJfh_LyU',
      title: 'Industrial Piping Solutions',
      description: 'Discover our comprehensive range of thermoplastic piping systems',
      thumbnail: 'https://img.youtube.com/vi/DYSeJfh_LyU/maxresdefault.jpg',
    },
    {
      id: 'coGuUH6OW0U',
      title: 'Innovation in Industrial Supply',
      description: 'See how we deliver quality products and exceptional service',
      thumbnail: 'https://img.youtube.com/vi/coGuUH6OW0U/maxresdefault.jpg',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Curved Wave Top Transition */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <defs>
            <linearGradient id="videoWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#1e293b', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,0 Q300,100 600,0 T1200,0 L1200,100 L0,100 Z"
            fill="url(#videoWaveGradient)"
          />
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-0 w-96 h-96 bg-[#29ABE2]/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#29ABE2]/10 border border-[#29ABE2]/30 rounded-full px-6 py-2 mb-6">
            <Youtube className="w-5 h-5 text-[#29ABE2]" />
            <span className="text-[#29ABE2]">Video Showcase</span>
          </div>
          <h2 className="text-5xl md:text-6xl bg-linear-to-r from-white via-[#29ABE2] to-cyan-400 bg-clip-text text-transparent mb-6">
            See Our Solutions in Action
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Watch how WSISCo delivers world-class industrial solutions across the Philippines
          </p>
        </motion.div>

        {/* Sliding Video Container */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Desktop: Side-by-side with sliding animation */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-linear-to-br from-[#29ABE2]/50 to-cyan-500/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
                    {activeVideo === index ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    ) : (
                      <div 
                        className="relative aspect-video cursor-pointer group/thumbnail"
                        onClick={() => setActiveVideo(index)}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover/thumbnail:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                        
                        {/* Play Button */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-20 h-20 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-[#29ABE2]/50 group-hover/thumbnail:shadow-[#29ABE2]/80 transition-all">
                            <Play className="w-10 h-10 text-white ml-1" fill="white" />
                          </div>
                        </motion.div>

                        {/* Video Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl text-white mb-2">{video.title}</h3>
                          <p className="text-slate-300">{video.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile: Continuous Sliding Animation */}
            <div className="md:hidden relative h-[400px] overflow-hidden">
              <motion.div
                animate={{
                  x: ['0%', '-100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-6 absolute"
                style={{ width: `${videos.length * 2 * 100}%` }}
              >
                {/* Duplicate videos for seamless loop */}
                {[...videos, ...videos].map((video, index) => (
                  <div
                    key={`${video.id}-${index}`}
                    className="relative group shrink-0"
                    style={{ width: `${100 / (videos.length * 2)}%` }}
                  >
                    <div className="absolute -inset-1 bg-linear-to-br from-[#29ABE2]/50 to-cyan-500/50 rounded-3xl blur-xl opacity-50"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl h-full">
                      <div 
                        className="relative aspect-video cursor-pointer group/thumbnail h-full"
                        onClick={() => setActiveVideo(index % videos.length)}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-[#29ABE2]/50">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg text-white mb-1">{video.title}</h3>
                          <p className="text-sm text-slate-300">{video.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Full Screen Video Modal for Mobile */}
            {activeVideo !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="md:hidden fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                onClick={() => setActiveVideo(null)}
              >
                <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute -top-12 right-0 text-white hover:text-[#29ABE2] transition-colors"
                  >
                    <span className="text-2xl">✕ Close</span>
                  </button>
                  <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${videos[activeVideo].id}?autoplay=1`}
                      title={videos[activeVideo].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-slate-400 mb-6">
              Want to learn more about our products and services?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-linear-to-r from-[#29ABE2] to-cyan-500 hover:from-[#2196D4] hover:to-cyan-600 text-white px-8 py-4 rounded-full shadow-lg shadow-[#29ABE2]/30 transition-all hover:shadow-[#29ABE2]/50 hover:scale-105"
            >
              <Youtube className="w-5 h-5" />
              Subscribe to Our Channel
            </a>
          </motion.div>
        </div>
      </div>

      {/* Curved Wave Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <defs>
            <linearGradient id="videoWaveBottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#29ABE2', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#22d3ee', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#29ABE2', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q300,0 600,100 T1200,100 L1200,0 L0,0 Z"
            fill="url(#videoWaveBottomGradient)"
          />
        </svg>
      </div>
    </section>
  );
}
