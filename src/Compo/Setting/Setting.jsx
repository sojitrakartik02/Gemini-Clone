import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Setting.css'; // or Sidebar.css if it's Sidebar
import { ThemeContext } from '../../Context/ThemeContext';


const Setting = ({ onClose,setShowPublicLinkContent }) => {
  const { toggleDarkTheme, darkTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleDarkTheme();
  };

  const handlePublicLinkClick = () => {
    setShowPublicLinkContent(true);
    console.log("handlePublicLinkClick")
    
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
        <li onClick={handlePublicLinkClick}>Your Public Link</li>
        <li className='theme' onClick={handleToggle}>
          <div>Dark Theme</div>
          <div>
            <label className="switch">
              <input type="checkbox" onChange={handleToggle} checked={darkTheme} />
              <span className="slider round"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Setting;
