import { render, screen } from "@testing-library/react";
import { AppProviders } from "../../providers/AppProvider";
import { MuiMode } from "./mui";

describe("mui mode", () => {
  test("renders correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
