import React from "react";
import {FlatList, Text, View} from "react-native";

const flatListData = [
  {key: 'a', text: 'aaa'},
  {key: 'b', text: 'bbb'},
  {key: 'c', text: 'ccc'},
  {key: 'd', text: 'ddd'},
  {key: 'e', text: 'eee'},
  {key: 'f', text: 'fff'},
  {key: 'g', text: 'ggg'},
  {key: 'h', text: 'hhh'},
  {key: 'i', text: 'iii'},
  {key: 'j', text: 'jjj'},
  {key: 'k', text: 'kkk'},
];

export class ListDemo extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderItem = ({item}) => (
    <Text style={{height: 50, fontSize: 30}}>{item.key}</Text>
  )

  _keyExtractor = (item, index) => item.key;

  _ListHeaderComponent = () => {
    return (
      <Text>This is header component</Text>
    )
  }

  render() {
    return (
      <FlatList
        renderItem={this._renderItem}
        data={flatListData}
        keyExtractor={this._keyExtractor}
        ListHeaderComponent={this._ListHeaderComponent}
      />
    )
  }
}