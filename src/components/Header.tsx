import React from 'react';
import logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <img src={logo} alt="Logo" className="w-auto filter brightness-0 invert" style={{ height: '20px', flexShrink: 0 }} />
        <h3 className="text-xl font-bold text-white" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{t('header.title')}</h3>
        <div className="flex items-center space-x-3">
          <button className="px-3 py-2 text-sm font-medium text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 hover:scale-105">
            {t('header.login')}
          </button>
          <button className="px-3 py-2 text-sm font-medium text-white bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 hover:scale-105 shadow-lg">
            {t('header.register')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;