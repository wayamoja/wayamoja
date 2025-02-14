import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      isScrolled ? "bg-gray-900/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
    } transition-all duration-300`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            WAYAMOJA
            <span className="text-sm font-medium block text-gray-400">ENTERPRISE LTD</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            ['Services', '/services'],
            ['About', '/about'],
            ['Contact', '/contact']
          ].map(([label, path]) => (
            <Link key={path} href={path}>
              <span className={`cursor-pointer transition-colors ${
                location === path ? "text-blue-400" : "text-gray-300 hover:text-white"
              }`}>
                {label}
              </span>
            </Link>
          ))}
        </nav>

        <Link href="/quote">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Quote
          </Button>
        </Link>
      </div>
    </header>
  );
}