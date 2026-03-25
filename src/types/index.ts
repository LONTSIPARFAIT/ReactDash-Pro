// src/types/index.ts

// Type pour les éléments du menu de la sidebar
export interface MenuItem {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  active?: boolean;
  href?: string;
}

// Type pour une carte de statistique (très utilisé dans les dashboards)
export interface StatCard {
  id: number;
  title: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative';
  icon?: string;
}

// Type pour les données utilisateur (ex: page Users)
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

// Type général pour les props des composants de layout
export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export interface NavbarProps {
  toggleSidebar: () => void;
}