import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={styles.headerContainer} testID="header-container">
      <AccountInfo
        profilePicture={user.profilePicture}
        profileName={user.fullName}
      />
      <IconButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SPACING.md,
    paddingBottom: -SPACING.lg,
    paddingTop: SPACING.sm, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
  },
});
