import React from "react";
import {Text, View} from "react-native";

export class DetailsScreen extends React.Component {

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