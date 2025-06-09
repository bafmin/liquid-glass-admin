import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlassPanel } from '../GlassPanel';
import { navItems } from '../../common/navItems';
import styles from './GlassNavbar.module.css';

export const GlassNavbar: React.FC = () => (
  <GlassPanel className={styles.navbar}>
    <div className={styles.logo}>🚀 LiquidGlass Admin</div>
    <nav className={styles.links}>
      {navItems.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          {item.icon && <span className={styles.icon}>{item.icon}</span>}
          {item.label}
        </NavLink>
      ))}
    </nav>
  </GlassPanel>
);
