import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays information about the repository", () => {
  const repository = {
    stargazers_count: 42,
    language: "JavaScript",
    forks: 20,
    open_issues: 5,
  };

  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];

    const element = screen.getByText(new RegExp(value, "i"));
    expect(element).toBeInTheDocument();
  }
});
