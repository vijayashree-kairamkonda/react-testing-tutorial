import { renderHook, act } from "@testing-library/react";
import { UseCounter } from "./UseCounter";

describe("useCounter", () => {
  test("should render initial count", () => {
    const { result } = renderHook(UseCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render same initial count", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(UseCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(UseCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
