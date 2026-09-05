import { BonusBookItem, Testimonial, FAQItem } from "./types";
import bonusCoverAtividades from "./assets/images/bonus_atividades_extras_1788146298925.jpg";
import bonusCoverColorir from "./assets/images/bonus_colorir_1788146710718.jpg";
import bonusCoverCertificados from "./assets/images/bonus_certificados_1788146312573.jpg";
import bonusCoverJogos from "./assets/images/bonus_jogos_1788146354376.jpg";
import bonusCoverCartoes from "./assets/images/bonus_cartoes_1788146364513.jpg";
import bonusCoverApostilas from "./assets/images/bonus_apostilas_1788146377418.jpg";
import avatarJulianaBarreto from "./assets/images/juliana_barreto_depoimento_1788131852685.jpg";
import avatar1 from "./assets/avatar-1.webp";
import avatar3 from "./assets/avatar-3.webp";
import avatar4 from "./assets/avatar-4.webp";

export const PAIN_POINTS = [
  {
    id: "confunde-letras",
    characterId: "bento",
    illustrationType: "letters-confusion",
    title: "Confunde algumas letras",
    description: "Troca letras parecidas como b/d, p/q ou fica em dúvida sobre o som correto de cada uma.",
    bgGradient: "from-[var(--color-yellow-light)] to-[var(--color-yellow-badge)]",
    borderColor: "border-[var(--color-yellow)]/40",
    textColor: "text-[var(--color-text-title)]",
    badge: "Confusão Visual",
  },
  {
    id: "dificuldade-silabas",
    characterId: "maya",
    illustrationType: "syllable-puzzle",
    title: "Tem dificuldade com sílabas",
    description: "Conhece as letras isoladas, mas trava na hora de juntar consoantes e vogais para formar sílabas.",
    bgGradient: "from-[var(--color-pink-light)] to-[var(--color-pink-badge)]",
    borderColor: "border-[var(--color-pink)]/40",
    textColor: "text-[var(--color-pink-dark)]",
    badge: "Trava Silábica",
  },
  {
    id: "reconhece-nao-le",
    characterId: "leo",
    illustrationType: "reading-transition",
    title: "Reconhece letras, mas não lê palavras",
    description: "Sabe o alfabeto de cor, mas ainda não consegue juntar os sons para formar e ler palavras completas.",
    bgGradient: "from-[var(--color-primary-bg)] to-[var(--color-bg-alt)]",
    borderColor: "border-[var(--color-primary)]/30",
    textColor: "text-[var(--color-primary)]",
    badge: "Transição Difícil",
  },
  {
    id: "perde-interesse",
    characterId: "nina",
    illustrationType: "focus-interest",
    title: "Perde o interesse rapidamente",
    description: "Resiste à hora da lição, perde a atenção rápido e se cansa com folhas monótonas e sem estímulo lúdico.",
    bgGradient: "from-[var(--color-cta-bg)] to-[var(--color-bg-warm)]",
    borderColor: "border-[var(--color-cta)]/40",
    textColor: "text-[var(--color-cta-dark)]",
    badge: "Desatenção & Foco",
  },
];

export const BONUS_BOOKS: BonusBookItem[] = [
  {
    id: "bonus-1",
    title: "30 Atividades Extras",
    subtitle: "Reforço e Fixação",
    description: "Exercícios complementares para reforçar o aprendizado das etapas mais desafiadoras.",
    badge: "BÔNUS 01",
    originalPrice: "R$ 29,90",
    currentPrice: "GRÁTIS",
    color: "from-[var(--color-primary)] to-[var(--color-primary-light)]",
    icon: "📝",
    tag: "Atividades Extras",
    coverImage: bonusCoverAtividades,
  },
  {
    id: "bonus-2",
    title: "Atividades para Colorir",
    subtitle: "Pintura & Alfabetização",
    description: "Desenhos divertidos com letras e formas para a criança colorir e aprender de forma criativa.",
    badge: "BÔNUS 02",
    originalPrice: "R$ 27,90",
    currentPrice: "GRÁTIS",
    color: "from-[var(--color-primary-light)] to-[var(--color-primary-dark)]",
    icon: "🎨",
    tag: "Colorir",
    coverImage: bonusCoverColorir,
  },
  {
    id: "bonus-3",
    title: "Certificados de Conquista",
    subtitle: "Motivação & Celebração",
    description: "Certificados coloridos para imprimir e celebrar cada etapa concluída pela criança.",
    badge: "BÔNUS 03",
    originalPrice: "R$ 19,90",
    currentPrice: "GRÁTIS",
    color: "from-[var(--color-pink)] to-[var(--color-pink-dark)]",
    icon: "🏆",
    tag: "Celebração",
    coverImage: bonusCoverCertificados,
  },
  {
    id: "bonus-4",
    title: "Jogos de Alfabetização",
    subtitle: "Brincadeiras Educativas",
    description: "Jogos de tabuleiro, dominó de palavras e desafios lúdicos para brincar em família.",
    badge: "BÔNUS 04",
    originalPrice: "R$ 34,90",
    currentPrice: "GRÁTIS",
    color: "from-[var(--color-yellow)] to-[var(--color-cta)]",
    icon: "🎲",
    tag: "Jogos Lúdicos",
    coverImage: bonusCoverJogos,
  },
  {
    id: "bonus-5",
    title: "Cartões de Sílabas",
    subtitle: "Material Manipulativo",
    description: "Cartões coloridos prontos para recortar e montar centenas de combinações silábicas.",
    badge: "BÔNUS 05",
    originalPrice: "R$ 24,90",
    currentPrice: "GRÁTIS",
    color: "from-[var(--color-success)] to-[var(--color-success-dark)]",
    icon: "🃏",
    tag: "Cartões Didáticos",
    coverImage: bonusCoverCartoes,
  },
  {
    id: "bonus-6",
    title: "Kit de Apostilas Complementares",
    subtitle: "Sílabas Complexas & Fonemas",
    description: "Apostilas de aprofundamento para encontros consonantais (BR, CR, TR, LH, NH, CH).",
    badge: "BÔNUS 06",
    originalPrice: "R$ 31,90",
    currentPrice: "GRÁTIS",
    color: "from-[var(--color-cta)] to-[var(--color-cta-dark)]",
    icon: "📚",
    tag: "Apostilas Extras",
    coverImage: bonusCoverApostilas,
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "COMPRE",
    description: "Faça seu pedido de forma rápida e com pagamento 100% protegido.",
    icon: "CreditCard",
    color: "bg-[var(--color-primary)]",
  },
  {
    step: "02",
    title: "RECEBA",
    description: "Receba o acesso digital imediatamente no seu e-mail cadastrado.",
    icon: "Download",
    color: "bg-[var(--color-primary-light)]",
  },
  {
    step: "03",
    title: "IMPRIMA",
    description: "Escolha as atividades que deseja utilizar e imprima quando quiser.",
    icon: "Printer",
    color: "bg-[var(--color-success)]",
  },
  {
    step: "04",
    title: "PRATIQUE",
    description: "Siga a sequência e acompanhe com orgulho o progresso do seu filho.",
    icon: "Smile",
    color: "bg-[var(--color-cta)]",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carla Moreira",
    role: "Mãe do Theo",
    childInfo: "6 anos",
    highlight: "Em poucas semanas ele leu as primeiras palavras sozinho. Foi emocionante!",
    text: "Meu filho travava muito para juntar as sílabas e chorava quando eu tentava ensinar. A organização do KIT DE ALFABETIZAÇÃO Ler & Brincar tornou tudo simples e leve.",
    stars: 5,
    avatarBg: "bg-[var(--color-primary)]",
    initials: "CM",
    image: avatar1,
  },
  {
    id: "2",
    name: "Juliana Barreto",
    role: "Mãe da Sofia",
    childInfo: "5 anos",
    highlight: "A Sofia pede para fazer as atividades todo dia depois do almoço.",
    text: "Achei que seria difícil manter a rotina, mas como são só 10 minutinhos e parece uma brincadeira, virou o momento favorito dela. Recomendo de olhos fechados!",
    stars: 5,
    avatarBg: "bg-[var(--color-pink)]",
    initials: "JB",
    image: avatarJulianaBarreto,
  },
  {
    id: "3",
    name: "Patrick Santana",
    role: "Pai do Davi",
    childInfo: "7 anos",
    highlight: "Ele recuperou a confiança e o orgulho na escola.",
    text: "A professora dele me chamou para elogiar a evolução na leitura. Ele que antes tinha vergonha agora é o primeiro a levantar a mão para ler na sala.",
    stars: 5,
    avatarBg: "bg-[var(--color-success)]",
    initials: "PS",
    image: avatar3,
  },
  {
    id: "4",
    name: "Prof. Renato Lima",
    role: "Pedagogo e Alfabetizador",
    childInfo: "15 anos de docência",
    highlight: "A ordem pedagógica das atividades é perfeita e respeita o cérebro infantil.",
    text: "Uso com meus alunos e indico para todos os pais. O material trabalha consciência fonológica sem sobrecarregar a criança. É o melhor material que já avaliei.",
    stars: 5,
    avatarBg: "bg-[var(--color-yellow)]",
    initials: "RL",
    image: avatar4,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Para qual idade é indicado?",
    answer: "O KIT DE ALFABETIZAÇÃO Ler & Brincar é indicado principalmente para crianças de 4 a 8 anos, seja para os primeiros passos na alfabetização ou para destravar crianças que já estão na escola e sentem dificuldade para juntar as sílabas.",
  },
  {
    id: "faq-2",
    question: "Preciso saber ensinar alfabetização?",
    answer: "Não! As atividades foram pensadas para serem autoexplicativas e intuitivas. Qualquer pai, mãe ou responsável consegue conduzir os 5 a 10 minutos de prática diária com total facilidade.",
  },
  {
    id: "faq-3",
    question: "Como recebo o material?",
    answer: "O envio é 100% digital e imediato. Assim que o pagamento for aprovado, você recebe um e-mail com os links de download direto de todos os arquivos em PDF em alta resolução.",
  },
  {
    id: "faq-4",
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! O acesso é vitalício. Você pode imprimir páginas avulsas conforme a necessidade ou imprimir os cadernos completos para encadernar quantas vezes desejar.",
  },
  {
    id: "faq-5",
    question: "Funciona no celular?",
    answer: "Sim! Você pode baixar os arquivos no celular, tablet ou computador, além de poder utilizá-los diretamente em tablets com caneta digital se preferir.",
  },
  {
    id: "faq-6",
    question: "Preciso comprar materiais adicionais?",
    answer: "Não! Você só precisará de materiais comuns que já tem em casa: lápis de escrever, lápis de cor, borracha e, para algumas atividades opcionais, tesoura sem ponta e cola.",
  },
  {
    id: "faq-7",
    question: "Quando recebo o acesso?",
    answer: "Imediatamente! Pagamentos via PIX ou Cartão de Crédito liberam o acesso instantaneamente na sua caixa de entrada.",
  },
  {
    id: "faq-8",
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o material não é adequado para o seu filho, basta nos enviar um e-mail para receber 100% do seu dinheiro de volta na hora.",
  },
];
