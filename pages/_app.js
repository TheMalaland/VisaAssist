import '../styles/globals.css';
import '../i18n'; // Importa la configuración de i18n
import { appWithTranslation } from 'next-i18next';
import i18n from 'i18next';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}



export default appWithTranslation(MyApp);