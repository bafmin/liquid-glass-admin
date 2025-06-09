import React from 'react';
import { useTheme } from '../../contexts/ThemeContext/ThemeContext';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style }) => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.glassCard} ${theme === 'dark' ? styles.dark : ''}`} style={style}>
      {children}
    </div>
  );
};
