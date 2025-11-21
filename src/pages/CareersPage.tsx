/* eslint-disable @typescript-eslint/ban-ts-comment */
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Award, 
  GraduationCap, 
  MapPin, 
  Clock,
  Sparkles,
  Target,
  Rocket,
  Star,
  ArrowRight,
  Search,
  Filter,
  Globe,
  Building2
} from 'lucide-react';

export function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Training at the World Leading Supplier',
      description: 'Get trained by the world\'s leading suppliers and gain expertise in cutting-edge water technology solutions',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Globe,
      title: 'Meet the World\'s Leading Supplier & Technology Providers',
      description: 'Network with global industry leaders and technology innovators in the water infrastructure sector',
      color: 'from-purple-500 to-violet-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-50'
    },
    {
      icon: Award,
      title: 'Exposure to Global Water Technology Exhibits',
      description: 'Attend premier international events: China Water, Japan Water, WEFTEC USA, Malaysia Water',
      color: 'from-emerald-500 to-green-500',
      gradient: 'bg-gradient-to-br from-emerald-50 to-green-50'
    },
    {
      icon: Rocket,
      title: 'Free USA Visa Processing, Roundtrip Ticket & Accommodation',
      description: 'Qualified applicants receive fully-sponsored international training opportunities in the United States',
      color: 'from-amber-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50'
    },
    {
      icon: Target,
      title: '3-Month Stay in the USA per Assignment',
      description: 'Extended immersive training programs in the USA to deepen your expertise and global experience',
      color: 'from-pink-500 to-rose-500',
      gradient: 'bg-gradient-to-br from-pink-50 to-rose-50'
    }
  ];

  const openPositions = [
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Las Piñas City, Metro Manila',
      type: 'Full-time',
      description: 'Drive technical sales of industrial piping systems to contractors, developers, and engineering firms.',
      featured: true
    },
    {
      title: 'Techo Digital Marketing Officer',
      department: 'Digital Marketing',
      location: 'Las Piñas City, Metro Manila',
      type: 'Full-time',
      description: 'Responsible for planning and executing digital marketing campaigns, managing social media and content, and optimizing performance using data-driven strategies.',
      featured: false
    },
    {
      title: 'Techno Purchasing Officer',
      department: 'Purchasing',
      location: 'Las Piñas City, Metro Manila',
      type: 'Full-time',
      description: 'Responsible for sourcing and procuring materials and equipment, negotiating with suppliers, and ensuring timely, cost-effective purchasing to support operational needs.',
      featured: false
    },
    {
      title: 'Sales Consultant',
      department: 'Sales',
      location: 'Las Piñas City, Metro Manila',
      type: 'Full-time',
      description: 'Responsible for identifying customer needs, recommending suitable products or services, and driving sales through effective communication and relationship building.',
      featured: true
    },
  ];

  const departments = ['All', 'Sales', 'Engineering', 'Marketing', 'Customer Service', 'Logistics', 'Procurement'];

  const filteredPositions = selectedDepartment === 'All' 
    ? openPositions 
    : openPositions.filter(pos => pos.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section - BPO Style with Bright, Energetic Vibes */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-6 border border-blue-200/50">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600">Join Our Growing Team</span>
              </div>

              <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                Build Your <span className="bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Dream Career</span> With Us
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join the Philippines' leading industrial supply company where innovation meets opportunity. 
                Be part of a dynamic team that's shaping the future of infrastructure.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Explore Careers
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Our Culture
                </button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2UlMjBicmlnaHR8ZW58MXx8fHwxNzYzMTAwMjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us - BPO Style Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <span className="text-blue-600 text-sm">Employee Benefits</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">Why Join WSISCo?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our people with comprehensive benefits and a culture that celebrates success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`h-full ${benefit.gradient} rounded-2xl p-8 border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className={`w-14 h-14 bg-linear-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at WSISCo - Photo Gallery */}
      <section className="py-20 bg-linear-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-gray-900 mb-4">Life at WSISCo</h2>
            <p className="text-xl text-gray-600">
              See what makes our workplace special
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1514905565314-fea02285fa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlnaHQlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMDk5MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Workspace"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Modern Workspace</h3>
                  <p className="text-sm text-gray-200">Bright, collaborative offices</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691737584-a8f17fb34475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjZWxlYnJhdGluZyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYzMDEyODMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Celebration"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Celebrating Success</h3>
                  <p className="text-sm text-gray-200">Recognition & rewards</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710301431051-ee6923af04aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbHMlMjB3b3JraW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYzMDk5MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Collaboration"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Teamwork</h3>
                  <p className="text-sm text-gray-200">Collaborative culture</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ready to Join Section */}
      <section className="py-20 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 mb-8">
              Find your perfect role and start your journey with us
            </p>

            {/* Search and Filter */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button className="px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
              </div>
            </div>

            {/* Department Tabs */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-blue-500'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job Cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex"
              >
                <div className="flex flex-col w-full bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
                  {position.featured && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-linear-to-r from-amber-400 to-orange-500 text-white text-xs rounded-full mb-4 w-fit">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                  
                  <h3 className="text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {position.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {position.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-blue-600" />
                      {/* @ts-expect-error */}
                      {position.experience}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <a 
                      href="mailto:sales@worldstarindustrial.com?subject=Application for Sales Engineer Position&body=Hello, I would like to apply for the position."
                      className="w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Positions Found */}
          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No positions found in this department</p>
              <button 
                onClick={() => setSelectedDepartment('All')}
                className="text-blue-600 hover:text-blue-700"
              >
                View all positions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join our team and be part of building the infrastructure that powers the Philippine economy. 
              Your future starts here!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                View All Positions
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Learn About Our Culture
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}