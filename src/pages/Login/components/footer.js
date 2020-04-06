import React from 'react';
import { Text, View } from 'react-native';
import style from '../../../additional/style';

const ROOT_STYLE = style.login;
const S_VIEW = ROOT_STYLE.footer.view;
const S_TEXT = ROOT_STYLE.footer.text;

export default Footer = () => {
  return (
    <View style={S_VIEW}>
      <Text style={S_TEXT}>Version -Alpha</Text>
      <Text style={S_TEXT}>by Lectro Battery 2020</Text>
    </View>
  );
};
