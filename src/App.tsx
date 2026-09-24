/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  CheckCircle2, 
  Award, 
  ExternalLink, 
  MessageCircle,
  Play,
  Lock,
  Unlock,
  AlertTriangle,
  HelpCircle,
  Palette,
  QrCode,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  UtensilsCrossed,
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
  RefreshCw,
  Eye,
  Tv
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EASYBYZ_WHATSAPP = '18038889018';
const DEFAULT_SUPPORT_MSG = "Olá Pati, sou aluna da EGN e estou com uma dúvida durante a configuração do meu aplicativo no painel. Você pode me ajudar?";

interface StepData {
  id: number;
  title: string;
  badge: string;
  subtitle: string;
  videoId: string;
  coverTag: string;
  coverColor: string;
  coverHighlights: string[];
  description: string[];
  importantNotice?: string;
  callout?: {
    type: 'admin' | 'ready';
    title: string;
    text: string;
  };
  checklist: string[];
  notifyText: string;
  whatsappMessage: string;
}

const STEPS: StepData[] = [
  {
    id: 1,
    title: "Como Inserir os Pratos no seu Cardápio",
    badge: "Etapa 1 de 3",
    subtitle: "Cadastro inicial de pratos, guarnições e fotos no seu cardápio",
    videoId: "1y16SH-Y5MOt_Jio8qwOAxbpg8hBOijKz",
    coverTag: "CADASTRO & CARDÁPIO",
    coverColor: "from-[#424733] via-[#333726] to-[#1f2216]",
    coverHighlights: ["Fotos & Preços", "Guarnições & Tamanhos", "Salvar no Cardápio"],
    description: [
      "Este é o próximo passo do seu aplicativo: gravei um vídeo inicial mostrando o passo a passo de como você pode inserir os pratos no seu cardápio.",
      "Se tiver qualquer dúvida durante o processo, estou à disposição para te ajudar! 😉"
    ],
    checklist: [
      "Assistir ao vídeo com o passo a passo do cadastro",
      "Acessar o link do seu painel administrativo",
      "Cadastrar todos os pratos com nomes, fotos e preços",
      "Salvar todas as alterações no cardápio"
    ],
    notifyText: "Avisar a Pati que cadastrei os itens",
    whatsappMessage: "Olá Pati, concluí a ETAPA 1 do meu aplicativo! Já cadastrei todos os pratos e itens do meu cardápio. Como sigo para os próximos passos?"
  },
  {
    id: 2,
    title: "Configuração das Mensagens no Painel ADM",
    badge: "Etapa 2 de 3",
    subtitle: "Personalize as mensagens automáticas e textos do seu aplicativo",
    videoId: "1AI0c9I1NVthwxt4L8iWdVTdtdw4Fz_mZ",
    coverTag: "MENSAGENS & PAINEL ADM",
    coverColor: "from-[#613C26] via-[#482b1b] to-[#2b170c]",
    coverHighlights: ["Login & Senha", "Textos Automáticos", "Informações de Pagamento"],
    description: [
      "Chegamos à segunda etapa de configuração do seu aplicativo!",
      "Nesta etapa, você vai configurar as mensagens do seu app, acessando o seu painel adm (aquele que enviei o link anteriormente e que tem a senha de acesso).",
      "Se tiver qualquer dúvida durante o processo, estou à disposição para te ajudar! 😉"
    ],
    importantNotice: "É fundamental seguir certinho a sequência de cada vídeo que estou te enviando para que tudo fique perfeito no final, tá?",
    callout: {
      type: 'admin',
      title: "🔐 Painel Administrativo com Login e Senha",
      text: "Utilize o link e a senha de acesso que enviei para você anteriormente para entrar na área administrativa do seu app."
    },
    checklist: [
      "Assistir ao vídeo da Etapa 2 atentamente",
      "Fazer login no painel administrativo com sua senha",
      "Ajustar as mensagens do app para o tom da sua marmitaria",
      "Revisar informações de pagamento e avisos aos clientes",
      "Salvar as novas configurações de mensagens"
    ],
    notifyText: "Avisar a Pati que concluí a Etapa 2",
    whatsappMessage: "Olá Pati, concluí a ETAPA 2 do meu aplicativo! Já configurei todas as mensagens no painel adm. Podemos ir para a etapa 3?"
  },
  {
    id: 3,
    title: "Como Entender o Pedido do seu Cliente",
    badge: "Etapa 3 de 3",
    subtitle: "Aprenda a visualizar, gerenciar e confirmar os pedidos recebidos",
    videoId: "1dgcUkrJGWIAuIQWyvodgAkxcv_7C7PkH",
    coverTag: "FLUXO DE PEDIDOS & CLIENTE",
    coverColor: "from-[#35432b] via-[#424733] to-[#202919]",
    coverHighlights: ["Simulação de Pedido", "Painel de Atendimento", "Lançamento Oficial"],
    description: [
      "Chegamos à terceira etapa de configuração do seu aplicativo!",
      "Nesta etapa, você vai aprender como entender o pedido do seu cliente no aplicativo (aquele que enviei o link anteriormente e que tem a senha de acesso).",
      "Assim que você concluir essa etapa, por favor me avise. Já está quase na hora do seu cliente receber o seu app !!",
      "Se tiver qualquer dúvida durante o processo, estou à disposição para te ajudar! 😉"
    ],
    importantNotice: "É fundamental seguir certinho a sequência de cada vídeo que estou te enviando para que tudo fique perfeito no final, tá?",
    callout: {
      type: 'ready',
      title: "🚀 Quase pronto para o lançamento!",
      text: "Depois dessa etapa, sua marmitaria estará pronta para divulgar o link para os clientes, redes sociais e embalagens!"
    },
    checklist: [
      "Assistir ao vídeo da Etapa 3 sobre fluxo de pedidos",
      "Fazer um pedido simulado de teste no seu app",
      "Verificar como o pedido chega no painel e no WhatsApp",
      "Confirmar que você compreendeu todo o fluxo de atendimento",
      "Dar o OK final para começar a divulgar aos clientes!"
    ],
    notifyText: "Avisar a Pati que o app está pronto!",
    whatsappMessage: "Olá Pati, concluí a ETAPA 3 do meu aplicativo! Já assisti ao vídeo, entendi o recebimento de pedidos e meu app está pronto para divulgar aos meus clientes! 🎉"
  }
];

export default function App() {
  const { scrollY } = useScroll();
  const chefY = useTransform(scrollY, [0, 600], [0, -20]);

  const [activeStep, setActiveStep] = useState<number>(1);
  const [playingVideoSteps, setPlayingVideoSteps] = useState<{ [key: number]: boolean }>({});
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('egn_completed_steps');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(() => {
    try {
      const saved = localStorage.getItem('egn_checklist_items');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('egn_completed_steps', JSON.stringify(completedSteps));
    } catch (e) {
      console.warn('Erro ao salvar progresso:', e);
    }
  }, [completedSteps]);

  useEffect(() => {
    try {
      localStorage.setItem('egn_checklist_items', JSON.stringify(checkedItems));
    } catch (e) {
      console.warn('Erro ao salvar checklist:', e);
    }
  }, [checkedItems]);

  const toggleCheckItem = (key: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleToggleStepComplete = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(prev => prev.filter(id => id !== stepId));
    } else {
      setCompletedSteps(prev => [...prev, stepId]);
      if (stepId < 3) {
        setActiveStep(stepId + 1);
      }
    }
  };

  const startPlaying = (stepId: number) => {
    setPlayingVideoSteps(prev => ({ ...prev, [stepId]: true }));
  };

  const resetToCover = (stepId: number) => {
    setPlayingVideoSteps(prev => ({ ...prev, [stepId]: false }));
  };

  const currentStepData = STEPS.find(s => s.id === activeStep) || STEPS[0];
  const isVideoPlaying = !!playingVideoSteps[currentStepData.id];

  const totalProgressPercent = Math.round((completedSteps.length / STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-[#F0F0F0] font-sans text-[#424733] selection:bg-[#859159] selection:text-white">
      
      {/* Top Header Bar */}
      <div className="bg-[#424733] text-[#F0F0F0] text-xs sm:text-sm py-2.5 px-3 text-center font-medium border-b border-[#613C26]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center flex-wrap justify-center gap-2 text-center">
            <Award className="w-4 h-4 text-[#A38C66] shrink-0" />
            <span className="font-bold text-white">Escola de Gastronomia e Negócios (EGN)</span>
            <span className="bg-[#859159]/40 text-[#F0F0F0] text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border border-[#859159]/50">
              Área Exclusiva da Aluna
            </span>
          </div>
          <div className="text-[11px] sm:text-xs text-[#F0F0F0]/90 text-center flex items-center gap-1.5">
            <span>Desenvolvido & Suporte:</span>
            <strong className="text-white">EASY BYZ (Pati)</strong>
          </div>
        </div>
      </div>

      {/* Editorial Hero Header */}
      <header className="max-w-6xl mx-auto pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Coluna Visual: Chef Gabi + Pati Guimarães lado a lado */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-5 relative flex flex-col items-center">
            <motion.div
              animate={{ 
                scale: [1, 1.06, 1],
                opacity: [0.22, 0.35, 0.22] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#859159]/30 via-[#A38C66]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
            />

            {/* Duas Fotos: Chef Gabi e Pati Guimarães lado a lado */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[440px]">
              
              {/* Card Chef Gabi */}
              <motion.div
                style={{ y: chefY }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-3 border-white bg-[#FAF8F5] aspect-[3/4] group"
              >
                <img
                  src="https://i.ibb.co/5hRZcYYL/chefegn.png"
                  alt="Chef Gabi Paludo - EGN"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-white p-2 rounded-xl bg-black/60 backdrop-blur-xs border border-white/20">
                  <span className="block font-bold text-white text-[11px] sm:text-xs leading-tight">Chef Gabi Paludo</span>
                  <span className="text-[#A38C66] text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">Metodologia EGN</span>
                </div>
              </motion.div>

              {/* Card Pati Guimarães (Easy Byz) */}
              <motion.div
                style={{ y: chefY }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-3 border-white bg-[#FAF8F5] aspect-[3/4] group"
              >
                <img
                  src="https://i.ibb.co/Tx7k6D8f/patiebc.jpg"
                  alt="Pati Guimarães - EASY BYZ"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-white p-2 rounded-xl bg-black/60 backdrop-blur-xs border border-white/20">
                  <span className="block font-bold text-white text-[11px] sm:text-xs leading-tight">Pati Guimarães</span>
                  <span className="text-[#859159] text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">EASY BYZ • Suporte & App</span>
                </div>
              </motion.div>

            </div>

            {/* Status de Progresso e Botão de Ajuda Rápida */}
            <div className="mt-3.5 w-full max-w-[440px] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="bg-[#424733] text-white p-3 rounded-2xl shadow-sm border border-[#613C26] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#A38C66] font-bold uppercase tracking-wider">Seu Progresso</span>
                  <span className="text-xs font-bold text-white">{completedSteps.length} de 3 etapas</span>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex-1 bg-white/20 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#859159] h-full transition-all duration-500 rounded-full"
                      style={{ width: `${totalProgressPercent}%` }}
                    />
                  </div>
                  <span className="text-xs font-extrabold text-white shrink-0">{totalProgressPercent}%</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(DEFAULT_SUPPORT_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#613C26] hover:bg-[#859159] text-white p-3 rounded-2xl text-center text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#A38C66]" />
                <span>Dúvidas com a Pati</span>
              </a>
            </div>

          </div>

          {/* Coluna Texto: Apresentação do Guia */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#859159]/15 border border-[#859159]/30 text-[#424733] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#859159]" />
              <span>Manual de Configuração e Ativação do App</span>
            </div>

            {/* Imagem 2: Título com o ajuste solicitado */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#424733] tracking-tight leading-tight">
              Parabéns! O seu aplicativo foi criado. Agora <span className="text-[#613C26] underline decoration-[#859159]">vamos aos ajustes finais do app da sua marmitaria</span>.
            </h1>

            {/* Imagem 3: Texto com o ajuste solicitado */}
            <p className="text-sm sm:text-base text-[#424733]/85 leading-relaxed">
              Eu te entreguei o app personalizado de acordo com as informações da rotina da sua marmitaria que você me respondeu no questionário inicial. Em seguida, preparei estes <strong>vídeos práticos em 3 etapas</strong> para que você possa inserir seus pratos, configurar suas mensagens no painel e fazer os testes finais com total segurança antes de começar a divulgar para seus clientes.
            </p>

            {/* Banner de Aviso de Sequência (Destaque Principal) */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 text-left flex items-start gap-3.5 shadow-sm">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-xl shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-amber-900 flex items-center gap-1.5">
                  <span>📌 Regra de Ouro: Siga estritamente a sequência das etapas!</span>
                </h3>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  É fundamental assistir e realizar <strong>uma etapa por vez (1 → 2 → 3)</strong>. 
                  Não pule para o vídeo seguinte se você ainda não concluiu e testou o anterior, para que tudo fique perfeito no final!
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Navegador das 3 Etapas (Tabs / Stepper) */}
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {STEPS.map((step) => {
              const isCompleted = completedSteps.includes(step.id);
              const isActive = activeStep === step.id;
              const isPreviousCompleted = step.id === 1 || completedSteps.includes(step.id - 1);

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "relative p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 shadow-xs",
                    isActive 
                      ? "bg-white border-[#613C26] ring-2 ring-[#613C26]/20 shadow-md" 
                      : "bg-[#FAF8F5] border-[#A38C66]/30 hover:border-[#859159] hover:bg-white",
                    !isPreviousCompleted && "opacity-85"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "text-xs font-extrabold uppercase px-2.5 py-1 rounded-full",
                      isActive 
                        ? "bg-[#613C26] text-white" 
                        : isCompleted 
                          ? "bg-[#859159] text-white" 
                          : "bg-[#424733]/10 text-[#424733]"
                    )}>
                      {step.badge}
                    </span>

                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-[#859159]">
                        <CheckCircle2 className="w-4 h-4" />
                        Concluída
                      </span>
                    ) : !isPreviousCompleted ? (
                      <span className="flex items-center gap-1 text-[11px] text-[#A38C66]">
                        <Lock className="w-3.5 h-3.5" />
                        Requer Etapa {step.id - 1}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-[#424733]/60">
                        <Unlock className="w-3.5 h-3.5" />
                        Em aberto
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#424733] leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#424733]/70 mt-1 line-clamp-2">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#A38C66]/15 flex items-center justify-between text-xs font-semibold">
                    <span className={isActive ? "text-[#613C26]" : "text-[#859159]"}>
                      {isActive ? "Visualizando agora" : "Abrir instruções"}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#A38C66]" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Card do App de Simulação da Escola (Sugestões de Mensagens) */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-[#FAF8F5] via-white to-[#FAF8F5] rounded-2xl p-4 sm:p-5 border border-[#859159]/40 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#859159]/20 text-[#859159] flex items-center justify-center shrink-0 mt-0.5">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-extrabold text-sm sm:text-base text-[#424733]">
                    App de Simulação da Escola (Sugestões de Mensagens)
                  </span>
                  <span className="bg-[#859159]/15 text-[#424733] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#859159]/30">
                    Modelo de Exemplo
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#424733]/80 leading-relaxed max-w-2xl">
                  Acesse o aplicativo de simulação da Chef Gabi para ver sugestões de mensagens, textos de pedidos e exemplos práticos para o seu cardápio.
                </p>
              </div>
            </div>

            <a
              href="https://egn-chefgabipaludo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 bg-[#859159] hover:bg-[#613C26] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-xs hover:shadow-md flex items-center justify-center gap-2 shrink-0 group"
            >
              <span>Ver App de Simulação</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* Bloco de Detalhes da Etapa Atual */}
        <section className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-[#A38C66]/30 space-y-8">
          
          {/* Cabeçalho da Etapa Selecionada */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#A38C66]/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#613C26] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {currentStepData.badge}
                </span>
                {completedSteps.includes(currentStepData.id) ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#859159] bg-[#859159]/15 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Etapa Marcada como Concluída
                  </span>
                ) : (
                  <span className="text-xs text-[#424733]/60 font-medium">
                    Siga o passo a passo com calma
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#424733]">
                {currentStepData.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#424733]/75 mt-1">
                {currentStepData.subtitle}
              </p>
            </div>

            {/* Botão de Marcar como Concluído */}
            <button
              onClick={() => handleToggleStepComplete(currentStepData.id)}
              className={cn(
                "px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 shadow-sm",
                completedSteps.includes(currentStepData.id)
                  ? "bg-[#859159] hover:bg-[#424733] text-white"
                  : "bg-[#FAF8F5] hover:bg-[#859159] text-[#424733] hover:text-white border border-[#A38C66]/40"
              )}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {completedSteps.includes(currentStepData.id) 
                  ? "Etapa Concluída (Clique para reabrir)" 
                  : "Marcar Etapa como Concluída"}
              </span>
            </button>
          </div>

          {/* Imagem 1: Player do Vídeo com Capa Visual Customizada na Frente */}
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-[#424733] flex items-center gap-2">
                <Play className="w-5 h-5 text-[#859159] fill-[#859159]" />
                <span>▶️ Assista ao vídeo explicativo desta etapa:</span>
              </h3>
              
              <div className="flex items-center gap-3">
                {isVideoPlaying && (
                  <button
                    onClick={() => resetToCover(currentStepData.id)}
                    className="text-xs font-bold text-[#424733]/70 hover:text-[#613C26] inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Ver capa</span>
                  </button>
                )}

                <a
                  href={`https://drive.google.com/file/d/${currentStepData.videoId}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#613C26] hover:text-[#859159] inline-flex items-center gap-1 underline underline-offset-4"
                >
                  <span>Abrir no Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Container 16:9 - Capa Estilizada OU Player Iframe */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/95 shadow-2xl border-2 border-[#424733] group">
              
              {!isVideoPlaying ? (
                /* CAPA VISUAL PERSONALIZADA NA FRENTE DO VÍDEO */
                <div 
                  onClick={() => startPlaying(currentStepData.id)}
                  className={cn(
                    "w-full h-full relative flex flex-col justify-between p-4 sm:p-8 cursor-pointer select-none bg-gradient-to-br transition-all duration-300",
                    currentStepData.coverColor
                  )}
                >
                  {/* Textura geométrica sutil no fundo */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  {/* Barra Superior da Capa */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-black/50 text-[#F0F0F0] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-xs uppercase tracking-wider">
                      <Tv className="w-3.5 h-3.5 text-[#859159]" />
                      <span>{currentStepData.coverTag}</span>
                    </span>

                    <span className="bg-[#613C26]/80 text-[#FAF8F5] text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full border border-[#A38C66]/40 backdrop-blur-xs">
                      {currentStepData.badge}
                    </span>
                  </div>

                  {/* Centro da Capa: Botão de Play Grande Pulsante e Título */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto space-y-3">
                    <div className="relative">
                      {/* Efeito de Ping no Play */}
                      <span className="absolute -inset-2 rounded-full bg-[#859159]/40 animate-ping pointer-events-none" />
                      
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#859159] group-hover:bg-[#613C26] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 border-2 border-white/40">
                        <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white text-white ml-1 transition-transform group-hover:scale-105" />
                      </div>
                    </div>

                    <div className="space-y-1 max-w-lg mx-auto">
                      <h4 className="text-white font-black text-base sm:text-xl md:text-2xl leading-tight drop-shadow-md">
                        {currentStepData.title}
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm font-medium drop-shadow-xs">
                        {currentStepData.subtitle}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold backdrop-blur-sm border border-white/30 shadow-md transition-all group-hover:scale-105">
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Clique para assistir ao vídeo</span>
                    </div>
                  </div>

                  {/* Barra Inferior da Capa com Highlights da Etapa */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/15 text-[10px] sm:text-xs text-white/80">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-[#A38C66] uppercase text-[9px] sm:text-[10px]">Destaques da aula:</span>
                      {currentStepData.coverHighlights.map((hl, i) => (
                        <span key={i} className="bg-white/10 px-2 py-0.5 rounded-md border border-white/10 font-medium">
                          {hl}
                        </span>
                      ))}
                    </div>
                    <span className="text-white/60 font-medium hidden sm:inline">
                      Aula gravada pela Pati • EASY BYZ
                    </span>
                  </div>
                </div>
              ) : (
                /* IFRAME DO GOOGLE DRIVE COM CONTROLES DE REPRODUÇÃO */
                <iframe
                  src={`https://drive.google.com/file/d/${currentStepData.videoId}/preview`}
                  title={`Vídeo explicativo - ${currentStepData.title}`}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              )}

            </div>

            {/* Aviso de Autorização / Permissão de Acesso */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3.5 text-xs text-sky-900 flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold block">💡 O vídeo pediu permissão ou não carregou de primeira?</span>
                <p className="text-sky-800/90 leading-relaxed">
                  Não se preocupe! Você pode clicar em <strong>"Abrir no Google Drive"</strong> acima para solicitar acesso na hora, ou chamar a Pati diretamente no WhatsApp para ela liberar a visualização para o seu e-mail imediatamente! 😉
                </p>
              </div>
            </div>
          </div>

          {/* Mensagem e Orientações Oficiais da Etapa */}
          <div className="space-y-3 bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#A38C66]/20">
            <h3 className="font-extrabold text-sm sm:text-base text-[#424733] uppercase tracking-wide text-xs">
              📝 Instruções da Pati para você:
            </h3>

            {currentStepData.importantNotice && (
              <div className="p-3 bg-amber-100/70 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-900 font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-800 shrink-0" />
                <span>📌 {currentStepData.importantNotice}</span>
              </div>
            )}

            <div className="space-y-2.5 text-xs sm:text-sm text-[#424733] leading-relaxed">
              {currentStepData.description.map((paragraph, idx) => (
                <p key={idx} className="font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Informações Específicas por Etapa */}
            {currentStepData.callout && (
              <div className="mt-4 pt-4 border-t border-[#A38C66]/20">
                <div className="p-4 rounded-xl bg-white border border-[#A38C66]/30 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="font-bold text-xs sm:text-sm text-[#424733] block">
                      {currentStepData.callout.title}
                    </span>
                    <p className="text-xs text-[#424733]/80">
                      {currentStepData.callout.text}
                    </p>
                  </div>

                  {/* Se for Etapa 2: Link do Painel Administrativo */}
                  {currentStepData.id === 2 && (
                    <div className="shrink-0">
                      <span className="text-[11px] text-[#A38C66] font-bold block mb-1">
                        🔑 Link enviado no seu WhatsApp
                      </span>
                      <a
                        href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent("Olá Pati, você pode me reenviar o link e a senha do meu painel adm, por favor?")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#859159] hover:bg-[#424733] text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Solicitar Link/Senha à Pati</span>
                      </a>
                    </div>
                  )}

                  {/* Se for Etapa 3: Checklist para Divulgação */}
                  {currentStepData.id === 3 && (
                    <div className="shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#859159] bg-[#859159]/10 px-3 py-1.5 rounded-lg">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Quase na hora de enviar aos clientes!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Checklist Interativo da Etapa */}
          <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#A38C66]/30 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-extrabold text-sm sm:text-base text-[#424733] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#859159]" />
                <span>Checklist da {currentStepData.badge}:</span>
              </h3>
              <span className="text-xs text-[#424733]/70">
                Marque cada item à medida que for completando
              </span>
            </div>

            <div className="space-y-2.5">
              {currentStepData.checklist.map((item, idx) => {
                const itemKey = `step_${currentStepData.id}_item_${idx}`;
                const isChecked = !!checkedItems[itemKey];

                return (
                  <label
                    key={idx}
                    onClick={() => toggleCheckItem(itemKey)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer text-xs sm:text-sm font-medium",
                      isChecked 
                        ? "bg-white border-[#859159] text-[#424733]" 
                        : "bg-white/60 border-[#A38C66]/20 text-[#424733]/80 hover:bg-white"
                    )}
                  >
                    <div className={cn(
                      "w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors",
                      isChecked 
                        ? "bg-[#859159] border-[#859159] text-white" 
                        : "border-[#A38C66]/50 bg-white"
                    )}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className={cn(isChecked && "line-through text-[#424733]/60")}>
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Ações de Notificação no WhatsApp e Próximo Passo */}
          <div className="pt-4 border-t border-[#A38C66]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Botão de Avisar a Pati no WhatsApp com mensagem preenchida */}
            <a
              href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(currentStepData.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#859159] hover:bg-[#424733] text-white font-black text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group"
            >
              <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>{currentStepData.notifyText}</span>
            </a>

            {/* Botão para Avançar para a Próxima Etapa */}
            {currentStepData.id < 3 ? (
              <button
                onClick={() => {
                  if (!completedSteps.includes(currentStepData.id)) {
                    setCompletedSteps(prev => [...prev, currentStepData.id]);
                  }
                  setActiveStep(currentStepData.id + 1);
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#613C26] hover:bg-[#424733] text-white font-black text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Ir para a Etapa {currentStepData.id + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-[#859159]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Parabéns! Você chegou ao final do guia!</span>
              </div>
            )}

          </div>

        </section>

        {/* Bloco de Ajuda Rápida & QR Code */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card QR Code e Embalagens */}
          <div className="bg-white p-6 rounded-3xl border border-[#A38C66]/30 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-[#424733]">
              Link e QR Code da Sua Marmitaria
            </h3>
            <p className="text-xs text-[#424733]/80 leading-relaxed">
              O QR Code do seu aplicativo é perfeito para colocar em adesivos das embalagens, sacolas, panfletos e imãs de geladeira. O cliente aponta a câmera e abre o seu cardápio instantaneamente!
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent("Olá Pati, gostaria de solicitar o arquivo em alta resolução do QR Code do meu aplicativo para imprimir nas minhas embalagens.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#613C26] hover:text-[#859159] transition-colors"
              >
                <span>Solicitar QR Code com a Pati</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card Dúvidas & Suporte */}
          <div className="bg-white p-6 rounded-3xl border border-[#A38C66]/30 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#859159]/20 text-[#859159] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-[#424733]">
              Suporte Direto Durante o Processo
            </h3>
            <p className="text-xs text-[#424733]/80 leading-relaxed">
              Travou em algum campo? Não se lembra da senha? O vídeo pediu permissão? Fique tranquila! A Pati da EASY BYZ acompanha cada aluna de perto até o app estar rodando perfeitamente.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(DEFAULT_SUPPORT_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#859159] hover:text-[#613C26] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp (+1 803 888 9018)</span>
              </a>
            </div>
          </div>

        </section>

      </main>

      {/* Footer com Identidade EGN & EASY BYZ (Preservado) */}
      <footer className="border-t border-[#A38C66]/30 bg-[#424733] py-12 px-4 text-[#F0F0F0] text-center text-sm">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Logo EASY BYZ no Rodapé */}
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-xs text-[#A38C66] uppercase tracking-wider font-semibold">
              Desenvolvido & Comercializado por
            </span>
            <a 
              href="https://links-easybyzcreator.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:opacity-90 transition-opacity"
              title="EASY BYZ"
            >
              <img 
                src="https://i.ibb.co/Z6NS1m4D/ebcb.png" 
                alt="EASY BYZ" 
                className="h-32 sm:h-40 w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div className="space-y-1">
            <p className="font-extrabold text-base sm:text-lg text-[#F0F0F0]">
              EGN - Escola de Gastronomia e Negócios
            </p>
            <p className="text-xs text-[#A38C66] max-w-md mx-auto">
              Aplicativo estruturado sob a metodologia oficial da EGN e desenvolvido com tecnologia EASY BYZ.
            </p>
          </div>
          
          {/* Botão de Dúvidas EASY BYZ (+1 803 888 9018) */}
          <div className="pt-2">
            <a 
              href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(DEFAULT_SUPPORT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#613C26] hover:bg-[#859159] text-white border border-[#A38C66]/40 rounded-2xl sm:rounded-full text-center transition-all shadow-md hover:shadow-lg max-w-md mx-auto group"
            >
              <MessageCircle className="w-5 h-5 text-[#A38C66] shrink-0 group-hover:text-white transition-colors" />
              <div className="flex flex-col text-center">
                <span className="text-xs sm:text-sm font-semibold text-[#F0F0F0]/90 leading-tight">
                  Dúvidas sobre o aplicativo?
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white leading-tight mt-0.5">
                  Falar com a Pati (Easy Byz) no WhatsApp
                </span>
              </div>
            </a>
          </div>

          <p className="text-[11px] text-[#F0F0F0]/50 pt-4">
            © 2026 EASY BYZ & EGN. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
