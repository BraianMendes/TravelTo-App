import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


// Reanimated >> GestureHandler
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
 
// React-Native-SVG
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';

// Const Tamanho da tela
const { width, height } = Dimensions.get('window');

// Const Animated
const {
  Value,
  event,
  block,
  cond, 
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

class LinksScreen extends React.Component {

  render () {
    return (<View><Text>Hello World!!!</Text></View>);
  }

}
export default LinksScreen;