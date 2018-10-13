/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, StatusBar, View, Text} from 'react-native';
import {MealList} from './src/app/components/meals';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: MealList
    },
  },
  {
    initialRouteName: 'Home',
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <View style={styles.container}>
        <StatusBar backgroundColor="#FCA10F" barStyle="light-content" />
        <RootStack />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },
});
