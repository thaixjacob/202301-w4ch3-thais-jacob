import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Given a TaskList component", () => {
  test("Given a task list is getEffectiveConstraintOfTypeParameter, then it should render all the tasks", () => {
    const tasks = ["First task", "Second tasks"];
    render(<Task tasks={tasks} />);
    const allItemsElement = screen.getAllByRole("listitem");
    expect(allItemsElement.length).toBe(tasks.length); //deve renderizar dois elementos
    allItemsElement.forEach((liElement, i) => {
      expect(liElement).toBeInTheDocument(); //por cada li deveria estar no documento
      expect(liElement).toHaveTextContent(tasks[i]); // por cada li deveria ter uma tarefa como text content
    });
  });

  test("When no task provided, then it should show a message to the user", () => {
    render(<Task tasks={[]} />);
    const allItemsElement = screen.queryAllByRole("listitem"); //que nao me saia um erro quando me devola uma array vazia, que é o caso
    const messageElement = screen.getByRole("paragraph");
    expect(allItemsElement.length).toBe(0);
    expect(messageElement).toBeInTheDocument();
  });
});
