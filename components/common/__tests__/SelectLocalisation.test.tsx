import { render, fireEvent, screen } from "@testing-library/react-native";
import SelectLocalisation from "@/components/common/SelectLocalisation";
import COLORS from "@/constants/Colors";

describe("SelectLocalisation", () => {
  const mockProps = {
    currentLocalisation: "Montreal, QC",
  };

  test("renders correctly with the current localisation text", () => {
    render(<SelectLocalisation {...mockProps} />);

    expect(screen.getByText(mockProps.currentLocalisation)).toBeTruthy();

    const mapPinIcon = screen.getAllByTestId("map-pin");
    const chevronDownIcon = screen.getAllByTestId("chevron-down");

    expect(mapPinIcon).toBeTruthy();
    expect(chevronDownIcon).toBeTruthy();
  });

  test("calls the `handlePress` function when pressed", () => {
    render(<SelectLocalisation {...mockProps} />);
    const button = screen.getByTestId("select-localisation-container");

    // Mock the console log for testing
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    fireEvent.press(button);
    expect(consoleSpy).toHaveBeenCalledWith(
      "`handlePress` function not implemented."
    );

    // Restore the original console log implementation
    consoleSpy.mockRestore();
  });

  test("matches the snapshot", () => {
    const tree = render(<SelectLocalisation {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});
