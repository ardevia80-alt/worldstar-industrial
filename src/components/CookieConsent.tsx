import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <Cookie className="w-6 h-6 text-blue-600 shrink-0" />
              <div className="flex-1">
                <h3 className="mb-2">Cookie Consent</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We use cookies to enhance your browsing experience and analyze site traffic. 
                  By clicking "Accept", you consent to our use of cookies.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
