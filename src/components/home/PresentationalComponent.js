import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
     <View>
      <View>
         <Text onPress = {props.updateState}>
            {props.propsState}
         </Text>
      </View>
      <View>
         <Text style = {styles.styleState}>
            {props.styleState}
         </Text>
      </View>
      </View>
   )
}

export default PresentationalComponent

const styles = StyleSheet.create ({
   styleState: {
      marginTop: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20
   }
})
