import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggleBtn.css'; // Import the CSS for styling

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
            </label>
        </div>
    );
};

export default ThemeToggleBtn;
