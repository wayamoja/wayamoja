import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              WayaMoja Enterprise Ltd is a leading provider of network solutions, dedicated to transforming businesses through innovative technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <p>+254 123 456 789</p>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <p>info@wayamoja.com</p>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <p>Nairobi, Kenya</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/quote">Get Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} WayaMoja Enterprise Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}