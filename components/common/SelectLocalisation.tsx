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
import { useModal } from "../layouts/GlobalModal";
import InfoModalLayout from "../layouts/InfoModalLayout";

type SelectLocalisationProps = {
  currentLocalisation: string;
  style?: StyleProp<ViewStyle>;
};

export default function SelectLocalisation({
  currentLocalisation,
  style,
}: SelectLocalisationProps) {
  const modalContext = useModal();
  const openModal = modalContext ? modalContext.openModal : () => {};
  const closeModal = modalContext ? modalContext.closeModal : () => {};
  function handlePress(event: GestureResponderEvent): void {
    console.warn("`handlePress` function not implemented.");
    openModal(
        <InfoModalLayout
            title="Localisation"
            buttonTitle="Fermer"
            buttonAction={() => closeModal()}
        />
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
