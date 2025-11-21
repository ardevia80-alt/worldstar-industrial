/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FileText, Download, BookOpen, X, ChevronLeft, ChevronRight, File, FolderOpen, Archive, ScrollText } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export function DownloadsPage() {
  const [viewingFile, setViewingFile] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with split reveal
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        });
      }

      // Animate description
      if (descRef.current) {
        gsap.from(descRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
        });
      }

      // Floating icons animation
      floatingIconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.to(icon, {
            y: -20,
            rotation: 360,
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });

          // Random horizontal drift
          gsap.to(icon, {
            x: Math.random() * 30 - 15,
            duration: 4 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        }
      });

      // Particles animation
      particlesRef.current.forEach((particle, _index) => {
        if (particle) {
          gsap.to(particle, {
            y: -100,
            opacity: 0,
            duration: 2 + Math.random() * 2,
            repeat: -1,
            ease: 'power1.out',
            delay: Math.random() * 2,
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const documents = [
    {
      id: 'company-profile',
      name: 'World Star Company Profile',
      description: 'Discover WSISCo\'s 30+ years of excellence in industrial supply. Learn about our heritage, values, global partnerships, and commitment to engineering excellence.',
      size: '8.5 MB',
      type: 'PDF',
      pages: 24,
      icon: BookOpen,
      gradient: 'from-[#29ABE2] to-cyan-500',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F1.jpg?alt=media&token=c08d6cb7-49ce-4c6f-85e0-9b5058157483',
      // 👇 PASTE YOUR COMPANY PROFILE DOWNLOAD LINK HERE 👇
      downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWSISCo.%20Company%20Profile%202025%20(1).pdf?alt=media&token=9ada4afa-001d-45f3-bdd1-145c36a12e7f',
      // 👇 PASTE YOUR COMPANY PROFILE PAGE PREVIEW JPG URLS HERE 👇
      // Add as many pages as you want to show in preview (recommended: 6-12 pages)
      previewPages: [
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F1.jpg?alt=media&token=c08d6cb7-49ce-4c6f-85e0-9b5058157483',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F2.jpg?alt=media&token=7dec8418-7380-4a7e-be81-7e7d585c5d60',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F3.jpg?alt=media&token=000872d2-1204-4863-ba5b-c4f9c28701ad',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F4.jpg?alt=media&token=1d36f0c9-2e8a-42bd-a248-3a1394daf231',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F5.jpg?alt=media&token=0dc833dd-09b1-4f1c-a4ba-7b9ddbdf4697',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F6.jpg?alt=media&token=20285fe6-6f8d-4bb3-8ce8-77ae30030cd4',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F7.jpg?alt=media&token=c3cbb30f-f141-4460-97a7-ba1947971a3e',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F8.jpg?alt=media&token=6fb86dca-f765-46fc-aadc-8ad7f63199fb',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F9.jpg?alt=media&token=8977c9c9-b225-4c32-bb56-afe4a8f2de70',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F10.jpg?alt=media&token=4b19caf5-7673-4151-82b8-3866c8b14438',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F11.jpg?alt=media&token=cc46b1b7-a3d0-498d-9388-8ce23724dfd8',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2F12.jpg?alt=media&token=01c4679a-9230-4fb9-abaa-9028ac9d7856'
      ],
    },
    {
      id: 'product-catalogue',
      name: 'WF Product Catalogue',
      description: 'Comprehensive technical specifications, product ranges, and applications for our complete line of industrial piping systems and components.',
      size: '15.2 MB',
      type: 'PDF',
      pages: 68,
      icon: FileText,
      gradient: 'from-cyan-400 to-[#29ABE2]',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FWF-removebg-preview.png?alt=media&token=f54068fb-bd9f-4c87-b638-37a78097387d',
      // 👇 PASTE YOUR WF PRODUCT CATALOGUE DOWNLOAD LINK HERE 👇
      downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF%20Catalogue.pdf?alt=media&token=d37e3a45-b290-4111-b4ae-47eba9346750',
      // 👇 PASTE YOUR WF PRODUCT CATALOGUE PAGE PREVIEW JPG URLS HERE 👇
      // Add as many pages as you want to show in preview (recommended: 6-12 pages)
      previewPages: [
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-1.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-2.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-3.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-4.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-5.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-6.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-7.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-8.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-9.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-10.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-11.jpg?alt=media&token=YOUR_TOKEN_HERE',
        'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FWF-Catalogue%2Fwf-12.jpg?alt=media&token=YOUR_TOKEN_HERE',
      ],
    },
  ];

  const handleView = (fileId: string) => {
    setViewingFile(fileId);
    setCurrentPage(1);
  };

  const handleClose = () => {
    setViewingFile(null);
    setCurrentPage(1);
  };

  const handleDownload = (_fileName: string, downloadUrl: string) => {
    // Open download link in new tab
    window.open(downloadUrl, '_blank');
  };

  const currentDoc = documents.find(doc => doc.id === viewingFile);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Hero Section - Redesigned with GSAP */}
      <section className="relative pt-32 pb-32 overflow-hidden" ref={heroRef}>
        {/* Layered Background Gradients */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1e3a5f] via-[#29ABE2] to-[#2c5282]"></div>
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#29ABE2]/30 to-cyan-400/20"></div>
        
        {/* Animated Background Image with Parallax */}
        <div className="absolute inset-0 opacity-15">
          <ImageWithFallback
            src="https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Downloads%20page%2FDownload%20Bg.png?alt=media&token=a27426f2-79ea-413a-ad3a-7aab419c7ce5"
            alt="Technical Documents"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 45%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.05) 55%, transparent 55%),
              linear-gradient(-30deg, transparent 45%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.05) 55%, transparent 55%)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            
            <div
              key={`particle-${i}`}
              // @ts-expect-error
              ref={el => particlesRef.current[i] = el}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
          
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Floating Document Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Icon 1 - Top Left */}
          <div
          // @ts-expect-error
            ref={el => floatingIconsRef.current[0] = el}
            className="absolute top-20 left-[10%] opacity-20"
          >
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <FileText className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Icon 2 - Top Right */}
          <div
          // @ts-expect-error
            ref={el => floatingIconsRef.current[1] = el}
            className="absolute top-32 right-[15%] opacity-15"
          >
            <div className="p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <FolderOpen className="w-14 h-14 text-white" />
            </div>
          </div>

          {/* Icon 3 - Middle Left */}
          <div
          // @ts-expect-error
            ref={el => floatingIconsRef.current[2] = el}
            className="absolute top-1/2 left-[5%] opacity-10"
          >
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Archive className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Icon 4 - Middle Right */}
          <div
          // @ts-expect-error
            ref={el => floatingIconsRef.current[3] = el}
            className="absolute top-1/3 right-[8%] opacity-15"
          >
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <ScrollText className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Icon 5 - Bottom Left */}
          <div
          // @ts-expect-error
            ref={el => floatingIconsRef.current[4] = el}
            className="absolute bottom-20 left-[20%] opacity-10"
          >
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <File className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Icon 6 - Bottom Right */}
          <div
          // @ts-expect-error
            ref={el => floatingIconsRef.current[5] = el}
            className="absolute bottom-32 right-[25%] opacity-20"
          >
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#29ABE2]/10 rounded-full blur-3xl"></div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="px-6 py-2.5 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full shadow-2xl">
                <span className="text-white/95 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Resource Center
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 
              ref={titleRef}
              className="text-white mb-8 text-center"
            >
              <span className="block mb-2">Downloads & Resources</span>
              <span className="block text-3xl text-white/80">Your Gateway to Technical Excellence</span>
            </h1>

            {/* Description */}
            <p 
              ref={descRef}
              className="text-xl text-white/90 leading-relaxed text-center max-w-3xl mx-auto"
            >
              Access our comprehensive company profile & technical catalogues.
              Everything you need to make informed decisions.
            </p>
          </div>
        </div>

        {/* Animated Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-20 md:h-28"
          >
            <path
              d="M0,64 C360,0 720,128 1080,64 C1440,0 1440,120 1440,120 L0,120 Z"
              fill="rgba(248, 250, 252, 1)"
              className="animate-[wave_8s_ease-in-out_infinite]"
            />
            <path
              d="M0,80 C360,32 720,128 1080,80 C1440,32 1440,120 1440,120 L0,120 Z"
              fill="rgba(248, 250, 252, 0.8)"
              className="animate-[wave_6s_ease-in-out_infinite_reverse]"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="px-6 py-2 bg-linear-to-r from-[#29ABE2]/10 to-cyan-400/10 backdrop-blur-sm border border-[#29ABE2]/20 rounded-full">
                <span className="text-[#29ABE2]">Available Resources</span>
              </div>
            </div>
            <h2 className="text-[#1e3a5f] mb-6">Company Documents</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Download or preview our comprehensive company profile and product catalogue
            </p>
          </motion.div>

          {/* Document Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute -inset-0.5 bg-linear-to-r ${doc.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                
                {/* Card Container */}
                <div className="relative bg-linear-to-br from-white via-white to-blue-50/30 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                  {/* Top Accent Bar with Shimmer */}
                  <div className={`h-2 bg-linear-to-r ${doc.gradient} animate-[shimmer_3s_ease-in-out_infinite]`}></div>
                  
                  {/* Document Preview/Cover */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={doc.coverImage}
                      alt={doc.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-t ${doc.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <doc.icon className="w-6 h-6 text-[#29ABE2]" />
                      </div>
                    </div>

                    {/* Document Type Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="px-4 py-1.5 bg-white/95 backdrop-blur-sm border border-white/40 rounded-full shadow-lg">
                        <span className="text-[#29ABE2] text-sm">{doc.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    {/* Document Info */}
                    <div className="mb-4">
                      <h3 className="text-[#1e3a5f] mb-3 group-hover:text-[#29ABE2] transition-colors duration-300">
                        {doc.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {doc.description}
                      </p>
                      
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full bg-linear-to-r ${doc.gradient}`}></div>
                          <span>{doc.pages} pages</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full bg-linear-to-r ${doc.gradient}`}></div>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <button 
                        onClick={() => handleView(doc.id)}
                        className={`flex-1 px-6 py-3.5 bg-linear-to-r ${doc.gradient} text-white rounded-xl hover:shadow-[0_8px_30px_rgba(41,171,226,0.4)] transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center gap-2`}
                      >
                        <BookOpen className="w-5 h-5" />
                        <span>View Preview</span>
                      </button>
                      <button 
                        onClick={() => handleDownload(doc.name, doc.downloadUrl)}
                        className="px-6 py-3.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-[#29ABE2] hover:text-[#29ABE2] hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Bottom Gradient Accent */}
                  <div className={`h-1 bg-linear-to-r from-transparent via-[#29ABE2]/50 to-transparent`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Help Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              {/* Background Glow */}
              <div className="absolute -inset-2 bg-linear-to-r from-[#29ABE2]/20 to-cyan-400/20 rounded-2xl blur-xl"></div>
              
              {/* CTA Card */}
              <div className="relative bg-linear-to-br from-white/80 to-blue-50/60 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg">
                <p className="text-gray-700 mb-4 text-lg">
                  Need more information or have specific requirements?
                </p>
                <button className="px-8 py-3 bg-white text-[#29ABE2] border-2 border-[#29ABE2]/30 rounded-xl hover:bg-[#29ABE2] hover:text-white hover:border-[#29ABE2] transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Contact Our Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Document Viewer - Book Reading Mockup */}
      {viewingFile && currentDoc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-linear-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl h-[85vh]"
          >
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 z-50 hover:scale-110"
              onClick={handleClose}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Book Container with 3D Perspective */}
            <div className="relative w-full h-full" style={{ perspective: '2000px' }}>
              {/* Book Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[95%] h-8 bg-black/30 blur-2xl rounded-full"></div>

              {/* Open Book */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Book Pages Container */}
                <div className="relative w-full h-full bg-linear-to-b from-amber-50 to-amber-100/50 rounded-lg shadow-2xl overflow-hidden flex">
                  
                  {/* Left Page */}
                  <div className="flex-1 relative border-r-2 border-amber-200/50">
                    {/* Page Texture */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(139, 69, 19, 0.1) 2px,
                        rgba(139, 69, 19, 0.1) 4px
                      )`
                    }}></div>

                    {/* Page Content */}
                    <div className="relative h-full p-12 overflow-hidden">
                      {/* Page Number */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-amber-700/60 text-sm">
                        {currentPage}
                      </div>

                      {/* Document Preview - Left Page */}
                      <div className="h-full bg-white rounded-lg shadow-inner overflow-hidden">
                        {currentDoc.previewPages && currentDoc.previewPages.length > 0 && currentDoc.previewPages[currentPage - 1] ? (
                          // Show actual page from previewPages array
                          <ImageWithFallback
                            src={currentDoc.previewPages[currentPage - 1]}
                            alt={`${currentDoc.name} - Page ${currentPage}`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          // Fallback if no preview pages uploaded yet
                          <>
                            <ImageWithFallback
                              src={currentDoc.coverImage}
                              alt={`${currentDoc.name} - Page ${currentPage}`}
                              className="w-full h-full object-cover"
                            />
                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-[2px]">
                              <div className="text-center text-white p-8">
                                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                <p className="text-lg opacity-90">Preview Mode</p>
                                <p className="text-sm opacity-70 mt-2">Full document available after download</p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Left Page Curl Effect */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-amber-200/30 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Book Spine/Center */}
                  <div className="w-8 bg-linear-to-r from-amber-200/80 via-amber-300/60 to-amber-200/80 shadow-inner relative">
                    <div className="absolute inset-y-0 left-1/2 w-px bg-amber-400/50"></div>
                  </div>

                  {/* Right Page */}
                  <div className="flex-1 relative border-l-2 border-amber-200/50">
                    {/* Page Texture */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(139, 69, 19, 0.1) 2px,
                        rgba(139, 69, 19, 0.1) 4px
                      )`
                    }}></div>

                    {/* Page Content */}
                    <div className="relative h-full p-12 overflow-hidden">
                      {/* Page Number */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-amber-700/60 text-sm">
                        {currentPage + 1}
                      </div>

                      {/* Document Preview - Right Page */}
                      <div className="h-full bg-white rounded-lg shadow-inner overflow-hidden">
                        {currentDoc.previewPages && currentDoc.previewPages.length > 1 && currentDoc.previewPages[currentPage] ? (
                          // Show next page from previewPages array
                          <ImageWithFallback
                            src={currentDoc.previewPages[currentPage]}
                            alt={`${currentDoc.name} - Page ${currentPage + 1}`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          // Fallback to document info if no more preview pages
                          <div className="h-full p-8 overflow-y-auto">
                            <div className="max-w-xl">
                              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r ${currentDoc.gradient} rounded-full mb-6`}>
                                <currentDoc.icon className="w-5 h-5 text-white" />
                                <span className="text-white text-sm">{currentDoc.type}</span>
                              </div>

                              <h3 className="text-2xl text-[#1e3a5f] mb-4">
                                {currentDoc.name}
                              </h3>

                              <p className="text-gray-600 leading-relaxed mb-8">
                                {currentDoc.description}
                              </p>

                              {/* Document Details */}
                              <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-gray-700">
                                  <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${currentDoc.gradient} flex items-center justify-center`}>
                                    <FileText className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">Total Pages</div>
                                    <div className="font-medium">{currentDoc.pages} pages</div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-700">
                                  <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${currentDoc.gradient} flex items-center justify-center`}>
                                    <Download className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">File Size</div>
                                    <div className="font-medium">{currentDoc.size}</div>
                                  </div>
                                </div>
                              </div>

                              {/* Download CTA */}
                              <button
                                onClick={() => handleDownload(currentDoc.name, currentDoc.downloadUrl)}
                                className={`w-full px-6 py-4 bg-linear-to-r ${currentDoc.gradient} text-white rounded-xl hover:shadow-[0_8px_30px_rgba(41,171,226,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3`}
                              >
                                <Download className="w-5 h-5" />
                                <span>Download Full Document</span>
                              </button>

                              {/* Sample Content Indicator */}
                              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                <p className="text-sm text-amber-900">
                                  <span className="font-medium">📖 Preview Mode:</span> This is a preview. Download the full document to access all {currentDoc.pages} pages with detailed content.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Page Curl Effect */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-bl from-amber-200/30 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage(prev => Math.max(prev - 2, 1));
                }}
                disabled={currentPage <= 1}
                className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-white text-sm min-w-[120px] text-center">
                <span className="font-medium">Pages {currentPage}-{Math.min(currentPage + 1, currentDoc.pages)}</span>
                <span className="text-white/60"> of {currentDoc.pages}</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage(prev => Math.min(prev + 2, currentDoc.pages - 1));
                }}
                disabled={currentPage >= currentDoc.pages - 1}
                className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}