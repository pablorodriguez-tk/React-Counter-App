import React from "react";
import PrimeraApp from "../PrimeraApp";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Pruebas en <PrimeraApp/>", () => {
  test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
    const saludo = "Hola, soy Goku";
    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  });
});
