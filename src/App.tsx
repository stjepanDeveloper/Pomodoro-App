import React from "react";
import TaskList from "./components/TaskList";
import SvgGallery from "./components/SvgGallery";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles["app-container"]}>
      <h1 className={styles.title}>Pomodoro App</h1>
      <SvgGallery />
      <TaskList />
    </div>
  );
};

export default App;
