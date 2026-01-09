
import React from 'react';
import { 
  Users, 
  Globe, 
  Settings, 
  ShieldCheck,
  Search,
  Users2,
  Wallet,
  Building2,
  Cpu,
  Fingerprint,
  Zap,
  Lock,
  Target
} from 'lucide-react';
import { NavLink, ServiceCardProps } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'EOR Solutions', href: '#eor' },
  { label: 'Infrastructure', href: '#infra' },
  { label: 'AI Advisor', href: '#advisor' },
];

export const SERVICES: ServiceCardProps[] = [
  {
    title: "ODC as a Service",
    description: "Building your Elite India Engineering Hub. We help you bypass the pains of global team scaling by setting up high-performing Offshore Development Centers designed for speed, clarity, and accountability.",
    icon: <Globe className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    features: ["India Engineering Hub", "Operational Excellence", "Full Accountability"],
    featureDescriptions: [
      "Custom-built delivery centers in tech hubs like Bangalore and Hyderabad.",
      "Optimized workflows that bridge the gap between global timezones.",
      "Fixed-cost models with guaranteed output and transparent reporting."
    ],
    color: "#E74C3C"
  },
  {
    title: "The Human-Led Filter for Talent",
    description: "We don't use algorithms to hire engineers; we use engineers with 15+ years of experience. Our hands-on expertise ensures your next hire is genuinely vital to your success.",
    icon: <Fingerprint className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    features: ["Expert Technical Vetting", "15+ Years Filter", "Top 1% Global Engineering"],
    featureDescriptions: [
      "Deep-dive technical interviews conducted by senior system architects.",
      "Assessment of real-world problem-solving, not just syntax memorization.",
      "Access to a vetted pool of high-impact engineers ready for day zero."
    ],
    color: "#3498DB"
  },
  {
    title: "HR and Payroll Services",
    description: "Automate your global operations. We manage complex multi-country payroll, employee benefits, and local tax filings with 100% precision and transparency.",
    icon: <Wallet className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    features: ["Global Tax Compliance", "Automated Payroll", "Transparent Benefits"],
    featureDescriptions: [
      "Navigate local labor laws and tax regulations with our expert legal team.",
      "Streamlined disbursement systems that eliminate delays and errors.",
      "Comprehensive insurance and benefit packages tailored to local markets."
    ],
    color: "#27AE60"
  },
  {
    title: "Cloud Infrastructure Modernization",
    description: "Beyond talent, we provide the architecture for high-performance delivery. Our specialists deploy compliant, cloud-native foundations that scale as fast as your team does.",
    icon: <Cpu className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    features: ["Cloud-Native Architecture", "Scalability Engineering", "Compliance Foundation"],
    featureDescriptions: [
      "Infrastructure as Code (IaC) implementation for rapid environment setup.",
      "Auto-scaling clusters that handle traffic surges without manual intervention.",
      "SOC2 and GDPR-ready security baselines for all global delivery nodes."
    ],
    color: "#8E44AD"
  },
  {
    title: "Employer of Record (EOR)",
    description: "Expand your global team without the cost of setting up local entities. SharpTip takes on the legal and administrative liability while you focus on leading your team.",
    icon: <Building2 className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
    features: ["Zero-Entity Expansion", "Legal Liability Coverage", "IP Protection Guarantee"],
    featureDescriptions: [
      "Hire in new countries in as little as 48 hours without legal overhead.",
      "SharpTip handles all employer obligations and insurance liabilities.",
      "Ironclad IP assignment contracts that secure your company's assets."
    ],
    color: "#F39C12"
  }
];

export const TRUST_LOGOS = [
  "https://www.vectorlogo.zone/logos/google/google-ar21.svg",
  "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg",
  "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg",
  "https://www.vectorlogo.zone/logos/slack/slack-ar21.svg",
  "https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg",
];
