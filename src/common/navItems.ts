import React from 'react';
import { NavItem } from './types';

export interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export const navItems: NavItem[] = [
  { label: 'Analytics', path: '/analytics' },
  { label: 'CRM',       path: '/crm' },
  { label: 'E-Commerce',path: '/ecommerce' },
  { label: 'Marketing', path: '/marketing' },
];
