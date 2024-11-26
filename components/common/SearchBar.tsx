import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from "react";

import { 
	ShoppingBasket,
	Search, 
	SlidersHorizontal,
	ChevronDown, 
	MapPin
} from "lucide-react-native";

// Constants
import TYPOGRAPHY from '@/constants/Typography';
import COLORS from '@/constants/Colors';
import SPACING from '@/constants/Spacing'; 

export default function SearchBar() {
    const [text, setText] = useState('');  
  return (
    <View style={styles.container}>
        <View style={styles.locationContainer}>
            <MapPin style={styles.mapIcon} strokeWidth={2.5} size={20}/>
            <Text style={styles.textLocation}>Pavillon Jean-Brillant</Text>
            <ChevronDown style={styles.downArrowIcon} strokeWidth={2.5} size={20}/>
        </View>
        <View style={styles.inputContainer}>
            <Search style={styles.searchIcon} strokeWidth={3.5} size={20}/>
            <TextInput
                placeholder="Rechercher les cafés, les plats"
                value={text}
                onChangeText={setText}
                style={styles.textInput}
                placeholderTextColor={COLORS.subtuleDark}
                maxLength={30}
                
            />
            <SlidersHorizontal style={styles.slidersIcon} strokeWidth={3} size={20}/>
        </View>
    
    </View>

    
)}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    inputContainer: {
      backgroundColor: COLORS.lightGray,
      alignItems: 'center',
      paddingHorizontal: 10,
      flexDirection: 'row',
      borderRadius: 40,
      width: '85%',
      height: 50,
      
    },
    locationContainer:{
      alignItems: 'center',
      paddingHorizontal: 10,
      flexDirection: 'row',
      paddingTop: SPACING.md,
      paddingBottom: SPACING.xs
      
    },
    searchIcon:{
        marginRight: SPACING.md,
        color: COLORS.subtuleDark
    },
    slidersIcon:{
        marginLeft: SPACING.md * 2,
        color: COLORS.subtuleDark,
        position: 'absolute', 
        right: 10, 
    },
    downArrowIcon:{
        marginRight: SPACING.md,
        color: COLORS.subtuleDark
    },
    mapIcon:{
        marginRight: SPACING.md + SPACING.xs,
        color: COLORS.subtuleDark,
 
    },
    textInput:{
        ...TYPOGRAPHY.component.homeSearchText,
        color: COLORS.subtuleDark,
    },
    textLocation:{
       ...TYPOGRAPHY.body.normal.semiBold,
       marginRight: SPACING.xs

    }
  });