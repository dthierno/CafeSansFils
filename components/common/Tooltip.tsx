import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronDown, Globe, LucideIcon } from "lucide-react-native";

import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";

type TooltipProps = {
  label: string;
  status?: "green" | "orange" | "red"; 
  Icon?: LucideIcon; 
  showChevron?: boolean; 
  onPress?: () => void; 
};

export default function Tooltip({
  label,
  status,
  Icon = Globe,
  showChevron = true,
  onPress,
}: TooltipProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.tooltipContainer}
      activeOpacity={0.7}
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
            />
          ) : status === "orange" ? (
            <Icon
              width={12}
              height={12}
              strokeWidth={3}
              color={COLORS.status.orange}
              fill={COLORS.status.orange}
            />
          ) : status === "red" ? (
            <Icon
              width={12}
              height={12}
              strokeWidth={3}
              color={COLORS.status.red}
              fill={COLORS.status.red}
            />
          ) : (
            <Icon width={14} height={14} strokeWidth={3} color={COLORS.black} />
          )}
        </View>
      )}

      {/* Label */}
      <Text
        style={[
          TYPOGRAPHY.body.normal.semiBold,
          styles.tooltipText,
          !showChevron && { marginRight: SPACING.xxs },
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

const styles = StyleSheet.create({
  tooltipContainer: {
    marginHorizontal: 16,
    marginVertical: 28,

    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: COLORS.lightGray,
    borderRadius: 500,
    gap: SPACING.xxs,
  },
  iconContainer: {
    marginRight: SPACING.xxs,
  },
  tooltipText: {
    color: COLORS.black,
  },
});
