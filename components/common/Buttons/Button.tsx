import React from "react";
import { Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

import TYPOGRAPHY from "@/constants/Typography";
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";

type ButtonProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export default function Button({ children, style, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, ...(style ? [style] : [])]} activeOpacity={.85}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    ...TYPOGRAPHY.body.large.semiBold,
  },
  button: {
    alignSelf: "center",
    backgroundColor: COLORS.black,
    paddingVertical: SPACING.md,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  }
});