import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { IColor } from './types';

const initialColors: IColor[] = [{name: "red", rgbValue: "FF0000"},{name: "green", rgbValue: "00FF00"},{name: "blue", rgbValue: "0000FF"}]


describe("App should", () => {
  test("display a list of all available colors when navigating to /colors", () => {
    render(<App/>)
    const colorList = screen.getByRole("list", {name: /colors/i})
    expect(colorList).toBeInTheDocument()

    initialColors.forEach((color) => {
      const colorItem = screen.getByRole("listitem", {name: /color/i})
      expect(colorItem).toBeInTheDocument()
    })
  })


})


