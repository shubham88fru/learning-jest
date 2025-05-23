import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render the correct number of rows", () => {
  // render the component
  const users = [
    { name: "Shubham", email: "test@test.com" },
    { name: "wolverine", email: "wolverine@marvel.com" },
  ];

  render(<UserList users={users} />);

  //find all the rows in the table

  //assertions: correct number of rows in the table.
});

test("render the email and name of each user", () => {});
