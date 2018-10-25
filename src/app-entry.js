/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


'use strict';
import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {SettingsScreen} from "./screen/Settings";
import {ProfileScreen} from "./screen/Profile";
import {HomeScreen} from "./screen/Home"
import {DetailsScreen} from "./screen/Details";


const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen
});

const RootStack = createStackNavigator({
  Tab: TabNavigator,
  Home: HomeScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <RootStack/>
  }
}
