import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ThemeModeContext, {
  ThemeModeContextInterface,
  ThemeMode,
} from './ThemeModeContext';

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>(
    'themeMode',
    'dark'
  );

  const toggleThemeMode = useMemo<ThemeModeContextInterface>(
    () => ({
      handleToggleThemeMode: () =>
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
      themeMode,
    }),
    [themeMode, setThemeMode]
  );

  return (
    <ThemeModeContext.Provider value={{ toggleThemeMode, themeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeContextProvider;
