import React, { useState, useEffect } from "react";
import "./App.css";

const soundBank = [
  {
    key: "Q",
    id: "Heater 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater 4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [display, setDisplay] = useState("");

  // Play sound by key press
  useEffect(() => {
    const handleKeyPress = (e) => {
      const sound = soundBank.find((s) => s.key === e.key.toUpperCase());
      if (sound) {
        playSound(sound.id);
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Play sound and update display
  const playSound = (id) => {
    const audio = document.getElementById(id).lastChild;
    audio.play();
    setDisplay(id);
  };

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-container">
        {soundBank.map((sound) => (
          <div
            key={sound.key}
            id={sound.id}
            className="drum-pad"
            onClick={() => playSound(sound.id)}
          >
            {sound.key}
            <audio className="clip" id={sound.key} src={sound.src}></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
