import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe("App", () => {
  test('renders band name', () => {
    render(<App />);
    const bandName = screen.getByText("Black Sabbath", {exact: false});
    expect(bandName).toBeInTheDocument();
  });

  test("renders Vocals link", () => {
    render(<App />);
    const vocals = screen.getByText("Vocals", {exact: false})
    expect(vocals).toBeInTheDocument();
  })

  test("renders image of Dave Walker when vocals link is clicked", async () => {
    const vocals = screen.getByText("vocals")
    const user = userEvent.setup()
    await user.click(vocals)
    const img = screen.getByAltText("Dave Walker", {exact: false})
    expect(img).toBeInTheDocument()
  })

  test("renders Guitar link", () => {
    render(<App />);
    const vocals = screen.getByText("Guitar", {exact: false})
    expect(vocals).toBeInTheDocument();
  })

  test("renders image of Tony Iommi when guitar link is clicked", async () => {
    const vocals = screen.getByText("guitar")
    const user = userEvent.setup()
    await user.click(vocals)
    const img = screen.getByAltText("Tony Iommi", {exact: false})
    expect(img).toBeInTheDocument()
  })

  test("renders Bass link", () => {
    render(<App />);
    const vocals = screen.getByText("Bass", {exact: false})
    expect(vocals).toBeInTheDocument();
  })

  test("renders image of Geezer Butler when bass link is clicked", async () => {
    const vocals = screen.getByText("bass")
    const user = userEvent.setup()
    await user.click(vocals)
    const img = screen.getByAltText("Geezer Butler", {exact: false})
    expect(img).toBeInTheDocument()
  })

  test("renders Drums link", () => {
    render(<App />);
    const vocals = screen.getByText("Drums", {exact: false})
    expect(vocals).toBeInTheDocument();
  })
  
  test("renders image of Bill Ward when drums link is clicked", async () => {
    const vocals = screen.getByText("drums")
    const user = userEvent.setup()
    await user.click(vocals)
    const img = screen.getByAltText("Bill Ward", {exact: false})
    expect(img).toBeInTheDocument()
  })

  test("renders Band Image", () => {
    render(<App />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("alt", "Black Sabbath")
  })

  
})


describe("Vocals link", () => {
  test('navigates to /vocals when clicked', async () => {
    render(<App />);
    const vocals = screen.getByText("vocals")
    const user = userEvent.setup()
    await user.click(vocals)
    expect(window.location.pathname).toBe<string>("/vocals")
  });

  test('has link role', async () => {
    render(<App />);
    const allLinks = screen.getAllByRole("link")
    const vocalsLink = allLinks.find(link => link.innerHTML.toLowerCase().includes("vocals"))
    expect(vocalsLink).toBeInTheDocument();
  });
})

describe("Guitar link", () => {
  test('navigates to /guitar when clicked', async () => {
    render(<App />);
    const guitar = screen.getByText("guitar")
    const user = userEvent.setup()
    await user.click(guitar)
    expect(window.location.pathname).toBe<string>("/guitar")
  });

  test('has link role', async () => {
    render(<App />);
    const allLinks = screen.getAllByRole("link")
    const vocalsLink = allLinks.find(link => link.innerHTML.toLowerCase().includes("guitar"))
    expect(vocalsLink).toBeInTheDocument();
  });
})

describe("Bass link", () => {
  test('navigates to /bass when clicked', async () => {
    render(<App />);
    const guitar = screen.getByText("bass")
    const user = userEvent.setup()
    await user.click(guitar)
    expect(window.location.pathname).toBe<string>("/bass")
  });

  test('has link role', async () => {
    render(<App />);
    const allLinks = screen.getAllByRole("link")
    const vocalsLink = allLinks.find(link => link.innerHTML.toLowerCase().includes("bass"))
    expect(vocalsLink).toBeInTheDocument();
  });
})

describe("Drums link", () => {
  test('navigates to /drums when clicked', async () => {
    render(<App />);
    const guitar = screen.getByText("drums")
    const user = userEvent.setup()
    await user.click(guitar)
    expect(window.location.pathname).toBe<string>("/drums")
  });

  test('has link role', async () => {
    render(<App />);
    const allLinks = screen.getAllByRole("link")
    const vocalsLink = allLinks.find(link => link.innerHTML.toLowerCase().includes("drums"));
    expect(vocalsLink).toBeInTheDocument()
  });
})




