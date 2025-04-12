import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Visa Assist - Home</title>
        <meta name="description" content="Gestiona tu proceso de visa americana fácilmente." />
      </Head>
      <Navbar />
      <main
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-300"
        style={{
          backgroundImage: "url('/visaamericana.jpg'), linear-gradient(to right, rgb(84, 94, 110), rgb(107, 157, 218))",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold text-white">Bienvenido a Visa Assist</h1>
        <p className="mt-4 text-lg text-gray-100">
          Te acompañamos en todo el proceso para obtener tu visa americana, asegurando que tu solicitud esté lista de manera óptima
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="/nueva-solicitud"
            className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Nueva Solicitud
          </a>
          <a
            href="/renovacion"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Renovación
          </a>
        </div>
      </main>

      {/* Sección "Nuestros Servicios" */}
      <section className="flex flex-col items-center justify-center py-16 bg-blue-100">
        <h2 className="text-3xl font-semibold text-gray-800">Nuestros Servicios</h2>
        <p className="mt-6 text-center text-gray-700 max-w-4xl text-xl text-justify">
          Durante más de 12 años hemos acompañado a cientos de personas en su camino hacia la aprobación de su visa americana. Nuestro equipo está comprometido con ofrecer un servicio personalizado, profesional y confiable, brindando asesoría integral en cada etapa del proceso. Nos encargamos de los aspectos técnicos y te preparamos emocionalmente para que enfrentes con seguridad y claridad cada paso del trámite.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl px-2">
          {/* Servicio 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-200">
            <h3 className="text-xl font-bold text-blue-600 text-center">Llenado Profesional de Formularios</h3>
            <p className="mt-3 text-gray-600 text-justify">
              El formulario DS-160 es una pieza clave en tu solicitud. Nos encargamos de completarlo cuidadosamente, asegurando que la información sea clara, precisa y esté alineada con los requisitos del consulado, evitando errores comunes que podrían retrasar o perjudicar tu trámite.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-200">
            <h3 className="text-xl font-bold text-blue-600 text-center">Gestión de Citas Consulares</h3>
            <p className="mt-3 text-gray-600 text-justify">
              Nos encargamos de todo el proceso de agendamiento, desde el perfil en la plataforma oficial hasta la programación de tus citas en el CAS (Centro de Atención al Solicitante) y el consulado. Nuestro sistema está diseñado para optimizar tiempos y encontrar la mejor disponibilidad posible.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-200">
            <h3 className="text-xl font-bold text-blue-600 text-center">Entrenamiento para la Entrevista</h3>
            <p className="mt-3 text-gray-600 text-justify">
              Te preparamos con simulacioneaas reales de entrevista, análisis de posibles preguntas, y recomendaciones específicas basadas en tu perfil. Nuestro objetivo es que llegues seguro, confiado y con una comunicación clara, lo que aumenta considerablemente tus probabilidades de éxito.
            </p>
          </div>
        </div>
      </section>

      {/* Sección "Proceso Sencillo" */}
      <section className="py-16 bg-blue-50">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Proceso Sencillo</h2>
          <div className="w-full max-w-6xl">
            <div className="relative">
              {/* Línea horizontal */}
              <div className="absolute top-[55%] w-full h-1 bg-gray-300 hidden md:block"></div>

              {/* Contenedor de pasos */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                {/* Paso 1 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    1
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>Contáctanos y agenda tu asesoría</strong>
                    <br />
                    Evaluamos tu situación y resolvemos tus dudas iniciales.
                  </p>
                </div>

                {/* Paso 2 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    2
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>Realiza el pago del servicio</strong>
                    <br />
                    Confirmamos tu inscripción y comenzamos a trabajar contigo.
                  </p>
                </div>

                {/* Paso 3 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    3
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>Llenamos tus formularios y agendamos tu cita</strong>
                    <br />
                    Te asistimos con todo el papeleo.
                  </p>
                </div>

                {/* Paso 4 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    4
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>Prepárate con nosotros para la entrevista</strong>
                    <br />
                    Te guiamos con consejos y simulacros.
                  </p>
                </div>

                {/* Paso 5 */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    5
                  </div>
                  <p className="mt-4 text-center text-gray-700 text-sm">
                    <strong>Seguimiento personalizado</strong>
                    <br />
                    Estaremos en contacto continuo hasta el final.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Asesoramiento por Expertos" */}
      <section className="py-16 bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-blue-600">Asesoramiento por Expertos</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl">
            Nuestro equipo está compuesto por expertos en visas.
          </p>
        </div>
      </section>

      {/* Sección "Clientes Satisfechos" */}
      <section className="py-16 bg-blue-50">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-blue-600">Clientes Satisfechos</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl">
            Miles de clientes han confiado en nosotros y han obtenido su visa.
          </p>
        </div>
      </section>

      {/* Sección "Más de 10 Años de Experiencia" */}
      <section className="py-16 bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-blue-600">Más de 10 Años de Experiencia</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl">
            Una década ayudando a personas a cumplir sus sueños.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}