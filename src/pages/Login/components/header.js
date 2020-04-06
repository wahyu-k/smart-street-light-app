import React from 'react';
import { View, Image } from 'react-native';
import style from '../../../additional/style';

const ROOT_STYLE = style.login;
const S_VIEW = ROOT_STYLE.header.view;
const S_IMG1 = ROOT_STYLE.header.img1;
const S_IMG2 = ROOT_STYLE.header.img2;
export default Header = () => {
  return (
    <View style={S_VIEW}>
      <Image
        source={require('../../../assets/img/undraw_login.png')}
        style={S_IMG1}
      />
      <Image
        source={require('../../../assets/img/logoLectro.png')}
        style={S_IMG2}
      />
    </View>
  );
};
