import React from 'react'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import OnboardingLayout from '@/components/layouts/OnboardingLayout'

export default function FirstOnboardingScreen() {
  return (
    <>
      <Text>FirstOnboardingScreen</Text>
      <Link href="/second-onboarding">Suivant</Link>
      <OnboardingLayout 
        id={1} // Just to say that this is the first onboarding screen
        title="Tous vos cafés un coup d'oeil"
        description="Accédez facilement à toutes les options de restauration du campus en un seul endroit."
      />
    </>
  )
}