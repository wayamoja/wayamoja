
import { AnimatePresence } from "framer-motion";


import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(17, 24, 39, 0.95)"]
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <motion.img 
            src="/src/assets/logo.svg"
            alt="WayaMoja Enterprise"
            className="h-12 cursor-pointer"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6
            }}
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.1)",
              transition: { duration: 0.2 }
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <motion.div className="relative group">
            <span className="cursor-pointer text-gray-300 hover:text-white">Solutions</span>
            <motion.div 
              className="absolute top-full left-0 bg-gray-900/95 rounded-lg py-2 px-4 min-w-[200px] backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/services/networking">
                <span className="block py-2 text-gray-300 hover:text-white">Enterprise Networking</span>
              </Link>
              <Link href="/services/security">
                <span className="block py-2 text-gray-300 hover:text-white">Security Solutions</span>
              </Link>
              <Link href="/services/cloud">
                <span className="block py-2 text-gray-300 hover:text-white">Cloud Services</span>
              </Link>
            </motion.div>
          </motion.div>
          <Link href="/services">
            <span className={`cursor-pointer transition-colors ${
              isActive("/services") ? "text-blue-400" : "text-gray-300 hover:text-white"
            }`}>
              Services
            </span>
          </Link>
          <Link href="/about">
            <span className={`cursor-pointer transition-colors ${
              isActive("/about") ? "text-blue-400" : "text-gray-300 hover:text-white"
            }`}>
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className={`cursor-pointer transition-colors ${
              isActive("/contact") ? "text-blue-400" : "text-gray-300 hover:text-white"
            }`}>
              Contact
            </span>
          </Link>
        </nav>

        <Link href="/quote">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Quote
          </Button>
        </Link>
      </div>
    </motion.header>
  );
}
