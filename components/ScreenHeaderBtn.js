import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ScreenHeaderBtn = ({ icon, handlePress}) => {


  return (
    <TouchableOpacity onPress={handlePress} style={`${styles.ContainerStyles}`}>
        <Image 
        source={icon}
        resizeMode='contain'
        style={styles.btnImg}
         />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn

const styles = StyleSheet.create({
    btnImg: {
            width: 40,
            height: 40,
        }
})