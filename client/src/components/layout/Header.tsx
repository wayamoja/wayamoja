
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
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white cursor-pointer">
              Waya<span className="text-blue-400">Moja</span>
            </span>
            <span className="text-sm text-gray-400 ml-2">Enterprises Ltd</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
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
