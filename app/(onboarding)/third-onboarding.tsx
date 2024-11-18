import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function ThirdOnboardingScreen() {
  return (
    <>
      <Text>ThirdOnboardingScreen</Text>
      <Link href="/sign-in">Continuer</Link>
    </>
  )
}