import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import {style} from './src/theme/appTheme';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={style.background}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <CalculatorScreen />
      </SafeAreaView>
    );
  }
}
