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
import {createTabNavigator, createStackNavigator} from 'react-navigation';
import {SettingsScreen} from "./screen/Settings";
import {ProfileScreen} from "./screen/Profile";
import {HomeScreen} from "./screen/Home"
import {DetailsScreen} from "./screen/Details";
import {ListDemo} from "./screen/ListDemo";

console.disableYellowBox=true;
const TabNavigator = createTabNavigator({
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
  },
  Demo: {
    screen: ListDemo,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Image source={require("./image/ic_settings.png")}
               style={{width: 30, height: 30, tintColor: tintColor}}/>
    }
  }
}, {
  initialRouteName: 'Demo',
  tabBarPosition: 'bottom',
  backBehavior: "none",

  tabBarOptions: {
    upperCaseLabel: false,
    showIcon: true,
    showLabel: false,
    activeTintColor: "#23a2f2", //label和icon的前景色 活跃状态下（选中）
    inactiveTintColor: "#72c9ff", //label和icon的前景色 活跃状态下（未选中）
    style: {
      //TabNavigator 的背景颜色
      backgroundColor: "white",
      height: 50
    },
    indicatorStyle: {
      //标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
      height: 0
    },
    iconStyle: {
      //图标的样式
      marginBottom: 5
    }
  }
});

const RootStack = createStackNavigator({
  Tab: TabNavigator,
  Home: HomeScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen,
  Details: DetailsScreen,
  ListDemo: ListDemo,
});

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <RootStack/>
  }
}
