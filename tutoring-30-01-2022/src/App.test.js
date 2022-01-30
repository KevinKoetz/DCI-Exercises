import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";

afterEach(() => {
  localStorage.clear();
})

describe("App should...", () => {
  test("render an add Task button.", () => {
    render(<App />);
    const addTask = screen.getByRole("button", { name: /add task/i });
    expect(addTask).toBeInTheDocument();
  });

   test("render a text input for the Task Text", () => {
    render(<App />);
    const textInput = screen.getByRole("textbox", { name: /Your Task/i });
    expect(textInput).toBeInTheDocument();
  });

  test("add a new task with the given text if the add task button is clicked", () => {
    render(<App />);
    const addTask = screen.getByRole("button", { name: /add task/i });
    const textInput = screen.getByRole("textbox", { name: /Your Task/i });

    userEvent.type(textInput, "Task1");
    userEvent.click(addTask);

    const task = screen.getByText("Task1")

    expect(task).toBeInTheDocument();
    
  });

  test("render a list of tasks", () => {
    render(<App />);
    const list = screen.getByRole("list", { name: /tasklist/i });
    expect(list).toBeInTheDocument();
  });

  test("render tasks from localstorage", () => {
    localStorage.setItem(
      "tasks",
      `[{"id": "abcdlwk5z54djwla", "text": "Hello World1", "done": false}, 
      {"id": "abcdlwkdj34t3wla", "text": "Hello World2", "done": false}, 
      {"id": "abcdlwk23r76djwla", "text": "Hello World3", "done": false}]`
    );
    render(<App />);

    const tasks = screen.getAllByRole("listitem", { name: /task/i });
    expect(tasks.length).toBe(3);

    const task = screen.getByText("Hello World1");
    expect(task).toBeInTheDocument();
  }); 

});
