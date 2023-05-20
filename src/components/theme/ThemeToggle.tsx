import { useTheme } from "@/hooks/ThemeProvider";
import SunSVG from "../animation/SunSVG";
import MoonSVG from "../animation/MoonSVG";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? <SunSVG/>: <MoonSVG/>}
        </button>
    );
};

export default ThemeToggle;