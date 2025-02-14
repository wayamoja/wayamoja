
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'unset'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-40 h-40"
        >
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-2 border-4 border-purple-500 rounded-full animate-[spin_2s_linear_infinite]" />
          <div className="absolute inset-4 border-4 border-cyan-500 rounded-full animate-[spin_1s_linear_infinite]" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl"
          >
            WAYAMOJA
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
