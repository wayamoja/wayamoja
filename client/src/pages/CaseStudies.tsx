
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";

const caseStudies = [
  {
    title: "Enterprise Office Complex",
    client: "TechCorp International",
    challenge: "Needed high-density Wi-Fi coverage for 2000+ employees across 20 floors",
    solution: "Implemented Wi-Fi 6 mesh network with 200+ access points and advanced traffic management",
    results: ["99.999% network uptime", "5x faster connection speeds", "Zero dead zones"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
  },
  {
    title: "Educational Campus",
    client: "State University",
    challenge: "Required seamless coverage across 50-acre campus with 10,000+ simultaneous users",
    solution: "Deployed campus-wide Wi-Fi infrastructure with smart load balancing",
    results: ["Supports 15,000+ concurrent devices", "Enhanced security protocols", "90% reduction in connectivity issues"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585"
  },
  // Add more case studies as needed
];

export default function CaseStudies() {
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
            <h1 className="text-4xl font-bold text-white mb-6">Case Studies</h1>
            <p className="text-gray-300">
              Real-world examples of our network solutions in action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-blue-900/20 border-blue-800">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-blue-400 mb-4">{study.client}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-300 font-medium">Challenge</h4>
                        <p className="text-gray-400">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-300 font-medium">Solution</h4>
                        <p className="text-gray-400">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-300 font-medium">Results</h4>
                        <ul className="text-gray-400">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-center">
                              <span className="mr-2">→</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
