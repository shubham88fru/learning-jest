import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // Render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it.
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - assert that component is doing what we expect.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  //render the component
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  //find the two inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  //Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("Shubham"); //type

  //simulated typical in an email
  await user.click(emailInput);
  await user.keyboard("test@test.com");

  //find the button
  const button = screen.getByRole("button");

  //simulate clicking the button
  await user.click(button);

  //assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "Shubham",
    email: "test@test.com",
  });
});

test("empties the inputs after form submission", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("Shubham");
  await user.click(emailInput);
  await user.keyboard("tst@tst.com");
  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
