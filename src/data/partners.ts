export interface PartnerData {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string[];
  highlightedPhrase?: string;
  logoUrl?: string;
  contactType: 'whatsapp' | 'link';
  contactValue: string;
  whatsappMessage?: string;
  ctaLabel?: string;
}

const RAW_PARCEIROS_EASYBYZ: PartnerData[] = [
  {
    id: 'alem-da-marca',
    name: 'ALÉM DA MARCA',
    shortDescription: 'Empresa especializada em registro de marcas',
    fullDescription: [
      'Empresa especializada em registro de marcas.',
      'Conte com apoio especializado para proteger e registrar a sua marca com segurança.',
    ],
    logoUrl:
      'https://raw.githubusercontent.com/easybyzcreator/imagens/b2726bf1750d0d176f8069d70d7348664d2b114e/logo%20alem%20da%20marca%20-%20fundo%20transp.png',
    contactType: 'whatsapp',
    contactValue: '5519971200605',
    whatsappMessage:
      'Olá equipe da Além da Marca, estava no site da Easy Byz e gostaria de informações de como posso registrar a minha marca.',
    ctaLabel: 'Quero ajuda para registrar a minha marca',
  },
  {
    id: 'astrine',
    name: 'ASTRINE',
    shortDescription: 'Mkt para restaurantes',
    fullDescription: [
      'Transformamos restaurantes em sucesso de vendas através do Método Menu.',
      'Se você fatura a partir de R$50 mil por mês e tem espaço para crescer suas vendas, entre em contato e solicite uma análise gratuita.',
    ],
    highlightedPhrase: 'Se você fatura a partir de R$50 mil por mês',
    logoUrl:
      'https://raw.githubusercontent.com/easybyzcreator/imagens/1efd2f33b5a165da9dfd72667ad566bbd14c3452/logo%20astrine%20-%20fundo%20transp.png',
    contactType: 'whatsapp',
    contactValue: '5519991977730',
    whatsappMessage:
      'Olá equipe da Astrine, estava navegando no site da Easy Byz e gostaria de ter uma análise gratuita do meu restaurante.',
    ctaLabel: 'Quero minha análise gratuita',
  },
  {
    id: 'biizhub',
    name: 'BIIZHUB',
    shortDescription:
      'Treinamentos práticos para empreendedores que desejam compreender, organizar e melhorar seus processos de marketing e vendas.',
    fullDescription: [
      'Da divulgação à fidelização: aprenda a estruturar cada etapa do processo comercial para vender mais, melhorar os resultados e crescer com organização.',
      'A BiizHub oferece treinamentos práticos para empreendedores de marmitarias que desejam compreender, organizar e melhorar seus processos de marketing e vendas.',
      'O objetivo é ensinar como funciona a jornada comercial completa, desde a definição do público e a divulgação dos produtos até o atendimento, a conversão de pedidos, a experiência do cliente e as estratégias de recompra.',
      'Durante a capacitação, o empreendedor aprende o que precisa ser feito em cada etapa, quais ferramentas utilizar, como organizar suas rotinas e quais indicadores acompanhar para identificar oportunidades e tomar decisões que contribuam para o crescimento do negócio.',
    ],
    highlightedPhrase:
      'o que precisa ser feito em cada etapa, quais ferramentas utilizar, como organizar suas rotinas e quais indicadores acompanhar',
    logoUrl:
      'https://raw.githubusercontent.com/easybyzcreator/imagens/4ddc36ba3d6222dbb2c6ac5579b9da76ba1cb2aa/logo%20biizhub%20-%20fundo%20transp.png',
    contactType: 'whatsapp',
    contactValue: '5519991236614',
    whatsappMessage:
      'Olá equipe BiizHub, estava navegando no site da Easy Byz e estou em busca de conhecimento para estruturar melhor o meu negócio, você pode me ajudar?',
    ctaLabel: 'Falar no WhatsApp',
  },
  {
    id: 'grafike',
    name: 'GRAFIKE',
    shortDescription:
      'Gráfica digital, de pequenos e grandes formatos, orientada em transformar ideias em resultados',
    fullDescription: [
      'A Grafike oferece todo o suporte para que você, ou sua empresa tenham sempre os melhores materiais de comunicação, sejam institucionais ou comerciais, como cartões, catálogos, adesivos, banners e placas de sinalização.',
    ],
    logoUrl:
      'https://raw.githubusercontent.com/easybyzcreator/imagens/fa38f7f4372e5e84d93ed867ce3cd58dea55582f/logo%20grafike%20-%20fundo%20transp.png',
    contactType: 'whatsapp',
    contactValue: '5519989021390',
    whatsappMessage:
      'Olá equipe GRAFIKE, estava navegando no site da Easy Byz e estou em busca de um orçamento, você pode me ajudar?',
    ctaLabel: 'Falar no WhatsApp',
  },
  {
    id: 'l3-marketing',
    name: 'L3 MARKETING',
    shortDescription: 'Gestão de Tráfego Pago',
    fullDescription: [
      'Gestão estratégica de tráfego pago para atrair clientes qualificados e alavancar os resultados do seu negócio.',
    ],
    logoUrl:
      'https://raw.githubusercontent.com/easybyzcreator/imagens/163488ed2b17a44026f46ce474b5e01531616cfb/logo%20l3%20mkt%20-%20fundo%20transp.png',
    contactType: 'whatsapp',
    contactValue: '5519997357490',
    whatsappMessage:
      'Olá equipe da L3 MARKETING estava navegando no site da Easy Byz e gostaria de fazer tráfego pago no meu negócio. Você pode me ajudar?',
    ctaLabel: 'Falar no WhatsApp',
  },
  {
    id: 'leon-estrategico',
    name: 'LEON ESTRATÉGICO',
    shortDescription: 'Marketing para negócios em crescimento',
    fullDescription: [
      'Na LeOn Estúdio Criativo acreditamos que marketing começa muito antes da divulgação.',
      'Antes de pensar em posts, anúncios ou campanhas, é preciso ter clareza sobre o negócio, o posicionamento da marca e a forma como ela se comunica.',
      'Por isso nosso trabalho pode acontecer em diferentes frentes, dependendo da necessidade de cada empresa:',
      '✅️ Consultoria estratégica — Método L.E.O.N.',
      'Um processo de diagnóstico e organização do negócio para definir posicionamento, comunicação e direção de crescimento.',
      '✅️ Branding e criação de marca',
      'Desenvolvimento ou reestruturação de identidade visual alinhada ao posicionamento da empresa.',
      '✅️ Estruturação de marketing',
      'Organização de comunicação, presença digital e direcionamento estratégico.',
      '✅️ Registro de marca',
      'Assessoria para proteção da marca junto ao INPI.',
    ],
    logoUrl:
      'https://raw.githubusercontent.com/easybyzcreator/imagens/b79fdffa2fed8ed425f7e662f6765cc3638a12d9/logo%20leon%20-%20fundo%20transp.png',
    contactType: 'whatsapp',
    contactValue: '555191509052',
    whatsappMessage:
      'Olá equipe LeOn, estava navegando no site da Easy Byz e estou em busca de um posicionamento melhor para minha marca, você pode me ajudar?',
    ctaLabel: 'Falar no WhatsApp',
  },
  {
    id: 'simpmais',
    name: 'SIMPMAIS',
    shortDescription:
      'Soluções contábeis e empresariais (Abertura, alteração, baixa, regularização - MEI e Simples Nacional)',
    fullDescription: [
      'Soluções contábeis e empresariais completas para MEI e Simples Nacional: abertura, alteração, baixa e regularização para seu negócio crescer com segurança.',
    ],
    logoUrl:
      'https://raw.githubusercontent.com/easybyzcreator/imagens/fa8cc1143a2d4afeb929f29c3c11fb52233f5048/logo%20simpmais%20-%20fundo%20transp.png',
    contactType: 'whatsapp',
    contactValue: '5511976644574',
    whatsappMessage:
      'Olá equipe SIMPMAIS, estava navegando no site da Easy Byz e estou em busca de ajuda com a minha MEI e/ou Simples Nacional, você pode me ajudar?',
    ctaLabel: 'Falar no WhatsApp',
  },
];

export const PARCEIROS_EASYBYZ: PartnerData[] = [...RAW_PARCEIROS_EASYBYZ].sort((a, b) =>
  a.name.localeCompare(b.name, 'pt-BR')
);
