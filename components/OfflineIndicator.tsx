
import React, { useState, useEffect } from 'react';
import { useOfflineStatus } from '../hooks/useOfflineStatus';
import { useLanguage } from '../context/LanguageContext';
import { WifiOffIcon } from './icons/Icons';

const OfflineIndicator: React.FC = () => {
  const isOffline = useOfflineStatus();
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const [isOnlineMessage, setIsOnlineMessage] = useState(false);

  useEffect(() => {
    if (isOffline) {
        setShow(true);
        setIsOnlineMessage(false);
    } else {
        // When coming back online, show a confirmation message
        if (show) { // Only show 'back online' if the offline banner was shown
            setIsOnlineMessage(true);
            const timer = setTimeout(() => {
                setShow(false);
            }, 3000); // Hide after 3 seconds
            return () => clearTimeout(timer);
        }
    }
  }, [isOffline, show]);

  if (!show) return null;

  if (isOnlineMessage) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate-fade-in-out">
        <span className="font-medium">{t('isOnline')}</span>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
      <WifiOffIcon className="h-5 w-5 mr-2" />
      <span className="font-medium">{t('isOffline')}</span>
    </div>
  );
};

export default OfflineIndicator;
