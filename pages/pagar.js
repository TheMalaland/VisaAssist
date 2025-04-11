import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pagar() {
  return (
    <>
      <Head>
        <title>Pagar - Visa Assist</title>
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Pago seguro con MercadoPago</h2>
        <p className="mb-6">Haz clic en el botón para completar tu pago.</p>
        <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=123456789" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition">
          Ir a pagar
        </a>
      </main>
      <Footer />
    </>
  );
}