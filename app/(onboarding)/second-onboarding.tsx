import React from 'react';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';


export default function SecondOnboardingScreen() {
  return (
    <>
      <Text>SecondOnboardingScreen</Text>
      <Link href="/third-onboarding">Suivant</Link>
    </>
  )
}