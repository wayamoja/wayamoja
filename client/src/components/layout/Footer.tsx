
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">WayaMoja</h3>
            <p className="text-gray-400">Empowering businesses through innovative network solutions and cutting-edge technology.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/services/internet"><span className="hover:text-blue-400 cursor-pointer">Internet Plans</span></Link></li>
              <li><Link href="/services/networking"><span className="hover:text-blue-400 cursor-pointer">Enterprise Networking</span></Link></li>
              <li><Link href="/services/security"><span className="hover:text-blue-400 cursor-pointer">Security Solutions</span></Link></li>
              <li><Link href="/services/cloud"><span className="hover:text-blue-400 cursor-pointer">Cloud Services</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about"><span className="hover:text-blue-400 cursor-pointer">About Us</span></Link></li>
              <li><Link href="/case-studies"><span className="hover:text-blue-400 cursor-pointer">Case Studies</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-blue-400 cursor-pointer">Blog</span></Link></li>
              <li><Link href="/careers"><span className="hover:text-blue-400 cursor-pointer">Careers</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>contact@wayamoja.com</li>
              <li>+254 700 000 000</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WayaMoja Enterprise Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
