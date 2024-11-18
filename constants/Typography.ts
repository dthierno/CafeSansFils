import { StyleSheet } from 'react-native';

export const Typography = StyleSheet.create({
  // Headings using Poppins
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    lineHeight: 32,
  },
  h3: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    lineHeight: 28,
  },
  
  // Body text using Inter
  bodyLarge: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
  },
  
  // Other variations
  button: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
  },
}); 