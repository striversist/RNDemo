import React from "react";
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";

export class HomeScreen extends React.Component {

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
          <Text> Details </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('ListDemo', {itemId: 88})
          }}>
          <Text> ListDemo </Text>
        </TouchableHighlight>
        <Text>Count: {this.state.count}</Text>
        <Image source={require('../image/my-icon.png')} />
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