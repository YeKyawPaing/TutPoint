/**
* Sample React Native App~
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View
} from 'react-native';
import State from './src/components/home/NetworkImages.js'


export default class TutPoint extends Component {
  render() {
    return (
      <View>
        <State />
      </View>
    );
  }
}

AppRegistry.registerComponent('TutPoint', () => TutPoint);
