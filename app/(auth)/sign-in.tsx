import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function SignInScreen() {
  return (
    <>
      <Text>SignInScreen</Text>
      <Link href="/sign-up">Continuer</Link>
    </>
  )
}