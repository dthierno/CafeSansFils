import { Image, Text, View, StyleSheet } from "react-native";

import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";

type AccountInfoProps = {
  title?: string;
  profileName: string;
  profilePicture: any;
};

export default function AccountInfo({
  title = "Bonjour et Bienvenue",
  profileName,
  profilePicture,
}: AccountInfoProps) {
  return (
    <View style={styles.accountContainer}>
      <Image source={profilePicture} style={styles.profilePicture} testID="header-account-image"/>
      <View>
        <Text style={[styles.welcomeText, TYPOGRAPHY.body.normal.base]}>
          {title}
        </Text>
        <Text style={[styles.userFullName, TYPOGRAPHY.heading.small.bold]}>
          {profileName}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
  },
  profilePicture: {
    width: SPACING["8xl"],
    height: SPACING["8xl"],
    borderRadius: "100%",
    borderWidth: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  welcomeText: {},
  userFullName: {
    color: COLORS.black,
  },
});
