import React, { useState } from "react";
import { FlatList, ScrollView, Text, View, StyleSheet } from "react-native";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";
import COLORS from "@/constants/Colors";
import ScrollableLayout from "@/components/layouts/ScrollableLayout";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import SelectLocalisation from "@/components/common/SelectLocalisation";

/**
 * `HomeScreen` component that conditionally renders content based on user authentication status.
 *
 * If the user is not authenticated, they are redirected to the first onboarding screen.
 *
 * This screen matches the `/` route of the application.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function HomeScreen() {
  /** 
     This is a fake authentication check. If the user is not 
     authenticated, we redirect them to the first onboarding screen.
     
     For the team working on the homescreen, you can replace the value
     of `isUserAuthenticated` with the `true` to view your page.
     
     For the team working on the onboarding screens, you can leave the
     value of `isUserAuthenticated` as `false` to view your pages.
     */

  const isUserAuthenticated = true;
  if (!isUserAuthenticated) return <Redirect href="/first-onboarding" />;

  return (
    <ScrollableLayout>
      <SafeAreaView>
        <HeaderLayout />
        <View style={styles.locationAndSearchContainer}>
            <SelectLocalisation
            currentLocalisation="Pavillon André Aisenstadt"
            style={styles.selectLocalisationContainer}
            />
        </View>
      </SafeAreaView>
    </ScrollableLayout>
  );
}

const styles = StyleSheet.create({
    selectLocalisationContainer: {
        marginTop: SPACING["xl"]
    },
    locationAndSearchContainer: {
        paddingHorizontal: SPACING["md"],
        alignItems: "center",
    }
});
