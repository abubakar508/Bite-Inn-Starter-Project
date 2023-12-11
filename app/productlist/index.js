import React from "react";

//react-native components
import { FlatList, StyleSheet, Text, View } from "react-native";

//components
import ProductCard from "../../components/ProductCard";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

//expo-router
import { Stack, useRouter } from "expo-router";

//import icons
import icons from "../../constants/icons";

const productList = () => {
  const router = useRouter();
  return (
    <View>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerRight: () => (
            <ScreenHeaderBtn
              icon={icons.filter}
              handlePress={() => router.push("/search")}
            />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn
              icon={icons.chevronLeft}
              handlePress={() => router.back("/")}
            />
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Product List</Text>
        <FlatList
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ]}
          renderItem={({ items }) => <ProductCard items={items} />}
        />
      </View>
    </View>
  );
};

export default productList;

const styles = StyleSheet.create({});
