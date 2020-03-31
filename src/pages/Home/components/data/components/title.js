import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import style from '../../../../../additional/style';

const ROOT_STYLE = style.home.data.title;
const S_VIEW = ROOT_STYLE.view;
const S_TEXT = ROOT_STYLE.text;

const DataTitleMod = props => {
  return (
    <View style={S_VIEW}>
      <Icon name={props.src} />
      <Text style={S_TEXT}>{props.title}</Text>
    </View>
  );
};

export default DataTitleMod;
