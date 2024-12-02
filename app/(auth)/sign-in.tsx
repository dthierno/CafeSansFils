import Button from "@/components/common/Buttons/Button";
import COLORS from "@/constants/Colors";
import TYPOGRAPHY from "@/constants/Typography";
import { Link, router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function SignInScreen() {
  return (
    <View style={styles.signInContainer}>
      <View style={{
        marginVertical: 28,
      }}>
        <Image
          source={require("@/assets/images/placeholder/logo.png")}
          style={styles.logo}
          ></Image>
        <Text style={[TYPOGRAPHY.heading.large.bold, styles.heading]}>
          Connectez-vous à votre compte
        </Text>
        <View>
          <View>
            <Text style={[TYPOGRAPHY.body.normal.base, styles.textInputLabel]}>Adresse électronique</Text>
            <TextInput
              style={styles.textInput}
              placeholder="menum@cadum.ca"
              placeholderTextColor={COLORS.subtuleDark}
              returnKeyLabel="next"
              ></TextInput>
          </View>
          <View>
          <Text style={[TYPOGRAPHY.body.normal.base, styles.textInputLabel]}>Mot de passe</Text>
            <TextInput
              style={styles.textInput}
              placeholder="*******************"
              placeholderTextColor={COLORS.subtuleDark}
              returnKeyLabel="next"
              secureTextEntry={true}
              ></TextInput>
          </View>
          <Link href="/" style={[TYPOGRAPHY.body.normal.semiBold, { alignSelf: "flex-end" }]}>Mot de passe oublié ?</Link>
        </View>

        <Button onPress={() => router.navigate("/sign-up")} style={{
          marginTop: 24,
          marginBottom: 28,
        }}>Se connecter</Button>

        <View style={styles.sectionDivider}>
          <View style={styles.divider}></View>
          <Text style={[TYPOGRAPHY.body.normal.base, { textAlign: "right" }]}>Ou</Text>
          <View style={styles.divider}></View>
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialButtonInnerContainer}>
            <Image source={require("@/assets/images/onboarding/google.png")} style={{width: 24, height: 24}}></Image>
            <Text style={[TYPOGRAPHY.body.large.semiBold, { textAlign: "center" }]}>Continuer avec Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialButtonInnerContainer}>
            <Image source={require("@/assets/images/onboarding/facebook.png")} style={{width: 24, height: 24}}></Image>
            <Text style={[TYPOGRAPHY.body.large.semiBold, { textAlign: "center" }]}>Continuer avec Facebook</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.otherOptionText}>
          <Text style={TYPOGRAPHY.body.normal.base}>Pas de compte?</Text>
          <Link href={"/sign-up"} style={TYPOGRAPHY.body.normal.semiBold}>Créez un compte</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otherOptionText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
  },
  socialButtonInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 10,
    boxShadow: "0px 1px 2px 0px rgba(228, 229, 231, 0.24)",
    borderColor: "#EDF1F3",
    borderWidth: 1,
    marginBottom: 16,
  },
  sectionDivider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 2,
    backgroundColor: "#EDF1F3",
  },
  signInContainer: {
    paddingHorizontal: 32,
    paddingVertical: 32,
  },
  logo: {
    alignSelf: "center",
    width: 135,
    height: 24,
    marginBottom: 32,
  },
  heading: {
    textAlign: "center",
    letterSpacing: -1,
    lineHeight: 40,
    marginBottom: 28,
  },
  textInputLabel: {
    paddingVertical: 8,
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EDF1F3",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxShadow: "0px 1px 2px 0px rgba(228, 229, 231, 0.24)",
    color: "#000000",
    marginBottom: 12,
  },
});
