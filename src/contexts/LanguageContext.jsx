import { createContext, useContext, useMemo } from 'react';
import siteText from '../content/siteText';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const value = useMemo(
    () => ({
      language: 'en',
      t: siteText,
    }),
    [],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
