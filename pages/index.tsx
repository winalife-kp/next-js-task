import Head from 'next/head';
import { useContext } from 'react';
import ThemeModeContext from '../context/ThemeModeContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { handleToggleThemeMode, themeMode } = useContext(ThemeModeContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>
          <button onClick={handleToggleThemeMode} color="inherit">
            {`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
          </button>
        </div>
      </main>
    </div>
  );
}
