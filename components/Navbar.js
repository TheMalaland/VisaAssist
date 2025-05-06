import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const router = useRouter();
  const { t, i18n } = useTranslation('common'); // Carga las traducciones desde common.json

  const changeLanguage = async () => {
    const newLocale = i18n.language === 'es' ? 'en' : 'es'; // Cambia entre español e inglés
    try {
      await i18n.changeLanguage(newLocale); // Cambia el idioma en i18next
      await router.push(router.pathname, router.asPath, { locale: newLocale }); // Actualiza la URL con el nuevo idioma
    } catch (error) {
      console.error('Error al cambiar el idioma:', error);
    }
  };

  // Efecto para deshabilitar el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Deshabilita el scroll
    } else {
      document.body.style.overflow = ''; // Restaura el scroll
    }
    return () => {
      document.body.style.overflow = ''; // Limpia el estilo al desmontar
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-300 shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo clickeable */}
        <a href="/" className="relative flex items-center">
          <h1 className="text-xl font-bold text-blue-600 relative z-10">
            Visa <span className="relative">Assist</span>
          </h1>
          <div
            className="absolute inset-0 opacity-85"
            style={{
              backgroundImage: "url('/flagamerican.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "50px",
            }}
          ></div>
        </a>

        {/* Menú de escritorio */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/agendar" className="text-gray-700 hover:text-blue-500">{t('schedule')}</a>
          <a href="/pagar" className="text-gray-700 hover:text-blue-500">{t('pay')}</a>
          <a href="/contacto" className="text-gray-700 hover:text-blue-500">{t('contact')}</a>
          <a href="/faqs" className="text-gray-700 hover:text-blue-500">{t('faqs')}</a>
          <a href="/Visa" className="text-gray-700 hover:text-blue-500">{t('visaB1B2')}</a>
          <a href="/Visa Familias" className="text-gray-700 hover:text-blue-500">{t('visaFamilies')}</a>
          <button
            onClick={changeLanguage}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex flex-col items-center justify-center px-6">
          <a href="/agendar" className="block w-full px-4 py-2 text-white hover:bg-gray-700 rounded text-center">{t('schedule')}</a>
          <a href="/pagar" className="block w-full px-4 py-2 text-white hover:bg-gray-700 rounded text-center">{t('pay')}</a>
          <a href="/contacto" className="block w-full px-4 py-2 text-white hover:bg-gray-700 rounded text-center">{t('contact')}</a>
          <a href="/faqs" className="block w-full px-4 py-2 text-white hover:bg-gray-700 rounded text-center">{t('faqs')}</a>
          <a href="/Visa" className="block w-full px-4 py-2 text-white hover:bg-gray-700 rounded text-center">{t('visaB1B2')}</a>
          <a href="/Visa Familias" className="block w-full px-4 py-2 text-white hover:bg-gray-700 rounded text-center">{t('visaFamilies')}</a>
          <button
            onClick={changeLanguage}
            className="block w-full px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 text-center"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          {/* Tachita para cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-400 focus:outline-none z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
}
// Fin del componente Navbar