import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import es from '../i18n/es.json';
import en from '../i18n/en.json';

const messages = {
  es,
  en
}

function getDirection(locales) {
  return "ltr";
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]} >
      <Component {...pageProps} dir={getDirection(locale)}/>
    </IntlProvider>
  )
}
