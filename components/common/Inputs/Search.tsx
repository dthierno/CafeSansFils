import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Search, Sliders, SlidersHorizontal } from "lucide-react-native";

import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";

type SearchBarProps = {
  placeholder?: string;
  onSearch: (text: string) => void;
  onFilter: () => void;
};

export default function SearchBar({
  placeholder = "Rechercher les cafés, les plats",
  onSearch,
  onFilter,
}: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <Search
        width={20}
        height={20}
        strokeWidth={3.5}
        color={COLORS.subtuleDark}
        accessibilityLabel="Search Icon"
      />

      <TextInput
        style={[TYPOGRAPHY.component.homeSearchText, styles.searchInput]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.subtuleDark}
        onChangeText={onSearch}
        returnKeyType="search"
      />

      <TouchableOpacity onPress={onFilter} style={styles.filterButton}>
        <SlidersHorizontal
          width={20}
          height={20}
          strokeWidth={3}
          color={COLORS.subtuleDark}
          accessibilityLabel="Filter Icon"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    borderRadius: 50, // Rounded corners
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  searchInput: {
    flex: 1,
    marginLeft: SPACING.md,
    color: COLORS.black,
  },
  filterButton: {
    marginLeft: SPACING.sm,
  },
});
