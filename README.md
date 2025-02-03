# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Components Documentation

### Layout Components

#### HeaderLayout
A header component that displays user account information and navigation controls.

```tsx
import HeaderLayout from '@/components/layouts/HeaderLayout';

<HeaderLayout
  fullName="John Doe"
  profilePicture={require("../assets/images/profile.png")}
/>
```

**Props:**
- `fullName`: string (optional) - User's full name to display
- `profilePicture`: ImageSourcePropType (optional) - User's profile picture

#### InfoModalLayout
A reusable modal layout for displaying information with a title, description, and action button.

```tsx
import InfoModalLayout from '@/components/layouts/InfoModalLayout';

<InfoModalLayout
  title="Welcome!"
  buttonTitle="Get Started"
  buttonAction={() => handleGetStarted()}
>
  Welcome to our app. We're excited to have you here!
</InfoModalLayout>
```

**Props:**
- `title`: string (optional) - Modal title
- `children`: string (optional) - Modal description/content
- `buttonTitle`: string (optional) - Text for the action button (default: "Button")
- `buttonAction`: () => void (optional) - Button press handler

#### OnboardingLayout
A layout component for onboarding screens with progress indicator and navigation buttons.

```tsx
import OnboardingLayout from '@/components/layouts/OnboardingLayout';

<OnboardingLayout
  id={1}
  title="Welcome to MenuM"
  description="Discover the best cafes around you"
/>
```

**Props:**
- `id`: 1 | 2 | 3 - Current onboarding step
- `title`: string - Onboarding screen title
- `description`: string - Detailed description of the current step

#### ScrollableLayout
A flexible layout component that provides scrollable content with customizable orientation.

```tsx
import ScrollableLayout from '@/components/layouts/ScrollableLayout';

// Vertical scroll example
<ScrollableLayout>
  <YourContent />
</ScrollableLayout>

// Horizontal scroll example
<ScrollableLayout scrollHorizontal>
  <YourContent />
</ScrollableLayout>
```

**Props:**
- `children`: React.ReactNode - Content to be rendered inside the scroll view
- `scrollHorizontal`: boolean (optional) - Enable horizontal scrolling (default: false)
- `style`: StyleProp<ViewStyle> (optional) - Additional styles for the scroll view

#### CardScrollableLayout
A specialized layout component for creating horizontally scrollable card sections with optional dividers and title.

```tsx
<CardScrollableLayout
  title="Popular Cafés"
  dividerTop
  dividerBottom
  titleMarginTop={8}
  scrollMarginTop={16}
  scrollMarginBottom={16}
>
  <Card title="Café 1" />
  <Card title="Café 2" />
  <Card title="Café 3" />
</CardScrollableLayout>
```

**Props:**
- `title`: string (optional) - Title displayed above the scroll section
- `children`: React.ReactNode - Cards or content to display
- `scrollMarginTop`: number (optional) - Margin above scroll area (default: 0)
- `scrollMarginBottom`: number (optional) - Margin below scroll area (default: 0)
- `outerMarginTop`: number (optional) - Outer margin above layout (default: 0)
- `outerMarginBottom`: number (optional) - Outer margin below layout (default: 0)
- `dividerTop`: boolean (optional) - Show top divider (default: false)
- `dividerBottom`: boolean (optional) - Show bottom divider (default: false)
- `dividerHeight`: number (optional) - Height of dividers (default: 1)
- `titleMarginTop`: number (optional) - Margin above title (default: 0)
- `scrollGap`: number (optional) - Gap between cards (default: 12)
- `scroll`: boolean (optional) - Enable scrolling (default: true)

### Common Components

#### Button
A versatile button component with primary and secondary variants.

```tsx
import Button from '@/components/common/Buttons/Button';

// Primary button
<Button onPress={() => console.log('Pressed')}>
  Click me
</Button>

// Secondary button
<Button type="secondary" onPress={() => console.log('Pressed')}>
  Cancel
</Button>
```

**Props:**
- `children`: React.ReactNode - Button content
- `type`: 'primary' | 'secondary' (optional) - Button variant (default: 'primary')
- `style`: StyleProp<ViewStyle> (optional) - Additional button styles
- `onPress`: () => void - Button press handler

#### SocialButton
Pre-styled buttons for social media authentication.

```tsx
import SocialButton from '@/components/common/Buttons/SocialButton';

<SocialButton 
  type="google" 
  onPress={() => handleGoogleSignIn()}
/>
```

**Props:**
- `type`: 'google' | 'facebook' (optional) - Social provider type
- `style`: ViewStyle (optional) - Additional button styles
- `onPress`: () => void (optional) - Button press handler

#### FilterButtons
A component that renders filter action buttons.

```tsx
import FilterButtons from '@/components/common/Buttons/FilterButtons';

<FilterButtons
  handleApplyFilter={() => applyFilters()}
  handleResetFilter={() => resetFilters()}
  closeButtonText="Apply"
  resetButtonText="Reset"
/>
```

**Props:**
- `closeButtonText`: string (optional) - Text for apply button (default: "Appliquer")
- `resetButtonText`: string (optional) - Text for reset button (default: "Réintialiser")
- `handleApplyFilter`: () => void - Apply filter callback
- `handleResetFilter`: () => void - Reset filter callback

#### TextInput
A customizable text input component with optional label and help link.

```tsx
import TextInput from '@/components/common/Inputs/TextInput';

<TextInput
  label="Email"
  placeholder="Enter your email"
  helpLink
  helpLinkText="Forgot password?"
  helpLinkHref="/forgot-password"
  handleOnChangeText={(text) => setEmail(text)}
/>
```

**Props:**
- `label`: string (optional) - Input label
- `placeholder`: string (optional) - Input placeholder
- `secureTextEntry`: boolean (optional) - Hide input text (default: false)
- `helpLink`: boolean (optional) - Show help link
- `helpLinkHref`: string (optional) - Help link destination
- `helpLinkText`: string (optional) - Help link text
- `handleOnChangeText`: (text: string) => void - Text change handler

#### Divider
A simple horizontal line component for visual separation.

```tsx
import Divider from '@/components/common/Divider';

<Divider
  marginTop={16}
  marginBottom={16}
  height={1}
/>
```

**Props:**
- `marginTop`: number (optional) - Top margin
- `marginBottom`: number (optional) - Bottom margin
- `height`: number (optional) - Divider thickness (default: 1)

## Videos

<!-- Embed a video -->
### Prototype Figma
<video controls>
  <source src="./assets/videos/Prototype.mov">
  Your browser does not support the video tag.
</video>

### Bare Bones
<video controls>
  <source src="./assets/videos/Skeleton.mov">
  Your browser does not support the video tag.
</video>

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
