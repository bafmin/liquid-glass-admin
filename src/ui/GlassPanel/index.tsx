import React from 'react';
import styles from './GlassPanel.module.css';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ children, className = '' }) => (
  <div className={`${styles.panel} ${className}`}>{children}</div>
);
