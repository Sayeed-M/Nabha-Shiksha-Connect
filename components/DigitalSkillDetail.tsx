import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DigitalSkill } from '../types';
import { ArrowLeftIcon } from './icons/Icons';
// FIX: Import 'Locale' type to resolve type errors for translation keys.
import type { Locale } from '../data/locales';

interface DigitalSkillDetailProps {
    skill: DigitalSkill;
    onBack: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-brand-blue-dark mb-3">{title}</h3>
        <div className="space-y-2 text-gray-700">{children}</div>
    </div>
);

const KeyboardMouseModule: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="space-y-6">
            <Section title={t('keyboardIntroTitle')}>
                <p>{t('keyboardIntroContent')}</p>
            </Section>
            <Section title={t('keyTypesTitle')}>
                <h4 className="font-semibold">{t('keyTypesTyping')}</h4>
                <p>{t('keyTypesTypingDesc')}</p>
                <h4 className="font-semibold pt-2">{t('keyTypesControl')}</h4>
                <p>{t('keyTypesControlDesc')}</p>
                <h4 className="font-semibold pt-2">{t('keyTypesFunction')}</h4>
                <p>{t('keyTypesFunctionDesc')}</p>
            </Section>
            <Section title={t('mouseIntroTitle')}>
                <p>{t('mouseIntroContent')}</p>
            </Section>
             <Section title={t('mouseActionsTitle')}>
                <h4 className="font-semibold">{t('mouseActionsClick')}</h4>
                <p>{t('mouseActionsClickDesc')}</p>
                <h4 className="font-semibold pt-2">{t('mouseActionsDoubleClick')}</h4>
                <p>{t('mouseActionsDoubleClickDesc')}</p>
                <h4 className="font-semibold pt-2">{t('mouseActionsRightClick')}</h4>
                <p>{t('mouseActionsRightClickDesc')}</p>
                 <h4 className="font-semibold pt-2">{t('mouseActionsScroll')}</h4>
                <p>{t('mouseActionsScrollDesc')}</p>
            </Section>
        </div>
    );
};

const FileOrganizationModule: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="space-y-6">
             <Section title={t('fileOrgIntroTitle')}>
                <p>{t('fileOrgIntroContent')}</p>
            </Section>
             <Section title={t('whatAreFilesTitle')}>
                <p>{t('whatAreFilesContent')}</p>
            </Section>
             <Section title={t('whatAreFoldersTitle')}>
                <p>{t('whatAreFoldersContent')}</p>
            </Section>
            <Section title={t('howToOrganizeTitle')}>
                <h4 className="font-semibold">{t('howToOrganizeStep1')}</h4>
                <p>{t('howToOrganizeStep1Desc')}</p>
                <h4 className="font-semibold pt-2">{t('howToOrganizeStep2')}</h4>
                <p>{t('howToOrganizeStep2Desc')}</p>
                <h4 className="font-semibold pt-2">{t('howToOrganizeStep3')}</h4>
                <p>{t('howToOrganizeStep3Desc')}</p>
            </Section>
        </div>
    );
};

const InternetSafetyModule: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="space-y-6">
            <Section title={t('internetSafetyIntroTitle')}>
                <p>{t('internetSafetyIntroContent')}</p>
            </Section>
            <Section title={t('strongPasswordsTitle')}>
                 <p>{t('strongPasswordsContent')}</p>
                 <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>{t('strongPasswordsTip1')}</li>
                    <li>{t('strongPasswordsTip2')}</li>
                    <li>{t('strongPasswordsTip3')}</li>
                 </ul>
            </Section>
             <Section title={t('phishingTitle')}>
                 <p>{t('phishingContent')}</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>{t('phishingTip1')}</li>
                    <li>{t('phishingTip2')}</li>
                 </ul>
            </Section>
             <Section title={t('personalInfoTitle')}>
                <p>{t('personalInfoContent')}</p>
            </Section>
        </div>
    );
};


const DigitalSkillDetail: React.FC<DigitalSkillDetailProps> = ({ skill, onBack }) => {
    const { t } = useLanguage();
    
    const renderContent = () => {
        switch (skill.id) {
            case '1': return <KeyboardMouseModule />;
            case '2': return <FileOrganizationModule />;
            case '3': return <InternetSafetyModule />;
            default: return <p>Content not found.</p>;
        }
    };
    
    const getTitleKey = (): keyof Locale => {
        switch(skill.id) {
            case '1': return 'keyboardMouseDetailTitle';
            case '2': return 'fileOrgDetailTitle';
            case '3': return 'internetSafetyDetailTitle';
            default: return 'digitalSkillsTitle';
        }
    }

    return (
        <div>
            <button
                onClick={onBack}
                className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors"
            >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                {t('backToSkills')}
            </button>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-brand-blue-dark">{t(getTitleKey())}</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                {renderContent()}
            </div>
        </div>
    );
};

export default DigitalSkillDetail;