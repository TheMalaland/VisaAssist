import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common'); // Hook para traducciones

  return (
    <>
      <Head>
        <title>{t('homeTitle')}</title>
        <meta name="description" content={t('homeDescription')} />
      </Head>
      <Navbar />
      <main
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-300 px-4 sm:px-6"
        style={{
          backgroundImage: "url('/visaamericana.jpg'), linear-gradient(to right, rgb(84, 94, 110), rgb(107, 157, 218))",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold text-white text-center">{t('welcome')}</h1>
        <p className="mt-4 text-lg text-gray-100 text-center">{t('homeSubtitle')}</p>
        <div className="mt-6 flex space-x-4">
          <a
            href="/nueva-solicitud"
            className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            {t('newRequest')}
          </a>
          <a
            href="/renovacion"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {t('renewal')}
          </a>
        </div>
      </main>

      {/* Sección "Nuestros Servicios" */}
      <section className="flex flex-col items-center justify-center py-16 bg-blue-100 px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">{t('ourServices')}</h2>
        <p className="mt-6 text-justify text-gray-700 max-w-4xl text-xl">{t('servicesDescription')}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
          {/* Servicio 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-200">
            <h3 className="text-xl font-bold text-blue-600 text-center">{t('service1Title')}</h3>
            <p className="mt-3 text-gray-600 text-justify">{t('service1Description')}</p>
          </div>

          {/* Servicio 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-200">
            <h3 className="text-xl font-bold text-blue-600 text-center">{t('service2Title')}</h3>
            <p className="mt-3 text-gray-600 text-justify">{t('service2Description')}</p>
          </div>

          {/* Servicio 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-200">
            <h3 className="text-xl font-bold text-blue-600 text-center">{t('service3Title')}</h3>
            <p className="mt-3 text-gray-600 text-justify">{t('service3Description')}</p>
          </div>
        </div>
      </section>

      {/* Sección "Proceso Sencillo" */}
      <section className="py-16 bg-blue-50 px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">{t('simpleProcess')}</h2>
          <div className="w-full max-w-6xl">
            <div className="relative">
              {/* Línea horizontal */}
              <div className="absolute top-[15%] w-full h-1 bg-gray-300 hidden md:block"></div>

              {/* Contenedor de pasos */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                {/* Paso 1 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    1
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>{t('step1Title')}</strong>
                    <br />
                    {t('step1Description')}
                  </p>
                </div>

                {/* Paso 2 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    2
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>{t('step2Title')}</strong>
                    <br />
                    {t('step2Description')}
                  </p>
                </div>

                {/* Paso 3 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    3
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>{t('step3Title')}</strong>
                    <br />
                    {t('step3Description')}
                  </p>
                </div>

                {/* Paso 4 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    4
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>{t('step4Title')}</strong>
                    <br />
                    {t('step4Description')}
                  </p>
                </div>

                {/* Paso 5 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    5
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>{t('step5Title')}</strong>
                    <br />
                    {t('step5Description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Asesoramiento por Expertos" */}
      <section className="py-16 bg-gray-100 px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">{t('expertAdvice')}</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl">{t('avoidFraud')}</p>
          <p className="mt-4 text-center text-gray-600 max-w-2xl">{t('expertSupport')}</p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}