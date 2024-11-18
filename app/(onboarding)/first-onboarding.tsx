import React from 'react'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function FirstOnboardingScreen() {
  return (
    <>
      <Text>FirstOnboardingScreen</Text>
      <Link href="/second-onboarding">Suivant</Link>
    </>
  )
}