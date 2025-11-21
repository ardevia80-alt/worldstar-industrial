import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Building2, 
  Globe, 
  MessageSquare,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Show success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        'World Star Industrial Supply Co.',
        'Blk 55 Lot 32 Capitoline Hills Co., Abel Nosce BFRV, Las Piñas City',
        'Metro Manila, Philippines 1440'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+63 (2) 8525-7161',
        'Mobile: +63 915 893 1916'
      ],
      color: 'from-[#29ABE2] to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'sales@worldstarindustrial.com'
      ],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 8:00 AM - 5:00 PM',
        'Sunday: Closed'
      ],
      color: 'from-teal-500 to-emerald-500'
    }
  ];

  const reasons = [
    {
      icon: MessageSquare,
      title: 'Product Inquiries',
      description: 'Get detailed information about our industrial piping systems'
    },
    {
      icon: Users,
      title: 'Technical Support',
      description: 'Expert assistance for installation and specifications'
    },
    {
      icon: Building2,
      title: 'Project Consultation',
      description: 'Discuss your project requirements with our team'
    },
    {
      icon: Globe,
      title: 'Partnership Opportunities',
      description: 'Explore collaboration and distribution possibilities'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#1e3a5f] via-[#2c5282] to-[#29ABE2] opacity-95"></div>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Contact%20us%2FContact%20us%20bg.jpg?alt=media&token=00cab66a-a5d2-4a68-bdb4-69b01515dd1b"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Phone className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-white mb-6">Get in Touch With Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Have questions about our products or services? Our team is ready to assist you. 
              Reach out and let's discuss how we can support your industrial needs.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a 
                href="viber://chat?number=%2B639158931916"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white rounded-xl hover:shadow-[0_8px_30px_rgba(41,171,226,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>Chat on Viber</span>
              </a>
              <button className="px-8 py-4 bg-white border-2 border-[#29ABE2]/30 text-[#29ABE2] rounded-xl hover:bg-[#29ABE2] hover:text-white hover:border-[#29ABE2] transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>Request Quote</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)" fillOpacity="1"/>
          </svg>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e3a5f] mb-4">How Can We Help You?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our dedicated team is here to provide the support and information you need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-[#1e3a5f] mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-[#1e3a5f] mb-3">Send Us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-linear-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-[#1e3a5f] mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll respond to your inquiry shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/50 focus:border-[#29ABE2] transition-all"
                          placeholder="Juan Dela Cruz"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/50 focus:border-[#29ABE2] transition-all"
                          placeholder="juan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/50 focus:border-[#29ABE2] transition-all"
                          placeholder="+63 917 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/50 focus:border-[#29ABE2] transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/50 focus:border-[#29ABE2] transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="quotation">Request for Quotation</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/50 focus:border-[#29ABE2] transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white rounded-xl hover:shadow-[0_8px_30px_rgba(41,171,226,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Office Image */}
              <div className="relative rounded-3xl overflow-hidden h-64 mb-8">
                <ImageWithFallback
                  src="https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Contact%20us%2FVisit.jpg?alt=media&token=ed8fdd4c-45fd-484a-a37d-3e20ab83073b"
                  alt="WSISCo Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1e3a5f]/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="mb-1">Visit Our Office</h3>
                    <p className="text-gray-200 text-sm">We'd love to meet you in person</p>
                  </div>
                </div>
              </div>

              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-linear-to-br ${info.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#1e3a5f] mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-linear-to-br from-[#1e3a5f] via-[#2c5282] to-[#1e3a5f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">Find Us Here</h2>
            <p className="text-gray-200 text-lg">
              Located in the heart of Metro Manila
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              {/* Map Placeholder with City Image */}
              <div className="relative h-96">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1585725657613-b0030aaabccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsaXBwaW5lcyUyMG1hbmlsYSUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc2MzA5ODM0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Manila Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1e3a5f]/40 backdrop-blur-[1px]"></div>
                
                {/* Location Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-8 bg-[#29ABE2]/30 rounded-full blur-xl animate-pulse"></div>
                      <div className="relative w-16 h-16 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Info Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#1e3a5f] mb-2">World Star Industrial Supply Co.</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Blk 55 Lot32 Capitoline Hills Co., Abel Nosce BFRV, Las Piñas City,Philippines
                        </p>
                        <a 
                          href="https://maps.google.com" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#29ABE2] hover:text-cyan-600 transition-colors text-sm"
                        >
                          <span>Get Directions</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-linear-to-r from-[#29ABE2]/20 via-cyan-400/20 to-[#29ABE2]/20 rounded-3xl blur-2xl"></div>
              
              {/* CTA Card */}
              <div className="relative bg-linear-to-br from-white/90 to-blue-50/70 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl text-center">
                <div className="inline-block mb-6">
                  <div className="p-4 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-2xl">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h2 className="text-[#1e3a5f] mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                  Contact our team today for expert consultation and competitive quotations 
                  on all your industrial piping system needs.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="viber://chat?number=%2B639158931916"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white rounded-xl hover:shadow-[0_8px_30px_rgba(41,171,226,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Chat on Viber</span>
                  </a>
                  <button className="px-8 py-4 bg-white border-2 border-[#29ABE2]/30 text-[#29ABE2] rounded-xl hover:bg-[#29ABE2] hover:text-white hover:border-[#29ABE2] transition-all duration-300 hover:scale-105 flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>Request Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}