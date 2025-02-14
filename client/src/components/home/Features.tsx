
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Enterprise Wi-Fi Solutions",
    description: "High-density wireless networks designed for corporate environments with seamless roaming and advanced security protocols.",
    icon: "📡",
    details: ["802.11ax (Wi-Fi 6) Support", "Multi-SSID Configuration", "Enterprise WPA3 Security"]
  },
  {
    title: "Network Infrastructure",
    description: "Complete end-to-end network design and implementation with redundancy and failover capabilities.",
    icon: "🌐",
    details: ["Structured Cabling", "Switch Configuration", "Load Balancing"]
  },
  {
    title: "24/7 Monitoring",
    description: "Continuous network monitoring and proactive maintenance to prevent downtime.",
    icon: "👨‍💻",
    details: ["Real-time Analytics", "Performance Monitoring", "Automated Alerts"]
  },
  {
    title: "Security Solutions",
    description: "Advanced network security implementation including firewall setup and intrusion detection systems.",
    icon: "🔒",
    details: ["Next-Gen Firewalls", "IDS/IPS Systems", "VPN Solutions"]
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-blue-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering enterprise-grade network solutions with cutting-edge technology and unmatched reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-blue-900/20 border-blue-800 hover:bg-blue-900/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center">
                      <span className="mr-2">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
