
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  features?: string[];
  color?: string;
  delay?: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface AIConsultantResponse {
  recommendation: string;
  roadmap: string[];
  keyBenefits: string[];
}
