import React, { Component } from 'react'
import { View } from 'react-native'
import PresentationalComponent from './PresentationalComponent'

class Style extends Component {

   state = {
      styleState: 'This is my state'
   }

   render() {
      return (
         <View>
            <PresentationalComponent styleState = {this.state.styleState}/>
         </View>
      )
   }
}

export default Style
