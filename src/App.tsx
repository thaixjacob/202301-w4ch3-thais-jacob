import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";
import TaskCreator from "./components/TaskCreator/TaskCreator";

function App() {
  const [taskList, updateTaskList] = useState<string[]>([]);

  function getInput(text: string) {
    updateTaskList(taskList.concat(text));
    console.log(taskList);
  }
  return (
    <div className="App">
      <h1> TodoInput </h1>

      <TaskCreator OnUpdate={getInput} />
      <Task tasks={taskList} />
    </div>
  );
}

export default App;
