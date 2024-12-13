// src/components/TaskList.tsx
import React, { useState } from "react";
import styles from "./TaskList.module.scss";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className={styles["task-list-container"]}>
      <div className={styles["task-input-container"]}>
        <input
          type="text"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div className={styles["task-item"]} key={index}>
            <span className={styles["task-text"]}>{task}</span>
            <button
              className={styles["delete-button"]}
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
