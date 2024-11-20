import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Circle } from "lucide-react-native";

// Constants
import TYPOGRAPHY from "@/constants/Typography";
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";

type CafeCardProps = {
  status: "open" | "closing soon" | "closed";

  /** The name of the cafe */
  name: string;

  /** The location of the cafe */
  location: string;

  /** The price range of the cafe */
  priceRange: string;

  /** The rating of the cafe */
  rating: number;
};

const IMAGE_WIDTH = 318;

export default function CafeCard({
  status = "open",
  name = "Jean Brillant",
  location = "Pavillon Claire McNicole",
  priceRange = "$$",
  rating = 4.8,
}: CafeCardProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/placeholder/imagemd.png")}
          width={IMAGE_WIDTH}
          height={180}
          style={{ borderRadius: SPACING["sm"] }}
        />
        <Text
          style={[
            TYPOGRAPHY.body.small.bold,
            styles.priceRangeIcon,
            styles.rating,
          ]}
          testID="icon-button"
        >
          4.8
        </Text>
      </View>
      <View style={styles.caption}>
        <View style={styles.cafeInfo}>
          <View style={styles.cafeInfoHeader}>
            <Text style={[TYPOGRAPHY.body.large.semiBold]}>Jean Brillant</Text>
            <Circle
              width={12}
              height={12}
              strokeWidth={1}
              color={
                status === "open"
                  ? COLORS.status.green
                  : status === "closing soon"
                  ? COLORS.status.orange
                  : COLORS.status.red
              }
              fill={
                status === "open"
                  ? COLORS.status.green
                  : status === "closing soon"
                  ? COLORS.status.orange
                  : COLORS.status.red
              }
              testID="tooltip-icon"
            />
          </View>
          <Text
            style={[TYPOGRAPHY.body.normal.semiBold, styles.cafeInfoLocation]}
          >
            Pavillon Claire McNicole
          </Text>
        </View>
        <Text
          style={[TYPOGRAPHY.body.normal.base, styles.priceRangeIcon]}
          testID="icon-button"
        >
          $$
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: IMAGE_WIDTH,
  },
  caption: {
    marginTop: SPACING["lg"],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cafeInfo: {
    gap: SPACING["xxs"],
  },
  cafeInfoHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING["xs"],
  },
  cafeInfoLocation: {
    color: COLORS.black45,
  },
  priceRangeIcon: {
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: SPACING.xs,
    paddingVertical: SPACING.xs,
    borderRadius: 500,
    justifyContent: "center",
  },
  rating: {
    position: "absolute",
    top: SPACING.sm,
    right: SPACING.sm,
    backgroundColor: COLORS.white, // FIXME: Remove this
  },
});
