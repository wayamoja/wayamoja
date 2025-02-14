
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const internetPlans = [
    {
      name: "Basic",
      speed: "10 Mbps",
      price: "2,999",
      features: ["Unlimited Data", "24/7 Support", "Basic Firewall", "Free Installation"]
    },
    {
      name: "Business",
      speed: "50 Mbps",
      price: "4,999",
      features: ["Unlimited Data", "24/7 Priority Support", "Advanced Security", "Static IP", "99.9% Uptime SLA"]
    },
    {
      name: "Enterprise",
      speed: "100+ Mbps",
      price: "Custom",
      features: ["Custom Bandwidth", "Dedicated Support", "Enterprise Security", "Multiple Static IPs", "Network Monitoring"]
    }
  ];

  const services = [
    {
      title: "Enterprise Networking",
      description: "State-of-the-art network infrastructure solutions designed for modern businesses.",
      features: [
        "High-speed Wi-Fi 6 Networks",
        "Advanced Network Security",
        "24/7 Monitoring & Support",
        "Network Design & Implementation",
        "Performance Optimization"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Comprehensive cloud services to transform your business operations.",
      features: [
        "Cloud Migration Services",
        "Hybrid Cloud Solutions",
        "Cloud Security & Compliance",
        "Backup & Disaster Recovery",
        "Cloud Cost Optimization"
      ]
    },
    {
      title: "Security Systems",
      description: "Robust security solutions to protect your digital assets and infrastructure.",
      features: [
        "Next-gen Firewall Protection",
        "Threat Detection & Response",
        "Data Encryption Services",
        "Security Audits & Compliance",
        "Employee Security Training"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-950 to-black pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            WayaMoja delivers cutting-edge network solutions to empower businesses across Kenya. With our expertise in networking, security, and cloud services, we help organizations achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Internet Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {internetPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">
                  {plan.speed}
                  <span className="text-lg text-gray-400 ml-2">/ month</span>
                </div>
                <div className="text-2xl font-bold text-white mb-6">
                  KSH {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(feature => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <span className="text-blue-400 mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/quote">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

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

        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose WayaMoja?</h2>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-gray-300 mb-6">
              At WayaMoja, we understand that reliable connectivity and robust network infrastructure are crucial for modern business success. Our team of certified network engineers and IT professionals work tirelessly to deliver solutions that drive growth and innovation.
            </p>
            <p className="text-gray-300 mb-6">
              We pride ourselves on providing enterprise-grade solutions tailored to businesses of all sizes. From high-speed internet connectivity to advanced security systems, we ensure your organization stays connected, protected, and ahead of the competition.
            </p>
            <p className="text-gray-300">
              With our 24/7 support and proactive monitoring, you can focus on your core business while we handle your technology infrastructure. Experience the WayaMoja difference today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
