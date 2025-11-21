export function ProductCardSkeleton() {
  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200/60 shadow-xl h-full flex flex-col animate-pulse">
        
        {/* Image Section */}
        <div className="relative h-52 bg-linear-to-br from-slate-200 via-slate-100 to-slate-200">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1">
          {/* Product Name Skeleton */}
          <div className="h-6 bg-slate-200 rounded-lg mb-4 w-3/4"></div>
          
          {/* Description Skeleton */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          </div>

          {/* Specifications Box */}
          <div className="mb-5 space-y-2.5 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
            <div className="h-4 bg-slate-200 rounded w-1/3 mb-3"></div>
            <div className="h-3 bg-slate-200 rounded w-full"></div>
            <div className="h-3 bg-slate-200 rounded w-4/5"></div>
            <div className="h-3 bg-slate-200 rounded w-full"></div>
          </div>

          {/* Badges Skeleton */}
          <div className="mb-4 flex gap-2">
            <div className="h-6 bg-slate-200 rounded-lg w-20"></div>
            <div className="h-6 bg-slate-200 rounded-lg w-24"></div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="mt-auto space-y-2.5">
            <div className="h-11 bg-slate-200 rounded-xl w-full"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-9 bg-slate-200 rounded-lg"></div>
              <div className="h-9 bg-slate-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add to globals.css for shimmer animation:
/*
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
*/
