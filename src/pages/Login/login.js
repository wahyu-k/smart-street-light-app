import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import color from '../../additional/color';
import style from '../../additional/style';
import * as action from '../../redux/action';
import Header from './components/header';
import Footer from './components/footer';

const ROOT_COLOR = color;
const ROOT_STYLE = style.login;
const S_VIEW = ROOT_STYLE.view;
const S_INDICATOR = ROOT_STYLE.indicator;
const S_MAIN_VIEW = ROOT_STYLE.main.view;
const S_MAIN_TITLE = ROOT_STYLE.main.title;
const S_MAIN_INPUT = ROOT_STYLE.main.input;
const S_MAIN_BUTTON_VIEW = ROOT_STYLE.main.button.view;
const S_MAIN_BUTTON_TEXT = ROOT_STYLE.main.button.text;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={S_VIEW}>
        <ActivityIndicator
          style={S_INDICATOR}
          size={50}
          color={ROOT_COLOR.mainColor}
          animating={this.props.isLoading}
        />
        <View style={S_VIEW}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Header />
          <View style={S_MAIN_VIEW}>
            <Text style={S_MAIN_TITLE}>First, you must sign in...</Text>
            <TextInput
              placeholder="Username"
              style={S_MAIN_INPUT}
              onChangeText={(value) => this.setState({ username: value })}
            />
            <TextInput
              placeholder="Password"
              style={S_MAIN_INPUT}
              secureTextEntry
              onChangeText={(value) => this.setState({ password: value })}
            />
            <TouchableOpacity
              style={S_MAIN_BUTTON_VIEW}
              onPress={() => {
                Keyboard.dismiss();
                this.loginHandler(this.state.username, this.state.password);
              }}>
              <Icon name="lock-open" color="white" />
              <Text style={S_MAIN_BUTTON_TEXT}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={S_MAIN_BUTTON_VIEW}
              onPress={() => {
                Keyboard.dismiss();
                this.loginHandler('demo', 'demo123');
              }}>
              <Icon name="tv" color="white" />
              <Text style={S_MAIN_BUTTON_TEXT}>Demo</Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </View>
      </View>
    );
  }

  loginHandler = (username, password) => {
    if (this.checkIsEmpty(username, password)) {
      alert('Each username and password must be filled!');
    } else {
      this.checkLogin(username, password);
    }
  };

  checkIsEmpty = (username, password) => {
    if (username === '' || password === '') {
      return true;
    } else {
      return false;
    }
  };

  storeData = async (userId) => {
    try {
      await AsyncStorage.setItem('USER_ID', userId);
      this.props.setLoginData({ loginData: { userId: userId } });
    } catch (e) {
      alert(e);
    }
  };

  async checkLogin(username, password) {
    try {
      const res = await this.props.loadLoginData({
        body: {
          username: username,
          password: password,
        },
      });
      if (res.userId === '0') {
        alert('Wrong username or password');
      } else {
        this.storeData(res.userId);
      }
    } catch (e) {
      console.warn(e);
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoginData: ({ loginData }) =>
      dispatch(action.setLoginData({ loginData })),
    loadLoginData: ({ body }) => dispatch(action.loadLoginData({ body })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
