import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";
import COLORS from "@/constants/Colors";

import ScrollableLayout from "@/components/layouts/ScrollableLayout";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import SelectLocalisation from "@/components/common/SelectLocalisation";
import Search from "@/components/common/Inputs/Search";
import Tooltip from "@/components/common/Tooltip";
import { DollarSign, DollarSignIcon, Star, Vegan } from "lucide-react-native";
import Divider from "@/components/common/Divider";
import HorizontalCardScrollableLayout from "@/components/layouts/HorizontalCardScrollable";
import CafeCard from "@/components/common/Cards/CafeCard";

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

  function handleSearch(text: string): void {
    console.warn("Search `Search` function not implemented.");
  }

  function handleFilter(): void {
    console.warn("Search `Filter` function not implemented.");
  }

  return (
    <ScrollableLayout>
      <SafeAreaView >
        <HeaderLayout />
        <View style={styles.locationAndSearchContainer}>
          <SelectLocalisation
            currentLocalisation="Pavillon André Aisenstadt"
            style={styles.selectLocalisationContainer}
          />
          <Search onSearch={handleSearch} onFilter={handleFilter} />
        </View>
        <Image
          source={require("@/assets/images/placeholder/imagexl.png")}
          style={styles.announcementImage}
          width={361}
          height={210}
        />
        <HorizontalCardScrollableLayout
          scrollMarginTop={SPACING["md"]}
          scrollMarginBottom={SPACING["sm"]}
          dividerBottom
        >
          <Tooltip label="Ouvert" status="green" showChevron={false} />
          <Tooltip label="Diététique" Icon={Vegan} />
          <Tooltip label="Prix" />
          <Tooltip label="Bientôt fermé" status="orange" showChevron={false} />
          <Tooltip label="Rating" Icon={Star} />
        </HorizontalCardScrollableLayout>
        <HorizontalCardScrollableLayout 
          title="Tendances du moment"
          titleMarginTop={SPACING["xl"]}
          scrollMarginTop={SPACING["xs"]}
          scrollMarginBottom={SPACING["md"]}
          scrollGap={SPACING["md"]}
          dividerBottom
        >
            <CafeCard name="Jean Brillant" location="Pavillon Claire McNicole" priceRange="$$" rating={4.8} status="open" />
            <CafeCard name="Jean Brillant" location="Pavillon Claire McNicole" priceRange="$$" rating={4.8} status="closing soon" />
            <CafeCard name="Jean Brillant" location="Pavillon Claire McNicole" priceRange="$$" rating={4.8} status="open" />
            <CafeCard name="Jean Brillant" location="Pavillon Claire McNicole" priceRange="$$" rating={4.8} status="closed" />
            <CafeCard name="Jean Brillant" location="Pavillon Claire McNicole" priceRange="$$" rating={4.8} status="open" />
        </HorizontalCardScrollableLayout>
      </SafeAreaView>
    </ScrollableLayout>
  );
}

const styles = StyleSheet.create({
  selectLocalisationContainer: {
    marginTop: SPACING["lg"],
  },
  locationAndSearchContainer: {
    paddingHorizontal: SPACING["md"],
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING["xs"],
  },
  announcementImage: {
    marginTop: SPACING["xl"],
    marginHorizontal: SPACING["md"],
    borderRadius: SPACING["sm"],
  },
  tooltipSearch: {
    marginTop: SPACING["md"],
    paddingHorizontal: SPACING["md"],
    paddingVertical: SPACING["sm"],
  },
  tooltipSearchContainer: {
    flexDirection: "row",
    gap: SPACING["sm"],
    paddingRight: SPACING["md"],
  },
});
