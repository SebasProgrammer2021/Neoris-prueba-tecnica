import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Main page tests", () => {
  test("Main title, expect main title to be in the document", () => {
    render(<App />);
    const mainTitle = screen.getByText(/Listado de Pokemon/i);

    expect(mainTitle).toBeInTheDocument();
  });
});
