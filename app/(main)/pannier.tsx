import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ScrollableLayout from '@/components/layouts/ScrollableLayout'

export default function PannierScreen() {
  return (
    <ScrollableLayout>
      <SafeAreaView>
        <Text>PannierScreen</Text>
      </SafeAreaView>
    </ScrollableLayout>
  )
}