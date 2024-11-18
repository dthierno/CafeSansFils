import React from 'react';
import { View, Text } from 'react-native';

// Constants
import TYPOGRAPHY from '@/constants/Typography';
import COLORS from '@/constants/Colors';
import SPACING from '@/constants/Spacing';  

/*
    Here we have a Button component that renders a button with text.
    The button properties are defined in the ButtonProps Type.
    The Button component takes a children property which is a ReactNode.

    The only thing needed to be done here is to design the button component
    according to the design app design. Use the constants provided in the
    constants folder to style the button.

    Make sure you add a property for the onPress event, so that the button
    can be clickable. Also, add a property for the button type. We have 
    two types of buttons in the app: primary, secondary.
*/

type ButtonProps = {
    children: React.ReactNode,
}

/**
 * Button component that renders a button with text.
 *
 * @author Team 1
 * @param {ButtonProps} props - The props for the Button component.
 */
export default function Button({ children }: ButtonProps) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}