import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DigitalSkillsModule from './components/DigitalSkillsModule';
import TeacherPortal from './components/TeacherPortal';
import StudyBuddy from './components/StudyBuddy';
import FileManagement from './components/FileManagement';
import OfflineIndicator from './components/OfflineIndicator';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserManagement from './components/UserManagement';
import { View } from './types';
import { UserRole } from './types';

const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const { currentUser } = useAuth();

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard setView={setCurrentView} />;
      case View.DIGITAL_SKILLS:
        return <DigitalSkillsModule setView={setCurrentView} />;
      case View.TEACHER_PORTAL:
         if (currentUser?.role === UserRole.TEACHER) {
           return <TeacherPortal setView={setCurrentView} />;
         }
         return <Dashboard setView={setCurrentView} />;
      case View.STUDY_BUDDY:
        return <StudyBuddy setView={setCurrentView} />;
      case View.FILE_MANAGEMENT:
        if (currentUser?.role === UserRole.TEACHER || currentUser?.role === UserRole.ADMIN) {
          return <FileManagement setView={setCurrentView} />;
        }
        return <Dashboard setView={setCurrentView} />;
      case View.USER_MANAGEMENT:
        if (currentUser?.role === UserRole.ADMIN) {
          return <UserManagement setView={setCurrentView} />;
        }
        return <Dashboard setView={setCurrentView} />;
      default:
        return <Dashboard setView={setCurrentView} />;
    }
  };
  
  return (
     <div className="min-h-screen bg-brand-gray text-brand-dark font-sans">
      <Header setView={setCurrentView} />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderView()}
      </main>
      <OfflineIndicator />
    </div>
  );
};


const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AuthGate />
      </AuthProvider>
    </LanguageProvider>
  );
};

const AuthGate: React.FC = () => {
  const { currentUser } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);

  if (!currentUser) {
    return isRegistering ? (
      <RegisterPage onSwitchToLogin={() => setIsRegistering(false)} />
    ) : (
      <LoginPage onSwitchToRegister={() => setIsRegistering(true)} />
    );
  }
  
  return <MainApp />;
}


export default App;