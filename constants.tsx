
import React from 'react';
import { 
  Users, 
  Globe, 
  Settings, 
  ShieldCheck,
  Search,
  Users2,
  Wallet,
  Building2
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
    title: "Global Talent Recruitment",
    description: "Our elite headhunting team identifies the top 1% of talent globally. We specialize in engineering, product leadership, and executive search for high-growth tech firms.",
    icon: <Search className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    features: ["Pre-vetted Technical Assessments", "Cultural Fit Benchmarking", "Executive Search Retention"],
    color: "#E74C3C"
  },
  {
    title: "Strategic Staffing Solutions",
    description: "Scale your team up or down with maximum agility. We provide flexible staffing models including Contract-to-Hire and specialized project-based engineering pods.",
    icon: <Users2 className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    features: ["48-Hour Onboarding", "Contract-to-Perm Flexibility", "Distributed Team Management"],
    color: "#3498DB"
  },
  {
    title: "HR & Payroll Management",
    description: "Automate your global operations. We manage complex multi-country payroll, employee benefits, and local tax filings with 100% precision and transparency.",
    icon: <Wallet className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    features: ["Global Tax Compliance", "Automated Benefit Portals", "Real-time Cost Analysis"],
    color: "#27AE60"
  },
  {
    title: "Employer of Record (EOR)",
    description: "Expand into 150+ countries without the cost of setting up local entities. NexusHire takes on the legal and administrative liability while you lead your team.",
    icon: <Building2 className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    features: ["Local Legal Representation", "IP Protection Guarantee", "Zero-Entity Expansion"],
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
