
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { WavePattern } from "@/components/ui/patterns/WavePattern";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <WavePattern className="absolute inset-0 z-0 opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8"
          >
            Next-Generation Network Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Empowering businesses with enterprise-grade Wi-Fi and network infrastructure. Experience unparalleled connectivity with Waya Moja's cutting-edge solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-6">
                Explore Solutions
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Enterprise Clients", value: "200+" },
              { label: "Network Uptime", value: "99.99%" },
              { label: "Support Response", value: "<15min" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
