import React, { useRef, useEffect, useState } from 'react';
import IconButton from "@/components/common/Buttons/IconButton";
import ArticleCard from "@/components/common/Cards/ArticleCard";
import CafeCard from "@/components/common/Cards/CafeCard";
import CategoryCard from "@/components/common/Cards/CategoryCard";
import Tooltip from "@/components/common/Tooltip";
import CardScrollableLayout from "@/components/layouts/CardScrollableLayout";
import ScrollableLayout from "@/components/layouts/ScrollableLayout";
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";
import TYPOGRAPHY from "@/constants/Typography";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useCafe } from "@/contexts/CafeContext";
import {
  ArrowLeft,
  CakeSlice,
  Coffee,
  CupSoda,
  Heart,
  Locate,
  Sandwich,
  Search,
} from "lucide-react-native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import axios from 'axios';

type Cafe = {
  name: string;
  description?: string;
  location: string | { pavillon: string; local: string };
  priceRange: "$" | "$$" | "$$$";
  rating: number;
  status: "open" | "closing soon" | "closed";
  slug: string;
  image_url?: string;
};

export default function CafeScreen() {
  const { id } = useLocalSearchParams();
  const scrollViewRef = useRef<ScrollView>(null);
  const { getCafe, loading, getProducts } = useCafe();
  const cafe = getCafe(id as string);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (cafe?.slug) {
        const cafeProducts = await getProducts(cafe.slug);
        setProducts(cafeProducts);
      }
    };
    fetchProducts();
  }, [cafe?.slug, getProducts]);

  if (loading) {
    return null; // Or return a loading spinner
  }

  const formatProductTitle = (title: string) => {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };

  const formatPrice = (price: string) => {
    return price.startsWith('$') ? price : `$${price}`;
  };

  const getCalories = (calories: string | undefined) => {
    return calories || '250 CALORIES';
  };

  const trendingProducts = products.slice(0, 5);
  const beverageProducts = products;
  const snackProducts = products;
  const pastryProducts = products;

  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={[{ backgroundColor: COLORS.white }]}>
      <View>
        <Image
          style={[styles.cafeBackgroundImage, { width: '100%', height: 521 }]}
          source={cafe?.image_url ? { uri: cafe.image_url } : require("@/assets/images/placeholder/image2xl.png")}
          resizeMode="cover"
        />

        <View style={styles.cafeHeaderButtons}>
          <IconButton
            Icon={ArrowLeft}
            onPress={() => router.back()}
            style={styles.cafeHeaderIconButtons}
          />
          <View style={styles.cafeHeaderButtonsRight}>
            <IconButton Icon={Search} style={styles.cafeHeaderIconButtons} />
            <IconButton Icon={Locate} style={styles.cafeHeaderIconButtons} />
            <IconButton Icon={Heart} style={styles.cafeHeaderIconButtons} />
          </View>
        </View>

        <View style={styles.cafeHeaderOpenStatus}>
          <Tooltip label={"Ouvert"} showChevron={true} status="green" />
        </View>
      </View>

      <View>
        <Text style={[TYPOGRAPHY.heading.medium.bold, styles.cafeName]}>
          {cafe?.name || ''}
        </Text>
        <Text style={[TYPOGRAPHY.body.large.base, styles.cafeDescription]}>
          {cafe?.description || 'Accédez facilement à toutes les options de restauration du campus en un seul endroit.'}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 40,
          backgroundColor: COLORS.lightGray,
          borderRadius: 10,
          paddingBlock: 28,
          paddingHorizontal: 28,
        }}
      >
        <Text
          style={[
            TYPOGRAPHY.body.large.semiBold,
            { color: COLORS.subtuleDark, textAlign: "center" },
          ]}
        >
          Appareils disponibles
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            gap: 10,
          }}
        >
          <Tooltip label="Micro-ondes" showChevron={false} color="white" />
          <Tooltip label="Presse Panini" showChevron={false} color="white" />
          <Tooltip label="Machine à café" showChevron={false} color="white" />
          <Tooltip
            label="Voir plus"
            showChevron={false}
            color="black"
            textColor="white"
          />
        </View>
      </View>

      <CardScrollableLayout
        outerMarginTop={40}
        title="Tendances actuelles"
        titleMarginTop={SPACING["xl"]}
        scrollMarginTop={SPACING["xs"]}
        scrollMarginBottom={SPACING["md"]}
        scrollGap={SPACING["xl"]}
        dividerBottom
        dividerTop
      >
        {trendingProducts.map((product) => (
          <ArticleCard
            key={`trending-${product.id}`}
            name={formatProductTitle(product.name)}
            calories={getCalories(product.calories)}
            price={formatPrice(product.price)}
            rating={product.rating}
            status={product.status}
            image={product.image_url}
            cafeSlug={cafe?.slug || ''}
            slug={product.id}
          />
        ))}
      </CardScrollableLayout>

      <CardScrollableLayout
        title="Catégories"
        titleMarginTop={SPACING["xl"]}
        scrollMarginTop={SPACING["xs"]}
        scrollMarginBottom={SPACING["md"]}
        scrollGap={SPACING["lg"]}
        dividerBottom
      >
        <CategoryCard name="Boissons" icon={CupSoda} />
        <CategoryCard name="Snacks" icon={Sandwich} />
        <CategoryCard name="Caffé" icon={Coffee} />
        <CategoryCard name="Patisserie" icon={CakeSlice} />
      </CardScrollableLayout>

      <CardScrollableLayout
        title="Boissons"
        titleMarginTop={SPACING["xl"]}
        scrollMarginTop={SPACING["xs"]}
        scrollMarginBottom={SPACING["md"]}
        scrollGap={SPACING["xl"]}
        dividerBottom
      >
        {beverageProducts.map((product) => (
          <ArticleCard
            key={`beverage-${product.id}`}
            name={formatProductTitle(product.name)}
            calories={getCalories(product.calories)}
            price={formatPrice(product.price)}
            rating={product.rating}
            status={product.status}
            image={product.image_url}
            cafeSlug={cafe?.slug || ''}
            slug={product.id}
          />
        ))}
      </CardScrollableLayout>

      <CardScrollableLayout
        title="Snacks"
        titleMarginTop={SPACING["xl"]}
        scrollMarginTop={SPACING["xs"]}
        scrollMarginBottom={SPACING["md"]}
        scrollGap={SPACING["xl"]}
        dividerBottom
      >
        {snackProducts.map((product) => (
          <ArticleCard
            key={`snack-${product.id}`}
            name={formatProductTitle(product.name)}
            calories={getCalories(product.calories)}
            price={formatPrice(product.price)}
            rating={product.rating}
            status={product.status}
            image={product.image_url}
            cafeSlug={cafe?.slug || ''}
            slug={product.id}
          />
        ))}
      </CardScrollableLayout>

      <CardScrollableLayout
        title="Patisserie"
        titleMarginTop={SPACING["xl"]}
        scrollMarginTop={SPACING["xs"]}
        scrollMarginBottom={SPACING["md"]}
        scrollGap={SPACING["xl"]}
        dividerBottom
      >
        {pastryProducts.map((product) => (
          <ArticleCard
            key={`pastry-${product.id}`}
            name={formatProductTitle(product.name)}
            calories={getCalories(product.calories)}
            price={formatPrice(product.price)}
            rating={product.rating}
            status={product.status}
            image={product.image_url}
            cafeSlug={cafe?.slug || ''}
            slug={product.id}
          />
        ))}
      </CardScrollableLayout>

      <View
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 2,
          paddingHorizontal: 16,
          paddingVertical: 20,
          borderBlockColor: COLORS.lightGray,
        }}
      >
        <Text style={TYPOGRAPHY.heading.small.bold}>Tous les articles</Text>
      </View>
      <View style={{ paddingHorizontal: 16, paddingBlock: 28, gap: 32 }}>
        {products.map((product) => (
          <ArticleCard
            key={`all-${product.id}`}
            status={product.status}
            // description={product.description}
            name={formatProductTitle(product.name)}
            calories={getCalories(product.calories)}
            price={formatPrice(product.price)}
            rating={product.rating}
            size="large"
            image={product.image_url}
            cafeSlug={cafe?.slug || ''}
            slug={product.id}
          />
        ))}
      </View>

      <CardScrollableLayout
        title="Autres cafés similaires"
        titleMarginTop={SPACING["xl"]}
        scrollMarginTop={SPACING["xs"]}
        scrollMarginBottom={SPACING["md"]}
        scrollGap={SPACING["md"]}
        dividerTop
      >
        {loading ? null : useCafe().cafes
          .filter(otherCafe => otherCafe.slug !== cafe?.slug)
          .map((otherCafe) => (

            <CafeCard
                key={otherCafe.slug}
                status={otherCafe.status || "open"}
                name={otherCafe.name}
                location={typeof otherCafe.location === 'object' ? `${otherCafe.location.pavillon} ${otherCafe.location.local}` : otherCafe.location}
                priceRange={"$$"}
                rating={4.8}
                slug={otherCafe.slug}
                image={otherCafe.image_url}
              />
          ))}
      </CardScrollableLayout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cafeBackgroundImage: {
    borderBottomLeftRadius: SPACING["7xl"],
    borderBottomRightRadius: SPACING["7xl"],
  },
  cafeHeaderButtons: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: SPACING["9xl"],
  },
  cafeHeaderButtonsRight: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  cafeHeaderIconButtons: {
    backgroundColor: "rgba(255, 255, 255, .9)",
  },
  cafeHeaderOpenStatus: {
    position: "absolute",
    paddingHorizontal: 16,
    bottom: 0,
    marginBottom: 26,
    alignSelf: "center",
  },
  cafeName: {
    marginHorizontal: SPACING["md"],
    marginTop: SPACING["2xl"],
    textAlign: "center",
  },
  cafeDescription: {
    marginHorizontal: SPACING["md"],
    lineHeight: 21,
    marginTop: SPACING["xs"],
    textAlign: "center",
  },
});

type Product = {
  id: string;
  name: string;
  description?: string;
  price: string;
  calories?: string;
  status: "In Stock" | "Almost Out" | "Out of Stock";
  image_url?: string;
  category: string;
  rating: number;
};
