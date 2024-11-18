import React from 'react';
import { View, Text } from 'react-native';

// Constants
import TYPOGRAPHY from '@/constants/Typography';
import COLORS from '@/constants/Colors';
import SPACING from '@/constants/Spacing';  

// Components
import Button from '@/components/common/Buttons/Button';
import OnboardingStatusBar from '../common/OnboardingStatus';

type OnboardingLayoutProps = {
    title: string,
    type: "cafe" | "artiicle"
    // ...
    // Add more props here
}

/**
 * OnboardingLayout component that renders a OnboardingLayout with text.
 *
 * @author Team 1
 * @param {OnboardingLayoutProps} props - The props for the OnboardingLayout component.
 */
export default function HorizontalCardScrollableLayout({
    title,
    type,
    // ...
    // Add more props here
  }: OnboardingLayoutProps) {
  return (
    <>
      {type === "cafe" ? (
        <View>
          <Text>Café Card</Text>
          <Text>HorizontalCardScrollableLayout</Text>
        </View>
      ) : (
        <View>
          <Text>Article card</Text>
          <Text>HorizontalCardScrollableLayout</Text>
        </View>
      )}
    </>
  )
}