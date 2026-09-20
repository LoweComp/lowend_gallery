import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowLeft, Check, CheckSquare, Square, Eye, Sparkles, AlertTriangle } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import LightboxDownload from "yet-another-react-lightbox/plugins/download";
import { downloadImagesAsZip } from '../utils/downloadHelper';

// FOTOS TEMPORÁRIAS
const PLACEHOLDER_PHOTOS = Array.from({ length: 12 }).map((_, index) => ({
  id: index + 1,
  url: `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80`,
  title: `Foto #${index + 1}`
}));

export default function Gallery({ onBack }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [isDownloading, setIsDownloading] = useState(false);

  // Selecionar / Deselecionar foto individual
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Selecionar / Deselecionar Todas
  const toggleSelectAll = () => {
    if (selectedIds.length === PLACEHOLDER_PHOTOS.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(PLACEHOLDER_PHOTOS.map((img) => img.id));
    }
  };

  // Download .zip das fotos
  const handleDownload = async () => {
    if (selectedIds.length === 0) return;
    setIsDownloading(true);
    const selectedImages = PLACEHOLDER_PHOTOS.filter((img) => selectedIds.includes(img.id));
    await downloadImagesAsZip(selectedImages, 'LOWEND_SELECAO.zip');
    setIsDownloading(false);
  };

  return (
    <div className="min-h-screen bg-lowend-darkest text-white selection:bg-lowend-orange selection:text-black">
      
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800/80 px-4 py-4 md:px-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Botão Voltar */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-lowend-orange text-zinc-300 hover:text-white transition-all cursor-pointer"
            title="Voltar ao início"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-lowend-orange block uppercase">
              REGISTROS OFICIAIS
            </span>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider">
              LOWEND <span className="text-lowend-glow font-normal text-sm">/ GALERIA</span>
            </h2>
          </div>
        </div>

        {/* Seleção e Download */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          
          <button
            onClick={toggleSelectAll}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
          >
            {selectedIds.length === PLACEHOLDER_PHOTOS.length ? (
              <>
                <CheckSquare className="w-4 h-4 text-lowend-orange" />
                <span>DESMARCAR TODAS</span>
              </>
            ) : (
              <>
                <Square className="w-4 h-4 text-zinc-500" />
                <span>SELECIONAR TODAS</span>
              </>
            )}
          </button>

          {/* Baixar Selecionadas */}
          <button
            onClick={handleDownload}
            disabled={selectedIds.length === 0 || isDownloading}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              selectedIds.length > 0
                ? 'bg-gradient-to-r from-lowend-red via-lowend-orange to-lowend-glow text-black shadow-[0_0_20px_rgba(255,77,0,0.4)] hover:scale-105'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700/50'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>
              {isDownloading
                ? 'COMPACTANDO...'
                : `BAIXAR SELECIONADAS (${selectedIds.length})`}
            </span>
          </button>

        </div>
      </header>

      {/* CONTEÚDO DA GALERIA */}
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
      
        {/* AVISO: ZIP VS INDIVIDUAL */}
        <div className="flex items-start md:items-center gap-3 py-3 px-4 rounded-xl bg-lowend-orange/10 border border-lowend-orange/30 shadow-[0_0_15px_rgba(255,77,0,0.1)] mb-6 text-xs md:text-sm font-mono text-zinc-300">
          <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-lowend-orange shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-lowend-orange uppercase tracking-wider block md:inline mb-1 md:mb-0 md:mr-2">
              [ ATENÇÃO! ]
            </strong> 
            O Download Múltiplo gera um arquivo <strong className="text-white">.ZIP</strong>! e é ideal para COMPUTADORES. Se você estiver pelo <strong className="text-white">CELULAR</strong>, recomendamos clicar na foto para ampliar e BAIXAR INDIVIDUALMENTE usando a seta no topo.
          </p>
        </div>

        {/* Barra Informativa */}
        <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 mb-6 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-lowend-orange" />
            TOTAL: <strong className="text-white">{PLACEHOLDER_PHOTOS.length} FOTOS</strong>
          </span>
          <span>
            SELECIONADAS: <strong className="text-lowend-glow">{selectedIds.length}</strong>
          </span>
        </div>

        {/* GRID DE FOTOS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {PLACEHOLDER_PHOTOS.map((photo, index) => {
            const isSelected = selectedIds.includes(photo.id);

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative rounded-xl overflow-hidden bg-zinc-900 border transition-all duration-300 ${
                  isSelected
                    ? 'border-lowend-orange shadow-[0_0_15px_rgba(255,77,0,0.3)] ring-2 ring-lowend-orange/50'
                    : 'border-zinc-800/80 hover:border-zinc-600'
                }`}
              >
                {/* Imagem */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-950 relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlays Gradientes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Checkbox de Seleção */}
                  <button
                    onClick={() => toggleSelect(photo.id)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer z-10 ${
                      isSelected
                        ? 'bg-lowend-orange text-black font-bold shadow-lg'
                        : 'bg-black/60 backdrop-blur-md border border-white/20 text-white hover:border-white/50'
                    }`}
                  >
                    {isSelected ? <Check className="w-5 h-5 stroke-[3]" /> : <Square className="w-4 h-4 opacity-70" />}
                  </button>

                  {/* Abrir Lightbox */}
                  <button
                    onClick={() => setLightboxIndex(index)}
                    className="absolute bottom-3 left-3 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-90 hover:opacity-100 hover:bg-black/80 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-lowend-glow" />
                    <span>AMPLIAR</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </main>

      {/* LIGHTBOX (TELA CHEIA) */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={PLACEHOLDER_PHOTOS.map((p) => ({ 
          src: p.url,
          download: p.url
        }))}
        plugins={[LightboxDownload]} // Botão de download nativo
      />

    </div>
  );
}