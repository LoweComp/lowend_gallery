import { motion } from 'framer-motion';
import logo from '../assets/LOGO.png'; 

export default function WelcomeScreen({ onEnter }) {
  return (
    <div className="min-h-screen bg-lowend-darkest flex flex-col items-center justify-center p-6 text-center">
      
      <motion.img
        src={logo}
        alt="LOWEND - Não é miragem"
        className="w-full max-w-lg mb-12 drop-shadow-[0_0_15px_rgba(255,77,0,0.3)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.button
        onClick={onEnter}
        className="px-10 py-4 border border-lowend-red text-lowend-glow font-bold tracking-[0.2em] uppercase hover:bg-lowend-red hover:text-white transition-all duration-300 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Acessar Galeria
      </motion.button>

    </div>
  );
}