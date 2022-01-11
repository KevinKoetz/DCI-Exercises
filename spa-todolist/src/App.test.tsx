import React from 'react';
import { cleanup, getByLabelText, render, screen } from '@testing-library/react';
import App from './App';


beforeEach(()=> {
  cleanup();
  localStorage.clear();
})

describe("App should", () => {
  test("render task text input.", async () => {
  })

  test("render add task button.", () => {
    throw new Error("To be implemented.")
  })

  test("render a list of tasks.", () => {
    throw new Error("To be implemented.")
  })

  test("render a new task with the Text from the task text input, when the add task button is clicked.", () => {
    throw new Error("To be implemented.")
  })

  test("render a new task with the Text from the task text input, when the enter button is pressed while in the task text input.", () => {
    throw new Error("To be implemented.")
  })

  test("not render a new task if the text input is empty and the add task button is clicked.", () => {
    throw new Error("To be implemented.")
  })

  test("store tasks with status into localStorage.", () => {
    throw new Error("To be implemented.")
  })

  test("render tasks from localStorage if some are there.", () => {
    throw new Error("To be implemented.")
  })
})

describe("A Task should", () => {
  test("render the same text as what was input into the text input before creation.", () => {
    throw new Error("To be implemented.")
  })

  test("render a Delete task button.", () => {
    throw new Error("To be implemented.")
  })

  test("get deleted if the delete task button is clicked.", () => {
    throw new Error("To be implemented.")
  })

  test("render a Set to Done button.", () => {
    throw new Error("To be implemented.")
  })

  test("render the text striked through if the Set to Done button is clicked.", () => {
    throw new Error("To be implemented.")
  })
})