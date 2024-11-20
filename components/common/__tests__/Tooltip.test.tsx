import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import Tooltip from "@/components/common/Tooltip";
import { Globe } from "lucide-react-native";
import COLORS from "@/constants/Colors";


describe("Tooltip Component", () => {
  const mockOnPress = jest.fn();

  it("renders correctly with default props", () => {
    render(<Tooltip label="Default Tooltip" />);

    // Verify the label is rendered
    expect(screen.getByText("Default Tooltip")).toBeTruthy();

    // Verify the chevron is rendered by default
    expect(screen.getAllByTestId("chevron-down")).toBeTruthy();
  });

  it("renders with the correct label", () => {
    const label = "Custom Tooltip";
    render(<Tooltip label={label} />);

    // Verify the custom label is displayed
    expect(screen.getByText(label)).toBeTruthy();
  });

  it("renders the correct icon and color based on status", () => {
    render(<Tooltip label="Green Status" status="green" />);
    const greenIcon = screen.getAllByTestId("tooltip-icon");

    // Verify the icon is rendered with the correct color
    expect(greenIcon[0].props.fill).toBe(COLORS.status.green);

    render(<Tooltip label="Orange Status" status="orange" />);
    const orangeIcon = screen.getAllByTestId("tooltip-icon");
    expect(orangeIcon[0].props.fill).toBe(COLORS.status.orange);

    render(<Tooltip label="Red Status" status="red" />);
    const redIcon = screen.getAllByTestId("tooltip-icon");
    expect(redIcon[0].props.fill).toBe(COLORS.status.red);
  });

  it("does not render the chevron when showChevron is false", () => {
    render(<Tooltip label="No Chevron" showChevron={false} />);

    // Verify the chevron is not rendered
    expect(screen.queryByTestId("chevron-down")).toBeNull();
  });

  it("renders a custom icon", () => {
    render(<Tooltip label="Custom Icon" Icon={Globe} />);

    // Verify the custom icon is rendered
    const customIcon = screen.getAllByTestId("tooltip-icon");
    expect(customIcon).toBeTruthy();
  });

  it("triggers onPress callback when pressed", () => {
    render(<Tooltip label="Pressable Tooltip" onPress={mockOnPress} />);
    const tooltip = screen.getByTestId("tooltip-container");

    // Simulate a press
    fireEvent.press(tooltip);

    // Verify the onPress callback is triggered
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const tree = render(<Tooltip label="Snapshot Tooltip" />);
    expect(tree).toMatchSnapshot();
  });
});
