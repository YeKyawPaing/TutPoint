import React, { Component } from 'react'
import { View } from 'react-native'
import PresentationalComponent from './PresentationalComponent'

class Props extends Component {

  state = {
    propsState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }

  updateState = () => {
    this.setState({ propsState: 'The state is updated' })
  }

  render() {
    return (
      <View>
      <PresentationalComponent propsState = {this.state.propsState} updateState = {this.updateState}/>
      </View>
    )
  }
}

export default Props
