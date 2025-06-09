import React, { ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../contexts/ThemeContext/ThemeContext';
import styles from './GlassButton.module.css';

export const GlassButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const { theme } = useTheme();
  return <button className={`${styles.btn} ${theme === 'dark' ? styles.dark : ''}`} {...props} />;
};
