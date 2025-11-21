import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ShoppingCart, 
  Download, 
  FileText, 
  CheckCircle2,
  Award,
  Eye,
  GitCompare
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { type Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  onQuickView: (product: Product) => void;
  onCompare: (product: Product) => void;
  isComparing?: boolean;
}

export function ProductCard({ product, index, onQuickView, onCompare, isComparing }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      {/* Enhanced Glow Effect */}
      <div className="absolute -inset-0.5 bg-linear-to-br from-[#29ABE2]/40 via-cyan-400/30 to-blue-500/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
      
      {/* Premium Card Design */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        
        {/* Image Section with Overlay */}
        <div className="relative h-52 overflow-hidden bg-linear-to-br from-slate-100 via-slate-50 to-white">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>

          {/* Product ID Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs shadow-lg">
              <span className="opacity-70">ID:</span> <span className="font-mono">{product.id}</span>
            </div>
          </div>

          {/* Stock & Category Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.inStock && (
              <Badge className="bg-linear-to-r from-emerald-500 to-green-500 text-white border-0 shadow-lg">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Available
              </Badge>
            )}
            <Badge className="bg-[#29ABE2]/90 backdrop-blur-md text-white border-0 shadow-lg">
              {product.subcategory}
            </Badge>
          </div>

          {/* Quick Action Buttons */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              onClick={() => onQuickView(product)}
              className="bg-white/90 backdrop-blur-md text-slate-700 hover:bg-white border-0 shadow-lg h-8 px-3"
            >
              <Eye className="h-3.5 w-3.5 mr-1" />
              Quick View
            </Button>
            <Button
              size="sm"
              onClick={() => onCompare(product)}
              className={`backdrop-blur-md border-0 shadow-lg h-8 px-3 ${
                isComparing 
                  ? 'bg-[#29ABE2] text-white hover:bg-[#2196D4]' 
                  : 'bg-white/90 text-slate-700 hover:bg-white'
              }`}
            >
              <GitCompare className="h-3.5 w-3.5 mr-1" />
              Compare
            </Button>
          </div>

          {/* Bottom Price Tag */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-r from-[#29ABE2]/95 to-cyan-500/95 backdrop-blur-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white/80 text-xs mb-0.5">
                  {product.price ? 'Published Price' : 'Pricing'}
                </div>
                <div className="text-white text-2xl tracking-tight">
                  {product.price ? `₱${product.price.toLocaleString()}` : 'Contact for Pricing'}
                </div>
              </div>
              {product.price && (
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <div className="text-white text-xs">per unit</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1">
          {/* Product Name */}
          <h3 className="text-slate-900 mb-2 min-h-12 line-clamp-2 group-hover:text-[#29ABE2] transition-colors">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-slate-600 line-clamp-2 mb-4">
            {product.description}
          </p>

          {/* Key Specifications - Enhanced Design */}
          <div className="mb-5 space-y-2.5 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-4 w-4 text-[#29ABE2]" />
              <span className="text-xs text-slate-500 uppercase tracking-wide">Specifications</span>
            </div>
            {product.specs.slice(0, 3).map((spec, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] mt-1.5 shrink-0"></div>
                <span className="leading-relaxed">{spec}</span>
              </div>
            ))}
          </div>

          {/* Material & Temperature (if available) */}
          {(product.material || product.temperatureRange) && (
            <div className="mb-4 flex flex-wrap gap-2">
              {product.material && (
                <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
                  Material: {product.material}
                </Badge>
              )}
              {product.temperatureRange && (
                <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
                  {product.temperatureRange}
                </Badge>
              )}
            </div>
          )}

          {/* Action Buttons - Improved Layout */}
          <div className="mt-auto space-y-2.5">
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-linear-to-r from-[#29ABE2] to-cyan-500 hover:from-[#2196D4] hover:to-cyan-600 text-white border-0 h-11 group/btn shadow-lg shadow-[#29ABE2]/20"
            >
              <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              Request Quote & Discounts
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              {product.datasheet && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-slate-700 border-slate-300 hover:border-[#29ABE2] hover:text-[#29ABE2] hover:bg-blue-50/50 group/btn"
                >
                  <Download className="h-3.5 w-3.5 mr-1.5 group-hover/btn:translate-y-0.5 transition-transform" />
                  Datasheet
                </Button>
              )}
              
              <Button
                onClick={() => onQuickView(product)}
                variant="outline"
                size="sm"
                className="text-[#29ABE2] border-[#29ABE2]/30 hover:bg-[#29ABE2] hover:text-white group/btn"
              >
                <FileText className="h-3.5 w-3.5 mr-1.5" />
                Details
              </Button>
            </div>
          </div>
        </div>

        {/* Premium Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#29ABE2]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
}
