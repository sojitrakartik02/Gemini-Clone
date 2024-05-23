import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Plink.css';
import { assets } from '../../assets/assets';
import { ThemeContext } from '../../Context/ThemeContext';

const Plink = ({ setShowPublicLinkContent }) => {
  const { darkTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const mainHandler = () => {
    setShowPublicLinkContent(false); // Close public link content
    navigate('/'); // Navigate to the main component
    console.log("navigate");
  };

  return (
    <div className={`main ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      <div className='Main-p'>
        <div className='Public-link'>
          <p className='Public-link1'>Your public links</p>
        </div>
        <div className='Public-link-centre'>
          <p className='Public-link-centre1 '>
            You can share chats or an individual prompt and response. Once you do, you can manage public links that you've created and see their details here.
          </p>
        </div>
        <div className='Public-link-button'>
          <button onClick={mainHandler} className='Public-link-button1'>Chat with Gemini</button>
        </div>
      </div>
    </div>
  );
};

export default Plink;
