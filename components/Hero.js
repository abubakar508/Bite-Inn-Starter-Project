import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import React, { useState} from "react";

//components
import HeroCard from "../components/HeroCard";

//constants
import { COLORS } from "../constants/theme";

const Hero = () => {

    const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.HeroContainer}>

    {isLoading ? (
        <ActivityIndicator size='large' color={COLORS.lightWhite} />
    ) : (
        <FlatList
        horizontal
          data={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
          renderItem={({ items }) => (
            <HeroCard items={items} />
          )}
        />
    )}
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  HeroContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181b22",
    padding: 10,
    height: 340,
    margin: 10,
    borderRadius: 10,
  },
  HeroItem: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
