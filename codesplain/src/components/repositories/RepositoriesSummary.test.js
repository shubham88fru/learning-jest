import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays the primary language of the repository", () => {
  const repository = {
    stargazers_count: 42,
    language: "JavaScript",
    forks: 20,
    open_issues: 5,
  };

  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("JavaScript");
  expect(language).toBeInTheDocument();
});
