import { render, screen } from "@testing-library/react";
import exp from "constants";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();

    const sectionElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionElement).toBeInTheDocument();

    // const paragraphElement = screen.getByText("All fields are mandatory")
    // expect(paragraphElement).toBeInTheDocument();

    const paragraphElement = screen.getByText((string) =>
      string.startsWith("All")
    );
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("vj");
    expect(nameElement4).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with laptop");
    expect(imageElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitbtnElement = screen.getByRole("button");
    expect(submitbtnElement).toBeInTheDocument();
  });
});
