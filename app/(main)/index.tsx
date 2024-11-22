import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Redirect } from "expo-router";

import SPACING from "@/constants/Spacing";

import ScrollableLayout from "@/components/layouts/ScrollableLayout";
import SelectLocalisation from "@/components/common/SelectLocalisation";
import Search from "@/components/common/Inputs/Search";
import Tooltip from "@/components/common/Tooltip";
import { Coffee, Star, Vegan } from "lucide-react-native";
import CardScrollableLayout from "@/components/layouts/CardScrollableLayout";
import CafeCard from "@/components/common/Cards/CafeCard";
import TYPOGRAPHY from "@/constants/Typography";
import InfoModalLayout from "@/components/layouts/InfoModalLayout";
import FilterModalLayout from "@/components/layouts/FilterModalLayout";

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
      <>
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
        <CardScrollableLayout
          scrollMarginTop={SPACING["md"]}
          scrollMarginBottom={SPACING["sm"]}
          dividerBottom
        >
          <Tooltip label="Ouvert" status="green" onPress={() => console.log("PRESSED")} showChevron={false} changeColorOnPress />
          <Tooltip label="Diététique" Icon={Vegan} changeColorOnPress></Tooltip>
          <Tooltip label="Prix" changeColorOnPress></Tooltip>
          <Tooltip label="Bientôt fermé" status="orange" showChevron={false} changeColorOnPress />
          <Tooltip label="Rating" Icon={Star} changeColorOnPress />
        </CardScrollableLayout>
        <View>
            <CardScrollableLayout 
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
            </CardScrollableLayout>
            <CardScrollableLayout 
            title="Proches de vous"
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
            </CardScrollableLayout>
            <CardScrollableLayout 
            title="Promotions en cours"
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
            </CardScrollableLayout>
        </View>
        <CardScrollableLayout
          title="Tous les cafés"
          titleMarginTop={SPACING["xl"]}
          scrollMarginTop={SPACING["lg"]}
          scrollMarginBottom={SPACING["md"]}
          scrollGap={SPACING["2xl"]}
          scroll={false}
        >
            <CafeCard status={"open"} name={"Jean Brillant"} location={"Pavillon Claire McNicole"} priceRange={"$$"} rating={4.5} size={"large"} slug="1" />
            <CafeCard status={"open"} name={"Jean Brillant"} location={"Pavillon Claire McNicole"} priceRange={"$$"} rating={4.5} size={"large"} slug="2" />
            <CafeCard status={"open"} name={"Jean Brillant"} location={"Pavillon Claire McNicole"} priceRange={"$$"} rating={4.5} size={"large"} slug="3" />
            <CafeCard status={"open"} name={"Jean Brillant"} location={"Pavillon Claire McNicole"} priceRange={"$$"} rating={4.5} size={"large"} slug="4" />
            <CafeCard status={"open"} name={"Jean Brillant"} location={"Pavillon Claire McNicole"} priceRange={"$$"} rating={4.5} size={"large"} slug="5" />
        </CardScrollableLayout>
      </>
    </ScrollableLayout>
  );
}

const styles = StyleSheet.create({
  selectLocalisationContainer: {
    marginTop: 0,
  },
  locationAndSearchContainer: {
    marginTop: SPACING["md"],
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
