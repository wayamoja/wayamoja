
import { Link } from "wouter";

import { Facebook, Twitter, LinkedIn, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">WayaMoja</h3>
            <p className="text-gray-400 mb-4">Empowering businesses through innovative network solutions and cutting-edge technology.</p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> ISO 27001 Certified
              </p>
              <p className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> 24/7 Support
              </p>
              <p className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> 99.9% Uptime SLA
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#internet"><span className="hover:text-blue-400 cursor-pointer">Internet Plans</span></Link></li>
              <li><Link href="/services#networking"><span className="hover:text-blue-400 cursor-pointer">Enterprise Networking</span></Link></li>
              <li><Link href="/services#security"><span className="hover:text-blue-400 cursor-pointer">Security Solutions</span></Link></li>
              <li><Link href="/services#cloud"><span className="hover:text-blue-400 cursor-pointer">Cloud Services</span></Link></li>
              <li><Link href="/services#support"><span className="hover:text-blue-400 cursor-pointer">Technical Support</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about"><span className="hover:text-blue-400 cursor-pointer">About Us</span></Link></li>
              <li><Link href="/case-studies"><span className="hover:text-blue-400 cursor-pointer">Case Studies</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-blue-400 cursor-pointer">Blog</span></Link></li>
              <li><Link href="/careers"><span className="hover:text-blue-400 cursor-pointer">Careers</span></Link></li>
              <li><Link href="/partners"><span className="hover:text-blue-400 cursor-pointer">Partners</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">📧</span>
                contact@wayamoja.com
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">📱</span>
                +254 700 000 000
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">📍</span>
                Nairobi, Kenya
              </li>
              <li className="mt-4">
                <h5 className="text-sm font-semibold text-white mb-2">Business Hours:</h5>
                <p className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-sm">24/7 Technical Support Available</p>
              </li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <LinkedIn className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded flex-1"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} WayaMoja Enterprise Ltd. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="/privacy"><span className="hover:text-blue-400 cursor-pointer">Privacy Policy</span></Link>
              <Link href="/terms"><span className="hover:text-blue-400 cursor-pointer">Terms of Service</span></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
