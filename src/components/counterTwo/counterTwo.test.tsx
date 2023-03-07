import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counterTwo";
import user from "@testing-library/user-event";

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    await user.click(incrementBtn);
    await user.click(decrementBtn);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
