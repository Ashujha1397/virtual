// VirtualAssistant.jsx

import React, { useEffect } from 'react';
import sit from "../components/cut/ii.gif"
const VirtualAssistant = () => {
  const speak = (sentence) => {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
  };

  const wishMe = () => {
    const day = new Date();
    const hr = day.getHours();

    if (hr >= 0 && hr < 12) {
      speak('Good Morning Ashutosh');
    } else if (hr === 12) {
      speak('Good noon Ashutosh');
    } else if (hr > 12 && hr <= 17) {
      speak('Good Afternoon Ashutosh');
    } else {
      speak('Good Evening Ashutosh');
    }
  };

  const speakThis = (message) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand what you said please try again";

    // Your existing logic for handling different messages

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
  };

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    // content.textContent = transcript;
    speakThis(transcript.toLowerCase());
  };

  const handleClick = () => {
    recognition.start();
  };

  useEffect(() => {
    speak('Activating Techverse');
    speak('Going online');
    wishMe();
  }, []);

  return (
    <section className="main">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto Mono', monospace;
          }

          .main {
            min-height: 100vh;
            position: relative;
            width: 100%;
            background: #020221;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .main .image-container {
            padding: 10px;
          }

          .main .image-container .image {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .main .image-container .image img {
            width: 500px;
          
            align-items: center;
          }

          .main .image-container h1 {
            color: #00bcd4;
            text-align: center;
            margin-bottom: 10px;
            font-size: 40px;
          }

          .main .image-container p {
            color: yellow;
            text-align: center;
            margin-bottom: 40px;
          }

          .main .input {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40vw;
            height: 50px;
            border-radius: 20px;
            background: rgb(202 253 255 / 50%);
          }

          .main .input .talk {
            background: transparent;
            outline: none;
            border: none;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            cursor: pointer;
          }

          .main .input .talk i {
            font-size: 20px;
            color: #aed0d0;
            cursor: pointer;
          }

          .main .input .content {
            color: #aed0d0;
            font-size: 15px;
            margin-right: 20px;
          }
        `}
      </style>
      <div className="image-container">
        <div className="image">
          <img src={sit} alt="" />
        </div>
        <h1>T E C H V E R S E</h1>
        <p>I am a Virtual Assistant, how can I help you</p>
      </div>
      <div className="input">
        <button className="talk" onClick={handleClick}>
          <i className="fas fa-microphone-alt"></i>
        </button>
        <h1 className="content">Click here to Start</h1>
      </div>
    </section>
  );
};

export default VirtualAssistant;
