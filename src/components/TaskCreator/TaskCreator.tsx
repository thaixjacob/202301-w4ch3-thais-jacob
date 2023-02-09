import { FC, FormEvent, FormEventHandler, useState } from "react";

interface InputProps {
  //para enviar essa info a mi padre a traves de una funcion
  OnUpdate: (names: string) => void;
}

const TaskCreator: FC<InputProps> = ({ OnUpdate }) => {
  const [taskValue, updateValue] = useState("");
  const handlerClick = (e: FormEvent<HTMLFormElement>) => {
    //para escuchar mi submit
    e.preventDefault();
    OnUpdate(taskValue);
  };
  return (
    <form onSubmit={handlerClick}>
      <input name="word" onChange={(e) => updateValue(e.currentTarget.value)} />
      <button type="submit">Send</button>
    </form>
  );
};

export default TaskCreator;
