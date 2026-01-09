import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 font-mono text-sm border-2 border-black p-1 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)]">
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`px-2 py-1 ${i18n.language === 'fr' ? 'bg-[#CCFF00] font-bold' : 'hover:bg-gray-100'}`}
      >
        FR
      </button>
      <div className="w-[2px] bg-black" />
      <button
        onClick={() => i18n.changeLanguage('es')}
        className={`px-2 py-1 ${i18n.language === 'es' ? 'bg-[#CCFF00] font-bold' : 'hover:bg-gray-100'}`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
