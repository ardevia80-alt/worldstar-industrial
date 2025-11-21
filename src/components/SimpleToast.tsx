/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

let toastId = 0;
let addToastCallback: ((toast: Omit<Toast, 'id'>) => void) | null = null;

export const toast = {
  success: (message: string) => {
    addToastCallback?.({ message, type: 'success' });
  },
  error: (message: string) => {
    addToastCallback?.({ message, type: 'error' });
  },
  info: (message: string) => {
    addToastCallback?.({ message, type: 'info' });
  },
};

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    addToastCallback = (toast) => {
      const id = toastId++;
      setToasts((prev) => [...prev, { ...toast, id }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 5000);
    };

    return () => {
      addToastCallback = null;
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
  };

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className={`flex items-center gap-3 p-4 rounded-lg border shadow-lg max-w-md ${colors[toast.type]}`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <p className="flex-1 text-sm">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="p-1 hover:bg-black/10 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
