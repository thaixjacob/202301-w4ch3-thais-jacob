import { FC } from "react";

interface TaskProps {
  tasks: string[];
}

const Task: FC<TaskProps> = ({ tasks }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <p role="paragraph">Sin tareas todavía</p>
      ) : (
        <ul className="taskList">
          {tasks.map((task, i) => (
            <li key={i} className="userNamesElements">
              {task}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Task;
