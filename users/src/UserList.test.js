import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  return { rndr: render(<UserList users={users} />), users };
}

test("render one row per user", () => {
  // render the component
  const { rndr } = renderComponent();

  //find all the rows in the table
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // eslint-disable-next-line
  const rows = rndr.container.querySelectorAll("tbody tr");

  //assertions: correct number of rows in the table.
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
