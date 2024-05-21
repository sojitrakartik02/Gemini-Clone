import { createContext, useContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();
import SpeechRecognition from 'react-speech-recognition';



const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState(""); // Corrected variable name
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

 
  const delayPara=(index,nextWord)=>{
    setTimeout(function(){
            setResultData((prev)=>prev+nextWord)
    },75*index)
  }

  const newChat=()=>{
    setLoading(false)   
    setShowResult(false)
    setResultData("");
  }

  const onSent = async (prompt) => {
    setResultData(" ");
    setLoading(true);
    setShowResult(true);
  
    let usedPrompt = typeof prompt === "string" ? prompt.trim() : "";
  
    if (!prevPrompts.includes(usedPrompt)) {
      setPrevPrompts((prev) => [...prev, usedPrompt]);
    }
    setRecentPrompt(usedPrompt);
  
    const response = await run(usedPrompt);
  
    if (response === undefined || typeof response !== "string") {
      console.error("Invalid or undefined response:", response);
      setLoading(false);
      return;
    }
  
    console.log("Response:", response);
  
    let responseArry = response.split("**");
  
    let newResponse = "";
    for (let i = 0; i < responseArry.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArry[i];
      } else {
        newResponse += "<b>" + responseArry[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
    SpeechRecognition.stopListening();
  };
  
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt, 
    loading,
    resultData,
    input,
    setInput,
    showResult,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
