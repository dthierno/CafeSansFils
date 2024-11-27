import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from "react";
import axios from "axios";

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
    const [data, setData] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://cafesansfil-api-r0kj.onrender.com/api/cafes");
                const names = response.data.map((cafe: { name: string }) => cafe.name);
                setData(names)
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    setError(err.message); // Handle Axios errors
                } else {
                    setError("An unknown error occurred"); // Generic error message
                }
            }
        };

        fetchData();
    }, []);

    const findCafe = () => {
 
        const lowerCaseSearch = text.toLowerCase();

        const isMatch = data.some((cafe) => cafe.toLowerCase().includes(lowerCaseSearch));
        const filteredCafes = data.filter((cafe) => cafe.toLowerCase().includes(lowerCaseSearch));

         if(isMatch){
            const match = filteredCafes.join(`,`)
            setSearch(match);
         }else{
            setSearch("No match found");
         }
         
      };

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
                onSubmitEditing={findCafe}
                style={styles.textInput}
                placeholderTextColor={COLORS.subtuleDark}
                maxLength={30}
                
            />
            <SlidersHorizontal style={styles.slidersIcon} strokeWidth={3} size={20}/>
        </View>
        <Text>Search Results: {search}</Text>
    
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
        padding:10,
        minWidth: "60%"

    },
    textLocation:{
       ...TYPOGRAPHY.body.normal.semiBold,
       marginRight: SPACING.xs

    }
  });