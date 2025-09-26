
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { View } from '../types';
import { ArrowLeftIcon } from './icons/Icons';

interface BackButtonProps {
    setView: (view: View) => void;
}

const BackButton: React.FC<BackButtonProps> = ({ setView }) => {
    const { t } = useLanguage();
    return (
        <button
            onClick={() => setView(View.DASHBOARD)}
            className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-dark transition-colors"
        >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            {t('backToDashboard')}
        </button>
    );
};

export default BackButton;
