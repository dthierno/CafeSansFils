import React from "react";
import { Text, View } from "react-native";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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
    if (!isUserAuthenticated) return <Redirect href="/first-onboarding" />

    return (
        <SafeAreaView style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
            <Text style={{ fontSize: 32, fontFamily: "Inter-Black" }}>Hello, world!</Text>
            <Link href="/first-onboarding">
                <Text style={{ fontSize: 24, fontFamily: "Inter-Regular" }}>
                    Go to the first onboarding screen
                </Text>
            </Link>
        </SafeAreaView>
    );
}