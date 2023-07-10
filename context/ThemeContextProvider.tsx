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
