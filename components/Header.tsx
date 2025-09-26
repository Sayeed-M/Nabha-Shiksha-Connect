import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { View, UserRole } from '../types';
import { BookOpenIcon, LogOutIcon } from './icons/Icons';

interface HeaderProps {
  setView: (view: View) => void;
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pa' : 'en');
    };
    return (
        <button
            onClick={toggleLanguage}
            className="px-3 py-2 text-sm font-medium text-brand-blue-dark bg-brand-light rounded-md hover:bg-brand-green hover:text-white transition-colors"
            aria-label="Toggle language"
        >
            {language === 'en' ? 'ਪੰਜਾਬੀ' : 'English'}
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ setView }) => {
  const { t } = useLanguage();
  const { currentUser, logout } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setView(View.DASHBOARD)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && setView(View.DASHBOARD)}
          >
            <BookOpenIcon className="h-8 w-8 text-brand-blue" />
            <h1 className="ml-2 text-xl font-bold text-brand-blue-dark">{t('appName')}</h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            {currentUser && (
              <>
                <span className="hidden sm:inline text-sm font-medium text-gray-700">
                  {currentUser.name}
                </span>
                <nav className="hidden md:flex space-x-4">
                    <button onClick={() => setView(View.DASHBOARD)} className="text-gray-600 hover:text-brand-blue transition-colors">{t('dashboard')}</button>
                    {(currentUser.role === UserRole.TEACHER || currentUser.role === UserRole.ADMIN) && (
                        <button onClick={() => setView(View.FILE_MANAGEMENT)} className="text-gray-600 hover:text-brand-blue transition-colors">{t('fileManagement')}</button>
                    )}
                    <button onClick={() => setView(View.DIGITAL_SKILLS)} className="text-gray-600 hover:text-brand-blue transition-colors">{t('digitalSkills')}</button>
                    {currentUser.role === UserRole.TEACHER && (
                      <button onClick={() => setView(View.TEACHER_PORTAL)} className="text-gray-600 hover:text-brand-blue transition-colors">{t('teacherPortal')}</button>
                    )}
                    <button onClick={() => setView(View.STUDY_BUDDY)} className="text-gray-600 hover:text-brand-blue transition-colors">{t('studyBuddy')}</button>
                </nav>
              </>
            )}
            <LanguageSwitcher />
            {currentUser && (
              <button
                onClick={logout}
                className="p-2 text-gray-600 hover:text-brand-blue transition-colors"
                title={t('logout')}
                aria-label={t('logout')}
              >
                <LogOutIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;