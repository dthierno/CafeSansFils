import React from "react";
import { render } from "@testing-library/react-native";
import AccountInfo from "@/components/common/Auth/AccountInfo";

describe("AccountInfo", () => {
  const mockProps = {
    title: "Welcome Back",
    profileName: "John Doe",
    profilePicture: 'link/to/profile/picture',
  };

  it("renders the profile picture", () => {
    const { getByTestId } = render(<AccountInfo {...mockProps} />);
    const profilePicture = getByTestId("header-account-image");
    expect(profilePicture.props.source).toEqual(mockProps.profilePicture);
  });

  it("renders the title", () => {
    const { getByText } = render(<AccountInfo {...mockProps} />);
    expect(getByText(mockProps.title)).toBeTruthy();
  });

  it("renders the user's full name", () => {
    const { getByText } = render(<AccountInfo {...mockProps} />);
    expect(getByText(mockProps.profileName)).toBeTruthy();
  });

    it("matches snapshot", () => {
        const { toJSON } = render(<AccountInfo {...mockProps} />);
        expect(toJSON()).toMatchSnapshot();
    });
});
