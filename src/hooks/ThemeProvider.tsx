import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType>(undefined!);

export const useTheme = (): ThemeContextType => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
        }
    }, []);

    const toggleTheme = (): void => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
    };

    const value = {
        theme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};