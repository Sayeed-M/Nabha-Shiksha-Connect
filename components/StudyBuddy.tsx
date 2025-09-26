
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { View, ChatMessage } from '../types';
import { getAIResponse } from '../services/geminiService';
import { SparklesIcon, UsersIcon } from './icons/Icons';
import BackButton from './BackButton';

interface StudyBuddyProps {
    setView: (view: View) => void;
}

const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const isUser = message.role === 'user';
    return (
        <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : ''}`}>
            {!isUser && (
                <div className="p-2 bg-brand-green rounded-full">
                    <SparklesIcon className="w-5 h-5 text-white" />
                </div>
            )}
            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${isUser ? 'bg-brand-blue text-white rounded-br-none' : 'bg-white text-brand-dark rounded-bl-none'}`}>
                <p className="text-sm break-words">{message.text}</p>
            </div>
             {isUser && (
                <div className="p-2 bg-gray-200 rounded-full">
                    <UsersIcon className="w-5 h-5 text-gray-600" />
                </div>
            )}
        </div>
    );
};


const StudyBuddy: React.FC<StudyBuddyProps> = ({ setView }) => {
    const { t } = useLanguage();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;
        
        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const aiText = await getAIResponse(input);
            const aiMessage: ChatMessage = { role: 'model', text: aiText };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = { role: 'model', text: "Sorry, I couldn't connect. Please check your connection and try again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    }

    return (
        <div>
            <BackButton setView={setView} />
            <div className="max-w-2xl mx-auto bg-brand-light rounded-lg shadow-2xl overflow-hidden" style={{height: '70vh'}}>
                <div className="p-4 bg-white border-b border-gray-200">
                    <h2 className="text-xl font-bold text-center text-brand-blue-dark">{t('studyBuddyTitle')}</h2>
                    <p className="text-sm text-center text-gray-500">{t('studyBuddyDesc')}</p>
                </div>
                <div className="p-4 h-[calc(100%-150px)] overflow-y-auto space-y-4">
                    {messages.length === 0 && (
                        <div className="text-center text-gray-500 pt-16">
                            <SparklesIcon className="w-16 h-16 mx-auto text-brand-green" />
                            <p className="mt-4">Ask me a question to get started!</p>
                        </div>
                    )}
                    {messages.map((msg, index) => <ChatBubble key={index} message={msg} />)}
                    {isLoading && (
                         <div className="flex items-start gap-3">
                            <div className="p-2 bg-brand-green rounded-full">
                                <SparklesIcon className="w-5 h-5 text-white" />
                            </div>
                            <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl bg-white text-brand-dark rounded-bl-none">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                    <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={t('askMeAnything')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading}
                            className="px-6 py-2 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue-dark disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        >
                            {t('sendMessage')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyBuddy;
