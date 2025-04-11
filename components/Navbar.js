import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es'; // Cambia entre español e inglés
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <nav className="bg-gray-300 shadow p-4 flex justify-between relative">
      {/* Contenedor del título con la imagen de fondo */}
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
      <div className="space-x-6 flex items-center">
        <a href="/" className="text-gray-700 hover:text-blue-500">Inicio</a>
        <a href="/agendar" className="text-gray-700 hover:text-blue-500">Agendar</a>
        <a href="/pagar" className="text-gray-700 hover:text-blue-500">Pagar</a>
        <a href="/contacto" className="text-gray-700 hover:text-blue-500">Contacto</a>
        <a href="/faqs" className="text-gray-700 hover:text-blue-500">FAQs</a>
        <a href="/Visa" className="text-gray-700 hover:text-blue-500">Visa B1/B2</a>
        <a href="/Visa Familias" className="text-gray-700 hover:text-blue-500">Visa Familias</a>
        {/* Botón de cambio de idioma */}
        <button
          onClick={changeLanguage}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          {locale === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  );
}