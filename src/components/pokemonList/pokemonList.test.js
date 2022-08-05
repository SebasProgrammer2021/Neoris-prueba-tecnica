import { render, screen } from "@testing-library/react";
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

describe("alert tests", () => {
  it("expect alert to be in the document", () => {
    renderComponent();

    const deleteBtn = screen.getByTestId("pokemonListDeleteBtnId");
  });
});
