import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

test("can receive a new user and display it on the list", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("shubham");
  await user.click(emailInput);
  await user.keyboard("test@test.com");

  await user.click(button);

  const name = screen.getByRole("cell", { name: "shubham" });
  const email = screen.getByRole("cell", { name: "test@test.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
