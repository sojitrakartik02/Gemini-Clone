import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Setting.css';
import { ThemeContext } from '../../Context/ThemeContext'; // Importing named export

const Setting = ({ onClose }) => {
    const { toggleDarkTheme, darkTheme } = useContext(ThemeContext); // Get darkTheme state

    const handleToggle = () => {
        // Log before toggling
       
        console.log('Before toggling:', darkTheme);
        // Call the toggle function
        toggleDarkTheme();
        // Log after toggling
        console.log('After toggling:', darkTheme);
    };

    return (
        <div className={`setting-menu ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
                <div className="setting-header">
                    <img src={assets.setting_icon} alt="Setting" />
                    <p>Setting</p>
                    <button onClick={onClose}>Close</button>
                </div>
                <ul>
                    <li>Extensions</li>
                    <li>Your Public Link</li>
                    <li className='theme' onClick={handleToggle}>
                        <div>Dark Theme</div>
                        <div>
                            <label className="switch">
                                <input type="checkbox"  onChange={handleToggle} checked={darkTheme} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        
    );
}

export default Setting;