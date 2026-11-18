import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { PARCEIROS_EASYBYZ, type PartnerData } from '../data/partners';

const trimmedLogoCache = new Map<string, string>();

const PartnerLogo: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = '' }) => {
  const [resolvedSrc, setResolvedSrc] = useState<string>(() => trimmedLogoCache.get(src) || src);

  useEffect(() => {
    const cached = trimmedLogoCache.get(src);
    if (cached) {
      setResolvedSrc(cached);
      return;
    }

    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.referrerPolicy = 'no-referrer';

    img.onload = () => {
      try {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h) return;

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const { data } = ctx.getImageData(0, 0, w, h);

        let minX = w;
        let minY = h;
        let maxX = -1;
        let maxY = -1;

        for (let y = 0; y < h; y++) {
          const rowOffset = y * w * 4;
          for (let x = 0; x < w; x++) {
            const alpha = data[rowOffset + x * 4 + 3];
            if (alpha > 8) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        if (maxX >= minX && maxY >= minY) {
          const cropW = maxX - minX + 1;
          const cropH = maxY - minY + 1;

          // Só recorta se houver margem transparente significativa
          if (cropW < w * 0.96 || cropH < h * 0.96) {
            const outCanvas = document.createElement('canvas');
            outCanvas.width = cropW;
            outCanvas.height = cropH;
            const outCtx = outCanvas.getContext('2d');
            if (outCtx) {
              outCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);
              const dataUrl = outCanvas.toDataURL('image/png');
              trimmedLogoCache.set(src, dataUrl);
              if (!cancelled) {
                setResolvedSrc(dataUrl);
              }
            }
          }
        }
      } catch {
        // Mantém a imagem original caso CORS impeça leitura de pixels
      }
    };

    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};

interface PartnersPageProps {
  onBackToGuide: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onBackToGuide }) => {
  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPartner(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getContactHref = (partner: PartnerData) => {
    if (partner.contactType === 'whatsapp') {
      const cleanPhone = partner.contactValue.replace(/\D/g, '');
      const defaultMsg = `Olá! Sou cliente indicada pela Pati (EasyByz) e gostaria de saber mais sobre os serviços da ${partner.name}.`;
      return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(partner.whatsappMessage || defaultMsg)}`;
    }
    return partner.contactValue;
  };

  const renderDescriptionParagraph = (paragraph: string, highlightedPhrase?: string) => {
    if (!highlightedPhrase || !paragraph.includes(highlightedPhrase)) {
      return paragraph;
    }
    const parts = paragraph.split(highlightedPhrase);
    return (
      <>
        {parts[0]}
        <strong className="text-[#424733] font-bold">{highlightedPhrase}</strong>
        {parts.slice(1).join(highlightedPhrase)}
      </>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pt-5 sm:pt-8 pb-14 sm:pb-20">
      {/* Barra de Navegação de Retorno */}
      <div className="mb-5 sm:mb-7 flex items-center justify-start gap-3">
        <button
          onClick={onBackToGuide}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#424733] font-bold text-xs sm:text-sm border border-[#A38C66]/40 shadow-2xs transition-all cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-[#613C26] group-hover:-translate-x-0.5 transition-transform" />
          <span>Voltar para as Aulas do App</span>
        </button>
      </div>

      {/* Cabeçalho Editorial da Página Parceiros EasyByz (em Marrom) */}
      <section className="bg-gradient-to-br from-[#613C26] via-[#53321f] to-[#3c2314] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border-2 border-[#A38C66]/55 mb-7 sm:mb-10 relative overflow-hidden">
        {/* Foto da Pati sutilmente integrada ao fundo do cabeçalho */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-[60%] md:w-[46%] pointer-events-none select-none overflow-hidden">
          <img
            src="https://raw.githubusercontent.com/easybyzcreator/imagens/8afcc7b58eca4ce99fe97d845b2baf50507ee6bc/patiebc.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[center_15%] opacity-20 sm:opacity-30 md:opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#53321f] via-[#53321f]/80 to-[#3c2314]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3c2314]/90 via-transparent to-[#613C26]/40" />
        </div>

        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#A38C66]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#859159]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-[#A38C66]/50 text-[#FAF8F5] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#A38C66]" />
            <span>PARCEIROS EASYBYZ</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Parceiros de Confiança para Ajudar o seu Negócio a Crescer
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#F0F0F0]/95 leading-relaxed">
            Pensando e percebendo a necessidade real das nossas clientes no dia a dia, estamos sempre em busca de ajudá-las com os melhores produtos e serviços do mercado.
          </p>

          <div className="pt-1 flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF8F5]/95 bg-black/30 backdrop-blur-[2px] p-3.5 sm:p-4 rounded-xl border border-white/15">
            <ShieldCheck className="w-5 h-5 text-[#859159] shrink-0 mt-0.5" />
            <span>
              Todas as empresas e profissionais abaixo são <strong>parceiros de confiança que recomendamos</strong> para apoiar você em áreas essenciais — da divulgação e gestão até a operação da sua marmitaria. Clique em <strong>"Ver Detalhes"</strong> em qualquer parceiro para conhecer melhor e falar diretamente com a equipe.
            </span>
          </div>
        </div>
      </section>

      {/* Grid Responsivo dos Parceiros em Ordem Alfabética */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {PARCEIROS_EASYBYZ.map((partner) => (
          <div
            key={partner.id}
            onClick={() => setSelectedPartner(partner)}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#A38C66]/30 hover:border-[#613C26] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-4 cursor-pointer group"
          >
            <div className="space-y-3.5">
              {/* Área da Logo sobre Fundo Branco Limpo (ocupando 75% do espaço) */}
              <div className="w-full aspect-[16/10] bg-white rounded-xl sm:rounded-2xl border border-[#A38C66]/25 flex items-center justify-center overflow-hidden">
                {partner.logoUrl ? (
                  <div className="w-[75%] h-[75%] flex items-center justify-center">
                    <PartnerLogo
                      src={partner.logoUrl}
                      alt={`Logo ${partner.name}`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 text-[#613C26]">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#A38C66]/30 flex items-center justify-center shadow-2xs">
                      <Building2 className="w-5 h-5 text-[#613C26]" />
                    </div>
                    <span className="text-sm font-black tracking-wide text-[#613C26]">
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Nome e Resumo do Serviço */}
              <div className="text-center space-y-1.5 px-1">
                <h3 className="font-normal text-base sm:text-lg text-[#424733] leading-snug group-hover:text-[#613C26] transition-colors tracking-wide">
                  {partner.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#613C26]/90 font-medium leading-relaxed line-clamp-3 min-h-[3.75rem]">
                  {partner.shortDescription}
                </p>
              </div>
            </div>

            {/* Botão Ver Detalhes */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPartner(partner);
              }}
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-[#FAF8F5] group-hover:bg-[#613C26] text-[#424733] group-hover:text-white border border-[#A38C66]/40 group-hover:border-[#613C26] font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>VER DETALHES</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        ))}
      </section>

      {/* Modal de Detalhes do Parceiro */}
      <AnimatePresence>
        {selectedPartner && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl border-2 border-[#A38C66]/40 shadow-2xl p-5 sm:p-7 max-h-[90vh] overflow-y-auto"
            >
              {/* Barra Superior do Modal */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#613C26]/10 border border-[#613C26]/25 text-[#613C26] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#613C26]" />
                  <span>Parceiro Oficial EasyByz</span>
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedPartner(null)}
                  className="w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#F0F0F0] text-[#424733] border border-[#A38C66]/30 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Fechar detalhes"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Logo Centralizada no Modal */}
              <div className="w-56 sm:w-64 aspect-[16/10] mx-auto bg-white rounded-2xl border border-[#A38C66]/25 flex items-center justify-center shadow-inner mb-5">
                {selectedPartner.logoUrl ? (
                  <div className="w-[75%] h-[75%] flex items-center justify-center">
                    <PartnerLogo
                      src={selectedPartner.logoUrl}
                      alt={`Logo ${selectedPartner.name}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center gap-2 text-[#613C26]">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#A38C66]/30 flex items-center justify-center shadow-2xs">
                      <Building2 className="w-6 h-6 text-[#613C26]" />
                    </div>
                    <span className="text-sm font-black tracking-wide text-[#613C26]">
                      {selectedPartner.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Informações Completas */}
              <div className="text-center space-y-2.5 mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-[#424733] leading-tight tracking-wide">
                  {selectedPartner.name}
                </h3>

                <p className="text-xs sm:text-sm font-bold text-[#613C26]">
                  {selectedPartner.shortDescription}
                </p>

                <div
                  className={`space-y-2 text-xs sm:text-sm text-[#424733]/90 leading-relaxed pt-2 ${
                    selectedPartner.fullDescription.some((p) => p.includes('✅'))
                      ? 'text-left'
                      : 'text-left sm:text-center'
                  }`}
                >
                  {selectedPartner.fullDescription.map((paragraph, index) => {
                    const isChecklistTitle = paragraph.trim().startsWith('✅');
                    return (
                      <p
                        key={index}
                        className={isChecklistTitle ? 'font-bold text-[#424733] pt-1.5' : undefined}
                      >
                        {renderDescriptionParagraph(paragraph, selectedPartner.highlightedPhrase)}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Botões de Ação do Modal */}
              <div className="space-y-2.5">
                {selectedPartner.contactValue ? (
                  <a
                    href={getContactHref(selectedPartner)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#859159] hover:bg-[#613C26] text-white font-black text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center"
                  >
                    {selectedPartner.contactType === 'whatsapp' ? (
                      <MessageCircle className="w-4 h-4 shrink-0" />
                    ) : (
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    )}
                    <span>{selectedPartner.ctaLabel || 'Falar no WhatsApp'}</span>
                  </a>
                ) : (
                  <div className="w-full py-3 px-4 rounded-xl bg-[#FAF8F5] border border-[#A38C66]/35 text-[#424733]/80 text-xs sm:text-sm font-semibold text-center">
                    Link de contato direto em atualização em breve
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedPartner(null)}
                  className="w-full py-3 px-5 rounded-xl bg-[#FAF8F5] hover:bg-[#F0F0F0] text-[#424733] font-bold text-xs sm:text-sm border border-[#A38C66]/30 transition-colors cursor-pointer"
                >
                  Voltar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
