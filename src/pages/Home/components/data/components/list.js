import React from 'react';
import {Text, View} from 'react-native';
import style from '../../../../../additional/style';

const ROOT_STYLE = style.home.data.list;
const S_VIEW = ROOT_STYLE.view;

const List = props => {
  return (
    <View style={S_VIEW}>
      <Text>{props.title}</Text>
      <Text>{props.value}</Text>
      <Text>{props.unit}</Text>
    </View>
  );
};

export default List;
