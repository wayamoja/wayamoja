
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
            <Card className="p-8 bg-blue-900/20 border-blue-800">
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p>+254 727 666 093</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p>wayamojaent@gmail.com</p>
                    <p>info@wayamoja.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="text-white font-semibold">Web</h3>
                    <p>www.wayamoja.com</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
