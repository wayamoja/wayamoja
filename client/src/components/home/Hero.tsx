import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/SearchBar";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-8 leading-tight"
        >
          Transforming Networks,
          <br />
          Empowering Success
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          WayaMoja delivers cutting-edge network solutions that power businesses across Kenya. Experience reliable, high-speed connectivity and expert IT support.
        </motion.p>

        <div className="mb-12">
          <SearchBar />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
            Learn More
          </Button>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Enterprise Solutions</h3>
            <p className="text-gray-400">Customized networking solutions for businesses of all sizes.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-400">Round-the-clock technical assistance and monitoring.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Cloud Services</h3>
            <p className="text-gray-400">Secure and scalable cloud infrastructure solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}