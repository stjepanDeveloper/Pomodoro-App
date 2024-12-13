// src/components/Timer.tsx
import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

const Timer: React.FC = () => {
  const [time, setTime] = useState(25 * 60); // Default 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"Pomodoro" | "Short Break" | "Long Break">(
    "Pomodoro"
  );

  // Define durations for each mode
  const durations = {
    Pomodoro: 25 * 60,
    "Short Break": 5 * 60,
    "Long Break": 15 * 60,
  };

  // Sound effect
  const alarmSound = new Audio(require("../assets/sounds/Small Bell.mp3"));

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = (newMode: "Pomodoro" | "Short Break" | "Long Break") => {
    setIsActive(false); // Pause the timer
    setMode(newMode); // Update the mode
    setTime(durations[newMode]); // Set the time to the corresponding duration
  };

  const switchMode = (newMode: "Pomodoro" | "Short Break" | "Long Break") => {
    setMode(newMode);
    resetTimer(newMode);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            setIsActive(false); // Stop timer
            alarmSound.play(); // Play sound when timer finishes
            return 0;
          }
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className={styles["timer-container"]}>
      <h1>{formatTime(time)}</h1>
      <div className={styles.controls}>
        <div className={styles.row}>
          <button className={styles["control-button"]} onClick={toggleTimer}>
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            className={styles["control-button"]}
            onClick={() => resetTimer(mode)}
          >
            Reset
          </button>
        </div>
        <div className={styles.row}>
          <button
            className={styles["control-button"]}
            onClick={() => resetTimer("Pomodoro")}
          >
            Pomodoro
          </button>
          <button
            className={styles["control-button"]}
            onClick={() => resetTimer("Short Break")}
          >
            Short Break
          </button>
          <button
            className={styles["control-button"]}
            onClick={() => resetTimer("Long Break")}
          >
            Long Break
          </button>
        </div>
      </div>
      <h2>{mode}</h2>
    </div>
  );
};

export default Timer;
