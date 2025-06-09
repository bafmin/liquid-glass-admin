import React from 'react';
import { GlassPanel } from '../GlassPanel';
import styles from './GlassModal.module.css';

interface GlassModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const GlassModal: React.FC<GlassModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <GlassPanel className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        {children}
      </GlassPanel>
    </div>
  );
};
