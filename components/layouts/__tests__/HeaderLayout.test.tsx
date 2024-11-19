import { render, screen } from '@testing-library/react-native';
import HeaderLayout, { user } from '../HeaderLayout';

describe('HeaderLayout', () => {
    test("renders the header container", () => {
        render(<HeaderLayout />);
        const headerContainer = screen.getByTestId('header-container');
        expect(headerContainer).toBeTruthy();
    })

    test("renders the `AccountInfo` component correctly with correct props", () => {
        render(<HeaderLayout />);
        const title = screen.getByText('Bonjour et Bienvenue');
        const fullName = screen.getByText(user.fullName);
        const profilePicture = screen.getByTestId('header-account-image');
        expect([title, fullName, profilePicture]).toBeTruthy();
    })

    test("renders the `IconButton` component", () => {
        render(<HeaderLayout />);
        const iconButton = screen.getByTestId('icon-button');
        expect(iconButton).toBeTruthy();
    })
    
    test("matches the previous snapshot", () => {
        const tree = render(<HeaderLayout />);
        expect(tree).toMatchSnapshot();
    })
});