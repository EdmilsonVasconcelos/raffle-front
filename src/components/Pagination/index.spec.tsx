import {
  render,
  fireEvent,
  screen,
  getAllByDisplayValue,
} from "@testing-library/react";
import Pagination from ".";

describe("Pagination", () => {
  const mockOnPageChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders pagination component with correct number of links", () => {
    const props = {
      totalItems: 50,
      itemsPerPage: 10,
      currentPage: 1,
      onPageChange: mockOnPageChange,
    };

    const { container } = render(<Pagination {...props} />);

    const paginationLinks = container.querySelectorAll(".pagination-link");

    expect(paginationLinks.length).toBe(5);
  });

  test("calls onPageChange with previous page number when previous button is clicked", () => {
    const props = {
      totalItems: 100,
      itemsPerPage: 10,
      currentPage: 3,
      onPageChange: mockOnPageChange,
    };

    render(<Pagination {...props} />);

    const prevButton = screen.getByText("<");

    fireEvent.click(prevButton);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test("calls onPageChange with next page number when next button is clicked", () => {
    const props = {
      totalItems: 100,
      itemsPerPage: 10,
      currentPage: 3,
      onPageChange: mockOnPageChange,
    };

    render(<Pagination {...props} />);

    const nextButton = screen.getByText(">");

    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });
});
