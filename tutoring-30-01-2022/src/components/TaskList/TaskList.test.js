import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

beforeEach(() => {
    localStorage.clear();
})

describe("TaskList should", () => {
  test("render all Tasks that were supplied", () => {
    const tasks = [
      { id: "abcdlwk5z54djwla", text: "Hello World1", done: false },
      { id: "abcdlwkdj34t3wla", text: "Hello World2", done: false },
      { id: "abcdlwk23r76djwla", text: "Hello World3", done: false },
    ];
    render(<TaskList tasks={tasks}/>)

    tasks.forEach((task) => {
        const element = screen.getByText(task.text);
        expect(element).toBeInTheDocument();
    })
  });

  test("be a list and be labeld as tasklist", () => {
    const tasks = [
      { id: "abcdlwk5z54djwla", text: "Hello World1", done: false },
      { id: "abcdlwkdj34t3wla", text: "Hello World2", done: false },
      { id: "abcdlwk23r76djwla", text: "Hello World3", done: false },
    ];
    render(<TaskList tasks={tasks}/>)

    const tasklist = screen.getByRole("list", {name: "tasklist"});
    expect(tasklist).toBeInTheDocument();
  
  });
});
