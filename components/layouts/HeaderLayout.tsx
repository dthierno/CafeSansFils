import { View, StyleSheet } from "react-native";

import SPACING from "@/constants/Spacing";
import COLORS from "@/constants/Colors";

import AccountInfo from "@/components/common/Auth/AccountInfo";
import IconButton from "@/components/common/Buttons/IconButton";

export const user = {
  fullName: "Darlene Robertson",
  profilePicture: require("../../assets/images/placeholder/ProfilePicture.png"),
};

export default function HeaderLayout() {
  return (
    <View style={styles.headerContainer} testID="header-container">
      <AccountInfo
        profilePicture={user.profilePicture}
        profileName={user.fullName}
      />
      <IconButton />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
});
