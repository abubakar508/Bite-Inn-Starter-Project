import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


//icons
import icons from '../constants/icons'

//expo-router
import { useRouter } from 'expo-router'


const ProductCard = ({items}) => {

    const router = useRouter()
  return (
    <TouchableOpacity onPress={() => router.push('productview')}>
    <ScrollView>
    <View style={styles.Container}>
        <View>
            <Text style={styles.ContainerText}>Product Title</Text>
        </View>
      <View style={styles.SubContainerImage}>
        <Image 
        source={icons.BiteInnLogo}
        style={styles.SubContainerImageImage} />
      </View>
    </View>
    </ScrollView>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 10,
    },
    ContainerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'gold',
    },
    SubContainerImage: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SubContainerImageImage: {
        width: '100%',
        height: '100%',
    }
})