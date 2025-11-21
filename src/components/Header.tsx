import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Search, ChevronDown, X } from 'lucide-react';
import { motion } from 'motion/react';

const logo = "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2Fwsiscologo2.png?alt=media&token=2c7fb851-b265-4550-9b18-3d1198811719";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: string) => {
    const routeMap: { [key: string]: string } = {
      'About Us': '/about-us',
      'Products': '/catalogue',
      'Applications': '/applications',
      'Downloads': '/downloads',
      'Contact Us': '/contact-us',
      'News': '/news',
      'Careers': '/careers',
      'Diamante Group': '/diamante-group',
    };

    if (routeMap[item]) {
      navigate(routeMap[item]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'About Us', hasDropdown: false },
    { label: 'Products', hasDropdown: true },
    { label: 'Applications', hasDropdown: true },
    { label: 'Downloads', hasDropdown: false },
    { label: 'Contact Us', hasDropdown: false },
    { label: 'News', hasDropdown: false },
    { label: 'Careers', hasDropdown: false },
    { label: 'Diamante Group', hasDropdown: false },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="WSISCo Logo" className="h-12" />
            <motion.div 
              className="hidden md:flex flex-col cursor-pointer"
              whileHover={{ scale: 1.02, x: 2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.span 
                className="text-gray-800 tracking-wide leading-tight select-none"
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                Worldstar Industrial Supply Co.
              </motion.span>
              <span className="text-xs text-gray-500 tracking-widest uppercase">
                WSISCo
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.label)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.label)}
                  className="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}