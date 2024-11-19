// components/ScrollableLayout.js
import React from "react";
import { ScrollView } from "react-native";
import COLORS from "@/constants/Colors";
import { Slot } from "expo-router";
import SPACING from "@/constants/Spacing";

export default function ScrollableLayout({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: COLORS.white}}>
      {children}
    </ScrollView>
  )
}
