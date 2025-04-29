import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const FlashCards = ({french, english}) => {
    const [showTranslation , setShowTranslation] = useState(false)
  return (
    <View>
      <TouchableOpacity  onPress={()=>setShowTranslation(!showTranslation)} style={styles.card}>
        <Text style={styles.text}>
            {showTranslation ? english : french}
         </Text> 

      </TouchableOpacity>
    </View>
  )
}

export default FlashCards

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF8DC',
        padding: 30,
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
      },
})