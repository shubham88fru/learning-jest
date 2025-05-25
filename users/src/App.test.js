import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

test("can receive a new user and display it on the list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("shubham");
  user.click(emailInput);
  user.keyboard("test@test.com");

  user.click(button);

  const name = screen.getByRole("cell", { name: "shubham" });
  const email = screen.getByRole("cell", { name: "test@test.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
