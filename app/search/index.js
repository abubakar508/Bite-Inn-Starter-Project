import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'


//icons
import icons from '../../constants/icons'
import { FlatList } from 'react-native'

const SearchFilter = () => {

    const searchFIlterData = [
        {
            name: 'Drinks'
        },
        {
            name: 'Bites'
        },
        {
            name: 'Dessert'
        },
    ]
  return (
    <View style={styles.Container}>
      <Text style={styles.ContainerText}>Search Item by filtering</Text>
      <View style={styles.SearchContainer}>
        <TextInput placeholder='Search Items' style={styles.InputStyles} />
        <TouchableOpacity style={styles.TouchableOpacity}>
            <View style={styles.TouchableOpacityImageContainer}>
                <Image source={icons.search} resizeMode='contain' />
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.FlatCont}>
        <FlatList
        horizontal
        data={[1,2,3,4,5,]}
        renderItem={({items}) => (
            <TouchableOpacity >
                <View style={styles.flatlistContainer}>
                    <Text>
                        Filter
                    </Text>
                </View>
            </TouchableOpacity>
        )}
        />
      </View>
    </View>
  )
}

export default SearchFilter;

const styles = StyleSheet.create({
    Container: {
        padding: 10,
    },
    ContainerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    InputStyles: {
        backgroundColor: 'gray',
        borderRadius: 10,
        height: 40,
        width: 330,
        padding: 30,
    },
    SearchContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        gap: 5,
    },
    TouchableOpacityImageContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
        padding: 30,
        borderRadius: 10,
    },
    FlatCont: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 5,
    },
    flatlistContainer: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        margin: 5,
        padding: 10,
        borderRadius: 10,
    }
})