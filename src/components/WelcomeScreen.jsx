import { motion } from 'framer-motion';
import { Thermometer, ChevronDown, Flame, CheckCircle2, ShieldAlert, Clock, Calendar, Timer } from 'lucide-react';
import bgImage from '../assets/CIRCLE_LIGHT.jpg'; 

function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-zinc-400 text-xs tracking-widest uppercase font-mono mt-8 mb-4"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.8 }}
    >
      <span>Role para explorar</span>
      <ChevronDown className="w-5 h-5 text-lowend-orange" />
    </motion.div>
  );
}

export default function WelcomeScreen({ onEnter }) {
  return (
    <div className="relative min-h-[260vh] bg-lowend-darkest text-white selection:bg-lowend-orange selection:text-black">
    
      <div className="fixed inset-0 z-0">
        <img
          src={bgImage}
          alt="LOWEND Desert"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-lowend-darkest/95"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen pt-12 pb-12 px-4 text-center">
        
        {/* SEÇÃO 1 */}
        <div className="flex flex-col items-center justify-between min-h-[85vh] max-w-3xl w-full pt-6">
          
          {/* Widget de Temperatura */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/70 backdrop-blur-md border border-lowend-orange/30 text-xs md:text-sm uppercase tracking-widest text-lowend-glow shadow-[0_0_20px_rgba(255,77,0,0.25)] mb-8"
          >
            <Thermometer className="w-4 h-4 text-lowend-orange animate-pulse" />
            <span className="font-mono font-bold text-white">43°C</span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1 text-lowend-orange font-semibold">
              <Flame className="w-3.5 h-3.5" /> CLIMA EXTREMO
            </span>
          </motion.div>

          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 my-auto"
          >
            <p className="text-lowend-orange text-xs md:text-sm tracking-[0.4em] uppercase font-mono">
              [ O DESERTO NAS NUVENS ]
            </p>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-[0_0_25px_rgba(255,77,0,0.5)]">
              LOWEND
            </h1>
            <p className="text-zinc-300 text-sm md:text-lg tracking-widest max-w-md mx-auto">
              NUNCA FOI UMA MIRAGEM!
            </p>
          </motion.div>

          <ScrollIndicator />
        </div>

        {/* SEÇÃO 2 */}
        <div className="flex flex-col items-center justify-center min-h-[75vh] max-w-2xl my-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="w-full backdrop-blur-md bg-black/80 p-6 md:p-10 rounded-2xl border border-lowend-orange/30 shadow-[0_0_30px_rgba(255,77,0,0.15)] text-left space-y-8 font-mono"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-lowend-orange animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-lowend-orange font-bold">
                  RELATÓRIO DE CAMPO
                </span>
              </div>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                [ STATUS: CONCLUÍDO ]
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-zinc-400 uppercase tracking-[0.3em]">
                ÚLTIMA MISSÃO
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider font-sans">
                NAS NUVENS
              </h3>
            </div>

            {/* Grid com Infos da Festa */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 py-2">
              <div className="p-3 bg-zinc-950/80 rounded border border-zinc-800/80 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] md:text-xs uppercase mb-1">
                  <Calendar className="w-3.5 h-3.5 text-lowend-orange" />
                  <span>DATA</span>
                </div>
                <span className="text-sm md:text-lg font-bold text-white">11.09.26</span>
              </div>

              <div className="p-3 bg-zinc-950/80 rounded border border-zinc-800/80 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] md:text-xs uppercase mb-1">
                  <Clock className="w-3.5 h-3.5 text-lowend-orange" />
                  <span>HORÁRIO</span>
                </div>
                <span className="text-sm md:text-lg font-bold text-white">20H</span>
              </div>

              <div className="p-3 bg-zinc-950/80 rounded border border-zinc-800/80 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] md:text-xs uppercase mb-1">
                  <Timer className="w-3.5 h-3.5 text-lowend-orange" />
                  <span>DURAÇÃO</span>
                </div>
                <span className="text-sm md:text-lg font-bold text-white">10H</span>
              </div>
            </div>

            {/* Barra de Carregamento */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-end text-xs">
                <span className="text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  REGISTROS FORAM SALVOS
                </span>
                <span className="text-lowend-glow font-bold text-sm">100%</span>
              </div>

              {/* Trilho da Barra */}
              <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-lowend-red via-lowend-orange to-lowend-glow rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  viewport={{ once: false }}
                />
              </div>
            </div>
          </motion.div>

          <ScrollIndicator />
        </div>

        {/* SEÇÃO 3 */}
        <div className="flex flex-col items-center justify-center min-h-[50vh] max-w-xl pb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-white">
              Pronto para as fotos?
            </h3>
            
            <p className="text-zinc-400 text-xs md:text-sm tracking-wider font-mono">
              SUA JORNADA PELO DESERTO FOI DOCUMENTADA.
            </p>

            <motion.button
              onClick={onEnter}
              className="w-full md:w-auto px-12 py-5 border-2 border-lowend-orange bg-lowend-orange/10 hover:bg-lowend-orange hover:text-black text-lowend-glow font-extrabold tracking-[0.25em] uppercase transition-all duration-300 rounded-lg shadow-[0_0_30px_rgba(255,77,0,0.4)] text-sm md:text-base cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Acessar Galeria Completa
            </motion.button>
          </motion.div>
        </div>

      </div>
    </div>
  );
}