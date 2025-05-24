import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render the correct number of rows", () => {
  // render the component
  const users = [
    { name: "Shubham", email: "test@test.com" },
    { name: "wolverine", email: "wolverine@marvel.com" },
  ];

  const { container } = render(<UserList users={users} />);

  //find all the rows in the table
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  //assertions: correct number of rows in the table.
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});
