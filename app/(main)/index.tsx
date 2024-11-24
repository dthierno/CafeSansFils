import React, { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import {
  View,
  StyleSheet,
  Image,
  Text,
  AppStateStatus,
  AppState,
} from "react-native";

import * as Location from "expo-location";
import axios from "axios";

import SPACING from "@/constants/Spacing";
import { Star, Vegan } from "lucide-react-native";

import Tooltip from "@/components/common/Tooltip";
import Search from "@/components/common/Inputs/Search";
import CafeCard from "@/components/common/Cards/CafeCard";
import { useModal } from "@/components/layouts/GlobalModal";
import ScrollableLayout from "@/components/layouts/ScrollableLayout";
import FilterModalLayout from "@/components/layouts/FilterModalLayout";
import SelectLocalisation from "@/components/common/SelectLocalisation";
import CardScrollableLayout from "@/components/layouts/CardScrollableLayout";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import useLocation from "@/hooks/useLocation";
import useOnForegroundBack from "@/hooks/useOnForegroundBack";
import useSortedItemsByDistance from "@/hooks/useSortedItemsByDistance";
import {
  pavillonCoordinates,
  type PavillonCoordinate,
} from "@/constants/Coordinates";

export default function HomeScreen() {
  const [location, setLocation, getCurrentLocation] = useLocation();
  useOnForegroundBack(getCurrentLocation);
  const sortedPavillons = useSortedItemsByDistance<
    PavillonCoordinate,
    "lat",
    "lng",
    "pavillon"
  >(location, pavillonCoordinates, "lat", "lng", "pavillon");

  const modalContext = useModal();
  const openModal = modalContext ? modalContext.openModal : () => {};
  const closeModal = modalContext ? modalContext.closeModal : () => {};

  const isUserAuthenticated = true;
  if (!isUserAuthenticated) return <Redirect href="/first-onboarding" />;

  function handleSearch(text: string): void {
    console.warn("Search `Search` function not implemented.");
  }

  function handleFilter(): void {
    console.warn("Search `Filter` function not implemented.");
    openModal(
      <FilterModalLayout
        title="Filtrer par"
        handleApplyFilter={() => closeModal()}
        handleResetFilter={() => closeModal()}
      />
    );
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

        {/* Quick Search Section with Tooltips */}
        <CardScrollableLayout
          scrollMarginTop={SPACING["md"]}
          scrollMarginBottom={SPACING["sm"]}
          dividerBottom
        >
          <Tooltip
            label="Ouvert"
            status="green"
            onPress={() => console.log("PRESSED")}
            showChevron={false}
            changeColorOnPress
          />
          <Tooltip label="Diététique" Icon={Vegan} changeColorOnPress></Tooltip>
          <Tooltip label="Prix" changeColorOnPress></Tooltip>
          <Tooltip
            label="Bientôt fermé"
            status="orange"
            showChevron={false}
            changeColorOnPress
          />
          <Tooltip label="Rating" Icon={Star} changeColorOnPress />
        </CardScrollableLayout>

        {/* Horizontal Cafe Cards By Categories */}
        <View>
          <CardScrollableLayout
            title="Tendances du moment"
            titleMarginTop={SPACING["xl"]}
            scrollMarginTop={SPACING["xs"]}
            scrollMarginBottom={SPACING["md"]}
            scrollGap={SPACING["md"]}
            dividerBottom
          >
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
              slug="Cafe Tore et Fraction"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="closing soon"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="closed"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
          </CardScrollableLayout>
          <CardScrollableLayout
            title="Proches de vous"
            titleMarginTop={SPACING["xl"]}
            scrollMarginTop={SPACING["xs"]}
            scrollMarginBottom={SPACING["md"]}
            scrollGap={SPACING["md"]}
            dividerBottom
          >
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="closing soon"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="closed"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
          </CardScrollableLayout>
          <CardScrollableLayout
            title={`${sortedPavillons[0]}`}
            titleMarginTop={SPACING["xl"]}
            scrollMarginTop={SPACING["xs"]}
            scrollMarginBottom={SPACING["md"]}
            scrollGap={SPACING["md"]}
            dividerBottom
          >
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="closing soon"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="closed"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
          </CardScrollableLayout>
          <CardScrollableLayout
            title="Promotions en cours"
            titleMarginTop={SPACING["xl"]}
            scrollMarginTop={SPACING["xs"]}
            scrollMarginBottom={SPACING["md"]}
            scrollGap={SPACING["md"]}
            dividerBottom
          >
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="closing soon"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="closed"
            />
            <CafeCard
              name="Jean Brillant"
              location="Pavillon Claire McNicole"
              priceRange="$$"
              rating={4.8}
              status="open"
            />
          </CardScrollableLayout>
        </View>

        {/* All Cafes Cards */}
        <CardScrollableLayout
          title="Tous les cafés"
          titleMarginTop={SPACING["xl"]}
          scrollMarginTop={SPACING["lg"]}
          scrollMarginBottom={SPACING["md"]}
          scrollGap={SPACING["2xl"]}
          scroll={false}
        >
          <CafeCard
            status={"open"}
            name={"Jean Brillant"}
            location={"Pavillon Claire McNicole"}
            priceRange={"$$"}
            rating={4.5}
            size={"large"}
            slug="1"
          />
          <CafeCard
            status={"open"}
            name={"Jean Brillant"}
            location={"Pavillon Claire McNicole"}
            priceRange={"$$"}
            rating={4.5}
            size={"large"}
            slug="2"
          />
          <CafeCard
            status={"open"}
            name={"Jean Brillant"}
            location={"Pavillon Claire McNicole"}
            priceRange={"$$"}
            rating={4.5}
            size={"large"}
            slug="3"
          />
          <CafeCard
            status={"open"}
            name={"Jean Brillant"}
            location={"Pavillon Claire McNicole"}
            priceRange={"$$"}
            rating={4.5}
            size={"large"}
            slug="4"
          />
          <CafeCard
            status={"open"}
            name={"Jean Brillant"}
            location={"Pavillon Claire McNicole"}
            priceRange={"$$"}
            rating={4.5}
            size={"large"}
            slug="5"
          />
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
