import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementBtn).toBeInTheDocument();
  });

  test("renders count of 1 after clicking the increment btn", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment btn twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setBtn = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setBtn);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    const setBtn = screen.getByRole("button", {
      name: "Set",
    });

    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
