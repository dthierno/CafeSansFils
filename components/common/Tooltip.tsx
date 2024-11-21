import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { ChevronDown, Circle, LucideIcon } from "lucide-react-native";

// Constants
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";
import { useModal } from "../layouts/GlobalModal";

type TooltipProps = {
  /** Text label to display inside the tooltip */
  label: string;

  /** Optional status indicator to determine the icon's color and behavior */
  status?: "green" | "orange" | "red";

  /** Optional custom icon to display at the start of the tooltip */
  Icon?: LucideIcon;

  /** Whether to show the chevron icon at the end of the tooltip (default: true) */
  showChevron?: boolean;

  /** Whether to change the tooltip color when pressed (default: false) */
  changeColorOnPress?: boolean;

  /** Callback function triggered when the tooltip is pressed */
  onPress?: () => void;
};

/**
 * ## Tooltip
 *
 * A versatile tooltip component for displaying labels, optional status indicators,
 * and interactive chevrons. The tooltip supports custom icons, dynamic statuses,
 * and press interactions.
 *
 * ### Features
 * - Customizable status (`green`, `orange`, `red`) with default circular icons.
 * - Optional chevron icon to indicate expandable content or actions.
 * - Supports custom icons for further flexibility.
 * - Pressable for interactions (e.g., navigating or triggering actions).
 *
 * ### Example Usage
 *
 * **Basic Example**
 * ```tsx
 * <Tooltip
 *   label="Open"
 *   status="green"
 * />
 * ```
 *
 * **With Custom Icon**
 * ```tsx
 * import { Globe } from "lucide-react-native";
 *
 * <Tooltip
 *   label="Global"
 *   Icon={Globe}
 *   onPress={() => console.log("Tooltip pressed!")}
 * />
 * ```
 *
 * **Without Chevron**
 * ```tsx
 * <Tooltip
 *   label="Details"
 *   status="orange"
 *   showChevron={false}
 * />
 * ```
 *
 * @param TooltipProps - Props for the Tooltip component.
 * @returns {JSX.Element} The rendered tooltip component.
 */
export default function Tooltip({
  label,
  status,
  Icon = status && Circle, // Default to Circle if a status is provided
  showChevron = true,
  changeColorOnPress = false,
  onPress,
}: TooltipProps): JSX.Element {
  const [isPressed, setIsPressed] = React.useState(false);

  const modalContext = useModal();
  const openModal = modalContext ? modalContext.openModal : () => {};
  const closeModal = modalContext ? modalContext.closeModal : () => {};

  function handleCloseModal() {
    closeModal();
    setIsPressed(true);
  };
  
  function handleResetModal() {
    closeModal();
    setIsPressed(false);
  };

  function handlePress() {
    !showChevron && setIsPressed(!isPressed);

    if (showChevron) {
      openModal(
        <View>
          <Text
            style={[TYPOGRAPHY.heading.medium.bold, { textAlign: "center" }]}
          >
            {label}
          </Text>
          <Text
            style={[TYPOGRAPHY.body.large.medium, { textAlign: "center", margin: SPACING.md }]}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            nostrum accusantium autem eos vero consequatur reiciendis quae
            tenetur possimus sit! 
          </Text>

          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Appliquer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleResetModal} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Réintialiser</Text>
          </TouchableOpacity>
        </View>
      );
    } 
    if (onPress) onPress();
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.tooltipContainer,
        changeColorOnPress
          ? isPressed
            ? { backgroundColor: COLORS.black }
            : { backgroundColor: COLORS.lightGray }
          : { backgroundColor: COLORS.lightGray },
      ]}
      activeOpacity={0.7}
      testID="tooltip-container"
    >
      {/* Icon if provided */}
      {Icon && (
        <View style={styles.iconContainer}>
          {status === "green" ? (
            <Icon
              width={12}
              height={12}
              strokeWidth={3}
              color={COLORS.status.green}
              fill={COLORS.status.green}
              testID="tooltip-icon"
            />
          ) : status === "orange" ? (
            <Icon
              width={12}
              height={12}
              strokeWidth={3}
              color={COLORS.status.orange}
              fill={COLORS.status.orange}
              testID="tooltip-icon"
            />
          ) : status === "red" ? (
            <Icon
              width={12}
              height={12}
              strokeWidth={3}
              color={COLORS.status.red}
              fill={COLORS.status.red}
              testID="tooltip-icon"
            />
          ) : (
            <Icon
              width={14}
              height={14}
              strokeWidth={3}
              color={
                changeColorOnPress
                  ? isPressed 
                    ? COLORS.white
                    : COLORS.black
                  : COLORS.black
              }
              testID="tooltip-icon"
            />
          )}
        </View>
      )}

      {/* Label */}
      <Text
        style={[
          TYPOGRAPHY.body.normal.semiBold,
          changeColorOnPress
            ? isPressed
              ? { color: COLORS.white }
              : { color: COLORS.black }
            : { color: COLORS.black },
          !showChevron && { marginRight: SPACING.xxs }, // Adjust margin if no chevron
        ]}
      >
        {label}
      </Text>

      {/* Chevron Down if enabled */}
      {showChevron && (
        <ChevronDown
          width={16}
          height={16}
          strokeWidth={2.8}
          color={ isPressed? COLORS.white : COLORS.black}
          testID="chevron-down"
        />
      )}
    </TouchableOpacity>
  );
}

// Styles
const styles = StyleSheet.create({
  tooltipContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.md,
    paddingVertical: 10,
    borderRadius: 500, // Rounded appearance
    gap: SPACING.xxs, // Space between elements
  },
  iconContainer: {
    marginRight: SPACING.xxs, // Space between icon and label
  },
  closeButton: {
    marginTop: SPACING.md,
    alignSelf: "center",
    backgroundColor: COLORS.black,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  resetButton: {
    alignSelf: "center",
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SPACING.xs,
  },
  closeButtonText: {
    color: COLORS.white,
    ...TYPOGRAPHY.body.large.semiBold,
  },
  resetButtonText: {
    color: COLORS.black,
    ...TYPOGRAPHY.body.large.semiBold,
  },
});
