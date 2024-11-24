import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

type LocationType = Location.LocationObject | null;


/**
 * Hook to get the current location of the device.
 * 
 * Note: This hook runs only once when the component first mounts.
 * It does not run again when the user comes back to the app.
 * For that, use `useOnForegroundBack` hook.
 * 
 * @returns [`location`, `setLocation`, `getCurrentLocation`]
 * 
 * `location`: The current location of the device.
 * 
 * `setLocation`: Function to set the location.
 * 
 * `getCurrentLocation`: Function to get the current location of the device.
 * 
 */
export default function useLocation() {
  const [location, setLocation] = useState<LocationType>(null);

  async function getCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.info("Permission to access location was denied");
      return;
    }

    let position = await Location.getCurrentPositionAsync({});

    setLocation(position);
    console.log("Current Location: ", position.coords.longitude, position.coords.latitude);
  }

  useEffect(() => {
    console.log("FIRST USE EFFECT");
    getCurrentLocation();
  }, []);

    return [location, setLocation, getCurrentLocation] as const;
}
