import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es'; // Cambia entre español e inglés
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <nav className="bg-gray-300 shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Título con imagen de fondo */}
        <div className="relative flex items-center">
          <h1 className="text-xl font-bold text-blue-600 relative z-10">
            Visa <span className="relative">Assist</span>
          </h1>
          <div
            className="absolute inset-0 opacity-85"
            style={{
              backgroundImage: "url('/flaga.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "50px",
            }}
          ></div>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-gray-700 hover:text-blue-500">Inicio</a>
          <a href="/agendar" className="text-gray-700 hover:text-blue-500">Agendar</a>
          <a href="/pagar" className="text-gray-700 hover:text-blue-500">Pagar</a>
          <a href="/contacto" className="text-gray-700 hover:text-blue-500">Contacto</a>
          <a href="/faqs" className="text-gray-700 hover:text-blue-500">FAQs</a>
          <a href="/Visa" className="text-gray-700 hover:text-blue-500">Visa B1/B2</a>
          <a href="/Visa Familias" className="text-gray-700 hover:text-blue-500">Visa Familias</a>
          <button
            onClick={changeLanguage}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            {locale === 'es' ? 'EN' : 'ES'}
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
        <div className="md:hidden mt-4 space-y-2">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Inicio</a>
          <a href="/agendar" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Agendar</a>
          <a href="/pagar" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Pagar</a>
          <a href="/contacto" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Contacto</a>
          <a href="/faqs" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">FAQs</a>
          <a href="/Visa" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Visa B1/B2</a>
          <a href="/Visa Familias" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Visa Familias</a>
          <button
            onClick={changeLanguage}
            className="block w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      )}
    </nav>
  );
}