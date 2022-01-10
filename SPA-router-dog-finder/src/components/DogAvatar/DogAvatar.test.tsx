import React from 'react';
import { render, screen } from '@testing-library/react';
import DogAvatar from './DogAvatar';

const dogName = "Dog";
const imageUrl = 'https://picsum.photos/id/237/200/200';

describe("Image", ()=>{
    

    test("is rendered.", () => {
        render(<DogAvatar name={dogName} imageUrl={imageUrl}/>)
        const img = screen.getByRole("img")
        expect(img).toBeInTheDocument()
    })

    test("contains alt Text.", () => {
        render(<DogAvatar name={dogName} imageUrl={imageUrl}/>)
        const img = screen.getByRole<HTMLImageElement>("img")
        expect(img).toHaveAttribute("alt")
    })

    test("has correct src.", () => {
        render(<DogAvatar name={dogName} imageUrl={imageUrl}/>)
        const img = screen.getByRole<HTMLImageElement>("img")
        expect(img).toHaveAttribute("src", imageUrl)
    })
})

test("displays Dog name.", () => {
    render(<DogAvatar name={dogName} imageUrl={imageUrl}/>)
    const nameElement = screen.getByText("Dog", {exact: true})
    expect(nameElement).toBeInTheDocument()
})





