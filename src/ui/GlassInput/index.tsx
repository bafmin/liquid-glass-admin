import React, { InputHTMLAttributes } from 'react';
import { useTheme } from '../../contexts/ThemeContext/ThemeContext';
import styles from './GlassInput.module.css';

export const GlassInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => {
  const { theme } = useTheme();
  return <input className={`${styles.input} ${theme === 'dark' ? styles.dark : ''}`} {...props} />;
};
