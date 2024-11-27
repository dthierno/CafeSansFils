import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";
import COLORS from "@/constants/Colors";
import ScrollableLayout from "@/components/layouts/ScrollableLayout";
import SearchBar from "@/components/common/SearchBar";

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
        <ScrollableLayout>
            <SafeAreaView style={{ justifyContent: "center", alignItems: "flex-start"}}>
                    <Text style={[TYPOGRAPHY.heading.large.bold ,{marginTop: SPACING["4xl"], color: COLORS.black}]}>Hello, world!</Text>
                    <Link href="/first-onboarding" style={[TYPOGRAPHY.body.large.medium, {marginTop: SPACING.xs}]}>
                        {">"} Go to the first onboarding screen 
                    </Link>
                    <Link href="/cafe/CafeToreEtFraction" style={[TYPOGRAPHY.body.large.medium, {marginTop: SPACING.xs}]}>
                        {">"} Go to the individual coffee screen
                    </Link>
                    <SearchBar/>
            </SafeAreaView>
        </ScrollableLayout>
    );
}