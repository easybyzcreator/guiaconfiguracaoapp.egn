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
  QrCode,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Smartphone,
  ShieldCheck,
  RefreshCw,
  Tv,
  Check,
  Rocket,
  Video,
  Clapperboard,
  Clock,
  Lightbulb,
  UtensilsCrossed,
  Target
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
  isVideoStep: boolean;
  isComingSoonVideo?: boolean;
  videoId?: string;
  coverTag?: string;
  coverColor?: string;
  coverHighlights?: string[];
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
    badge: "Etapa 1 de 4",
    subtitle: "Cadastro inicial de pratos, guarnições e fotos no seu cardápio",
    isVideoStep: true,
    isComingSoonVideo: false,
    videoId: "1l0u3uTrnalEAS6d3GJUJbwgZAUyUg6d_",
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
      "Cadastrar todos os pratos com nomes, fotos e preços (formato: 1080 x 1080)",
      "Salvar todas as alterações no cardápio"
    ],
    notifyText: "Avisar a Pati que cadastrei os itens",
    whatsappMessage: "Olá Pati, concluí a ETAPA 1 do meu aplicativo! Já cadastrei todos os pratos e itens do meu cardápio. Como sigo para os próximos passos?"
  },
  {
    id: 2,
    title: "Configuração das Mensagens no Painel ADM",
    badge: "Etapa 2 de 4",
    subtitle: "Personalize as mensagens automáticas e textos do seu aplicativo",
    isVideoStep: true,
    isComingSoonVideo: false,
    videoId: "1Shtc1xb2dFGSWK9N1wSAbit5yBU1rVKl",
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
    badge: "Etapa 3 de 4",
    subtitle: "Aprenda a visualizar, gerenciar e confirmar os pedidos recebidos",
    isVideoStep: true,
    isComingSoonVideo: true,
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
      text: "Depois dessa etapa, sua marmitaria estará pronta para a Etapa 4 de divulgação oficial!"
    },
    checklist: [
      "Fazer um pedido simulado de teste no seu app",
      "Verificar como o pedido chega no painel e no WhatsApp",
      "Confirmar que você compreendeu todo o fluxo de atendimento",
      "Dar o OK final para avançar para a Etapa 4 de Lançamento!"
    ],
    notifyText: "Avisar a Pati que o app está pronto!",
    whatsappMessage: "Olá Pati, concluí a ETAPA 3 do meu aplicativo! Entendi o fluxo de pedidos no painel e estou pronta para a Etapa 4 de divulgação! 🎉"
  },
  {
    id: 4,
    title: "Estratégia de Lançamento e Divulgação",
    badge: "Etapa 4 de 4",
    subtitle: "Roteiro essencial com dois vídeos para engajar clientes e gerar pedidos",
    isVideoStep: false,
    description: [
      "O seu aplicativo já está com todas as informações cadastradas, testes finalizados e pronto para ser divulgado para os seus clientes!",
      "Para garantir que o lançamento seja um verdadeiro sucesso e traga muitos pedidos, apenas jogar o link nas redes sociais não é suficiente. O segredo está em gerar desejo e explicar com clareza como o cliente deve usar a nova ferramenta.",
      "Preparamos um roteiro com dois vídeos essenciais que recomendamos você gravar e postar antes de liberar o link oficial. Veja o passo a passo abaixo:"
    ],
    checklist: [
      "Gravar o Vídeo 1: Tutorial prático de gravação de tela no celular",
      "Gravar o Vídeo 2: Apresentação do cardápio, regras de pedidos e dietas",
      "Colocar o link do app na bio do Instagram e no WhatsApp",
      "Publicar os vídeos e fazer o lançamento oficial para os clientes!"
    ],
    notifyText: "Avisar a Pati que lancei o aplicativo!",
    whatsappMessage: "Olá Pati, concluí todas as etapas e já estou preparando os vídeos de lançamento para divulgar o meu aplicativo aos clientes! 🚀🎉"
  }
];

export default function App() {
  const { scrollY } = useScroll();
  const chefY = useTransform(scrollY, [0, 600], [0, -15]);

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
      if (stepId < STEPS.length) {
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

  // Checa se a etapa está desbloqueada: Etapa 1 sempre liberada; etapas seguintes requerem a anterior concluída
  const isStepUnlocked = (stepId: number) => {
    if (stepId === 1) return true;
    return completedSteps.includes(stepId - 1);
  };

  const currentStepData = STEPS.find(s => s.id === activeStep) || STEPS[0];
  const isCurrentStepUnlocked = isStepUnlocked(currentStepData.id);
  const isVideoPlaying = !!playingVideoSteps[currentStepData.id];

  const totalProgressPercent = Math.round((completedSteps.length / STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-[#F0F0F0] font-sans text-[#424733] selection:bg-[#859159] selection:text-white antialiased">
      
      {/* Top Header Bar */}
      <div className="bg-[#424733] text-[#F0F0F0] text-[11px] sm:text-xs md:text-sm py-2 px-3 text-center font-medium border-b border-[#613C26]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
          <div className="flex items-center flex-wrap justify-center gap-1.5 sm:gap-2 text-center">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A38C66] shrink-0" />
            <span className="font-bold text-white">Escola de Gastronomia e Negócios (EGN)</span>
            <span className="bg-[#859159]/40 text-[#F0F0F0] text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border border-[#859159]/50">
              Área Exclusiva da Aluna
            </span>
          </div>
          <div className="text-[10px] sm:text-xs text-[#F0F0F0]/90 text-center flex items-center gap-1">
            <span>Desenvolvido & Suporte:</span>
            <strong className="text-white">EASY BYZ (Pati)</strong>
          </div>
        </div>
      </div>

      {/* Editorial Hero Header */}
      <header className="max-w-6xl mx-auto pt-4 sm:pt-8 md:pt-10 px-3 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Coluna Texto: Apresentação do Guia */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#859159]/15 border border-[#859159]/30 text-[#424733] text-[11px] sm:text-xs font-semibold">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#859159]" />
              <span>Manual de Configuração e Ativação do App</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#424733] tracking-tight leading-tight">
              Parabéns! O seu aplicativo foi criado. Agora <span className="text-[#613C26] underline decoration-[#859159]">vamos aos ajustes finais do app da sua marmitaria</span>.
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#424733]/85 leading-relaxed">
              Eu te entreguei o app personalizado de acordo com as informações da rotina da sua marmitaria que você me respondeu no questionário inicial. Em seguida, preparei este <strong>guia prático em 4 etapas</strong> para que você possa inserir seus pratos, configurar suas mensagens no painel, fazer os testes finais e planejar a divulgação oficial com segurança antes de começar a divulgar para seus clientes.
            </p>

            {/* Banner de Aviso de Sequência (Destaque Principal) */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-5 text-left flex items-start gap-2.5 sm:gap-3.5 shadow-xs">
              <div className="p-1.5 sm:p-2 bg-amber-100 text-amber-800 rounded-lg sm:rounded-xl shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-amber-900 flex items-center gap-1.5">
                  <span>📌 Regra de Ouro: Siga estritamente a sequência das etapas!</span>
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-amber-800 leading-relaxed">
                  É fundamental assistir e realizar <strong>uma etapa por vez (1 → 2 → 3 → 4)</strong>. 
                  Não pule para a etapa seguinte se você ainda não concluiu e testou a anterior, para que tudo fique perfeito no final!
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Chef Gabi + Pati Guimarães lado a lado */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col items-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.32, 0.2] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#859159]/25 via-[#A38C66]/20 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none -z-10"
            />

            {/* Duas Fotos: Chef Gabi e Pati Guimarães lado a lado */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full max-w-[340px] sm:max-w-[420px]">
              
              {/* Card Chef Gabi */}
              <motion.div
                style={{ y: chefY }}
                className="relative rounded-xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-xl border-2 sm:border-3 border-white bg-[#FAF8F5] aspect-[3/4] group"
              >
                <img
                  src="https://raw.githubusercontent.com/easybyzcreator/imagens/8afcc7b58eca4ce99fe97d845b2baf50507ee6bc/chefegn.png"
                  alt="Chef Gabi Paludo - EGN"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/60 backdrop-blur-xs border border-white/20">
                  <span className="block font-bold text-white text-[10px] sm:text-xs leading-tight">Chef Gabi Paludo</span>
                  <span className="text-[#A38C66] text-[8px] sm:text-[10px] uppercase font-bold tracking-wider">Metodologia EGN</span>
                </div>
              </motion.div>

              {/* Card Pati Guimarães (Easy Byz) */}
              <motion.div
                style={{ y: chefY }}
                className="relative rounded-xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-xl border-2 sm:border-3 border-white bg-[#FAF8F5] aspect-[3/4] group"
              >
                <img
                  src="https://raw.githubusercontent.com/easybyzcreator/imagens/8afcc7b58eca4ce99fe97d845b2baf50507ee6bc/patiebc.jpg"
                  alt="Pati Guimarães - EASY BYZ"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/60 backdrop-blur-xs border border-white/20">
                  <span className="block font-bold text-white text-[10px] sm:text-xs leading-tight">Pati Guimarães</span>
                  <span className="text-[#859159] text-[8px] sm:text-[10px] uppercase font-bold tracking-wider">EASY BYZ • Suporte</span>
                </div>
              </motion.div>

            </div>

            {/* Status de Progresso e Botão de Ajuda Rápida */}
            <div className="mt-2.5 sm:mt-3.5 w-full max-w-[340px] sm:max-w-[420px] grid grid-cols-2 gap-2 sm:gap-2.5">
              <div className="bg-[#424733] text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xs border border-[#613C26] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] text-[#A38C66] font-bold uppercase tracking-wider">Progresso</span>
                  <span className="text-[10px] sm:text-xs font-bold text-white">{completedSteps.length}/{STEPS.length}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex-1 bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#859159] h-full transition-all duration-500 rounded-full"
                      style={{ width: `${totalProgressPercent}%` }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-white shrink-0">{totalProgressPercent}%</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(DEFAULT_SUPPORT_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#613C26] hover:bg-[#859159] text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-center text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A38C66] shrink-0" />
                <span>Dúvidas? Falar com a Pati</span>
              </a>
            </div>

          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        
        {/* Navegador das 4 Etapas (Cards Otimizados para Mobile em 2x2) */}
        <section className="mb-4 sm:mb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {STEPS.map((step) => {
              const isCompleted = completedSteps.includes(step.id);
              const isActive = activeStep === step.id;
              const unlocked = isStepUnlocked(step.id);

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "relative p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 sm:gap-3 shadow-2xs min-h-[105px] sm:min-h-[140px]",
                    isActive 
                      ? "bg-white border-[#613C26] ring-2 ring-[#613C26]/20 shadow-sm" 
                      : unlocked
                        ? "bg-[#FAF8F5] border-[#A38C66]/30 hover:border-[#859159] hover:bg-white"
                        : "bg-[#F3EFEA] border-dashed border-[#A38C66]/40 opacity-80"
                  )}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className={cn(
                      "text-[9px] sm:text-xs font-extrabold uppercase px-1.5 sm:px-2.5 py-0.5 rounded-full truncate",
                      isActive 
                        ? "bg-[#613C26] text-white" 
                        : isCompleted 
                          ? "bg-[#859159] text-white" 
                          : unlocked
                            ? "bg-[#424733]/10 text-[#424733]"
                            : "bg-amber-100 text-amber-900 border border-amber-300"
                    )}>
                      {step.badge}
                    </span>

                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#859159] shrink-0" />
                    ) : !unlocked ? (
                      <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700 shrink-0" />
                    ) : (
                      <Unlock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#424733]/50 shrink-0" />
                    )}
                  </div>

                  <div>
                    <h4 className="font-bold text-xs sm:text-sm md:text-base text-[#424733] leading-snug line-clamp-2">
                      {step.title}
                    </h4>
                    <p className="hidden sm:block text-[11px] sm:text-xs text-[#424733]/70 mt-1 line-clamp-2">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="pt-1.5 sm:pt-2 border-t border-[#A38C66]/15 flex items-center justify-between text-[10px] sm:text-xs font-semibold">
                    <span className={cn("truncate", isActive ? "text-[#613C26]" : unlocked ? "text-[#859159]" : "text-amber-800")}>
                      {isActive 
                        ? "Vendo agora" 
                        : unlocked 
                          ? "Abrir" 
                          : `Requer ${step.id - 1}`}
                    </span>
                    {unlocked ? (
                      <ChevronRight className="w-3.5 h-3.5 text-[#A38C66] shrink-0" />
                    ) : (
                      <Lock className="w-3 h-3 text-amber-700 shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Card do App de Simulação da Escola (Sugestões de Mensagens) */}
        <section className="mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-[#FAF8F5] via-white to-[#FAF8F5] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-[#859159]/40 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start gap-2.5 sm:gap-3.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#859159]/20 text-[#859159] flex items-center justify-center shrink-0 mt-0.5">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#424733]">
                    App de Simulação da Escola (Sugestões de Mensagens)
                  </span>
                  <span className="bg-[#859159]/15 text-[#424733] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#859159]/30">
                    Modelo de Exemplo
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-[#424733]/80 leading-relaxed max-w-2xl">
                  Acesse o aplicativo de simulação da Chef Gabi para ver sugestões de mensagens, textos de pedidos e exemplos práticos para o seu cardápio.
                </p>
              </div>
            </div>

            <a
              href="https://egn-chefgabipaludo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 bg-[#859159] hover:bg-[#613C26] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 group"
            >
              <span>Ver App de Simulação</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* Bloco de Detalhes da Etapa Atual */}
        <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 shadow-lg border border-[#A38C66]/30 space-y-6 sm:space-y-8">
          
          {/* Se a etapa estiver BLOQUEADA porque a anterior não foi concluída */}
          {!isCurrentStepUnlocked ? (
            <div className="py-8 sm:py-12 px-3 sm:px-8 text-center max-w-xl mx-auto space-y-4 sm:space-y-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-amber-100 border-2 border-amber-300 text-amber-800 flex items-center justify-center shadow-inner">
                <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-amber-700" />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <span className="inline-block bg-amber-100 text-amber-900 font-extrabold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Etapa Bloqueada
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-[#424733]">
                  Conclua a Etapa {currentStepData.id - 1} primeiro!
                </h3>
                <p className="text-xs sm:text-sm text-[#424733]/80 leading-relaxed">
                  Para que a rotina do seu aplicativo fique perfeita e sem nenhuma informação faltando para os seus clientes, é fundamental seguir a ordem correta das etapas.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => {
                    setActiveStep(currentStepData.id - 1);
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-[#613C26] hover:bg-[#859159] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>Voltar para a Etapa {currentStepData.id - 1}</span>
                </button>

                <button
                  onClick={() => {
                    setCompletedSteps(prev => [...prev, currentStepData.id - 1]);
                  }}
                  className="w-full sm:w-auto px-4 py-3 bg-[#FAF8F5] hover:bg-[#859159] text-[#424733] hover:text-white border border-[#A38C66]/40 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#859159]" />
                  <span>Já finalizei a Etapa {currentStepData.id - 1} (Liberar)</span>
                </button>
              </div>
            </div>
          ) : (
            /* CONTEÚDO LIBERADO DA ETAPA */
            <>
              {/* Cabeçalho da Etapa Selecionada */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#A38C66]/20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-[#613C26] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {currentStepData.badge}
                    </span>
                    {completedSteps.includes(currentStepData.id) ? (
                      <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#859159] bg-[#859159]/15 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Concluída
                      </span>
                    ) : (
                      <span className="text-[11px] sm:text-xs text-[#424733]/60 font-medium">
                        Siga o passo a passo com calma
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-[#424733] leading-snug">
                    {currentStepData.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#424733]/75">
                    {currentStepData.subtitle}
                  </p>
                </div>

                {/* Botão de Marcar como Concluído */}
                <button
                  onClick={() => handleToggleStepComplete(currentStepData.id)}
                  className={cn(
                    "w-full sm:w-auto px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 shadow-2xs",
                    completedSteps.includes(currentStepData.id)
                      ? "bg-[#859159] hover:bg-[#424733] text-white"
                      : "bg-[#FAF8F5] hover:bg-[#859159] text-[#424733] hover:text-white border border-[#A38C66]/40"
                  )}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {completedSteps.includes(currentStepData.id) 
                      ? "Etapa Concluída (Reabrir)" 
                      : "Marcar Etapa como Concluída"}
                  </span>
                </button>
              </div>

              {/* Se for etapa com VÍDEO (Etapas 1, 2 e 3) */}
              {currentStepData.isVideoStep && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-[#424733] flex items-center gap-1.5 sm:gap-2">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 text-[#859159] fill-[#859159]" />
                      <span>Assista ao vídeo explicativo desta etapa:</span>
                    </h3>
                    
                    <div className="flex items-center gap-2.5">
                      {isVideoPlaying && (
                        <button
                          onClick={() => resetToCover(currentStepData.id)}
                          className="text-[11px] sm:text-xs font-bold text-[#424733]/70 hover:text-[#613C26] inline-flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Ver capa</span>
                        </button>
                      )}

                      {!currentStepData.isComingSoonVideo && currentStepData.videoId && (
                        <a
                          href={`https://drive.google.com/file/d/${currentStepData.videoId}/view?usp=sharing`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] sm:text-xs md:text-sm font-bold text-[#613C26] hover:text-[#859159] inline-flex items-center gap-1 underline underline-offset-4"
                        >
                          <span>Abrir no Google Drive</span>
                          <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Container 16:9 - Capa Estilizada OU Player/Em Breve */}
                  <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/95 shadow-md sm:shadow-2xl border sm:border-2 border-[#424733] group">
                    
                    {!isVideoPlaying ? (
                      /* CAPA VISUAL PERSONALIZADA NA FRENTE DO VÍDEO */
                      <div 
                        onClick={() => startPlaying(currentStepData.id)}
                        className={cn(
                          "w-full h-full relative flex flex-col justify-between p-3 sm:p-6 md:p-8 cursor-pointer select-none bg-gradient-to-br transition-all duration-300",
                          currentStepData.coverColor || "from-[#424733] to-[#1f2216]"
                        )}
                      >
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                        
                        {/* Barra Superior da Capa */}
                        <div className="relative z-10 flex items-center justify-between gap-1.5">
                          <span className="inline-flex items-center gap-1 bg-black/50 text-[#F0F0F0] text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20 backdrop-blur-xs uppercase tracking-wider">
                            <Tv className="w-3 h-3 text-[#859159]" />
                            <span>{currentStepData.coverTag}</span>
                          </span>

                          <span className="bg-[#613C26]/80 text-[#FAF8F5] text-[9px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 rounded-full border border-[#A38C66]/40 backdrop-blur-xs">
                            {currentStepData.badge}
                          </span>
                        </div>

                        {/* Centro da Capa: Botão de Play Grande Pulsante e Título */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto space-y-2 sm:space-y-3">
                          <div className="relative">
                            <span className="absolute -inset-2 rounded-full bg-[#859159]/40 animate-ping pointer-events-none" />
                            
                            <div className="w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20 rounded-full bg-[#859159] group-hover:bg-[#613C26] text-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 border sm:border-2 border-white/40">
                              <Play className="w-5 h-5 sm:w-7 md:w-9 sm:h-7 md:h-9 fill-white text-white ml-0.5 transition-transform group-hover:scale-105" />
                            </div>
                          </div>

                          <div className="space-y-0.5 sm:space-y-1 max-w-lg mx-auto px-2">
                            <h4 className="text-white font-black text-xs sm:text-lg md:text-2xl leading-tight drop-shadow-md line-clamp-2 sm:line-clamp-none">
                              {currentStepData.title}
                            </h4>
                            <p className="hidden sm:block text-white/80 text-xs sm:text-sm font-medium drop-shadow-xs line-clamp-1">
                              {currentStepData.subtitle}
                            </p>
                          </div>

                          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white text-[10px] sm:text-xs font-bold backdrop-blur-xs border border-white/30 shadow-sm transition-all group-hover:scale-105">
                            <Play className="w-3 h-3 fill-white" />
                            <span>Clique para assistir ao vídeo</span>
                          </div>
                        </div>

                        {/* Barra Inferior da Capa com Highlights da Etapa */}
                        <div className="relative z-10 flex flex-wrap items-center justify-between gap-1.5 pt-2 border-t border-white/15 text-[9px] sm:text-xs text-white/80">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-bold text-[#A38C66] uppercase text-[8px] sm:text-[10px]">Aprenda:</span>
                            {currentStepData.coverHighlights?.map((hl, i) => (
                              <span key={i} className="bg-white/10 px-1.5 py-0.5 rounded text-[8px] sm:text-[11px] border border-white/10 font-medium">
                                {hl}
                              </span>
                            ))}
                          </div>
                          <span className="text-white/60 font-medium hidden md:inline">
                            Aula gravada pela Pati • EASY BYZ
                          </span>
                        </div>
                      </div>
                    ) : currentStepData.isComingSoonVideo ? (
                      /* TELA "EM BREVE" PARA VÍDEOS 2 E 3 */
                      <div className="w-full h-full relative flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-gradient-to-br from-[#2D241E] via-[#382B22] to-[#1C1510] text-white">
                        <div className="relative mb-2.5 sm:mb-4">
                          <div className="w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20 rounded-2xl sm:rounded-3xl bg-[#613C26] border sm:border-2 border-[#A38C66]/50 flex items-center justify-center text-white shadow-xl">
                            <Clock className="w-6 h-6 sm:w-8 md:w-10 sm:h-8 md:h-10 text-[#A38C66] animate-pulse" />
                          </div>
                          <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-[#859159] text-[8px] sm:text-[10px] font-black text-white uppercase tracking-wider shadow-2xs">
                            Gravação
                          </span>
                        </div>

                        <div className="max-w-md space-y-1 sm:space-y-2 px-2">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#A38C66] text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/15">
                            🎬 Em Breve!
                          </span>
                          <h4 className="text-base sm:text-xl md:text-2xl font-black text-white leading-tight">
                            Vídeo Explicativo em Gravação
                          </h4>
                          <p className="text-[11px] sm:text-xs md:text-sm text-white/85 leading-relaxed">
                            A Pati e a Chef Gabi estão regravando esta aula passo a passo com novidades exclusivas para você! Enquanto o novo vídeo é processado, siga com tranquilidade as <strong>instruções e o checklist logo abaixo</strong>.
                          </p>
                        </div>

                        <div className="mt-3.5 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                          <a
                            href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(`Olá Pati, estou na ${currentStepData.badge} (${currentStepData.title}) e gostaria de tirar uma dúvida enquanto o vídeo está em breve!`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 sm:py-2 bg-[#859159] hover:bg-[#613C26] text-white font-bold text-xs rounded-xl transition-colors shadow-2xs flex items-center gap-1.5"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Tirar Dúvida no WhatsApp</span>
                          </a>

                          <button
                            onClick={() => resetToCover(currentStepData.id)}
                            className="px-3.5 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-colors border border-white/20 cursor-pointer flex items-center gap-1.5"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Voltar à capa</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* IFRAME DO GOOGLE DRIVE (100% PÚBLICO E LIBERADO) */
                      <iframe
                        src={`https://drive.google.com/file/d/${currentStepData.videoId}/preview`}
                        title={`Vídeo explicativo - ${currentStepData.title}`}
                        className="w-full h-full border-0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    )}

                  </div>
                </div>
              )}

              {/* SE FOR ETAPA 4: ESTRUTURA EDITORIAL COMPLETA DOS DOIS VÍDEOS DE LANÇAMENTO */}
              {currentStepData.id === 4 ? (
                <div className="space-y-4 sm:space-y-6">
                  
                  {/* Banner de Abertura da Etapa 4 */}
                  <div className="bg-gradient-to-br from-[#424733] via-[#373b2a] to-[#25281b] text-white p-4 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-md border border-[#859159]/40 space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#859159]/30 text-white text-[11px] sm:text-xs font-bold border border-[#859159]/50">
                      <Rocket className="w-3.5 h-3.5 text-[#A38C66]" />
                      <span>Roteiro Oficial de Lançamento</span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                      Pronto para ser divulgado para os seus clientes!
                    </h3>

                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      O seu aplicativo já está com todas as informações cadastradas, testes finalizados e <strong>pronto para ser divulgado</strong> para os seus clientes!
                    </p>

                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                      Para garantir que o lançamento seja um verdadeiro sucesso e traga muitos pedidos, <strong>apenas jogar o link nas redes sociais não é suficiente</strong>. O segredo está em <strong>gerar desejo e explicar com clareza</strong> como o cliente deve usar a nova ferramenta.
                    </p>

                    <p className="text-xs sm:text-sm font-semibold text-[#A38C66]">
                      Preparamos um roteiro com <strong>dois vídeos essenciais</strong> que recomendamos você gravar e postar antes de liberar o link oficial. Veja o passo a passo abaixo:
                    </p>
                  </div>

                  {/* Card Vídeo 1: Tutorial Prático */}
                  <div className="bg-[#FAF8F5] border sm:border-2 border-[#859159]/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 shadow-2xs space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#859159] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs font-extrabold uppercase text-[#859159] tracking-wider block">
                          Primeiro Conteúdo de Lançamento
                        </span>
                        <h4 className="text-sm sm:text-base md:text-lg font-black text-[#424733]">
                          Vídeo 1: Tutorial Prático (Gravação de Tela)
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs sm:text-sm text-[#424733]/90 leading-relaxed">
                      <div className="p-3 bg-white rounded-xl border border-[#A38C66]/20">
                        <strong className="text-[#613C26] block mb-0.5">🎯 Objetivo:</strong>
                        <span>Mostrar de forma simples e rápida como é fácil fazer um pedido no seu aplicativo.</span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-[#A38C66]/20">
                        <strong className="text-[#613C26] block mb-0.5">📱 Como fazer:</strong>
                        <span>Grave a tela do seu celular enquanto você mesma simula a montagem de um pedido no app.</span>
                      </div>

                      <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-amber-950">
                        <strong className="text-amber-900 flex items-center gap-1.5 mb-0.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                          <span>Dica prática:</span>
                        </strong>
                        <span>
                          Você pode narrar o passo a passo enquanto grava a tela ou gravar a tela primeiro e narrar por cima depois. 
                          <strong> Não precisa aparecer o seu rosto</strong>, apenas o aplicativo em ação e a sua voz explicando cada clique.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Vídeo 2: Apresentação Oficial */}
                  <div className="bg-[#FAF8F5] border sm:border-2 border-[#613C26]/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 shadow-2xs space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#613C26] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Clapperboard className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs font-extrabold uppercase text-[#613C26] tracking-wider block">
                          Segundo Conteúdo de Lançamento
                        </span>
                        <h4 className="text-sm sm:text-base md:text-lg font-black text-[#424733]">
                          Vídeo 2: Apresentação Oficial do App
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs sm:text-sm text-[#424733]/90 leading-relaxed">
                      <div className="p-3 bg-white rounded-xl border border-[#A38C66]/20">
                        <strong className="text-[#613C26] block mb-0.5">🎯 Objetivo:</strong>
                        <span>Engajar o público, tirar dúvidas antecipadas e despertar o desejo de compra.</span>
                      </div>

                      <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-[#A38C66]/20 space-y-2">
                        <strong className="text-[#613C26] block text-[11px] sm:text-xs uppercase tracking-wider font-extrabold">
                          📌 Tópicos que você deve abordar no vídeo:
                        </strong>
                        
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#859159] shrink-0 mt-1.5" />
                            <div>
                              <strong>O Cardápio:</strong> Apresente tudo o que o cliente poderá comprar a partir de agora. Cite alguns itens de destaque e categorias principais (por exemplo: <em>combos, detox, marmitas avulsas</em>).
                            </div>
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#859159] shrink-0 mt-1.5" />
                            <div>
                              <strong>Como fazer o pedido:</strong> Explique a dinâmica de funcionamento — quais são os dias limite para encomendar, quais são os dias de entrega, e se há opção de retirada no local ou delivery.
                            </div>
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#859159] shrink-0 mt-1.5" />
                            <div>
                              <strong>Regras e Dietas:</strong> Informe sobre o valor mínimo de pedido (se houver), explique como funciona a opção de <strong>dieta personalizada</strong>, e mostre no vídeo exatamente em qual botão o cliente deve clicar para acessá-la.
                            </div>
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#859159] shrink-0 mt-1.5" />
                            <div>
                              <strong>Onde encontrar o link:</strong> Avise onde o link do aplicativo estará disponível para acesso rápido (ex: <em>no link da bio do Instagram e na descrição do seu WhatsApp</em>).
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Dica de Ouro em Destaque */}
                  <div className="bg-amber-50 border-2 border-amber-300 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-amber-950 flex items-start gap-2.5 sm:gap-3 shadow-2xs">
                    <div className="p-1.5 sm:p-2 bg-amber-200 text-amber-900 rounded-lg sm:rounded-xl shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <h4 className="font-bold text-xs sm:text-base text-amber-900 flex items-center gap-1.5">
                        <span>💡 Dica de Ouro</span>
                      </h4>
                      <p className="text-[11px] sm:text-xs md:text-sm text-amber-900/90 leading-relaxed">
                        Estas orientações são as principais informações que seu cliente precisa saber antes de receber o link. Com esses dois vídeos prontos e publicados, o lançamento do seu app será muito mais organizado e profissional!
                      </p>
                    </div>
                  </div>

                  {/* Box de Destaque Importante sobre Vendas e Marmitas */}
                  <div className="bg-[#FAF8F5] border-2 border-[#613C26] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-[#424733] shadow-sm space-y-2.5 sm:space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#859159]/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 sm:p-2 bg-[#613C26] text-white rounded-lg sm:rounded-xl shrink-0 shadow-2xs">
                        <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-xs font-black uppercase text-[#859159] tracking-wider block">
                          Lembrete Fundamental de Vendas
                        </span>
                        <h4 className="font-black text-xs sm:text-base text-[#613C26] leading-snug">
                          O aplicativo é a ferramenta de gestão: quem encanta e vende a marmita é você!
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs sm:text-sm text-[#424733] leading-relaxed">
                      <p className="font-bold text-[#424733]">
                        O app veio para ajudar na gestão das suas vendas e agilidade para o seu cliente, ele não vende para você.
                      </p>
                      <p className="text-[#424733]/90">
                        Lembre-se sempre de dar destaque ao seu produto, ao prato e à marmita que você vende. É essencial lembrar que <strong>você vende marmitas</strong>, e é a partir do seu app que o pedido do seu cliente chega até você com organização, praticidade e rapidez!
                      </p>
                    </div>

                    <div className="p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-[#A38C66]/30 text-[11px] sm:text-xs text-[#424733] flex items-center gap-2 font-medium">
                      <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#859159] shrink-0" />
                      <span>
                        Gere desejo nas redes com fotos reais e stories dos pratos quentinhos — o aplicativo cuidará de fechar e organizar cada pedido!
                      </span>
                    </div>
                  </div>

                </div>
              ) : (
                /* INSTRUÇÕES PADRÃO (ETAPAS 1, 2 E 3) */
                <div className="space-y-3 bg-[#FAF8F5] p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#A38C66]/20">
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#424733] uppercase tracking-wide">
                    📝 Instruções da Pati para você:
                  </h3>

                  {currentStepData.importantNotice && (
                    <div className="p-2.5 sm:p-3 bg-amber-100/70 border border-amber-300 rounded-lg sm:rounded-xl text-xs sm:text-sm text-amber-900 font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-800 shrink-0" />
                      <span>📌 {currentStepData.importantNotice}</span>
                    </div>
                  )}

                  <div className="space-y-2 text-xs sm:text-sm text-[#424733] leading-relaxed">
                    {currentStepData.description.map((paragraph, idx) => (
                      <p key={idx} className="font-medium">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Callout Específico */}
                  {currentStepData.callout && (
                    <div className="mt-3 pt-3 border-t border-[#A38C66]/20">
                      <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#A38C66]/30 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
                        <div className="space-y-0.5">
                          <span className="font-bold text-xs sm:text-sm text-[#424733] block">
                            {currentStepData.callout.title}
                          </span>
                          <p className="text-[11px] sm:text-xs text-[#424733]/80">
                            {currentStepData.callout.text}
                          </p>
                        </div>

                        {currentStepData.id === 2 && (
                          <div className="w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                            <a
                              href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent("Olá Pati, você pode me reenviar o link e a senha do meu painel adm, por favor?")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#859159] hover:bg-[#424733] text-white rounded-lg text-xs font-bold transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Pedir Senha no WhatsApp</span>
                            </a>
                          </div>
                        )}

                        {currentStepData.id === 3 && (
                          <div className="shrink-0">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#859159] bg-[#859159]/10 px-2.5 py-1 rounded-lg">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Pronta para a Etapa 4 de Lançamento!</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Checklist Interativo da Etapa */}
              <div className="bg-[#FAF8F5] p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#A38C66]/30 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h3 className="font-extrabold text-xs sm:text-sm md:text-base text-[#424733] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#859159]" />
                    <span>Checklist da {currentStepData.badge}:</span>
                  </h3>
                  <span className="text-[10px] sm:text-xs text-[#424733]/70">
                    Toque para marcar
                  </span>
                </div>

                <div className="space-y-2">
                  {currentStepData.checklist.map((item, idx) => {
                    const itemKey = `step_${currentStepData.id}_item_${idx}`;
                    const isChecked = !!checkedItems[itemKey];

                    return (
                      <label
                        key={idx}
                        onClick={() => toggleCheckItem(itemKey)}
                        className={cn(
                          "flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer text-xs sm:text-sm font-medium min-h-[44px]",
                          isChecked 
                            ? "bg-white border-[#859159] text-[#424733]" 
                            : "bg-white/70 border-[#A38C66]/20 text-[#424733]/85 hover:bg-white"
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

                {/* Observação sobre o formato das imagens na Etapa 1 */}
                {currentStepData.id === 1 && (
                  <div className="mt-3 p-3 sm:p-3.5 bg-amber-50/90 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-950 flex items-start gap-2 shadow-2xs">
                    <span className="text-base leading-none shrink-0 mt-0.5">📐</span>
                    <div className="space-y-0.5">
                      <strong className="text-amber-900 block font-bold text-xs sm:text-sm">
                        Observação sobre o tamanho das imagens:
                      </strong>
                      <p className="text-amber-900/90 leading-relaxed text-[11px] sm:text-xs">
                        Para que as fotos fiquem perfeitas e nítidas no seu aplicativo, utilize imagens no <strong>formato 1080 x 1080</strong> (quadrado).
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Ações de Notificação no WhatsApp e Próximo Passo */}
              <div className="pt-3 sm:pt-4 border-t border-[#A38C66]/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
                
                {/* Botão de Avisar a Pati no WhatsApp com mensagem preenchida */}
                <a
                  href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(currentStepData.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 sm:py-3.5 bg-[#859159] hover:bg-[#424733] text-white font-black text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform shrink-0" />
                  <span>{currentStepData.notifyText}</span>
                </a>

                {/* Botão para Avançar para a Próxima Etapa */}
                {currentStepData.id < STEPS.length ? (
                  <button
                    onClick={() => {
                      if (!completedSteps.includes(currentStepData.id)) {
                        setCompletedSteps(prev => [...prev, currentStepData.id]);
                      }
                      setActiveStep(currentStepData.id + 1);
                      window.scrollTo({ top: 280, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-5 py-3 sm:py-3.5 bg-[#613C26] hover:bg-[#424733] text-white font-black text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Ir para a Etapa {currentStepData.id + 1}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#859159] text-center sm:text-left py-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Todas as 4 etapas finalizadas com sucesso!</span>
                  </div>
                )}

              </div>
            </>
          )}

        </section>

        {/* Bloco de Ajuda Rápida & QR Code */}
        <section className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          
          {/* Card QR Code e Embalagens */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#A38C66]/30 shadow-xs space-y-2.5 sm:space-y-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
              <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#424733]">
              Link e QR Code da Sua Marmitaria
            </h3>
            <p className="text-xs text-[#424733]/80 leading-relaxed">
              O QR Code do seu aplicativo é perfeito para colocar em adesivos das embalagens, sacolas, panfletos e imãs de geladeira. O cliente aponta a câmera e abre o seu cardápio instantaneamente!
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent("Olá Pati, gostaria de solicitar o arquivo em alta resolução do QR Code do meu aplicativo para imprimir nas minhas embalagens.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#613C26] hover:text-[#859159] transition-colors"
              >
                <span>Solicitar QR Code com a Pati</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card Dúvidas & Suporte */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#A38C66]/30 shadow-xs space-y-2.5 sm:space-y-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#859159]/20 text-[#859159] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#424733]">
              Suporte Direto Durante o Processo
            </h3>
            <p className="text-xs text-[#424733]/80 leading-relaxed">
              Travou em algum campo? Não se lembra da senha? Fique tranquila! A Pati da EASY BYZ acompanha cada aluna de perto até o app estar rodando perfeitamente.
            </p>
            <div className="pt-1">
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

      {/* Footer com Identidade EGN & EASY BYZ (Preservado e Proporcional) */}
      <footer className="border-t border-[#A38C66]/30 bg-[#424733] py-8 sm:py-12 px-4 text-[#F0F0F0] text-center text-xs sm:text-sm">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          
          {/* Logo EASY BYZ no Rodapé */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs text-[#A38C66] uppercase tracking-wider font-semibold">
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
                src="https://raw.githubusercontent.com/easybyzcreator/imagens/8afcc7b58eca4ce99fe97d845b2baf50507ee6bc/logo%20easy%20byz%20-%20fundo%20transparente.png" 
                alt="EASY BYZ" 
                className="h-16 sm:h-28 w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div className="space-y-0.5 sm:space-y-1">
            <p className="font-extrabold text-sm sm:text-base md:text-lg text-[#F0F0F0]">
              EGN - Escola de Gastronomia e Negócios
            </p>
            <p className="text-[11px] sm:text-xs text-[#A38C66] max-w-md mx-auto">
              Aplicativo estruturado sob a metodologia oficial da EGN e desenvolvido com tecnologia EASY BYZ.
            </p>
          </div>
          
          {/* Botão de Dúvidas EASY BYZ (+1 803 888 9018) */}
          <div className="pt-1">
            <a 
              href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(DEFAULT_SUPPORT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#613C26] hover:bg-[#859159] text-white border border-[#A38C66]/40 rounded-xl sm:rounded-full text-center transition-all shadow-sm hover:shadow-md w-full sm:w-auto max-w-sm mx-auto group"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#A38C66] shrink-0 group-hover:text-white transition-colors" />
              <div className="flex flex-col text-left sm:text-center">
                <span className="text-[11px] sm:text-xs font-semibold text-[#F0F0F0]/90 leading-tight">
                  Dúvidas sobre o aplicativo?
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white leading-tight mt-0.5">
                  Falar com a Pati (Easy Byz) no WhatsApp
                </span>
              </div>
            </a>
          </div>

          <p className="text-[10px] sm:text-[11px] text-[#F0F0F0]/50 pt-2 sm:pt-4">
            © 2026 EASY BYZ & EGN. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
