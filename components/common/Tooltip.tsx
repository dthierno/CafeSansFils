import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronDown, Circle, LucideIcon } from "lucide-react-native";

// Constants
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";

type TooltipProps = {
  /** Text label to display inside the tooltip */
  label: string;

  /** Optional status indicator to determine the icon's color and behavior */
  status?: "green" | "orange" | "red";

  /** Optional custom icon to display at the start of the tooltip */
  Icon?: LucideIcon;

  /** Whether to show the chevron icon at the end of the tooltip (default: true) */
  showChevron?: boolean;

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
  onPress,
}: TooltipProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.tooltipContainer}
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
              color={COLORS.black}
              testID="tooltip-icon"
            />
          )}
        </View>
      )}

      {/* Label */}
      <Text
        style={[
          TYPOGRAPHY.body.normal.semiBold,
          styles.tooltipText,
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
          color={COLORS.black}
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
    backgroundColor: COLORS.lightGray,
    borderRadius: 500, // Rounded appearance
    gap: SPACING.xxs, // Space between elements
  },
  iconContainer: {
    marginRight: SPACING.xxs, // Space between icon and label
  },
  tooltipText: {
    color: COLORS.black,
  },
});