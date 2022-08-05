/* eslint-disable testing-library/await-async-utils */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddPokemonForm from "./AddPokemonForm";
const queryClient = new QueryClient();

const renderComponent = (prop) => {
  render(
    <QueryClientProvider client={queryClient}>
      <AddPokemonForm />
    </QueryClientProvider>
  );
};

describe("Add pokemon form tests", () => {
  it("should render the component, expect component to be rendered", () => {
    renderComponent();

    waitFor(() => {
      expect("Nuevo Pokemon").toBeInTheDocument();
    });
  });

  it("should call handle create, expect handle to be called", () => {
    renderComponent();
    let pokemonName = (Math.random() + 1).toString(36).substring(2);
    let fakeImage = (Math.random() + 1).toString(36).substring(2);
    let getRandomNumberBetween = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const inputName = screen.getByTestId("inputName");
    const inputImage = screen.getByTestId("inputImage");
    const rangeAttack = screen.getByTestId("rangeAttack");
    const rangeDefence = screen.getByTestId("rangeDefence");
    const saveBtn = screen.getByTestId("saveBtn");
    fireEvent.change(inputName, { target: { value: pokemonName } });
    fireEvent.change(inputImage, { target: { value: fakeImage } });
    fireEvent.change(rangeAttack, {
      target: { value: getRandomNumberBetween(1, 100) },
    });
    fireEvent.change(rangeDefence, {
      target: { value: getRandomNumberBetween(1, 100) },
    });
    fireEvent.click(saveBtn);

    waitFor(() =>
      expect(screen.getByTestId("alertTestID")).toBeInTheDocument()
    );
  });
});
