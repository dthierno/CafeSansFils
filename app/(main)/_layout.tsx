import HeaderLayout from '@/components/layouts/HeaderLayout';
import TYPOGRAPHY from '@/constants/Typography';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

// TODO: Find better icons and replace the FontAwesome icons.

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarInactiveTintColor: "#89898D" }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    header: () => <HeaderLayout/>,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
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
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="shopping-basket" color={color} />,
                    tabBarLabelStyle: TYPOGRAPHY.body.small.bold,
                }}
            />
            <Tabs.Screen
                name="parametre"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
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
