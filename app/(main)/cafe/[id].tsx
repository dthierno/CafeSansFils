import IconButton from "@/components/common/Buttons/IconButton";
import ScrollableLayout from "@/components/layouts/ScrollableLayout";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";
import { Link, router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, Heart, Locate, Search } from "lucide-react-native";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

export default function CafeScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollableLayout>
      <View>
        <Image
          style={{
            borderBottomLeftRadius: SPACING["7xl"],
            borderBottomRightRadius: SPACING["7xl"],
          }}
          source={require("@/assets/images/placeholder/image2xl.png")}
        />

        <View style={{position: "absolute", flexDirection: "row", justifyContent: "space-between", alignItems: "center" ,width: "100%", paddingHorizontal: 16, marginTop: SPACING["9xl"]}}>
          <IconButton
            Icon={ArrowLeft}
            onPress={() => router.back()}
            style={{ backgroundColor: "white"
            }}
          ></IconButton>

          <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
          <IconButton
            Icon={Search}
            style={{ backgroundColor: "white", 
            }}
          ></IconButton>
          <IconButton
            Icon={Locate}
            style={{ backgroundColor: "white"
            }}
          ></IconButton>
          <IconButton
            Icon={Heart}
            style={{ backgroundColor: "white"
            }}
          ></IconButton>
          </View>

        </View>
      </View>
      <View>
        <Text
          style={[
            TYPOGRAPHY.heading.medium.bold,
            {
              marginHorizontal: SPACING["md"],
              marginTop: SPACING["2xl"],
              textAlign: "center",
            },
          ]}
        >
          {id}
        </Text>
        <Text
          style={[
            TYPOGRAPHY.body.large.base,
            {
              marginHorizontal: SPACING["md"],
              lineHeight: 21,
              marginTop: SPACING["xs"],
              textAlign: "center",
            },
          ]}
        >
          Accédez facilement à toutes les options de restauration du campus en
          un seul endroit.
        </Text>
      </View>
    </ScrollableLayout>
  );
}
