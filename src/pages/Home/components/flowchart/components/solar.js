import React from 'react';
import {Image, Text, View} from 'react-native';
import style from '../../../../../additional/style';
import text from '../../../../../additional/text';

const ROOT_STYLE = style.home.flowchart.load;
const S_VIEW = ROOT_STYLE.view;
const S_IMG = ROOT_STYLE.img;
const S_TEXT_VIEW = ROOT_STYLE.text.view;
const S_TEXT = ROOT_STYLE.text.text;

const ROOT_TEXT = text.home.load;
const T_CHG = ROOT_TEXT.charge;

const IMG_LOC = '../../../../../assets/img/solarPanel.png';

const Solar = props => {
  return (
    <View style={S_VIEW}>
      <Image source={require(IMG_LOC)} style={S_IMG} />
      <View style={S_TEXT_VIEW}>
        <Text style={S_TEXT}>{props.c}</Text>
        <Text style={S_TEXT}> A</Text>
      </View>
      <Text>{T_CHG}</Text>
    </View>
  );
};

export default Solar;
