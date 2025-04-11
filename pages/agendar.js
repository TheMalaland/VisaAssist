import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Agendar() {
  return (
    <>
      <Head>
        <title>Agenda tu cita - Visa Assist</title>
      </Head>
      <Navbar />
      <main className="p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Agenda tu cita</h2>
        <p className="mb-6">Selecciona el horario que más te convenga.</p>
        <iframe
          src="https://calendly.com/fakeuser/visa"
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </main>
      <Footer />
    </>
  );
}