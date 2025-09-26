import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { BookOpenIcon } from './icons/Icons';

interface RegisterPageProps {
    onSwitchToLogin: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onSwitchToLogin }) => {
    const { t } = useLanguage();
    const { register } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        const success = await register(name, email, password);
        if (!success) {
            setError('Failed to register. This email might already be in use.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-gray px-4 py-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <BookOpenIcon className="h-12 w-12 text-brand-blue mx-auto" />
                    <h2 className="mt-4 text-2xl font-bold text-brand-blue-dark">{t('registerTitle')}</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('name')}</label>
                        <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"/>
                    </div>
                    <div>
                        <label htmlFor="email-register" className="block text-sm font-medium text-gray-700">{t('email')}</label>
                        <input id="email-register" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"/>
                    </div>
                    <div>
                        <label htmlFor="password-register" className="block text-sm font-medium text-gray-700">{t('password')}</label>
                        <input id="password-register" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"/>
                    </div>
                    
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-dark focus:outline-none">
                            {t('register')}
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    {t('alreadyHaveAccount')}{' '}
                    <button onClick={onSwitchToLogin} className="font-medium text-brand-blue hover:text-brand-blue-dark">
                        {t('login')}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;