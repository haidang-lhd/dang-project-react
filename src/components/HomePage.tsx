import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    const nextLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button
        onClick={switchLanguage}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {i18n.language === 'vi' ? 'English' : 'Tiếng Việt'}
      </button>

      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>

      <h2 className="text-xl font-semibold mb-4">{t('goals.heading')}</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>{t('goals.g1')}</li>
        <li>{t('goals.g2')}</li>
        <li>{t('goals.g3')}</li>
        <li>{t('goals.g4')}</li>
        <li>{t('goals.g5')}</li>
      </ul>
    </div>
  );
};

export default HomePage;
