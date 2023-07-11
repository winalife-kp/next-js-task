import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ThemeModeContext, { ThemeMode } from './ThemeModeContext';

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>(
    'themeMode',
    'dark'
  );

  console.log('themeMode in ThemeContextProvider(), ', themeMode);

  const handleToggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeModeContext.Provider value={{ handleToggleThemeMode, themeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeContextProvider;
