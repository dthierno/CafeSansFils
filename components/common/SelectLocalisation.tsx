import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { StyleProp, ViewStyle } from "react-native";

import { ChevronDown, MapPin } from "lucide-react-native";

import TYPOGRAPHY from "@/constants/Typography";
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";

type SelectLocalisationProps = {
  currentLocalisation: string;
  style?: StyleProp<ViewStyle>;
};

export default function SelectLocalisation({
  currentLocalisation,
  style,
}: SelectLocalisationProps) {
  function handlePress(event: GestureResponderEvent): void {
    console.log("`handlePress` function not implemented.");
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[style, styles.selectLocalisationContainer]}
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
        {currentLocalisation}
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
