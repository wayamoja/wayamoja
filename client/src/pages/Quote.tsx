
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export default function Quote() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Get a Quote</h1>
            <p className="text-gray-300">
              Fill out the form below and we'll get back to you with a customized quote
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 bg-blue-900/20 p-8 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-white mb-2 block">Name</label>
                <Input placeholder="Your name" className="bg-blue-900/30 border-blue-700" />
              </div>
              <div>
                <label className="text-white mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-blue-900/30 border-blue-700" />
              </div>
            </div>
            
            <div>
              <label className="text-white mb-2 block">Service Type</label>
              <select className="w-full bg-blue-900/30 border-blue-700 rounded-md p-2 text-white">
                <option>Internet Installation</option>
                <option>Biometric Access</option>
                <option>Security Systems</option>
                <option>Device Repair</option>
              </select>
            </div>

            <div>
              <label className="text-white mb-2 block">Message</label>
              <Textarea placeholder="Tell us about your requirements" className="bg-blue-900/30 border-blue-700" />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Request Quote
            </Button>
          </motion.form>
        </div>
      </main>
    </div>
  );
}
