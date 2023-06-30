import { render, screen } from "@testing-library/react";
import PageTitle from ".";

describe("PageTitle", () => {
  const props = {
    title: "Page Title",
  };

  it("renders the card component with correct props", () => {
    render(<PageTitle {...props} />);
    const pageTitleText = screen.getByTestId("page-title");

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(pageTitleText.textContent).toBe("auhauha");
  });
});
