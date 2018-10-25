/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


'use strict';
import React, {Component} from 'react';
import {Image} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {SettingsScreen} from "./screen/Settings";
import {ProfileScreen} from "./screen/Profile";
import {HomeScreen} from "./screen/Home"
import {DetailsScreen} from "./screen/Details";


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        <Image source={require("./image/ic_home.png")}
          style={{ width: 30, height: 30, tintColor: tintColor}} />
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        <Image source={require("./image/ic_profile.png")}
               style={{ width: 30, height: 30, tintColor: tintColor}} />
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        <Image source={require("./image/ic_settings.png")}
               style={{ width: 30, height: 30, tintColor: tintColor}} />
    }
  }
}, {
  initialRouteName: 'Home'
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
