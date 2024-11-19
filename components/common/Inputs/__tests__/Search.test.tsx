import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import Search from "../Search";

describe("Search Component", () => {
  let tree: any;
  const mockOnSearch = jest.fn();
  const mockOnFilter = jest.fn();

  const defaultProps = {
    onSearch: mockOnSearch,
    onFilter: mockOnFilter,
    placeholder: "Rechercher les cafés, les plats",
  };

  beforeEach(() => {
    tree =render(<Search {...defaultProps} />);
  });

  it("renders correctly with default props", () => {
    // Verify the placeholder text in the TextInput
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeTruthy();

    // Verify the presence of the Search and Filter icons
    expect(screen.getAllByTestId("search-icon")).toBeTruthy();
    expect(screen.getAllByTestId("filter-icon")).toBeTruthy();
  });

  it("triggers onSearch callback when typing in the input", () => {
    const textInput = screen.getByPlaceholderText(defaultProps.placeholder);

    fireEvent.changeText(textInput, "New search query");

    // Verify that onSearch is called with the input value
    expect(mockOnSearch).toHaveBeenCalledWith("New search query");
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  it("triggers onFilter callback when the filter button is pressed", () => {
    const filterButton = screen.getByTestId("filter-icon-container");

    fireEvent.press(filterButton);

    // Verify that onFilter is called
    expect(mockOnFilter).toHaveBeenCalledTimes(1);
  });

  it("renders with a custom placeholder", () => {
    const customPlaceholder = "Search here...";
    render(
      <Search
        {...defaultProps}
        placeholder={customPlaceholder}
      />
    );

    // Verify that the custom placeholder is displayed
    expect(screen.getByPlaceholderText(customPlaceholder)).toBeTruthy();
  });

    it("matches the snapshot", () => {
        expect(tree).toMatchSnapshot();
    });
});
