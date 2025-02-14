
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Input } from './input';
import { Button } from './button';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  
  const services = [
    'Network Infrastructure',
    'Enterprise Wi-Fi Solutions',
    'Cloud Services',
    'Cybersecurity',
    'Technical Support',
    'Data Center Solutions'
  ];
  
  useEffect(() => {
    if (query.length > 1) {
      const filtered = services.filter(service => 
        service.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10"
        />
        <Button variant="ghost" className="absolute right-0">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      {results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute w-full bg-white dark:bg-gray-900 shadow-lg rounded-md mt-2 p-2 z-50"
        >
          {results.map((result, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer"
            >
              {result}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
