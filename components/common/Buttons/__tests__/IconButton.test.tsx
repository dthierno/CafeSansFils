import { fireEvent, render, screen } from "@testing-library/react-native";

import IconButton from "../IconButton";
import { ShoppingBasket } from "lucide-react-native";

describe("IconButton", () => {
  const mockProps = {
    Icon: ShoppingBasket,
    onPress: jest.fn(),
    accessibilityLabel: "Shopping Basket",
  };

  it("renders the icon button", () => {
    render(<IconButton {...mockProps} />);
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeTruthy();
  });

  it("calls the onPress function when the icon button is pressed", () => {
    render(<IconButton {...mockProps} />);
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeTruthy();
    fireEvent.press(iconButton);
    expect(mockProps.onPress).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const tree = render(<IconButton {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});