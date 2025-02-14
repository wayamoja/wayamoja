
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";

const services = [
  {
    title: "Network Installation",
    description: "Complete network setup and infrastructure deployment for businesses of all sizes.",
    icon: "🌐"
  },
  {
    title: "Wi-Fi Solutions",
    description: "High-performance wireless networks with enterprise-grade security.",
    icon: "📡"
  },
  {
    title: "Network Maintenance",
    description: "24/7 monitoring and maintenance to ensure optimal network performance.",
    icon: "🔧"
  },
  {
    title: "Security Systems",
    description: "Advanced network security solutions to protect your business data.",
    icon: "🔒"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-gray-300">
              Professional network solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-blue-900/20 border-blue-800 hover:bg-blue-900/30 transition-colors">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
