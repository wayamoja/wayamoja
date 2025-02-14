import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Enterprise Networking",
      description: "Advanced network infrastructure solutions built for scalability and performance.",
      features: ["High-speed Wi-Fi", "Network Security", "24/7 Support"]
    },
    {
      title: "Cloud Solutions",
      description: "Seamless cloud integration and management services for modern businesses.",
      features: ["Cloud Migration", "Hybrid Cloud", "Cloud Security"]
    },
    {
      title: "Security Systems",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Firewall Protection", "Threat Detection", "Data Encryption"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-950 to-black pt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of network and security solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map(feature => (
                  <li key={feature} className="text-blue-400">• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}