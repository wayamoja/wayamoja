
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GridPattern from "../ui/patterns/GridPattern";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-blue-950 to-black">
      <GridPattern />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-900/50 text-blue-200 rounded-full"
          >
            Professional Network Solutions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Connecting Your World with Reliable Networks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10"
          >
            Expert Wi-Fi installation and network maintenance services for businesses and enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-900/20">
              View Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
