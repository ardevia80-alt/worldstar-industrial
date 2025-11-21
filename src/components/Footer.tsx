import { motion } from "motion/react";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2Fwsiscologo2.png?alt=media&token=2c7fb851-b265-4550-9b18-3d1198811719";

const ardeviaLogo =   "https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FArdevia_new-removebg-preview.png?alt=media&token=0d521e0b-392b-4593-b1b5-821d46ff3fa9";

export function Footer() {
  const quickLinks = [
    { label: "Products", href: "#products" },
    { label: "Applications", href: "#applications" },
    { label: "Downloads", href: "#downloads" },
    { label: "About Us", href: "#about" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-fit"
            >
              <img
                src={logo}
                alt="WSISCo Logo"
                className="h-12 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300"
              />
            </motion.div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for industrial piping systems in the
              Philippines.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-gray-300">Philippines</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-gray-300">02 8525 7161</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-gray-300">
                  sales@worldstarindustrial.com
                </span>
              </li>
            </ul>
          </div>

          {/* Partner Logo */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4">A Member of</h3>
              <motion.img
                src="https://firebasestorage.googleapis.com/v0/b/eap-environmental.firebasestorage.app/o/Worldstar%20Hero%20Page%2FDiamante_Group_Logo-removebg-preview.png?alt=media&amp;token=fc1b3f55-bdef-494b-b130-73b6763d5a5a"
                alt="Diamante Group of Companies"
                className="h-24 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300 brightness-110"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-400">
                © {currentYear} World Star Industrial Supply Co. All rights
                reserved.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Built By:</span>
                <motion.a
                  href="https://www.ardevia.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  <img
                    src={ardeviaLogo}
                    alt="Ardevia Tech"
                    className="h-8 brightness-150 contrast-125 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.9)] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300"
                  />
                </motion.a>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GDPR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
