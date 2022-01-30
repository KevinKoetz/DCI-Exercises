import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Task should", () => {
    test("accept the text as a prop and render it.", () => {
        const task = { id: "abcdlwk5z54djwla", text: "Hello World1", done: false }
        render(<Task text={task.text} id={task.id} status={task.done} />)

        const element = screen.getByText("Hello World1")
        expect(element).toBeInTheDocument()
    })

    test("render the text with strike-through if the task is done.", () => {
        const task = { id: "abcdlwk5z54djwla", text: "Hello World1", done: true }
        render(<Task text={task.text} id={task.id} status={task.done} />)

        const element = screen.getByText(task.text)
        const style = getComputedStyle(element)
        expect(style.textDecoration).toBe("line-through");
    })

    test("mark task as done if done", () => {
        const task = { id: "abcdlwk5z54djwla", text: "Hello World1", done: true }
        render(<Task text={task.text} id={task.id} status={task.done} />)

        const element = screen.getByLabelText(/done/i)
        expect(element).toBeInTheDocument();
    })
})