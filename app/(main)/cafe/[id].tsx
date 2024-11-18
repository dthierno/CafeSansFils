import ScrollableLayout from '@/components/layouts/ScrollableLayout';
import SPACING from '@/constants/Spacing';
import TYPOGRAPHY from '@/constants/Typography';
import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function CafeScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollableLayout>
        <Text style={[TYPOGRAPHY.body.large.medium, { marginTop: SPACING['10xl'] }]} >Details sur Café {id}</Text>
        <Link href="/cafe/article/Americano" style={[TYPOGRAPHY.body.large.medium, {marginTop: SPACING.xs}]}>
            {">"} Go to the individual coffee screen
        </Link>
    </ScrollableLayout>
  );
}
