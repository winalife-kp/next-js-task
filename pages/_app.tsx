import ThemeContextProvider from '../context/ThemeContextProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
