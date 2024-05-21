import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context';
import Help from '../Help/Help';
import Setting from '../Setting/Setting';
import { ThemeContext } from '../../Context/ThemeContext';
const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)
    const [showHelp, setShowHelp] = useState(false)
    const [showSetting, setShowSetting] = useState(false)
    const { darkTheme } = useContext(ThemeContext)
    const loadPrompt = async (prompt) => {

        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (

        <div className={`sidebar ${darkTheme ? 'dark-theme' : 'light-theme'}`}>

            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} />
                <div onClick={() => newChat} className="new-chat">
                    <img src={assets.plus_icon} />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className='title'>Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry" >
                                    <img src={assets.message_icon} />
                                    <p>{item.slice(0, 18)} ...</p>
                                </div>
                            )
                        })}

                    </div>
                    :
                    null

                }

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry" onClick={() => setShowHelp(!showHelp)}>
                    <div className="tooltip-help">
                        <img src={assets.question_icon} />
                        {extended ? "" : <span className='help'> Help</span>}
                    </div>

                    {extended ? <p>Help</p> : null}
                    {showHelp && <Help onClose={() => setShowHelp(false)} />}
                </div>

                <div className="bottom-item recent-entry">
                    <div className="tooltip-activity">
                        <img src={assets.history_icon} />
                        {extended ? "" : <span className='activity'> Activity</span>}
                    </div>
                    {extended ? <p>Activity</p> : null}

                </div>
                <div className="bottom-item recent-entry" onClick={() => setShowSetting(!showSetting)}>
                    <div className="tooltip-setting">
                        <img src={assets.setting_icon} />
                        {extended ? "" : <span className='setting'> Setting</span>}
                    </div>
                    {extended ? <p>Setting</p> : null}
                    {showSetting && <Setting onClose={() => setShowSetting(false)} />}
                </div>
            </div>
        </div>

    )
}

export default Sidebar
