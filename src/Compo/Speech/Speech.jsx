import 'regenerator-runtime/runtime';
import React from 'react';
import './Speech.css';
import { useSpeechRecognition } from 'react-speech-recognition';

const Speech = ({ onClose }) => {
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    return (
        <div className="speech-container" style={{display:"none"}}>
           
            <div className="Speechmain-content">
              
                
            </div>
        </div>
    );
};

export default Speech;