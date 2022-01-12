import React from "react";
import { cleanup, findByRole, findByText, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import isITaskArray from "./common/isITaskArray";
import { ITask } from "./common/types";

beforeEach(() => {
  cleanup();
  localStorage.clear();
});

describe("App should", () => {
  test("render task text input.", async () => {
    render(<App />);
    const input = screen.getByLabelText(/define your task/i);
    expect(input).toBeInTheDocument();
  });

  test("render add task button.", () => {
    render(<App />);
    const addTask = screen.getByRole("button", { name: /add a task/i });
    expect(addTask).toBeInTheDocument();
  });

  test("render a list of tasks.", () => {
    render(<App />);
    const taskList = screen.getByRole("list", { name: /tasklist/i });
    expect(taskList).toBeInTheDocument();
  });

  test("render a new task with the Text from the task text input, when the add task button is clicked.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.type(input, taskText);
    await user.click(addTask);

    const task = await screen.findByText(taskText);
    expect(task).toBeInTheDocument();
  });

  test("clear the text input when the task was added.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText<HTMLInputElement>(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.type(input, taskText);
    await user.click(addTask);

    expect(input.value).toBe("")
  })

  test("render a new task with the Text from the task text input, when the enter button is pressed while in the task text input.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText(/define your task/i);

    const user = userEvent.setup();
    await user.click(input);
    await user.keyboard(taskText);
    await user.keyboard("{Enter}");

    const task = await screen.findByText(taskText);
    expect(task).toBeInTheDocument();
  });

  test("not render a new task if the text input is empty and the add task button is clicked.", async () => {
    const { container } = render(<App />);
    const initial = container.innerHTML;

    const input = screen.getByLabelText(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.click(input);
    await user.keyboard("{Enter}");
    await user.click(addTask);

    const afterAdding = container.innerHTML;

    expect(afterAdding).toStrictEqual(initial);
  });

  test("store tasks with status into localStorage.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.type(input, taskText);
    await user.click(addTask);

    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (!tasksFromLocalStorage)
      throw new Error("no Tasks stored under the key: tasks");

    const parsedTasks = JSON.parse(tasksFromLocalStorage);
    
    if (!isITaskArray(parsedTasks))
      throw new Error("Invalid Data stored under tasks");

    const createdTask = parsedTasks.find((task) => task.text === taskText);
    if (!createdTask)
      throw new Error(
        "Unable to find task with correct TaskText inside localStorage"
      );
    expect(createdTask.text).toBe(taskText)
    expect(createdTask.done).toBe(false)
  });

  test("render tasks from localStorage if some are there.", () => {
    const taskText = "Sample Task Text";
    localStorage.setItem(
      "tasks",
      JSON.stringify([{ text: taskText, done: false, id: 1 }])
    );
    render(<App />);
    const task = screen.getByText(taskText);
    expect(task).toBeInTheDocument();
  });
});

describe("A Task should", () => {
  test("render the same text as what was input into the text input before creation.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.type(input, taskText);
    await user.click(addTask);

    const task = await screen.findByText(taskText);

    expect(task).toBeInTheDocument();
  });

  test("render a Delete task button.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.type(input, taskText);
    await user.click(addTask);

    const task = await screen.findByRole("listitem", { name: "task" });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const deleteButton = await findByRole(task, "button", {
      name: /delete task/i,
    });

    expect(deleteButton).toBeInTheDocument();
  });

  test("get deleted if the delete task button is clicked.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.type(input, taskText);
    await user.click(addTask);

    const task = await screen.findByRole("listitem", { name: "task" });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const deleteButton = await findByRole(task, "button", {
      name: /delete task/i,
    });

    await user.click(deleteButton);

    expect(task).not.toBeInTheDocument();
  });

  test("render a Set to Done button.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.type(input, taskText);
    await user.click(addTask);

    const task = await screen.findByRole("listitem", { name: "task" });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const doneButton = await findByRole(task, "button", {
      name: /set to done/i,
    });

    expect(doneButton).toBeInTheDocument();
  });

  test("render the text striked through if the Set to Done button is clicked.", async () => {
    render(<App />);
    const taskText = "Sample Task Text";
    const input = screen.getByLabelText(/define your task/i);
    const addTask = screen.getByRole("button", { name: /add a task/i });

    const user = userEvent.setup();
    await user.type(input, taskText);
    await user.click(addTask);

    const task = await screen.findByRole("listitem", { name: "task" });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const doneButton = await findByRole(task, "button", {
      name: /set to done/i,
    });

    await user.click(doneButton);

    const text = await screen.findByText(taskText);

    expect(text).toHaveStyle("text-decoration: line-through;");
  });

  test("render set undone button if Task is done", async () => {
    const tasks: ITask[] = [{text: "Sample Text", done: true, id: 1}]
    localStorage.setItem("tasks", JSON.stringify(tasks))
    render(<App />);

    const undone = screen.getByRole("button", {name: /undone/i})

    expect(undone).toBeInTheDocument()
  });

  test("render the text normal if set undone button is clicked", async () => {
    const tasks: ITask[] = [{text: "Sample Text", done: true, id: 1}]
    localStorage.setItem("tasks", JSON.stringify(tasks))
    render(<App />);

    const undone = screen.getByRole("button", {name: /undone/i})
    await userEvent.click(undone)
    const taskText = await screen.findByText(tasks[0].text)

    expect(taskText).not.toHaveStyle("text-decoration: line-through;");
  });

});
