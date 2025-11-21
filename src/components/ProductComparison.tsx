import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X, Package, Thermometer } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { type Product } from '../data/products';

interface ProductComparisonProps {
  products: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
}

export function ProductComparison({ products, onRemove, onClear }: ProductComparisonProps) {
  if (products.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-slate-900">Compare Products</h3>
            <Badge className="bg-[#29ABE2] text-white">
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </Badge>
          </div>
          <div className="flex gap-2">
            {products.length >= 2 && (
              <Button
                size="sm"
                className="bg-linear-to-r from-[#29ABE2] to-cyan-500 text-white"
                onClick={() => {
                  // Open comparison view (you can implement a full modal here)
                  alert('Full comparison view coming soon!');
                }}
              >
                Compare Now
              </Button>
            )}
            <Button
              size="sm"
              variant="outline"
              onClick={onClear}
              className="text-slate-700 border-slate-300"
            >
              Clear All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[300px] overflow-y-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden group"
            >
              {/* Remove Button */}
              <button
                onClick={() => onRemove(product.id)}
                className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
              >
                <X className="h-3 w-3" />
              </button>

              {/* Product Image */}
              <div className="relative h-32 bg-slate-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
                
                {/* Product ID */}
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-slate-900/90 text-white text-xs">
                    {product.id}
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 space-y-2">
                <h4 className="text-sm text-slate-900 line-clamp-1">{product.name}</h4>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <Package className="h-3 w-3 text-[#29ABE2]" />
                    <span>{product.material || 'N/A'}</span>
                  </div>
                  {product.temperatureRange && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Thermometer className="h-3 w-3 text-[#29ABE2]" />
                      <span className="truncate">{product.temperatureRange}</span>
                    </div>
                  )}
                </div>

                <Badge variant="outline" className="text-xs">
                  {product.subcategory}
                </Badge>
              </div>
            </div>
          ))}

          {/* Add more placeholder */}
          {products.length < 4 && (
            <div className="border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center h-[200px] text-slate-400">
              <div className="text-center">
                <Package className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Select products to compare</p>
                <p className="text-xs">(up to 4 items)</p>
              </div>
            </div>
          )}
        </div>

        {products.length < 2 && (
          <div className="mt-4 text-center text-sm text-slate-500">
            Select at least 2 products to enable comparison
          </div>
        )}
      </div>
    </motion.div>
  );
}
