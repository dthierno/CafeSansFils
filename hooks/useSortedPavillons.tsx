import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { getDistanceFromLatLonInKm } from "@/utils/distance";
import useLocation from "@/hooks/useLocation";

interface PavillonCoordinate {
    pavillon: string;
    lat: number;
    lng: number;
}  

const coordinates: PavillonCoordinate[] = [
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
]

export default function useSortedPavillons(location: Location.LocationObject | null) {
  const [sortedPavillons, setSortedPavillons] = useState<string[]>([]);

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
  }, [location]);

  return sortedPavillons;
}