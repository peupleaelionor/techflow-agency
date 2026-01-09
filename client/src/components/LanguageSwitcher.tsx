import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' },
    { code: 'ln', label: 'LN' }
  ];

  return (
    <div className="flex gap-0 font-mono text-sm border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)]">
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex">
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-2 py-1 ${i18n.language === lang.code ? 'bg-[#CCFF00] font-bold' : 'hover:bg-gray-100'}`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && <div className="w-[2px] bg-black" />}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
