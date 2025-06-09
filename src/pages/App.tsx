import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext/ThemeContext';
import { GlassNavbar } from '../ui/GlassNavbar';
import { GlassSidebar } from '../ui/GlassSidebar';
import Analytics from './Analytics';
import Crm from './Crm';
import Ecommerce from './Ecommerce';
import Marketing from './Marketing';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="app-container">
          <GlassNavbar />
          <div className="content-area">
            <GlassSidebar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Navigate to="/analytics" replace />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/crm" element={<Crm />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/marketing" element={<Marketing />} />
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
