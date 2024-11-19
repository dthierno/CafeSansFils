import { render, screen } from "@testing-library/react-native";
import AccountInfo from "@/components/common/Auth/AccountInfo";

describe("AccountInfo", () => {
  const mockProps = {
    title: "Welcome Back",
    profileName: "John Doe",
    profilePicture: 'link/to/profile/picture',
  };

  it("renders the profile picture", () => {
    render(<AccountInfo {...mockProps} />);
    const profilePicture = screen.getByTestId("header-account-image");
    expect(profilePicture.props.source).toEqual(mockProps.profilePicture);
  });

  it("renders the title", () => {
    render(<AccountInfo {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeTruthy();
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
