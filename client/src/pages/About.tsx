
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";

export default function About() {
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
            <h1 className="text-4xl font-bold text-white mb-8">About WayaMoja</h1>
            <div className="space-y-6 text-gray-300">
              <p>
                WayaMoja is a leading provider of integrated security and technology solutions.
                We specialize in biometric access control, surveillance systems, and IT services
                designed to protect and enhance your business operations.
              </p>
              <p>
                Our team of experts brings years of experience in implementing cutting-edge
                security solutions, from biometric systems to CCTV installations. We pride
                ourselves on delivering reliable, efficient, and user-friendly solutions
                that meet the unique needs of each client.
              </p>
              <p>
                At WayaMoja, we believe in building long-term relationships with our clients
                through exceptional service and support. Our commitment to quality and
                innovation has made us a trusted partner for businesses across the region.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
