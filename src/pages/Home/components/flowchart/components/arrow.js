import React from 'react';
import {Image, View} from 'react-native';
import style from '../../../../../additional/style';

const ROOT_STYLE = style.home.flowchart.arrow;
const S_VIEW = ROOT_STYLE.view;
const S_IMG = ROOT_STYLE.img;

const IMG_LOC = '../../../../../assets/img/staticArrow.png';

const Arrow = () => {
  return (
    <View style={S_VIEW}>
      <Image source={require(IMG_LOC)} style={S_IMG} />
    </View>
  );
};

export default Arrow;
