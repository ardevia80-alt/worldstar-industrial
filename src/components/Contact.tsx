import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, Bell, Upload, X, FileText } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [hasConsent, setHasConsent] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Form states
  const [selectedProduct, setSelectedProduct] = useState('');
  const [customProduct, setCustomProduct] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
      toast.success(`${newFiles.length} file(s) uploaded successfully`);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
      toast.success(`${newFiles.length} file(s) uploaded successfully`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    toast.info('File removed');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Main Office',
      details: ['Blk 55 Lot32 Capitoline Hills Co., Abel Nosce BFRV, Las Piñas City, Philippines'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['02 8525 7161', '+63-915-893-1916'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sales@worldstarindustrial.com', 'wsisco.official@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat: 8:00 AM - 5:00 PM'],
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail || !hasConsent) {
      toast.error('Please provide your email and consent to subscribe');
      return;
    }

    // Simulate double opt-in process
    toast.success('Verification email sent!', {
      description: 'Please check your inbox and click the confirmation link to complete your subscription.',
      duration: 5000,
    });
    
    setIsSubscribed(true);
    setNewsletterEmail('');
    setHasConsent(false);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/40 to-white">
      {/* Curved Wave Top with Gradient */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <defs>
            <linearGradient id="contactWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#29ABE2', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#4FC3F7', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#81D4FA', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,0 Q300,100 600,0 T1200,0 L1200,100 L0,100 Z"
            fill="url(#contactWaveGradient)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-6">
            Let's Build Your Solution Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Our expert team is ready to provide personalized support for your industrial needs. Get a free consultation and quote within 24 hours.
          </p>
          
          {/* Quick Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a 
              href="viber://chat?number=%2B639158931916"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/60 backdrop-blur-sm border-[#29ABE2]/30 hover:bg-[#29ABE2]/10 hover:border-[#29ABE2] group"
              >
                <Phone className="mr-2 h-5 w-5 text-[#29ABE2] group-hover:animate-pulse" />
                Chat on Viber
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/60 backdrop-blur-sm border-[#29ABE2]/30 hover:bg-[#29ABE2]/10 hover:border-[#29ABE2] group"
            >
              <Mail className="mr-2 h-5 w-5 text-[#29ABE2]" />
              Email Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/60 backdrop-blur-sm border-[#29ABE2]/30 hover:bg-[#29ABE2]/10 hover:border-[#29ABE2] group"
            >
              <MapPin className="mr-2 h-5 w-5 text-[#29ABE2]" />
              Get Directions
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-linear-to-br from-[#29ABE2]/30 to-cyan-400/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/80">
              <div className="mb-8">
                <h3 className="text-3xl text-slate-800 mb-3">Request a Quote</h3>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="e.g., Juan dela Cruz" 
                    className="bg-white border-slate-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 transition-all" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700">Company *</Label>
                  <Input 
                    id="company" 
                    placeholder="e.g., ABC Manufacturing Inc." 
                    className="bg-white border-slate-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 transition-all" 
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@company.com" 
                    className="bg-white border-slate-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 transition-all" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+63 917 123 4567" 
                    className="bg-white border-slate-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 transition-all" 
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product" className="text-slate-700">What products are you interested in? *</Label>
                <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                  <SelectTrigger className="bg-white border-slate-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20">
                    <SelectValue placeholder="Choose your product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="piping">Thermoplastic Piping Systems</SelectItem>
                    <SelectItem value="valves">Valves & Fittings</SelectItem>
                    <SelectItem value="fasteners">Industrial Fasteners</SelectItem>
                    <SelectItem value="instrumentation">Instrumentation & Control</SelectItem>
                    <SelectItem value="automation">Automation Solutions</SelectItem>
                    <SelectItem value="pumps">Pumps & Flow Equipment</SelectItem>
                    <SelectItem value="other">Other / Multiple Products</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Product Input */}
              <div className="space-y-2">
                <Label htmlFor="customProduct" className="text-slate-700">
                  Or specify your exact product needs
                  <span className="text-slate-500 text-sm ml-2">(Optional)</span>
                </Label>
                <Input 
                  id="customProduct" 
                  placeholder="e.g., PVC Pipes 2 inch diameter, Ball Valves 1/2 inch, etc." 
                  value={customProduct}
                  onChange={(e) => setCustomProduct(e.target.value)}
                  className="bg-white border-slate-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 transition-all"
                />
                <p className="text-xs text-slate-500">
                  💡 You can list specific product codes, sizes, or detailed specifications here
                </p>
              </div>

              {/* File Upload Section */}
              <div className="space-y-2">
                <Label className="text-slate-700">
                  Upload Documents
                  <span className="text-slate-500 text-sm ml-2">(Optional)</span>
                </Label>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
                    isDragging
                      ? 'border-[#29ABE2] bg-blue-50/50 scale-[1.02]'
                      : 'border-slate-300 bg-slate-50/50 hover:border-[#29ABE2] hover:bg-blue-50/30'
                  }`}
                >
                  <input
                    type="file"
                    id="fileUpload"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.dwg,.dxf"
                  />
                  
                  <label
                    htmlFor="fileUpload"
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#29ABE2]/30"
                    >
                      <Upload className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <p className="text-slate-700 mb-2">
                      <span className="text-[#29ABE2] hover:underline">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-slate-500 text-center">
                      Technical drawings, specs, RFQ documents, or images
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      PDF, DOC, XLS, PNG, JPG, DWG, DXF (Max 10MB per file)
                    </p>
                  </label>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2 mt-4"
                  >
                    <p className="text-sm text-slate-600 mb-2">Uploaded Files ({uploadedFiles.length}):</p>
                    {uploadedFiles.map((file, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between bg-white border border-slate-200 rounded-lg p-3 group hover:border-[#29ABE2] transition-all"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5 text-[#29ABE2]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-700 truncate">{file.name}</p>
                            <p className="text-xs text-slate-500">
                              {(file.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="text-slate-400 hover:text-red-500 hover:bg-red-50 shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700">Tell us about your project *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please include details such as: project scope, quantity needed, timeline, technical specifications, or any specific requirements..."
                  rows={5}
                  className="bg-white border-slate-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 transition-all resize-none"
                  required
                />
              </div>

              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-800">Your privacy matters:</strong> We'll only use your information to respond to your inquiry. We never share your details with third parties.
                </p>
              </div>

              <Button className="w-full bg-linear-to-r from-[#29ABE2] to-cyan-500 hover:from-[#2196D4] hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 border-0 group" size="lg">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send My Inquiry
              </Button>

              <p className="text-center text-sm text-slate-500">
                Or call us directly at <a href="tel:+6328477640" className="text-[#29ABE2] hover:underline">+63-2-8-4776400</a>
              </p>
            </form>
          </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative group mb-8">
              <div className="absolute -inset-2 bg-linear-to-br from-[#29ABE2]/20 to-cyan-400/20 rounded-2xl blur opacity-50"></div>
              <div className="relative bg-linear-to-br from-[#29ABE2] to-cyan-500 backdrop-blur-xl rounded-2xl p-8 border border-[#29ABE2]/30 shadow-xl">
                <h3 className="text-2xl text-white mb-4">Why Choose WSISCo?</h3>
                <ul className="space-y-3 text-white/95">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>24-hour quote turnaround time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Expert technical consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Nationwide delivery available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>International quality standards</span>
                  </li>
                </ul>
              </div>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-linear-to-br from-[#29ABE2]/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/60 shadow-xl shadow-blue-500/5 group-hover:border-[#29ABE2]/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-slate-800 mb-2">{info.title}</h4>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-slate-600 text-sm leading-relaxed mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter Subscription Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative">
            {/* Animated Background Gradient */}
            <div className="absolute -inset-8 bg-linear-to-r from-[#29ABE2]/20 via-cyan-400/20 to-[#29ABE2]/20 rounded-3xl blur-3xl opacity-60"></div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-[#29ABE2] via-cyan-400 to-[#29ABE2] rounded-3xl opacity-20 animate-pulse"></div>
              
              <div className="relative bg-linear-to-br from-white via-blue-50/30 to-white backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#29ABE2]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative grid md:grid-cols-2 gap-8 p-10 md:p-12">
                  {/* Left Side - Newsletter Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col justify-center"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-20 h-20 bg-linear-to-br from-[#29ABE2] to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-[#29ABE2]/40 mb-6"
                    >
                      <Bell className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-4xl md:text-5xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-4">
                      Stay Informed
                    </h3>
                    <p className="text-xl text-slate-600 mb-6">
                      Subscribe to receive exclusive industry insights, product updates, and special offers
                    </p>

                    {/* Benefits */}
                    <div className="space-y-4">
                      {[
                        { icon: Sparkles, text: 'Early access to new products' },
                        { icon: CheckCircle2, text: 'Exclusive promotions & discounts' },
                        { icon: Mail, text: 'Technical guides & resources' },
                        { icon: Bell, text: 'Industry news & trends' }
                      ].map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-10 h-10 bg-linear-to-br from-[#29ABE2]/20 to-cyan-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <benefit.icon className="w-5 h-5 text-[#29ABE2]" />
                          </div>
                          <span className="text-slate-700">{benefit.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Side - Subscription Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col justify-center"
                  >
                    {!isSubscribed ? (
                      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-200/50">
                        <div className="mb-6">
                          <h4 className="text-2xl text-slate-800 mb-2">Join Our Community</h4>
                          <p className="text-slate-600">Enter your email to get started</p>
                        </div>

                        <form onSubmit={handleNewsletterSubmit} className="space-y-5">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-linear-to-r from-[#29ABE2] to-cyan-400 rounded-xl opacity-0 group-focus-within:opacity-20 blur transition duration-300"></div>
                            <Input
                              type="email"
                              placeholder="your.email@company.com"
                              value={newsletterEmail}
                              onChange={(e) => setNewsletterEmail(e.target.value)}
                              className="relative bg-white border-slate-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 h-14 text-lg"
                              required
                            />
                          </div>

                          {/* GDPR Consent */}
                          <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-linear-to-br from-blue-50 to-cyan-50/50 rounded-xl p-5 border border-blue-100/50"
                          >
                            <div className="flex items-start gap-3">
                              <Checkbox
                                id="newsletter-consent"
                                checked={hasConsent}
                                onCheckedChange={(checked) => setHasConsent(checked as boolean)}
                                className="mt-1 border-[#29ABE2] data-[state=checked]:bg-[#29ABE2] data-[state=checked]:border-[#29ABE2]"
                              />
                              <label
                                htmlFor="newsletter-consent"
                                className="text-sm text-slate-700 leading-relaxed cursor-pointer"
                              >
                                <strong className="text-slate-800">I consent to receive marketing communications</strong>
                                <br />
                                By subscribing, you agree to our{' '}
                                <a href="#" className="text-[#29ABE2] hover:underline font-medium">Privacy Policy</a> and{' '}
                                <a href="#" className="text-[#29ABE2] hover:underline font-medium">Terms</a>. You can unsubscribe at any time. We are GDPR compliant.
                              </label>
                            </div>
                          </motion.div>

                          <Button
                            type="submit"
                            disabled={!newsletterEmail || !hasConsent}
                            className="w-full bg-linear-to-r from-[#29ABE2] to-cyan-500 hover:from-[#2196D4] hover:to-cyan-600 text-white shadow-lg shadow-[#29ABE2]/30 border-0 h-14 text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Mail className="mr-2 h-5 w-5" />
                            Subscribe Now
                            <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                          </Button>

                          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Double opt-in • Secure • No spam</span>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl border border-green-200/50 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="w-24 h-24 bg-linear-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/40"
                        >
                          <CheckCircle2 className="w-12 h-12 text-white" />
                        </motion.div>
                        
                        <h4 className="text-3xl text-slate-800 mb-3">Almost There!</h4>
                        <p className="text-lg text-slate-600 mb-6">
                          We've sent a confirmation email to your inbox.
                        </p>
                        
                        <div className="bg-white rounded-xl p-5 border border-green-200 mb-6">
                          <p className="text-sm text-slate-700 mb-3">
                            <strong className="text-slate-800">📧 Next Steps:</strong>
                          </p>
                          <ol className="text-left text-sm text-slate-600 space-y-2 ml-4 list-decimal">
                            <li>Check your email inbox</li>
                            <li>Click the verification link</li>
                            <li>You're all set! 🎉</li>
                          </ol>
                        </div>

                        <p className="text-sm text-slate-500">
                          Didn't receive it?{' '}
                          <button
                            onClick={() => setIsSubscribed(false)}
                            className="text-[#29ABE2] hover:underline font-medium"
                          >
                            Try again
                          </button>
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl text-slate-800 mb-3">Visit Our Location</h3>
            <p className="text-slate-600">Find us on the map - Switch to satellite or street view for detailed navigation</p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-2 bg-linear-to-br from-[#29ABE2]/30 to-cyan-400/30 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/80">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15439.834688153845!2d120.97962!3d14.695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzQyLjAiTiAxMjDCsDU4JzQ2LjYiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WSISCo Location - Valenzuela City, Metro Manila"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="bg-linear-to-r from-[#29ABE2]/10 to-cyan-500/10 p-6 border-t border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-[#29ABE2]" />
                    <div>
                      <p className="text-slate-800">Blk 55 Lot32 Capitoline Hills Co., Abel Nosce BFRV, Las Piñas City, Philippines</p>
                      <p className="text-sm text-slate-600">Metro Manila, Philippines</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="bg-white border-[#29ABE2]/30 hover:bg-[#29ABE2] hover:text-white hover:border-[#29ABE2] group transition-all"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              💡 <strong>Tip:</strong> Click on the map controls to switch between map view, satellite view, and street view for better navigation
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-linear-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-tl from-[#29ABE2]/10 to-cyan-300/10 rounded-full blur-3xl"></div>
    </section>
  );
}