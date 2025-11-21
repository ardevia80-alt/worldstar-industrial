/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  Search, 
  Download,
  Zap,
  CheckCircle2,
  Package,
  Settings,
  Gauge,
  Layers,
  Award,
  CircleDot,
  X,
  SlidersHorizontal,
  Wrench,
  Circle,
  ShoppingCart
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProductCard } from './ProductCard';
import { ProductQuickView } from './ProductQuickView';
import { ProductComparison } from './ProductComparison';
import { 
  categoryConfig,
  type Product
} from '../data/products';

export function ProductCatalogueEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState<'core' | 'valves' | 'fittings' | 'flanges' | 'accessories'>('core');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All Core');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [stockFilter, setStockFilter] = useState<'all' | 'inStock'>('all');
  const [selectedStandards, setSelectedStandards] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  // Quick view and comparison
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [comparisonProducts, setComparisonProducts] = useState<Product[]>([]);

  // Get current category products
  const currentProducts = categoryConfig[selectedCategory].products;

  // Extract available standards and sizes
  const availableStandards = useMemo(() => {
    return Array.from(new Set(
      currentProducts.flatMap(p => 
        p.specs.join(' ').match(/(DIN|ANSI|JIS|ASTM|GB\/T|ISO|CNS|PT|NPT|BSPF|PN\d+)/g) || []
      )
    )).sort();
  }, [currentProducts]);

  const availableSizes = ['Small (≤2")', 'Medium (2"-6")', 'Large (>6")'];

  // Enhanced filtering logic
  const filteredProducts = useMemo(() => {
    return currentProducts.filter(product => {
      // Subcategory filter
      const matchesSubcategory = selectedSubcategory.startsWith('All') || product.subcategory === selectedSubcategory;
      
      // Enhanced search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.specs.some(spec => spec.toLowerCase().includes(searchLower)) ||
        product.features.some(feature => feature.toLowerCase().includes(searchLower)) ||
        product.applications.some(app => app.toLowerCase().includes(searchLower)) ||
        (product.material && product.material.toLowerCase().includes(searchLower));
      
      // Stock filter
      const matchesStock = stockFilter === 'all' || (stockFilter === 'inStock' && product.inStock);
      
      // Standards filter
      const productStandards = product.specs.join(' ');
      const matchesStandards = selectedStandards.length === 0 || 
        selectedStandards.some(std => productStandards.includes(std));
      
      // Size filter
      const matchesSize = selectedSizes.length === 0 || selectedSizes.some(sizeRange => {
        const sizeSpec = product.specs.find(s => s.toLowerCase().includes('size'));
        if (!sizeSpec) return false;
        
        if (sizeRange === 'Small (≤2")') {
          return /1\/2|3\/4|1"|2"|DN15|DN20|DN25|DN30|DN40|DN50/i.test(sizeSpec);
        } else if (sizeRange === 'Medium (2"-6")') {
          return /2-1\/2|3"|4"|5"|6"|DN65|DN80|DN100|DN150/i.test(sizeSpec);
        } else if (sizeRange === 'Large (>6")') {
          return /8"|10"|12"|16"|DN200|DN300|DN400|DN600/i.test(sizeSpec);
        }
        return false;
      });
      
      return matchesSubcategory && matchesSearch && matchesStock && matchesStandards && matchesSize;
    });
  }, [currentProducts, selectedSubcategory, searchQuery, stockFilter, selectedStandards, selectedSizes]);

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery('');
    setStockFilter('all');
    setSelectedStandards([]);
    setSelectedSizes([]);
  };

  // Count active filters
  const activeFilterCount = 
    (stockFilter !== 'all' ? 1 : 0) + 
    selectedStandards.length + 
    selectedSizes.length;

  // Toggle filter selection
  const toggleStandard = (standard: string) => {
    setSelectedStandards(prev => 
      prev.includes(standard) 
        ? prev.filter(s => s !== standard)
        : [...prev, standard]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  // Comparison functions
  const toggleComparison = (product: Product) => {
    setComparisonProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else if (prev.length < 4) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromComparison = (productId: string) => {
    setComparisonProducts(prev => prev.filter(p => p.id !== productId));
  };

  const clearComparison = () => {
    setComparisonProducts([]);
  };

  // Category navigation items
  const categoryNavItems = [
    { 
      key: 'core', 
      name: 'All Core', 
      icon: Layers, 
      label: 'Core Piping',
      image: 'https://images.unsplash.com/photo-1748256086767-8974ee677f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwaW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2MjY2NjIxNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      key: 'valves', 
      name: 'Ball Valves', 
      icon: CircleDot, 
      label: 'Ball Valves',
      image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MjY3NDkwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      key: 'fittings', 
      name: 'Fittings', 
      icon: Settings, 
      label: 'Pipe Fittings',
      image: 'https://images.unsplash.com/photo-1632246572289-a6b7b34ed9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3N8ZW58MXx8fHwxNzYyNjY2MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      key: 'flanges', 
      name: 'Flanges', 
      icon: Circle, 
      label: 'Flanges',
      image: 'https://images.unsplash.com/photo-1586864387634-30eeb24b2ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmxhbmdlfGVufDF8fHx8MTc2MjY2NjIxNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      key: 'accessories', 
      name: 'Accessories', 
      icon: Wrench, 
      label: 'Accessories',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYWRoZXNpdmV8ZW58MXx8fHwxNzYyNjY2MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

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

          {/* Enhanced Category Navigation */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {categoryNavItems.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.key || (cat.key === 'core' && selectedCategory === 'core');
                return (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setSelectedCategory(cat.key as any);
                      setSelectedSubcategory(cat.name);
                      clearAllFilters();
                    }}
                    className={`group relative p-3 rounded-xl transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'bg-linear-to-br from-[#29ABE2] to-cyan-500 text-white shadow-lg shadow-[#29ABE2]/30 scale-105'
                        : 'bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-md border border-slate-200'
                    }`}
                  >
                    {/* Background Product Image */}
                    <div className="absolute inset-0 opacity-10">
                      <ImageWithFallback
                        src={cat.image}
                        alt={cat.label}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 ${isActive ? 'bg-linear-to-br from-[#29ABE2]/80 to-cyan-500/80' : 'bg-white/70'}`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col items-center gap-2">
                      <div className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 ${isActive ? 'border-white/40' : 'border-[#29ABE2]/20'}`}>
                        <ImageWithFallback
                          src={cat.image}
                          alt={cat.label}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 flex items-center justify-center ${isActive ? 'bg-[#29ABE2]/70' : 'bg-white/80'}`}>
                          <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-[#29ABE2]'}`} />
                        </div>
                      </div>
                      
                      <span className={`text-xs text-center leading-tight ${isActive ? 'text-white' : 'text-slate-700'}`}>
                        {cat.label}
                      </span>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-linear-to-br from-[#29ABE2]/20 to-cyan-500/20 rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subcategory Tabs */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categoryConfig[selectedCategory].subcategories.map((subcat) => (
                <button
                  key={subcat}
                  onClick={() => setSelectedSubcategory(subcat)}
                  className={`px-5 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                    selectedSubcategory === subcat
                      ? 'bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white shadow-lg shadow-[#29ABE2]/30 scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-md border border-slate-200'
                  }`}
                >
                  {subcat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar & Filters */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search by product name, material, specification, features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-14 bg-white/80 backdrop-blur-xl border-slate-200 focus:border-[#29ABE2] rounded-xl shadow-lg"
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className={`h-14 px-6 rounded-xl shadow-lg transition-all ${
                  showFilters || activeFilterCount > 0
                    ? 'bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white'
                    : 'bg-white/80 backdrop-blur-xl text-slate-700 border border-slate-200 hover:bg-white'
                }`}
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
                {activeFilterCount > 0 && (
                  <Badge className="ml-2 bg-white text-[#29ABE2] hover:bg-white">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Active Filters Display */}
            {activeFilterCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 items-center"
              >
                <span className="text-sm text-slate-600">Active filters:</span>
                
                {stockFilter !== 'all' && (
                  <Badge 
                    className="bg-emerald-500/10 text-emerald-700 border-emerald-500/20 hover:bg-emerald-500/20 cursor-pointer"
                    onClick={() => setStockFilter('all')}
                  >
                    In Stock Only
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                )}
                
                {selectedStandards.map(std => (
                  <Badge 
                    key={std}
                    className="bg-blue-500/10 text-blue-700 border-blue-500/20 hover:bg-blue-500/20 cursor-pointer"
                    onClick={() => toggleStandard(std)}
                  >
                    {std}
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
                
                {selectedSizes.map(size => (
                  <Badge 
                    key={size}
                    className="bg-purple-500/10 text-purple-700 border-purple-500/20 hover:bg-purple-500/20 cursor-pointer"
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="h-7 text-xs text-slate-600 hover:text-[#29ABE2]"
                >
                  Clear All
                </Button>
              </motion.div>
            )}

            {/* Expandable Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* Stock Availability Filter */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Package className="h-4 w-4 text-[#29ABE2]" />
                          <h4 className="text-slate-700">Availability</h4>
                        </div>
                        <div className="space-y-2">
                          <button
                            onClick={() => setStockFilter('all')}
                            className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                              stockFilter === 'all'
                                ? 'bg-linear-to-r from-[#29ABE2]/10 to-cyan-500/10 text-[#29ABE2] border border-[#29ABE2]/30'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-transparent'
                            }`}
                          >
                            All Products
                          </button>
                          <button
                            onClick={() => setStockFilter('inStock')}
                            className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                              stockFilter === 'inStock'
                                ? 'bg-linear-to-r from-emerald-500/10 to-green-500/10 text-emerald-700 border border-emerald-500/30'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-transparent'
                            }`}
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 inline mr-2" />
                            In Stock Only
                          </button>
                        </div>
                      </div>

                      {/* Standards Filter */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-4 w-4 text-[#29ABE2]" />
                          <h4 className="text-slate-700">Standards</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                          {availableStandards.map(standard => (
                            <button
                              key={standard}
                              onClick={() => toggleStandard(standard)}
                              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                                selectedStandards.includes(standard)
                                  ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                              }`}
                            >
                              {standard}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Size Range Filter */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Gauge className="h-4 w-4 text-[#29ABE2]" />
                          <h4 className="text-slate-700">Size Range</h4>
                        </div>
                        <div className="space-y-2">
                          {availableSizes.map(size => (
                            <button
                              key={size}
                              onClick={() => toggleSize(size)}
                              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                                selectedSizes.includes(size)
                                  ? 'bg-linear-to-r from-purple-500/10 to-pink-500/10 text-purple-700 border border-purple-500/30'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-transparent'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Filter Actions */}
                    <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center">
                      <p className="text-sm text-slate-600">
                        Showing <span className="text-[#29ABE2]">{filteredProducts.length}</span> of {currentProducts.length} products
                      </p>
                      <Button
                        onClick={clearAllFilters}
                        variant="outline"
                        size="sm"
                        className="text-slate-700 hover:text-[#29ABE2] hover:border-[#29ABE2]"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Clear All Filters
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedSubcategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={setQuickViewProduct}
                onCompare={toggleComparison}
                isComparing={comparisonProducts.some(p => p.id === product.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Results Count */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-slate-400 text-lg mb-2">No products found</div>
            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-600 mb-12"
          >
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-linear-to-r from-slate-800 to-slate-700 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/30 shadow-2xl"
        >
          <h3 className="text-3xl text-white mb-3">Need Technical Assistance?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our engineering team is ready to help with product selection, technical specifications, and custom solutions for your industrial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-linear-to-r from-[#29ABE2] to-cyan-500 hover:from-[#2196D4] hover:to-cyan-600 text-white shadow-xl group border-0"
            >
              Contact Engineering Team
              <ShoppingCart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              Download Full Catalogue
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-linear-to-br from-cyan-300/10 to-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-tl from-[#29ABE2]/10 to-cyan-300/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Curved Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 md:h-32">
          <defs>
            <linearGradient id="catalogueWaveBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#29ABE2', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#22d3ee', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="url(#catalogueWaveBottom)" />
        </svg>
      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Comparison Bar */}
      <AnimatePresence>
        {comparisonProducts.length > 0 && (
          <ProductComparison
            products={comparisonProducts}
            onRemove={removeFromComparison}
            onClear={clearComparison}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
