import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonList from "./PokemonList";
const queryClient = new QueryClient();

const renderComponent = (prop) => {
  render(
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
};

describe("PokemonList tests", () => {
  it("should click update btn, expect update btn to be clicked", () => {
    renderComponent();

    // const updateBtn = screen.getByTestId("updateBtn2102");

    // fireEvent.click(updateBtn);
  });
});
