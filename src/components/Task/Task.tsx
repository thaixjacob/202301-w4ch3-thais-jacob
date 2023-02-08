import { FC } from "react";

interface TaskProps {
  tasks: string[];
}

const Task: FC<TaskProps> = ({ tasks }) => {
  return (
    <ul className="taskList">
      {tasks.map((liElement, i) => (
        <li key={i} className="userNamesElements">
          {liElement}
        </li>
      ))}
    </ul>
  );
};

export default Task;
