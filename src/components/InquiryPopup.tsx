import { motion } from "motion/react";
import { FaViber } from "react-icons/fa";

export function InquiryPopup() {
  return (
    <>
      {/* Minimized Button */}
      <a
        href="viber://chat?number=%2B639158931916"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Chat on Messenger"
      >
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <FaViber className="w-6 h-6" />
          </motion.button>

      </a>
    </>
  );
}
