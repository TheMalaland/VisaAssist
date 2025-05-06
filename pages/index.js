import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslation('common'); // Hook para traducciones

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Head>
        <title>{t('homeTitle')}</title>
        <meta name="description" content={t('homeDescription')} />
      </Head>
      <Navbar />
      <motion.main
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-300 px-4 sm:px-6"
        style={{
          backgroundImage: "url('/visaamericana.jpg'), linear-gradient(to right, rgb(84, 94, 110), rgb(107, 157, 218))",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
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
      </motion.main>

      {/* Sección "Nuestros Servicios" */}
      <motion.section
        className="flex flex-col items-center justify-center py-16 bg-blue-100 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center">{t('ourServices')}</h2>
        <p className="mt-6 text-justify text-gray-700 max-w-4xl text-xl">{t('servicesDescription')}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
          {/* Servicio 1 */}
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md border border-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-blue-600 text-center">{t('service1Title')}</h3>
            <p className="mt-3 text-gray-600 text-justify">{t('service1Description')}</p>
          </motion.div>

          {/* Servicio 2 */}
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md border border-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-blue-600 text-center">{t('service2Title')}</h3>
            <p className="mt-3 text-gray-600 text-justify">{t('service2Description')}</p>
          </motion.div>

          {/* Servicio 3 */}
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md border border-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-blue-600 text-center">{t('service3Title')}</h3>
            <p className="mt-3 text-gray-600 text-justify">{t('service3Description')}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Sección "Proceso Sencillo" */}
      <motion.section
        className="py-16 bg-blue-50 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">{t('simpleProcess')}</h2>
          <div className="w-full max-w-6xl">
            <div className="relative">
              {/* Línea horizontal */}
              <div className="absolute top-[15%] w-full h-1 bg-gray-300 hidden md:block"></div>

              {/* Contenedor de pasos */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                {[1, 2, 3, 4, 5].map((step) => (
                  <motion.div
                    key={step}
                    className="flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                      {step}
                    </div>
                    <p className="mt-4 text-center text-gray-700 text-sm">
                      <strong>{t(`step${step}Title`)}</strong>
                      <br />
                      {t(`step${step}Description`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sección "Asesoramiento por Expertos" */}
      <motion.section
        className="py-16 bg-gray-100 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">{t('expertAdvice')}</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl">{t('avoidFraud')}</p>
          <p className="mt-4 text-center text-gray-600 max-w-2xl">{t('expertSupport')}</p>
        </div>
      </motion.section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}