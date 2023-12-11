import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

// expo-router components
import { Stack, useRouter, } from "expo-router";

//components
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Hero from "../components/Hero";

// constants
import icons from "../constants/icons";


const Home = () => {

    // useRouter definition
    const router = useRouter()
    return (
       <SafeAreaView style={{ flex: 1, backgroundColor: 'black'}}>
        <Stack.Screen
        options={{
            headerStyle: {
                backgroundColor: 'gold',
            },
            headerShadowVisible: true,
            headerLeft: () => (
                <ScreenHeaderBtn icon={icons.menu} />
            ),
            headerRight: () => (
                <ScreenHeaderBtn icon={icons.BiteInnLogo}  />
            ),
            headerTitle: ''
        }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={styles.HeroHeader}>
                    <Text style={styles.HeroHeaderTxt}>
                        Cuisines on offer
                    </Text>
                    <TouchableOpacity 
                    style={styles.HeroHeaderBtn}
                    onPress={() => router.push('productlist')}
                    >
                        <Text>
                        See All
                        </Text>
                    </TouchableOpacity>
                </View>
                <Hero />
            </View>
        </ScrollView>
       </SafeAreaView>
    )
}

export default Home;

const styles =StyleSheet.create({
    HeroHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        backgroundColor: "black",
        padding: 10,
        overflow: 'hidden'
    },
    HeroHeaderTxt: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    HeroHeaderBtn: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "gold",
        borderRadius: 10,
        overflow: 'hidden'
    }
    })