import React from 'react';
import { render, screen } from '@testing-library/react';
import DogAvatar from './DogAvatar';

beforeEach(()=>{
    render(<DogAvatar name="Dog" imageUrl='https://picsum.photos/id/237/200/200'/>)
})

test("Renders Image", () => {
    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
})

test("Image contains alt Text", () => {
    const img = screen.getByRole<HTMLImageElement>("img")
    expect(img.alt).toBeTruthy()
})


