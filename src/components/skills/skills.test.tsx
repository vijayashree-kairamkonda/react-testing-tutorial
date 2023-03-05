import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginBtnElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginBtnElement).toBeInTheDocument();
  });

  test("Start learning btn not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test("Start learning btn eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    // logRoles(view.container)
    // screen.debug();
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startLearningBtn).toBeInTheDocument();
  });
});
