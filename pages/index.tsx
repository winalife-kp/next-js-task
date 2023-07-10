import Head from 'next/head';
import { useContext } from 'react';
import ThemeModeContext from '../context/ThemeModeContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { handleToggleThemeMode, themeMode } = useContext(ThemeModeContext);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: themeMode === 'dark' ? 'black' : 'white' }}
    >
      <main>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <div>
          <button onClick={handleToggleThemeMode} className={styles.title}>
            {`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
          </button>
        </div>
      </main>
    </div>
  );
}
