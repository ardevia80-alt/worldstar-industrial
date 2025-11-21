import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 

  ShoppingCart, 
  Download, 
  CheckCircle2,
  Award,
  Package,
  Thermometer,
  Shield,
  Layers
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from '../data/products';

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-xl border-slate-200/60">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-linear-to-r from-slate-800 via-[#29ABE2] to-cyan-600 bg-clip-text text-transparent">
            Product Details
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-slate-100 via-slate-50 to-white shadow-xl">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges Overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.inStock && (
                  <Badge className="bg-linear-to-r from-emerald-500 to-green-500 text-white border-0 shadow-lg">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    In Stock
                  </Badge>
                )}
                <Badge className="bg-[#29ABE2]/90 backdrop-blur-md text-white border-0 shadow-lg">
                  {product.subcategory}
                </Badge>
              </div>

              {/* Product ID */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-xs opacity-70">Product ID:</span>
                  <span className="ml-2 font-mono">{product.id}</span>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-linear-to-r from-[#29ABE2] to-cyan-500 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-sm opacity-90 mb-1">
                {product.price ? 'Published Price' : 'Pricing Information'}
              </div>
              <div className="text-3xl tracking-tight mb-2">
                {product.price ? `₱${product.price.toLocaleString()}` : 'Contact for Pricing'}
              </div>
              {product.price && (
                <div className="text-sm opacity-80">per unit (negotiable for bulk orders)</div>
              )}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <h2 className="text-2xl text-slate-900 mb-2">{product.name}</h2>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Material & Temperature Info */}
            <div className="grid grid-cols-2 gap-3">
              {product.material && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="h-4 w-4 text-[#29ABE2]" />
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Material</span>
                  </div>
                  <div className="text-slate-900">{product.material}</div>
                </div>
              )}
              {product.temperatureRange && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-4 w-4 text-[#29ABE2]" />
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Temperature</span>
                  </div>
                  <div className="text-sm text-slate-900">{product.temperatureRange}</div>
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-[#29ABE2]" />
                <h3 className="text-slate-900">Technical Specifications</h3>
              </div>
              <div className="space-y-2.5">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] mt-2 shrink-0"></div>
                    <span className="leading-relaxed">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-5 w-5 text-[#29ABE2]" />
                <h3 className="text-slate-900">Key Features</h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-linear-to-br from-cyan-50 to-blue-50 rounded-xl p-5 border border-cyan-100">
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-5 w-5 text-[#29ABE2]" />
                <h3 className="text-slate-900">Applications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <Badge key={i} className="bg-white/80 text-slate-700 border-cyan-200">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Certifications (if available) */}
            {product.certifications && product.certifications.length > 0 && (
              <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-slate-900">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, i) => (
                    <Badge key={i} className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-slate-200">
              <Button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="flex-1 bg-linear-to-r from-[#29ABE2] to-cyan-500 hover:from-[#2196D4] hover:to-cyan-600 text-white border-0 h-12 shadow-lg shadow-[#29ABE2]/20"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Request Quote
              </Button>
              {product.datasheet && (
                <Button
                  variant="outline"
                  className="border-slate-300 hover:border-[#29ABE2] hover:text-[#29ABE2] hover:bg-blue-50/50 h-12"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Datasheet
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
