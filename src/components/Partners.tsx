import { motion } from "motion/react";
import { Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Partners() {
  const partners = [
    {
      name: "GF Piping Systems",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FGF-removebg-preview.png?alt=media&token=79ce383c-bd37-4d04-a34d-98b82e36e529",
    },
    {
      name: "WF Xiamen Keheng Plastic Co. Ltd",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FWF-removebg-preview.png?alt=media&token=f54068fb-bd9f-4c87-b638-37a78097387d",
    },
    {
      name: "Dragonpipe HDPE",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FLogo__1_-removebg-preview.png?alt=media&token=bf681b4e-e3fb-425f-a3db-2a5b60919de0",
    },
    {
      name: "KSB",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FKSB-removebg-preview.png?alt=media&token=f877a40c-702e-462e-9706-b10e14e73f77",
    },
    {
      name: "Grundfos",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FGrundfos-removebg-preview.png?alt=media&token=6eba0952-eb14-4db3-bd56-5f28924a4b05",
    },
    {
      name: "Winters",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FWinters-removebg-preview.png?alt=media&token=1050e746-d306-4c8b-88e6-db218a7ea173",
    },
    {
      name: "Wilo Pumps",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FWilo-removebg-preview.png?alt=media&token=c7393dde-f6ac-4e61-8eb1-e1fcec6e8e3e",
    },
    {
      name: "DFP",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FDFP-removebg-preview.png?alt=media&token=d3b03eeb-6c46-486c-ae7f-c6ad7d0398ea",
    },
    {
      name: "Gcast",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FGcast-removebg-preview.png?alt=media&token=2d8a94e3-fb34-4648-b5bb-c87f41f4e0ee",
    },
    {
      name: "Rochling",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FRochling-removebg-preview.png?alt=media&token=cff137e7-29cf-4d0d-b00a-5a61c7257252",
    },
    {
      name: "Harmsco",
      logo: "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FHarmsco-removebg-preview.png?alt=media&token=ec78d64c-fd29-4d86-b016-453d00eea5a9",
    },
  ];

  const certifications = [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "OHSAS 18001",
    "Philippine Standards",
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-linear-to-br from-[#29ABE2] via-cyan-500 to-blue-500">
      {/* Curved Wave Top - smooth transition from Products */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <defs>
            <linearGradient
              id="partnersWaveTop"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#f8fafc", stopOpacity: 0.9 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#f1f5f9", stopOpacity: 0.95 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#e0f2fe", stopOpacity: 0.9 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L0,60 Q300,120 600,60 T1200,60 L1200,0 Z"
            fill="url(#partnersWaveTop)"
          />
        </svg>
      </div>

      {/* Curved Wave Bottom - smooth transition to Contact */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="#f8fafc"
            opacity="0.2"
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
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Global Partners
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Sourcing premium industrial products from world-renowned
            manufacturers
          </p>
        </motion.div>

        {/* Partner Logos */}
        <div className="relative mb-20 overflow-hidden">
          {/* Center Spotlight Effect */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-80 z-20 pointer-events-none">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-yellow-200/40 to-transparent blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse-glow"></div>
          </div>

          {/* Infinite Carousel Container */}
          <div className="flex gap-6 animate-infinite-scroll-fast hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-1`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group shrink-0 w-64 carousel-item"
              >
                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-6 group-hover:bg-white/25 transition-all duration-500">
                  <div className="text-center">
                    <div className="mb-3 transition-transform duration-500">
                      <div className="aspect-4/3 flex items-center justify-center bg-white/90 rounded-lg p-4 transition-all duration-500">
                        <ImageWithFallback
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div className="text-white transition-all duration-500">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-2`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group shrink-0 w-64 carousel-item"
              >
                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-6 group-hover:bg-white/25 transition-all duration-500">
                  <div className="text-center">
                    <div className="mb-3 transition-transform duration-500">
                      <div className="aspect-4/3 flex items-center justify-center bg-white/90 rounded-lg p-4 transition-all duration-500">
                        <ImageWithFallback
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div className="text-white transition-all duration-500">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient fade edges for smooth visual */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-linear-to-r from-[#29ABE2] to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-linear-to-l from-cyan-500 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-2 bg-white/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-12 border border-white/60 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="w-8 h-8 text-[#29ABE2]" />
              <h3 className="text-3xl bg-linear-to-r from-[#29ABE2] to-cyan-600 bg-clip-text text-transparent">
                Quality Certifications
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-linear-to-br from-[#29ABE2]/40 to-cyan-400/40 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-linear-to-br from-[#29ABE2]/10 to-cyan-400/10 backdrop-blur-sm border border-[#29ABE2]/30 rounded-xl p-6 text-center group-hover:border-[#29ABE2]/50 transition-all">
                    <div className="text-[#29ABE2] text-lg">{cert}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-200">
              <div className="text-center">
                <div className="text-4xl bg-linear-to-br from-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-2">
                  6+
                </div>
                <div className="text-slate-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl bg-linear-to-br from-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-slate-600">Global Brands</div>
              </div>
              <div className="text-center">
                <div className="text-4xl bg-linear-to-br from-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-slate-600">Quality Assured</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl"></div>
    </section>
  );
}
