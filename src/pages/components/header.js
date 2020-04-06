import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import style from '../../additional/style';

const ROOT_STYLE = style.header;
const S_VIEW = ROOT_STYLE.view;
const S_IMAGE = ROOT_STYLE.image;
class Header extends Component {
  render() {
    return (
      <View style={S_VIEW}>
        <Image
          source={require('../../assets/img/logoLectro.png')}
          style={S_IMAGE}
        />
      </View>
    );
  }
}
export default Header;
