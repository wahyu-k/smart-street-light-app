import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import style from '../../additional/style';
import * as action from '../../redux/action';

const ROOT_STYLE = style.info;
const S_VIEW = ROOT_STYLE.view;
const S_MAIN_IMG = ROOT_STYLE.main.img;
const S_MAIN_BUTTON = ROOT_STYLE.main.button;

class Info extends Component {
  storeData = async () => {
    try {
      await AsyncStorage.setItem('USER_ID', '0');
      this.props.setLoginData({ loginData: { userId: '0' } });
    } catch (e) {
      alert(e);
    }
  };
  render() {
    return (
      <View style={S_VIEW}>
        <Image
          source={require('../../assets/img/undraw_user.png')}
          resizeMode="cover"
          style={S_MAIN_IMG}
        />
        {/* <Text>Info Page</Text> */}
        <TouchableOpacity
          style={S_MAIN_BUTTON}
          onPress={() => {
            this.storeData();
          }}>
          <Icon name="lock" color="white" />
          <Text style={{ color: 'white', marginLeft: 8 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // loadData: ({ userId }) => dispatch(action.loadData({ userId })),
    setLoginData: ({ loginData }) =>
      dispatch(action.setLoginData({ loginData })),
  };
}

export default connect(null, mapDispatchToProps)(Info);
