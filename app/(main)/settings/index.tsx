import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import React from "react";
import ScrollableLayout from "@/components/layouts/ScrollableLayout";
import {
  ChevronRight,
  Package,
  Bell,
  Settings2,
  HelpCircle,
  Info,
} from "lucide-react-native";
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";
import Divider from "@/components/common/Divider";

// Menu item interface for type safety
interface MenuItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress: () => void;
}

export default function ParametreScreen() {
  const pulseAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Menu items data with their respective icons and actions
  const menuItems: MenuItem[] = [
    {
      icon: <Package size={26} strokeWidth={2.5} color={COLORS.black} />,
      title: "Mes commandes",
      subtitle: "Consultez vos commandes et transactions passées.",
      onPress: () => console.log("Orders pressed"),
    },
    {
      icon: <Bell size={26} strokeWidth={2.5} color={COLORS.black} />,
      title: "Mes notifications",
      subtitle: "Configurez vos préférences de notification.",
      onPress: () => console.log("Notifications pressed"),
    },
    {
      icon: <Settings2 size={26} strokeWidth={2.5} color={COLORS.black} />,
      title: "Mes préférences",
      subtitle: "Gérez et personnalisez vos préférences.",
      onPress: () => console.log("Preferences pressed"),
    },
    {
      icon: <HelpCircle size={26} strokeWidth={2.5} color={COLORS.black} />,
      title: "Aide et support",
      subtitle: "Obtenez de l'aide et contactez le support.",
      onPress: () => console.log("Support pressed"),
    },
    {
      icon: <Info size={26} strokeWidth={2.5} color={COLORS.black} />,
      title: "À propos",
      subtitle: "En savoir plus sur nous et notre mission.",
      onPress: () => console.log("About pressed"),
    },
  ];

  // Render a single menu item
  const renderMenuItem = ({ icon, title, subtitle, onPress }: MenuItem) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} key={title}>
      <View style={styles.menuItemLeft}>
        {icon}
        <View style={styles.menuItemText}>
          <Text style={[TYPOGRAPHY.body.large.semiBold, styles.menuItemTitle, { fontSize: 15 }]}>
            {title}
          </Text>
          <Text style={[TYPOGRAPHY.body.small.base, styles.menuItemSubtitle,  { fontSize: 10.6 }]}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollableLayout>
      <SafeAreaView style={styles.container}>

        {/* User Profile Section */}
        <TouchableOpacity style={styles.profileSection}>
          <View style={styles.profileLeft}>
            <Image
              source={{ uri: "https://i.pravatar.cc/900" }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text
                style={[TYPOGRAPHY.heading.small.bold, styles.profileName]}
              >
                Darlene Robertson
              </Text>
              <Text
                style={[TYPOGRAPHY.body.small.base, styles.profileSubtitle,  { fontSize: 11 }]}
              >
                Gérez les informations de votre compte.
              </Text>
            </View>
          </View>
          <ChevronRight size={24} color={COLORS.black} strokeWidth={2.5} />
        </TouchableOpacity>

        {/* Menu Items */}
        <View style={styles.menuSection}>{menuItems.map(renderMenuItem)}</View>

        <Divider marginTop={16} marginBottom={4}></Divider>

        {/* System Status */}
        <View style={styles.systemStatus}>
          <Text style={[TYPOGRAPHY.body.normal.semiBold, styles.systemStatusTitle]}>
            État du système
          </Text>
          <View style={styles.systemStatusIndicator}>
            <View style={{ position: 'relative' }}>
              <Animated.View
                style={[
                  styles.pulsingDot,
                  {
                    transform: [{ scale: pulseAnim }],
                  },
                ]}
              />
              <View style={styles.statusDot} />
            </View>
            <Text style={[TYPOGRAPHY.body.small.bold, styles.systemStatusText]}>
              Opérationnel
            </Text>
          </View>
          <Text style={[TYPOGRAPHY.body.small.base, styles.systemStatusSubtext]}>
            Le système fonctionne correctement.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollableLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: COLORS.lightGray,
    borderTopColor: COLORS.lightGray,
    marginBottom: SPACING.lg,
    marginTop: 10,
    paddingHorizontal: SPACING.md,
  },
  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.md,
  },
  profileImage: {
    width: SPACING["9xl"],
    height: SPACING["9xl"],
    borderRadius: 100,
    borderWidth: 4,
    // borderColor: "rgba(0, 0, 0, 0.1)", // Not from any university
    borderColor: "rgba(0, 87, 172, .2)", // From University of Montreal
    // borderColor: "rgba(237, 27, 47, .2)", // From McGill University
  },
  profileInfo: {
    gap: SPACING.xxs,
  },
  profileName: {
    color: COLORS.black,
  },
  profileSubtitle: {
    color: COLORS.subtuleDark,
  },
  menuSection: {
    gap: 0,
    marginHorizontal: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: SPACING.md,

  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.md,
  },
  menuItemText: {
    gap: 5,
  },
  menuItemTitle: {
    color: COLORS.black,
  },
  menuItemSubtitle: {
    color: COLORS.subtuleDark,
  },
  systemStatus: {
    marginTop: SPACING.xl,
    padding: SPACING.lg,
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    gap: SPACING.sm,
    marginHorizontal: SPACING.md,
  },
  systemStatusTitle: {
    color: COLORS.black,
  },
  systemStatusIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.status.green,
    position: 'relative',
  },
  pulsingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.status.green,
    position: 'absolute',
    opacity: 0.5,
  },
  systemStatusText: {
    color: COLORS.status.green,
  },
  systemStatusSubtext: {
    color: COLORS.subtuleDark,
  },
});
