import { createContext } from 'react';

export type ThemeMode = 'dark' | 'light';

export interface ThemeModeContextInterface {
  handleToggleThemeMode: () => void;
  themeMode: ThemeMode;
}

const ThemeModeContext = createContext<ThemeModeContextInterface>({
  handleToggleThemeMode: () => undefined,
  themeMode: 'dark',
});

export default ThemeModeContext;
