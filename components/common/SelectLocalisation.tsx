import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  View,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { StyleProp, ViewStyle } from "react-native";

import { ChevronDown, Filter, MapPin, Pin } from "lucide-react-native";

import TYPOGRAPHY from "@/constants/Typography";
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";
import { useModal } from "../layouts/GlobalModal";
import FilterModalLayout from "../layouts/FilterModalLayout";
import { pavillonCoordinates } from "@/constants/Coordinates";
import { useEffect, useState } from "react";

type SelectLocalisationProps = {
  currentLocalisation: string;
  location: Location.LocationObject;
  style?: StyleProp<ViewStyle>;
};

export default function SelectLocalisation({
  currentLocalisation,
  location,
  style,
}: SelectLocalisationProps) {
  const [localisation, setLocalisation] = useState("");
  const [isCurrentLocalisationModified, setisCurrentLocalisationModified] = useState(false);
  const [locationLoaded, setLocationLoaded] = useState("");

  useEffect(() => {}, [localisation]);

  const modalContext = useModal();
  const openModal = modalContext ? modalContext.openModal : () => {};
  const closeModal = modalContext ? modalContext.closeModal : () => {};

  let i: string;

  function handleMarkerPress(pressedLocation: string) {
    console.warn("`handleMarkerPress` function not implemented.");
    setLocalisation(pressedLocation);
    i = pressedLocation;
    console.log(pressedLocation);
  }

  function handleApplyFilter() {
    console.warn("`handleApplyFilter` function not implemented.");
    console.log(i);
    setLocationLoaded(i);
    console.log(locationLoaded);
    setLocalisation("");
    setisCurrentLocalisationModified(true);
    closeModal();
  }

  function handleResetFilter() {
    console.warn("`handleResetFilter` function not implemented.");
    setisCurrentLocalisationModified(false);
    closeModal();
  }

  function handlePress(event: GestureResponderEvent): void {
    console.warn("`handlePress` function not implemented.");
    openModal(
      <FilterModalLayout
        title="Localisation"
        handleApplyFilter={handleApplyFilter}
        handleResetFilter={handleResetFilter}
      >
        <MapView
          style={{
            width: "100%",
            height: 400,
            borderRadius: 20,
            marginTop: 16,
          }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          showsMyLocationButton
          showsTraffic
          minZoomLevel={10}
          cameraZoomRange={
            {
              maxCenterCoordinateDistance: 3000,
            }
          }
          mapType="standard"
        >
          {pavillonCoordinates.map((coordinate, index) =>
            coordinate.pavillon === ( isCurrentLocalisationModified? locationLoaded : currentLocalisation) ? (
              <Marker
                key={index}
                coordinate={{
                  latitude: coordinate.lat,
                  longitude: coordinate.lng,
                }}
              >
                <Callout>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: SPACING.xs,
                  }}>
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 100,
                        backgroundColor: COLORS.status.red,
                      }}
                    />
                    <Text
                      style={[
                        TYPOGRAPHY.body.normal.semiBold,
                        { color: COLORS.black },
                      ]}
                    >
                      {coordinate.pavillon}
                    </Text>
                  </View>
                </Callout>
              </Marker>
            ) : (
              <Marker
                key={index}
                coordinate={{
                  latitude: coordinate.lat,
                  longitude: coordinate.lng,
                }}
                title={coordinate.pavillon}
                pinColor="blue"
                onPress={() => handleMarkerPress(coordinate.pavillon)}
              >
                <Callout>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: SPACING.xs,
                  }}>
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 100,
                        backgroundColor: 'blue',
                      }}
                    />
                    <Text
                      style={[
                        TYPOGRAPHY.body.normal.semiBold,
                        { color: COLORS.black },
                      ]}
                    >
                      {coordinate.pavillon}
                    </Text>
                  </View>
                </Callout>
              </Marker>
            )
          )}
        </MapView>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: SPACING.xs,
            gap: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: SPACING.xs,
              padding: SPACING.xs,
            }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 100,
                backgroundColor: COLORS.status.red,
              }}
            />
            <Text style={{
              ...TYPOGRAPHY.body.normal.semiBold,
            }}>Votre pavillon</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: SPACING.xs,
              padding: SPACING.xs,
            }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 100,
                backgroundColor: "blue",
              }}
            />
            <Text style={{
              ...TYPOGRAPHY.body.normal.semiBold,
            }}>Autres pavillons</Text>
          </View>
        </View>
          <Text style={{
            ...TYPOGRAPHY.body.normal.base,
            textAlign: "center",
            marginBlock: SPACING.md,
            paddingHorizontal: SPACING.lg,
            lineHeight: 18,
          }}>
            Selectionnez le pavillon de votre choix
            puis appuyez sur le bouton "Appliquer"
            pour confirmer votre choix.
          </Text>
      </FilterModalLayout>
    );
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[style, styles.selectLocalisationContainer]}
      activeOpacity={0.5}
      testID="select-localisation-container"
    >
      <MapPin
        width={SPACING.md}
        height={SPACING.md}
        strokeWidth={2.5}
        color={COLORS.subtuleDark}
        testID="map-pin"
      />
      <Text
        style={[TYPOGRAPHY.body.normal.semiBold, styles.localisationText]}
        testID="localisation-text"
      >
        {isCurrentLocalisationModified? locationLoaded : currentLocalisation}
      </Text>
      <ChevronDown
        width={SPACING.lg}
        height={SPACING.lg}
        strokeWidth={2.5}
        color={COLORS.subtuleDark}
        testID="chevron-down"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectLocalisationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
    padding: SPACING.xs,
  },
  localisationText: {
    marginLeft: SPACING.xxs,
    color: COLORS.subtuleDark,
  },
});
