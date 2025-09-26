import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { View, DigitalSkill } from '../types';
import { ComputerIcon, FolderIcon, ShieldCheckIcon } from './icons/Icons';
import BackButton from './BackButton';
import DigitalSkillDetail from './DigitalSkillDetail';

interface DigitalSkillsModuleProps {
  setView: (view: View) => void;
}

const skills: DigitalSkill[] = [
    { id: '1', title: 'skillKeyboardTitle', description: 'skillKeyboardDesc', icon: <ComputerIcon className="h-10 w-10 text-brand-green" /> },
    { id: '2', title: 'skillFileOrgTitle', description: 'skillFileOrgDesc', icon: <FolderIcon className="h-10 w-10 text-brand-green" /> },
    { id: '3', title: 'skillInternetSafetyTitle', description: 'skillInternetSafetyDesc', icon: <ShieldCheckIcon className="h-10 w-10 text-brand-green" /> },
];

const SkillCard: React.FC<{ skill: DigitalSkill; onClick: () => void }> = ({ skill, onClick }) => {
    const { t } = useLanguage();
    return (
        <button
            onClick={onClick}
            className="w-full bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-brand-light transition-colors text-left"
            aria-label={`Learn more about ${t(skill.title)}`}
        >
            {skill.icon}
            <div>
                <h3 className="font-bold text-lg text-brand-dark">{t(skill.title)}</h3>
                <p className="text-gray-600">{t(skill.description)}</p>
            </div>
        </button>
    );
};


const DigitalSkillsModule: React.FC<DigitalSkillsModuleProps> = ({ setView }) => {
  const { t } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState<DigitalSkill | null>(null);
  
  if (selectedSkill) {
      return <DigitalSkillDetail skill={selectedSkill} onBack={() => setSelectedSkill(null)} />;
  }

  return (
    <div>
      <BackButton setView={setView} />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brand-blue-dark">{t('digitalSkillsTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('digitalSkillsDesc')}</p>
      </div>
      <div className="space-y-4 max-w-2xl mx-auto">
        {skills.map(skill => <SkillCard key={skill.id} skill={skill} onClick={() => setSelectedSkill(skill)} />)}
      </div>
    </div>
  );
};

export default DigitalSkillsModule;