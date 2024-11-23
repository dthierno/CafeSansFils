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

export default function HomeScreen() {
  const [pavillons, setPavillons] = useState([
    "Pavillon Roger-Gaudry",
    "Pavillon Jean-Coutu",
    "Pavillon André-Aisenstadt",
    "Pavillon Claire-McNicoll",
    "Pavillon Lionel-Groulx",
    "Pavillon Marie-Victorin",
    "Pavillon Jean-Brillant",
  ]);
  const [coordinates, setCoordinates] = useState<
    { pavillon: string; lat: number; lng: number }[]
  >([
    {
      pavillon: "Pavillon Jean-Coutu",
      lat: 45.500485542287784,
      lng: -73.61474544264088,
    },
    {
      pavillon: "Pavillon Jean-Brillant",
      lat: 45.49865436288935,
      lng: -73.61837937589661,
    },
    {
      pavillon: "Pavillon Roger-Gaudry",
      lat: 45.502683040350085,
      lng: -73.61583834278646,
    },
    {
      pavillon: "Pavillon André-Aisenstadt",
      lat: 45.501118321893316,
      lng: -73.6158027337848,
    },
    {
      pavillon: "Pavillon Claire-McNicoll",
      lat: 45.50177979562059,
      lng: -73.61654496899769,
    },

    {
      pavillon: "Pavillon Lionel-Groulx",
      lat: 45.4992286213827,
      lng: -73.61811440328101,
    },
    {
      pavillon: "Pavillon Marie-Victorin",
      lat: 45.510619686954136,
      lng: -73.61164866212512,
    },
    {
      pavillon: "Pavillon Marguerite-D'Youville",
      lat: 45.509398466364736,
      lng: -73.61839316372183,
    },
    {
      pavillon: "Pavillon Paul-G.-Desmarais",
      lat: 45.500396996801676,
      lng: -73.61633066502466,
    },
    {
      pavillon: "Pavillon J.-A.-DeSève",
      lat: 45.50714348820753,
      lng: -73.61441639453919,
    },
    {
      pavillon: "Pavillon de la Faculté de l'aménagement",
      lat: 45.50463484932084,
      lng: -73.62119293577463,
    },
    {
      pavillon: "Pavillon de la Faculté de musique",
      lat: 45.50929993324537,
      lng: -73.60856773744851,
    },
    {
      pavillon: "Pavillon J.-Armand-Bombardier",
      lat: 45.50319960914957,
      lng: -73.61299058051966,
    },
    {
      pavillon: "Pavillon Marcelle-Coutu",
      lat: 45.49999697231997,
      lng: -73.61521747657558,
    },
    {
      pavillon: "Pavillon Samuel-Bronfman",
      lat: 45.49942661426102,
      lng: -73.61633843067683,
    },
    {
      pavillon: "Pavillon Maximilien-Caron",
      lat: 45.49864611249791,
      lng: -73.61698298364878,
    },
    {
      pavillon: "Pavillon René-J.-A.-Lévesque",
      lat: 45.5013693622242,
      lng: -73.61503855240562,
    },
    {
      pavillon: "Pavillon Liliane-de-Stewart",
      lat: 45.50972366912569,
      lng: -73.61924582738257,
    },
    {
      pavillon: "Pavillon de la Direction des immeubles",
      lat: 45.50216858742022,
      lng: -73.61397216405996,
    },
    { pavillon: "Campus Mil", lat: 45.5231172783649, lng: -73.61966164943738 },
  ]);

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [sortedPavillons, setSortedPavillons] = useState<string[]>([]);

  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState
  );
  const [isBackToForeground, setIsBackToForeground] = useState(true);

  useEffect(() => {
    async function getCurrentLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status !== "granted") {
          console.info("Permission to access location was denied");
          return;
        }
  
        let position = await Location.getCurrentPositionAsync({});
  
        setLocation(position);
        console.log("Current Location: ", position);
      }
      console.log("FIRST USE EFFECT");
      getCurrentLocation();
  }, []);

  useEffect(() => {
    console.log("SECOND USE EFFECT");
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.info("Permission to access location was denied");
        return;
      }

      let position = await Location.getCurrentPositionAsync({});

      setLocation(position);
      console.log("Current Location: ", position);
    }

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState.match(/inactive|background/) && nextAppState === "active") {
        console.info("App has come back to the foreground!");
        setIsBackToForeground(true);
        getCurrentLocation();
        console.log("-----------------------------------------------------");
        console.log("-----------------------------------------------------");
        console.log("-----------------------------------------------------");
      } else {
        setIsBackToForeground(false);
      }
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, [appState]);

  useEffect(() => {
    if (location && coordinates.length > 0) {
      const userLat = location.coords.latitude;
      const userLng = location.coords.longitude;

      const sorted = coordinates
        .map((coord) => ({
          ...coord,
          distance: getDistanceFromLatLonInKm(
            userLat,
            userLng,
            coord.lat,
            coord.lng
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .map((coord) => coord.pavillon);

      setSortedPavillons(sorted);
      console.warn("Sorted Pavillons by Distance: ", sorted);
    }
  }, [location, coordinates]);

  // Function to calculate the distance between two coordinates
  function getDistanceFromLatLonInKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371; // Earth's radius in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  }

  function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

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
