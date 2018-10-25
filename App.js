/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <TouchableHighlight
          style={styles.button}
          onPress={navigation.getParam('increaseCount')}>
          <Text> +1 </Text>
        </TouchableHighlight>
      )
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount})
  }

  constructor(props) {
    super(props);
    this.state = {count: 0}
  }

  _increaseCount = () => {
    this.setState({count: this.state.count + 1})
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Details', {itemId: 88})
          }}>
          <Text> Touch Here </Text>
        </TouchableHighlight>
        <Text>Count: {this.state.count}</Text>
        <Image source={require('./my-icon.png')} />
        <Image
          style={{
            width: 51,
            height: 51,
            resizeMode: 'contain',
          }}
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Details'
  }

  render() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details Screen</Text>
        <Text>itemId: {itemId}</Text>
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Profile')
          }}>
          <Text> Touch Here </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile Screen</Text>
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
  }
)

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Profile: ProfileScreen
})

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack
})

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    // return (
    //   <View style={styles.container}>
    //     <TouchableHighlight
    //       style={styles.button}
    //       onPress={this.onPress}>
    //       <Text> Touch Here </Text>
    //     </TouchableHighlight>
    //     <View style={[styles.countContainer]}>
    //       <Text style={[styles.countText]}>
    //         { this.state.count !== 0 ? this.state.count: null}
    //       </Text>
    //     </View>
    //   </View>
    // )
    return <TabNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
