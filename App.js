/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, StatusBar, View, PermissionsAndroid, TouchableOpacity, Text} from 'react-native';
import {MealList, DetailedMeal} from './src/app/components';

import { createStackNavigator } from 'react-navigation';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { order, addItem } from "./src/app/state";
import { VisibleOrder } from './src/app/container';

const RootStack = createStackNavigator(
  {
    Home: MealList,
    Detail: props => <DetailedMeal {...props} store={store} addItem={addItem}/>,
    Order: VisibleOrder
  },
  {
    initialRouteName: 'Home',
  }
);

const store = createStore(order);
store.subscribe(() => console.log(store.getState()));

type Props = {};
export default class App extends Component<Props> {
  render() {
    this.requestLocationPermission();
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FCA10F" barStyle="light-content" />
          <RootStack />
        </View>
      </Provider>
    );
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'McGo App Permission',
          'message': 'McGo needs access to your location ' +
                    'so it can automatically detects when you arrive at restaurant.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use location")
      } else {
        console.log("Location permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },
});
