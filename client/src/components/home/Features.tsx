import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose WayaMoja?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "High-Speed Internet",
              description: "Blazing fast internet connectivity with 99.9% uptime guarantee.",
              icon: "🚀"
            },
            {
              title: "Network Security",
              description: "Enterprise-grade security solutions to protect your business.",
              icon: "🔒"
            },
            {
              title: "Cloud Solutions",
              description: "Scalable cloud infrastructure for modern businesses.",
              icon: "☁️"
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock technical assistance and monitoring.",
              icon: "🛠️"
            },
            {
              title: "Custom Solutions",
              description: "Tailored networking solutions for your specific needs.",
              icon: "⚡"
            },
            {
              title: "Data Centers",
              description: "State-of-the-art data centers across Kenya.",
              icon: "🏢"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}