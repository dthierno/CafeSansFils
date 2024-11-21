import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import CafeCard from "@/components/common/Cards/CafeCard";
import { router } from "expo-router";
import COLORS from "@/constants/Colors";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

describe("CafeCard Component", () => {
  const defaultProps = {
    status: "open" as "open" | "closing soon" | "closed",
    name: "Cozy Coffee",
    location: "123 Coffee Lane",
    priceRange: "$$" as "$" | "$$" | "$$$",
    rating: 4.5,
    slug: "cozy-coffee",
  };

  it("renders correctly with default props", () => {
    render(<CafeCard {...defaultProps} />);
    
    // Check if name is rendered
    expect(screen.getByText("Cozy Coffee")).toBeTruthy();

    // Check if location is rendered
    expect(screen.getByText("123 Coffee Lane")).toBeTruthy();

    // Check if price range is rendered
    expect(screen.getByText("$$")).toBeTruthy();

    // Check if rating is rendered
    expect(screen.getByText("4.5")).toBeTruthy();
  });

  it("renders the correct status icon color based on status", () => {
    const { rerender } = render(<CafeCard {...defaultProps} status="open" />);
    const greenIcon = screen.getAllByTestId("tooltip-icon");
    expect(greenIcon[0].props.fill).toBe(COLORS.status.green); // Replace with COLORS.status.green

    rerender(<CafeCard {...defaultProps} status="closing soon" />);
    const orangeIcon = screen.getAllByTestId("tooltip-icon");
    expect(orangeIcon[0].props.fill).toBe(COLORS.status.orange); // Replace with COLORS.status.orange

    rerender(<CafeCard {...defaultProps} status="closed" />);
    const redIcon = screen.getAllByTestId("tooltip-icon");
    expect(redIcon[0].props.fill).toBe(COLORS.status.red); // Replace with COLORS.status.red
  });

  it("navigates to the correct slug when pressed", () => {
    render(<CafeCard {...defaultProps} />);
    const pressable = screen.getByTestId("button");
    
    fireEvent.press(pressable);

    expect(router.push).toHaveBeenCalledWith("/cafe/cozy-coffee");
  });

  it("renders the fallback image when no image is provided", () => {
    render(<CafeCard {...defaultProps} image={undefined} size="medium" />);
    
    const image = screen.getByTestId("image");
    expect(image.props.source).toEqual(
      require("@/assets/images/placeholder/imagemd.png")
    );
  });

  it("renders the custom image when provided", () => {
    const customImage = "https://fakeimg.pl/600x400";
    render(<CafeCard {...defaultProps} image={customImage} />);
    
    const image = screen.getByTestId("image");
    expect(image.props.source.uri).toBe(customImage);
  });

  it("applies the correct card dimensions based on size", () => {
    const { rerender } = render(<CafeCard {...defaultProps} size="medium" />);
    expect(screen.getByTestId("button").props.style).toMatchObject({ width: 318 });

    rerender(<CafeCard {...defaultProps} size="large" />);
    expect(screen.getByTestId("button").props.style).toMatchObject({ width: 361 });
  });

  it("matches the snapshot", () => {
    const tree = render(<CafeCard {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
