import React from 'react';
import { View, Text } from 'react-native';

// Constants
import TYPOGRAPHY from '@/constants/Typography';
import COLORS from '@/constants/Colors';
import SPACING from '@/constants/Spacing';  

/*
    Here we have a SocialButton component that renders a Socialbutton with text.
    The Socialbutton properties are defined in the SocialButtonProps Type.
    The SocialButton component takes a children property which is a ReactNode.

    The only thing needed to be done here is to design the Socialbutton component
    according to the design app design. Use the constants provided in the
    constants folder to style the Socialbutton.
*/

type SocialButtonProps = {
    children: React.ReactNode,
}

/**
 * SocialButton component that renders a Socialbutton with text.
 *
 * @author Team 1
 * @param {SocialButtonProps} props - The props for the SocialButton component.
 */
export default function SocialButton({ children }: SocialButtonProps) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}