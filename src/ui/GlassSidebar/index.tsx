import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlassPanel } from '../GlassPanel';
import { navItems } from '../../common/navItems';
import styles from './GlassSidebar.module.css';

export const GlassSidebar: React.FC = () => (
  <GlassPanel className={styles.sidebar}>
    <ul className={styles.menu}>
      {navItems.map(item => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ''}`
            }
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </GlassPanel>
);
