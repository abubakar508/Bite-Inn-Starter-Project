
import React from 'react'


//react-native components
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
//stack from expo-router
import { Stack, useRouter } from 'expo-router'

//components
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn'

//icons
import icons from '../../constants/icons'

const ProductVIew = ({items}) => {

  const router = useRouter()
  const handlePress = () => {
    router.back('/')
  }
  return (
    <View>
      <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn icon={icons.chevronLeft} handlePress={handlePress}  />
        ),
        headerRight: () => (
          <ScreenHeaderBtn icon={icons.heart} />
        ),
        headerTitle: '',
      }}
      />
      <ScrollView>
      <View>
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
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.OrderTouchable}>
        <Text>
          Order Now
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductVIew

const styles = StyleSheet.create({
  ContainerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderRadius: 10,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  SubContainerImage: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  SubContainerImageImage: {
    width: '100%',
    height: '100%',
  },
  OrderTouchable: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
  }
})