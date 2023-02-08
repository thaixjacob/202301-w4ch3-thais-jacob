import { FC, FormEventHandler } from "react";

interface InputProps {
  OnUpdate: (names: string) => void;
}

const TaskCreator: FC<InputProps> = ({ OnUpdate }) => {
  const handlerClick: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    OnUpdate(e.currentTarget.word.value);
  };
  return (
    <form onSubmit={handlerClick}>
      <input data-testid="task-input" type="text" name="word" />
      <button type="submit">Send</button>
    </form>
  );
};

export default TaskCreator;
