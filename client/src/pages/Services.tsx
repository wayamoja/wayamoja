
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import { useState } from "react";

const services = [
  {
    title: "Biometric Access Management",
    description: "Installation of Zkteco F18 & k20 devices for secure access control.",
    icon: "🔐"
  },
  {
    title: "Security Systems",
    description: "CCTV cameras, Razer wire & Electric Fences installation and maintenance.",
    icon: "📹"
  },
  {
    title: "Internet Solutions",
    description: "Professional internet installation and network setup services.",
    icon: "🌐",
    plans: [
      { speed: "8MBPS", price: "KES 1,500" },
      { speed: "12MBPS", price: "KES 2,000" },
      { speed: "15MBPS", price: "KES 2,500" },
      { speed: "20MBPS", price: "KES 3,000" },
      { speed: "25MBPS", price: "KES 3,500" },
      { speed: "30MBPS", price: "KES 4,000" },
      { speed: "40MBPS", price: "KES 4,500" },
      { speed: "50MBPS", price: "KES 5,000" },
      { speed: "60MBPS", price: "KES 8,000" }
    ]
  },
  {
    title: "Device Repair",
    description: "Expert repair services for phones and computers.",
    icon: "🔧"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
              Professional security and technology solutions for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedService(service.title)}
              >
                <Card className="p-6 bg-blue-900/20 border-blue-800 hover:bg-blue-900/30 transition-all cursor-pointer">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                  
                  {service.title === "Internet Solutions" && selectedService === "Internet Solutions" && (
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {service.plans.map((plan) => (
                        <div key={plan.speed} className="bg-blue-800/30 p-4 rounded-lg">
                          <h4 className="text-blue-400 font-semibold">{plan.speed}</h4>
                          <p className="text-white mt-2">{plan.price}</p>
                        </div>
                      ))}
                      <p className="col-span-full text-blue-300 mt-4">Installation Fee: KES 1,000</p>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
