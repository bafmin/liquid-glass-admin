import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext/ThemeContext';
import { GlassNavbar } from '../ui/GlassNavbar';
import { GlassSidebar } from '../ui/GlassSidebar';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <GlassNavbar />
        <div className="content-area">
          <GlassSidebar />
          <main className="main-content">{/* TODO: Router Outlet */}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
