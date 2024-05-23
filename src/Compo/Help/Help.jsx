import React, { useContext } from 'react'
import './Help.css'
import { assets } from '../../assets/assets'

import { ThemeContext } from '../../Context/ThemeContext'

const Help = ({ onClose }) => {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <div className={`help-menu ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="help-header">
        <img src={assets.question_icon} alt="Help" />
        <p>Help</p>
        <button onClick={onClose}>Close</button>
      </div>
      <ul>
        <li>Privacy Hub</li>
        <li>Update</li>
        <li>FAQs</li>
        <li>About GEMINI</li>
      </ul>
    </div>
  )
}

export default Help