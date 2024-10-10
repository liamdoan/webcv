import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {ReactComponent as IconSun} from '../img/icon/sun.svg';
import {ReactComponent as IconMoon} from '../img/icon/moon.svg';
import './ThemeToggleBtn.css';

const ThemeToggleBtn = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="toggle-container">
            <input 
                type="checkbox"
                id="theme-toggle"
                checked={theme === 'dark'} 
                onChange={toggleTheme} 
                className="toggle-input"
            />
            <label htmlFor="theme-toggle" className="toggle-label">
                <div className="toggle-ball" />
                <IconSun className={`icon-sun ${theme}`}/>
                <IconMoon className={`icon-moon ${theme}`}/>
            </label>
        </div>
    );
};

export default ThemeToggleBtn;
