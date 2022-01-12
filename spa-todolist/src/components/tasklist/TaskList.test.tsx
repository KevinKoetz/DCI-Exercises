import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import TaskList from "./TaskList";
import userEvent from "@testing-library/user-event";

describe("Tasklist should", () => {
  test("render the provided tasks", () => {
    const tasks = [
      { text: "Task1", done: false, id: 1 },
      { text: "Task2", done: false, id: 2 },
      { text: "Task3", done: false, id: 3 },
      { text: "Task4", done: false, id: 4 },
    ];
    render(
      <TaskList
        tasks={tasks}
        onTaskDelete={() => {}}
        onTaskDone={() => {}}
        onTaskUndone={() => {}}
      />
    );

    tasks.forEach((task) => {
      const renderedTask = screen.getByText(task.text);
      expect(renderedTask).toBeInTheDocument();
    });
  });

  test("call onTaskDelete with the correct id if a task is deleted", async () => {
    const tasks = [
      { text: "Task1", done: false, id: 1 },
      { text: "Task2", done: false, id: 2 },
      { text: "Task3", done: false, id: 3 },
      { text: "Task4", done: false, id: 4 },
    ];
    const mockHandleTaskDelete = jest.fn((id) => id);
    render(
      <TaskList
        tasks={tasks}
        onTaskDelete={mockHandleTaskDelete}
        onTaskDone={() => {}}
        onTaskUndone={() => {}}
      />
    );

    const renderedTasks = screen.getAllByRole("listitem", { name: /task/i });

    for (const task of tasks) {
      const renderedTaskText = screen.getByText(task.text);
      const renderedTask = renderedTasks.find((taskElement) =>
        taskElement.contains(renderedTaskText)
      );
      if (!renderedTask)
        throw new Error("Can not find TaskText in rendered Tasks.");
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const deleteButtonForTask = getByRole(renderedTask, "button", {
        name: /delete task/i,
      });
      await userEvent.click(deleteButtonForTask);
      expect(mockHandleTaskDelete.mock.calls.length).toBe(1);
      expect(mockHandleTaskDelete.mock.calls[0][0]).toBe(task.id);
      mockHandleTaskDelete.mockClear();
    }
  });

  test("call onTaskDone with the correct id if a task is done", async () => {
    const tasks = [
      { text: "Task1", done: false, id: 1 },
      { text: "Task2", done: false, id: 2 },
      { text: "Task3", done: false, id: 3 },
      { text: "Task4", done: false, id: 4 },
    ];
    const mockHandleTaskDone = jest.fn((id) => id);
    render(
      <TaskList
        tasks={tasks}
        onTaskDelete={() => {}}
        onTaskDone={mockHandleTaskDone}
        onTaskUndone={() => {}}
      />
    );

    const renderedTasks = screen.getAllByRole("listitem", { name: /task/i });

    for (const task of tasks) {
      const renderedTaskText = screen.getByText(task.text);
      const renderedTask = renderedTasks.find((taskElement) =>
        taskElement.contains(renderedTaskText)
      );
      if (!renderedTask)
        throw new Error("Can not find TaskText in rendered Tasks.");
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const deleteButtonForTask = getByRole(renderedTask, "button", {
        name: /set to done/i,
      });
      await userEvent.click(deleteButtonForTask);
      expect(mockHandleTaskDone.mock.calls.length).toBe(1);
      expect(mockHandleTaskDone.mock.calls[0][0]).toBe(task.id);
      mockHandleTaskDone.mockClear();
    }
  });

  test("call onTaskUndone with the correct id if a task is undone", async () => {
    const tasks = [
      { text: "Task1", done: true, id: 1 },
      { text: "Task2", done: true, id: 2 },
      { text: "Task3", done: true, id: 3 },
      { text: "Task4", done: true, id: 4 },
    ];
    const mockHandleTaskUndone = jest.fn((id) => id);
    render(
      <TaskList
        tasks={tasks}
        onTaskDelete={() => {}}
        onTaskDone={() => {}}
        onTaskUndone={mockHandleTaskUndone}
      />
    );

    const renderedTasks = screen.getAllByRole("listitem", { name: /task/i });

    for (const task of tasks) {
      const renderedTaskText = screen.getByText(task.text);
      const renderedTask = renderedTasks.find((taskElement) =>
        taskElement.contains(renderedTaskText)
      );
      if (!renderedTask)
        throw new Error("Can not find TaskText in rendered Tasks.");
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const deleteButtonForTask = getByRole(renderedTask, "button", {
        name: /set undone/i,
      });
      await userEvent.click(deleteButtonForTask);
      expect(mockHandleTaskUndone.mock.calls.length).toBe(1);
      expect(mockHandleTaskUndone.mock.calls[0][0]).toBe(task.id);
      mockHandleTaskUndone.mockClear();
    }
  });
});
