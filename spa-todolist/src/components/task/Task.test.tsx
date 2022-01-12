import React from "react";
import { render, screen } from "@testing-library/react";
import "./Task.scss";
import Task from "./Task";
import userEvent from "@testing-library/user-event";


describe("Task should", () => {
  test("render the Task Text", () => {
    const taskText = "AbCDeF G";
    render(
      <Task
        text={taskText}
        done={false}
        id={1}
        onDelete={() => {}}
        onDone={() => {}}
        onUndone={() => {}}
      />
    );
    const renderedText = screen.getByText(taskText)
    expect(renderedText).toBeInTheDocument()
  });

  test("render the Task Text with line-through if the task is done", () => {
    const taskText = "AbCDeF G";
    render(
      <Task
        text={taskText}
        done={true}
        id={1}
        onDelete={() => {}}
        onDone={() => {}}
        onUndone={() => {}}
      />
    );
    const renderedText = screen.getByText(taskText)
    expect(renderedText).toHaveStyle("text-decoration: line-through")
  });

  test("have the listitem role and task name", () => {
    const taskText = "AbCDeF G";
    render(
      <Task
        text={taskText}
        done={false}
        id={1}
        onDelete={() => {}}
        onDone={() => {}}
        onUndone={() => {}}
      />
    );
    const task = screen.getByRole("listitem", {name: /task/i})
    expect(task).toBeInTheDocument()
  });

  test("render a Delete task button", () => {
    const taskText = "AbCDeF G";
    render(
      <Task
        text={taskText}
        done={false}
        id={1}
        onDelete={() => {}}
        onDone={() => {}}
        onUndone={() => {}}
      />
    );
    const deleteButton = screen.getByRole("button", {name: /delete task/i})
    expect(deleteButton).toBeInTheDocument()
  });

  test("call the onDelete function with the task id when Delete task button is pressed", async () => {
    const mockHandleDelete = jest.fn((id: number) => id)
    const taskText = "AbCDeF G";
    const id = 1;
    render(
      <Task
        text={taskText}
        done={false}
        id={id}
        onDelete={mockHandleDelete}
        onDone={() => {}}
        onUndone={() => {}}
      />
    );
    const deleteButton = screen.getByRole("button", {name: /delete task/i})
    await userEvent.click(deleteButton)

    expect(mockHandleDelete.mock.calls.length).toBe(1)
    expect(mockHandleDelete.mock.calls[0][0]).toBe(id)
  });

  test("render a Set to Done button, if done is false", () => {
    const taskText = "AbCDeF G";
    render(
      <Task
        text={taskText}
        done={false}
        id={1}
        onDelete={() => {}}
        onDone={() => {}}
        onUndone={() => {}}
      />
    );
    const doneButton = screen.getByRole("button", {name: /set to done/i})
    expect(doneButton).toBeInTheDocument()
  });

  test("call the onDone function with the task id when Done button is pressed", async () => {
    const mockHandleDone = jest.fn((id: number) => id)
    const taskText = "AbCDeF G";
    const id = 1;
    render(
      <Task
        text={taskText}
        done={false}
        id={id}
        onDelete={() => {}}
        onDone={mockHandleDone}
        onUndone={() => {}}
      />
    );
    const doneButton = screen.getByRole("button", {name: /set to done/i})
    await userEvent.click(doneButton)

    expect(mockHandleDone.mock.calls.length).toBe(1)
    expect(mockHandleDone.mock.calls[0][0]).toBe(id)
  });


  test("render a Set undone button, if done is true", () => {
    const taskText = "AbCDeF G";
    render(
      <Task
        text={taskText}
        done={true}
        id={1}
        onDelete={() => {}}
        onDone={() => {}}
        onUndone={() => {}}
      />
    );
    const undoneButton = screen.getByRole("button", {name: /set undone/i})
    expect(undoneButton).toBeInTheDocument()
  });

  test("call the onUndone function with the task id when undone button is pressed", async () => {
    const mockHandleDone = jest.fn((id: number) => id)
    const taskText = "AbCDeF G";
    const id = 1;
    render(
      <Task
        text={taskText}
        done={true}
        id={id}
        onDelete={() => {}}
        onDone={()=> {}}
        onUndone={mockHandleDone}
      />
    );
    const undoneButton = screen.getByRole("button", {name: /set undone/i})
    await userEvent.click(undoneButton)

    expect(mockHandleDone.mock.calls.length).toBe(1)
    expect(mockHandleDone.mock.calls[0][0]).toBe(id)
  });

});
