import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

//icons
import icons from '../constants/icons'

// expo-router
import { useRouter } from 'expo-router'

const HeroCard = ({ items }) => {
    // router definition
    const router = useRouter()

  return (
    <TouchableOpacity onPress={() => router.push(`/productview`, items)}>
    <View style={styles.HeroCardContainer}>
        {/* image container */}
        <View style={styles.HeroCardImageContainer}>
            <Image style={styles.HeroCardImage} source={icons.BiteInnLogo}/>
        </View>
        {/* text container */}
        <View style={styles.HeroCardTextContainer}>
            <Text style={styles.HeroCardText}>Hero Card</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default HeroCard;

const styles = StyleSheet.create({
    HeroCardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    HeroCardImageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    HeroCardImage: {
        width: 300,
        height: 270,
    },
})