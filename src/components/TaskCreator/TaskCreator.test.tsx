import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCreator from "./TaskCreator";

//dos casos de uso: uno que se pinta y otro que cuando yo haga click que manda lo que escribe el usuario
describe("Given a taskcreator component", () => {
  //primeiro
  test("When render, than it should show the form", () => {
    //caso de uso: que se pinta
    render(<TaskCreator OnUpdate={() => {}} />); //funcion vacia pq onupdate é uma funçao
    const inputElement = screen.getByRole("textbox"); //sempre tentar buscar por role: buscar por dev tools por accesibilidad (muñeco)
    const buttonElement = screen.getByRole("button");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("When user adds a task, then it should pass the task to the parent element", () => {
    //expect.assertions(1); espero que mi test tenga una aserción, un expect (estou dizendo que se cumpra um expect para que se cumpla una funcion)
    const taskCreatorSpy = jest.fn(); //pasa una espia no componente pra saber o que passa aí dentro dessa funçao, por ser en el parent
    const taskName = "Hello baby!"; //texto que simula el texto de la tarefa
    render(<TaskCreator OnUpdate={taskCreatorSpy} />); //renderizo con mi espia
    const buttonElement = screen.getByRole("button"); // cojo el buton
    const inputElement = screen.getByRole("textbox"); //cojo el input
    userEvent.type(inputElement, taskName); //simulo que sou usuario escrevendo no input
    userEvent.click(buttonElement); //simulo que hago click
    expect(taskCreatorSpy).toHaveBeenCalledWith(taskName); //espero que se cumpla la funcion
  });
});
