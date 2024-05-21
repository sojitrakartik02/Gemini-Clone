import 'regenerator-runtime/runtime';
import React, { useContext, useState, useEffect } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Speech from '../Speech/Speech';

import { ThemeContext } from '../../Context/ThemeContext';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [showmic, setShowMic] = useState(false);
    const { listening, transcript, resetTranscript } = useSpeechRecognition();
    const [imagePrev, setImagePrev] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null)
    const { darkTheme } = useContext(ThemeContext)

    useEffect(() => {
        setInput(transcript);
    }, [transcript, setInput]);

    const handleMicClick = () => {
        if (listening) {
            SpeechRecognition.stopListening();
            setShowMic(false);
        } else {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
            setShowMic(true);
        }
    };



    const handleSend = () => {
        onSent(input);
        setShowMic(false);
    };

    const handleGallery = () => {
        document.getElementById('fileInput').click();
    }
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePrev(URL.createObjectURL(file))

        }
    }


    const clearImage = () => {
        setSelectedImage(null);
        setImagePrev(null);
        document.getElementById('fileInput').value = null
    }


    return (

        <div className={`main ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user icon" />
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Kartik</span></p>
                            <p>How can I help you</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Explain the key rules of rugby, starting with the basics</p>
                                <img src={assets.compass_icon} alt="compass icon" />
                            </div>
                            <div className="card">
                                <p>Help me get organized with a list of 10 tips</p>
                                <img src={assets.bulb_icon} alt="bulb icon" />
                            </div>
                            <div className="card">
                                <p>Give me ideas for what to do with what's in this image?</p>
                                <img src={assets.message_icon} alt="message icon" />
                            </div>
                            <div className="card">
                                <p>What’s the reaction to and impact of autonomous vehicles</p>
                                <img src={assets.code_icon} alt="code icon" />
                            </div>
                        </div>
                    </> :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} />
                            {loading ? <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <div className="search-box-input-container">
                            <input
                                type='text'
                                placeholder='Enter Prompt'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <div>
                                <div className="tooltip-container-gallery">
                                    <img src={assets.gallery_icon} alt="gallery icon" className='gallery-icon' style={{ cursor: "pointer" }}
                                        onClick={handleGallery}
                                    />
                                    <span className="tooltip-text-gallery">Upload Image</span>
                                </div>
                                <input
                                    id='fileInput'
                                    type='file'
                                    style={{ display: "none" }}
                                    onChange={handleFile}
                                />
                                <div className="tooltip-container">
                                    <img src={assets.mic_icon} alt="mic icon" className={`mic-icon ${listening ? 'active' : ''}`} style={{ cursor: "pointer" }} onClick={handleMicClick} />
                                    <span className="tooltip-text">use Microsoft</span>
                                </div>
                                {showmic && <Speech onClose={() => setShowMic(false)} />}
                                {input ?
                                    <img className='gallery-icon'
                                        style={{ cursor: "pointer" }}
                                        onClick={handleSend}

                                        src={assets.send_icon}
                                        alt="send icon"
                                    /> : null}
                            </div>
                        </div>
                        {imagePrev && (
                            <div className="image-preview-container">
                                <img className="image-preview" src={imagePrev} alt="Selected" />
                                <button className="close-button" onClick={clearImage}>×</button>
                            </div>
                        )}
                    </div>

                    <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
                </div>
            </div>
        </div>

    );
};

export default Main;
