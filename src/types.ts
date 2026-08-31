export interface BonusBookItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  badge: string;
  originalPrice: string;
  currentPrice: string;
  color: string;
  icon: string;
  tag: string;
  coverImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  childInfo?: string;
  highlight?: string;
  text: string;
  stars: number;
  avatarBg: string;
  initials: string;
  image?: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PlanItem {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  ratingText: string;
  originalPrice: string;
  currentPrice: string;
  installments: string;
  features: { text: string; isBonus?: boolean; isHighlight?: boolean }[];
  ctaText: string;
  isPopular?: boolean;
  alertNotice?: string;
}
