import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ShoppingCart, 
  Grid3x3,
  List,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
  Package,
  Wrench,
  Gauge,
  ChevronLeft,
  ChevronRight,
  Award,
  ExternalLink
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  corePipingProducts, 
  fittingsProducts, 
  flangesProducts,
  ballValveProducts,
  butterflyValveProducts,
  checkValveProducts,
  diaphragmValveProducts,
  footValveProducts,
  samplingValveProducts,
  yFilterValveProducts,
} from '../data/products';

interface Product {
  id: string;
  name: string;
  category: 'pipes' | 'fittings' | 'valves';
  subcategory: string;
  image: string;
  description: string;
  specs: string[];
  features: string[];
  applications: string[];
  price?: number;
  inStock: boolean;
  datasheet?: string;
  material?: string;
  temperatureRange?: string;
  certifications?: string[];
}

// Main Category Structure
const mainCategories = [
  {
    id: 'pipes',
    label: 'Pipes',
    icon: Package,
    description: 'Industrial Piping Systems',
    image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FPipes.jpg?alt=media&token=b285e77f-aad2-42f0-acc4-f0da34a51efc',
    subcategories: ['All Pipes', 'PE', 'PPH', 'UPVC', 'PPR']
  },
  {
    id: 'fittings',
    label: 'Fittings',
    icon: Wrench,
    description: 'Pipe Fittings & Flanges',
    image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2Ffit-cpvc-ansi-01%20CPVC90%C2%B0%20Elbow%20(ANSI).jpg?alt=media&token=b0c93f3f-814c-4776-b404-169b090408f8',
    subcategories: ['All Fittings', 'CPVC American Standard Pipe Fittings', 'CPVC National Standard Pipe Fittings', 'PPH Butt Welding Pipe Fittings', 'PPH National Standard Pipe Fittings', 'PPR National Standard Pipe Fittings', 'UPVC American Standard Pipe Fittings', 'UPVC Japanese Standard Pipe Fittings', 'UPVC National Standard Pipe Fittings']
  },
  {
    id: 'valves',
    label: 'Valves',
    icon: Gauge,
    description: 'Industrial Control Valves',
    image: 'https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FProd%2023%20Bracket%20integrated%20pneumatic%20double%20by%20the%20ball%20valve.jpg?alt=media&token=e1b0aebd-e812-4ec5-9609-b7ed59348ea1',
    subcategories: ['All Valves', 'Ball Valves', 'Butterfly Valves', 'Check Valves', 'Diaphragm Valves', 'Foot Valves', 'Sampling Valves', 'Y Filter Valves']
  }
];

// Map products to new category structure
const mapProducts = (): Product[] => {
  // Pipes
  const pipes: Product[] = corePipingProducts.map(p => ({
    ...p,
    category: 'pipes' as const
  }));

  // Fittings (combine fittings + flanges)
  const fittings: Product[] = [...fittingsProducts, ...flangesProducts].map(p => ({
    ...p,
    category: 'fittings' as const,
    subcategory: p.category === 'flanges' ? 'Flanges' : p.subcategory
  }));

  // Valves
  const valves: Product[] = [...ballValveProducts, ...butterflyValveProducts, ...checkValveProducts, ...diaphragmValveProducts, ...footValveProducts, ...samplingValveProducts, ...yFilterValveProducts].map(p => ({
    ...p,
    category: 'valves' as const
  }));

  return [...pipes, ...fittings, ...valves];
};

export function ProductCatalogue() {
  const [mainCategory, setMainCategory] = useState<'pipes' | 'fittings' | 'valves'>('pipes');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All Pipes');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [stockFilter, setStockFilter] = useState<'all' | 'inStock'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Products per page

  const allProducts = mapProducts();
  const currentMainCategory = mainCategories.find(c => c.id === mainCategory)!;
  const subcategories = currentMainCategory.subcategories;

  // Enhanced filtering logic
  const filteredProducts = allProducts.filter(product => {
    // Main category filter
    const matchesMainCategory = product.category === mainCategory;
    
    // Subcategory filter
    const matchesSubcategory = selectedSubcategory.startsWith('All') || product.subcategory === selectedSubcategory;
    
    // Search filter
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.specs.some(spec => spec.toLowerCase().includes(searchLower)) ||
      product.features.some(feature => feature.toLowerCase().includes(searchLower)) ||
      product.applications.some(app => app.toLowerCase().includes(searchLower));
    
    // Stock filter
    const matchesStock = stockFilter === 'all' || (stockFilter === 'inStock' && product.inStock);
    
    return matchesMainCategory && matchesSubcategory && matchesSearch && matchesStock;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleMainCategoryChange = (categoryId: 'pipes' | 'fittings' | 'valves') => {
    setMainCategory(categoryId);
    // Set default subcategory for the new main category
    const newCategory = mainCategories.find(c => c.id === categoryId)!;
    setSelectedSubcategory(newCategory.subcategories[0]);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of products section
    document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="catalogue" className="py-32 relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/30">
      {/* Curved Wave Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24">
          <defs>
            <linearGradient id="catalogueWaveTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#81D4FA', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: '#4FC3F7', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#29ABE2', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M0,0 Q300,100 600,0 T1200,0 L1200,100 L0,100 Z" fill="url(#catalogueWaveTop)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#29ABE2]/10 to-cyan-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-[#29ABE2]/20 mb-6">
            <Zap className="h-5 w-5 text-[#29ABE2]" />
            <span className="text-[#29ABE2]">Premium Industrial Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent mb-4">
            Product Catalogue
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Browse Our Complete Range of Industrial Piping & Equipment Solutions
          </p>
        </motion.div>

        {/* Partner Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="bg-linear-to-br from-white/70 via-white/50 to-blue-50/30 backdrop-blur-xl rounded-3xl border-2 border-white/60 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-linear-to-r from-[#29ABE2]/10 to-cyan-500/10 border-b border-white/40 px-8 py-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className="w-6 h-6 text-[#29ABE2]" />
                <h3 className="text-2xl md:text-3xl bg-linear-to-r from-slate-800 to-[#29ABE2] bg-clip-text text-transparent text-center">
                  Our Trusted Manufacturing Partners
                </h3>
                <Award className="w-6 h-6 text-[#29ABE2]" />
              </div>
              <p className="text-center text-slate-600 text-sm md:text-base">
                Delivering world-class industrial piping solutions through strategic partnerships
              </p>
            </div>

            {/* Partners Grid */}
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* WF Xiamen Keheng */}
              <motion.a
                href="https://en.xmkhsj.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-white/60 hover:border-[#29ABE2]/50 shadow-lg hover:shadow-2xl hover:shadow-[#29ABE2]/20 transition-all duration-300 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-linear-to-br from-red-500/20 via-transparent to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                
                <div className="relative p-8 flex flex-col items-center">
                  {/* Logo */}
                  <div className="mb-6 flex items-center justify-center h-32 w-full">
                    <img 
                      src='https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FWF-removebg-preview.png?alt=media&token=f54068fb-bd9f-4c87-b638-37a78097387d' 
                      alt="WF Xiamen Keheng Plastic Co. Ltd." 
                      className="max-h-full max-w-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Content */}
                  <h4 className="text-lg md:text-xl text-slate-800 mb-3 text-center group-hover:text-[#29ABE2] transition-colors">
                    WF Xiamen Keheng Plastic Co. Ltd.
                  </h4>
                  <p className="text-sm text-slate-600 text-center mb-4 leading-relaxed">
                    World Star is the <span className="text-emerald-600">Exclusive Business Partner</span> of WF Xiamen Keheng Plastic Co. Ltd., bringing premium industrial plastic piping solutions to the Philippines.
                  </p>

                  {/* Link Button */}
                  <div className="flex items-center gap-2 text-[#29ABE2] group-hover:gap-3 transition-all">
                    <span className="text-sm">Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.a>

              {/* GF Piping System */}
              <motion.a
                href="https://www.gfps.com/com/en.html"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-white/60 hover:border-[#29ABE2]/50 shadow-lg hover:shadow-2xl hover:shadow-[#29ABE2]/20 transition-all duration-300 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-linear-to-br from-blue-500/20 via-transparent to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                
                <div className="relative p-8 flex flex-col items-center">
                  {/* Logo */}
                  <div className="mb-6 flex items-center justify-center h-32 w-full">
                    <img 
                      src='https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Partners%20logo%2FGF-removebg-preview.png?alt=media&token=79ce383c-bd37-4d04-a34d-98b82e36e529' 
                      alt="GF Piping Systems" 
                      className="max-h-full max-w-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Content */}
                  <h4 className="text-lg md:text-xl text-slate-800 mb-3 text-center group-hover:text-[#29ABE2] transition-colors">
                    GF Piping Systems
                  </h4>
                  <p className="text-sm text-slate-600 text-center mb-4 leading-relaxed">
                    A global leader in the development, production and sale of piping systems for safe and sustainable transport of fluids. Together, we deliver excellence in industrial solutions.
                  </p>

                  {/* Link Button */}
                  <div className="flex items-center gap-2 text-[#29ABE2] group-hover:gap-3 transition-all">
                    <span className="text-sm">Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#29ABE2] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.a>
            </div>

            {/* Footer Note */}
            <div className="bg-linear-to-r from-slate-50/50 to-blue-50/50 border-t border-white/40 px-8 py-4">
              <p className="text-center text-xs text-slate-500">
                Partnering with industry leaders to bring you the highest quality industrial piping solutions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Category Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {mainCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = mainCategory === category.id;
              const productCount = allProducts.filter(p => p.category === category.id).length;
              
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleMainCategoryChange(category.id as 'pipes' | 'fittings' | 'valves')}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'shadow-2xl shadow-[#29ABE2]/30 scale-105' 
                      : 'shadow-lg hover:shadow-xl hover:scale-102'
                  }`}
                >
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.label}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isActive ? 'scale-110' : 'group-hover:scale-110'
                      }`}
                    />
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      isActive 
                        ? 'bg-linear-to-t from-[#29ABE2] via-[#29ABE2]/80 to-[#29ABE2]/40' 
                        : 'bg-linear-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 group-hover:from-[#29ABE2]/90 group-hover:via-[#29ABE2]/60'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 backdrop-blur-md' 
                        : 'bg-white/10 backdrop-blur-sm group-hover:bg-white/20'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl mb-2">{category.label}</h3>
                    <p className="text-sm text-white/90 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80">
                        {productCount} {productCount === 1 ? 'Product' : 'Products'}
                      </span>
                      {isActive && (
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-xs">Active</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Subcategory Tabs & Search */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/60 p-6">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder={`Search ${currentMainCategory.label.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/80 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#29ABE2] transition-colors text-slate-700"
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                    showFilters 
                      ? 'bg-[#29ABE2] text-white shadow-lg shadow-[#29ABE2]/30' 
                      : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-[#29ABE2]'
                  }`}
                >
                  <SlidersHorizontal className="h-5 w-5" />
                  <span className="hidden sm:inline">Filters</span>
                </button>

                <div className="hidden md:flex gap-2 bg-slate-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-white shadow-sm text-[#29ABE2]' : 'text-slate-500'
                    }`}
                  >
                    <Grid3x3 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-white shadow-sm text-[#29ABE2]' : 'text-slate-500'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Subcategory Tabs */}
            <div className="flex flex-wrap gap-3">
              {subcategories.map((subcat) => {
                const count = allProducts.filter(p => 
                  p.category === mainCategory && (subcat.startsWith('All') || p.subcategory === subcat)
                ).length;
                
                return (
                  <button
                    key={subcat}
                    onClick={() => setSelectedSubcategory(subcat)}
                    className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm ${
                      selectedSubcategory === subcat
                        ? 'bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white shadow-lg shadow-[#29ABE2]/30'
                        : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-[#29ABE2] hover:text-[#29ABE2]'
                    }`}
                  >
                    {subcat}
                    {count > 0 && (
                      <span className={`ml-2 ${
                        selectedSubcategory === subcat ? 'text-white/80' : 'text-slate-500'
                      }`}>
                        ({count})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-slate-200"
                >
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <p className="text-sm text-slate-600 mb-3">Availability</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setStockFilter('all')}
                          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                            stockFilter === 'all' 
                              ? 'bg-[#29ABE2] text-white' 
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          All Products
                        </button>
                        <button
                          onClick={() => setStockFilter('inStock')}
                          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                            stockFilter === 'inStock' 
                              ? 'bg-[#29ABE2] text-white' 
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          In Stock Only
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Products Display */}
        <div className="max-w-7xl mx-auto">
          {/* Results Info */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-600">
              Showing <span className="text-[#29ABE2]">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                <Package className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl text-slate-800 mb-2">
                {mainCategory === 'valves' ? 'Coming Soon' : 'No Products Found'}
              </h3>
              <p className="text-slate-600 mb-6">
                {mainCategory === 'valves' 
                  ? 'Valve products will be added soon. Stay tuned!' 
                  : 'Try adjusting your search or filters'
                }
              </p>
              {searchQuery && mainCategory !== 'valves' && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setStockFilter('all');
                  }}
                  className="px-6 py-3 bg-[#29ABE2] text-white rounded-xl hover:bg-[#1e8bb8] transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </motion.div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-white/60 overflow-hidden hover:border-[#29ABE2]/30 hover:shadow-xl hover:shadow-[#29ABE2]/10 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex flex-row' : 'flex flex-col h-full'
                  }`}
                >
                  {/* Product Image */}
                  <div className={`relative overflow-hidden bg-linear-to-br from-slate-100 to-slate-50 shrink-0 ${
                    viewMode === 'list' ? 'w-48' : 'h-64'
                  }`}>
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.inStock && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500 text-white text-xs rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        In Stock
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs text-[#29ABE2] mb-1">{product.subcategory}</p>
                        <h3 className="text-lg text-slate-800 group-hover:text-[#29ABE2] transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs - with minimum height for consistency */}
                    {product.specs.length > 0 && (
                      <div className="mb-4 flex-1">
                        <p className="text-xs text-slate-500 mb-2">Specifications:</p>
                        <div className="space-y-1">
                          {product.specs.map((spec, idx) => (
                            <p key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                              <span className="text-[#29ABE2] shrink-0">•</span>
                              <span className="flex-1">{spec}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions - always at bottom */}
                    <div className="flex gap-3 mt-auto">
                      <button className="flex-1 px-4 py-2.5 bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-[#29ABE2]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                        <ShoppingCart className="w-4 h-4" />
                        Request Quote
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="max-w-7xl mx-auto mt-12">
            <div className="flex items-center justify-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 1 ? 'bg-slate-100 text-slate-500' : 'bg-[#29ABE2] text-white'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="mx-4">
                <p className="text-sm text-slate-600">
                  Page {currentPage} of {totalPages}
                </p>
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === totalPages ? 'bg-slate-100 text-slate-500' : 'bg-[#29ABE2] text-white'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Curved Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24">
          <path d="M0,0 Q300,100 600,0 T1200,0 L1200,100 L0,100 Z" fill="url(#catalogueWaveTop)" />
        </svg>
      </div>
    </section>
  );
}