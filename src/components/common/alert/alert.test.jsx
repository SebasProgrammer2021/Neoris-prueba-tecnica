import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

const renderComponent = (prop) => {
  render(<Alert message={prop} />);
};

describe("alert tests", () => {
  it("expect alert to be in the document", () => {
    renderComponent();
    const alertContainer = screen.getByTestId("alertTestID");

    expect(alertContainer).toBeInTheDocument();

  });

  it("should render message", () => {
    renderComponent("success");
    const paragraphContainer = screen.getByTestId("alertMainMessage");

    expect(paragraphContainer).not.toBeEmptyDOMElement();
  });
});
