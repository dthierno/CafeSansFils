import ScrollableLayout from '@/components/layouts/ScrollableLayout';
import SPACING from '@/constants/Spacing';
import TYPOGRAPHY from '@/constants/Typography';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ArticleScreen() {
  const { articleId } = useLocalSearchParams();
  console.log('id', articleId)
  return (
    <ScrollableLayout>
        <Text style={[TYPOGRAPHY.body.large.medium, { marginTop: SPACING['10xl'] }]} >Details sur Café {articleId}</Text>
    </ScrollableLayout>
  );
}
