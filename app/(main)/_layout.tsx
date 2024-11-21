import HeaderLayout from '@/components/layouts/HeaderLayout';
import TYPOGRAPHY from '@/constants/Typography';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Home, Settings, ShoppingBasket } from 'lucide-react-native';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarInactiveTintColor: "#89898D" }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    header: () => <HeaderLayout/>,
                    tabBarIcon: ({ color }) => <Home size={28} color={color} />,
                    tabBarLabelStyle: TYPOGRAPHY.body.small.bold,
                }}
            />
            <Tabs.Screen
                name="favoris"
                options={{
                    title: 'Favoris',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="heart" color={color} />,
                    tabBarLabelStyle: TYPOGRAPHY.body.small.bold,
                }}
            />
            <Tabs.Screen
                name="pannier"
                options={{
                    title: 'Pannier',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <ShoppingBasket size={28} color={color} />,
                    tabBarLabelStyle: TYPOGRAPHY.body.small.bold,
                }}
            />
            <Tabs.Screen
                name="parametre"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Settings size={28} color={color} />,
                    tabBarLabelStyle: TYPOGRAPHY.body.small.bold,
                }}
            />
            <Tabs.Screen
                name="cafe/[id]"
                options={{
                    href: null,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="cafe/article/[articleId]"
                options={{
                    href: null,
                    headerShown: false,
                }}
            />
        </Tabs>
  );
}
