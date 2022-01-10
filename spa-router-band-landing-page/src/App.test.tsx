import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe("App", () => {
  test('renders band name', () => {
    render(<App />);
    const bandName = screen.getByText(/Black Sabbath/i);
    expect(bandName).toBeInTheDocument();
  });

  test("renders Vocals link", () => {
    render(<App />);
    const vocals = screen.getByText(/Vocals/i)
    expect(vocals).toBeInTheDocument();
  })

  test("renders image of Dave Walker when vocals link is clicked", async () => {
    const vocals = screen.getByText("vocals")
    const user = userEvent.setup()
    await user.click(vocals)
    const img = screen.getByAltText(/Dave Walker/i)
    expect(img).toBeInTheDocument()
  })

  test("renders Guitar link", () => {
    render(<App />);
    const vocals = screen.getByText(/Guitar/i)
    expect(vocals).toBeInTheDocument();
  })

  test("renders image of Tony Iommi when guitar link is clicked", async () => {
    const vocals = screen.getByText(/guitar/i)
    const user = userEvent.setup()
    await user.click(vocals)
    const img = screen.getByAltText(/Tony Iommi/i)
    expect(img).toBeInTheDocument()
  })

  test("renders Bass link", () => {
    render(<App />);
    const vocals = screen.getByText(/Bass/i)
    expect(vocals).toBeInTheDocument();
  })

  test("renders image of Geezer Butler when bass link is clicked", async () => {
    const vocals = screen.getByText(/bass/i)
    const user = userEvent.setup()
    await user.click(vocals)
    const img = screen.getByAltText(/Geezer Butler/i)
    expect(img).toBeInTheDocument()
  })

  test("renders Drums link", () => {
    render(<App />);
    const vocals = screen.getByText(/Drums/i)
    expect(vocals).toBeInTheDocument();
  })
  
  test("renders image of Bill Ward when drums link is clicked", async () => {
    const vocals = screen.getByText(/drums/i)
    const user = userEvent.setup()
    await user.click(vocals)
    const img = screen.getByAltText(/Bill Ward/i)
    expect(img).toBeInTheDocument()
  })

  test("renders Band Image", () => {
    render(<App />);
    const img = screen.getByAltText(/Black Sabbath/i)
    expect(img).toBeInTheDocument()
  })
  
})


describe("Vocals link", () => {
  test('navigates to /vocals when clicked', async () => {
    render(<App />);
    const vocals = screen.getByText(/vocals/i)
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
    const guitar = screen.getByText(/guitar/i)
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
    const guitar = screen.getByText(/bass/i)
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
    const guitar = screen.getByText(/drums/i)
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




