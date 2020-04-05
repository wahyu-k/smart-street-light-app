import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/action';

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
      <View style={{ flex: 1 }}>
        <ActivityIndicator
          style={{ ...StyleSheet.absoluteFillObject, position: 'absolute' }}
          size="large"
          color="#b71c1c"
          animating={this.props.isLoading}
        />
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#b71c1c" barStyle="light-content" />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/img/logoBatex.png')}
              style={{
                height: 75,
                resizeMode: 'contain',
                width: '100%',
              }}
            />
          </View>
          <View
            style={{
              margin: 16,
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text
              style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
              First, you must sign in...
            </Text>
            <TextInput
              placeholder="Username"
              style={{ fontSize: 16, width: '100%' }}
              onChangeText={(value) => this.setState({ username: value })}
            />
            <TextInput
              placeholder="Password"
              style={{ fontSize: 16, width: '100%' }}
              secureTextEntry
              onChangeText={(value) => this.setState({ password: value })}
            />
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: '#b71c1c',
                padding: 10,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                Keyboard.dismiss();
                this.loginHandler(this.state.username, this.state.password);
              }}>
              <Icon name="lock-open" color="white" />
              <Text style={{ color: 'white', marginLeft: 8 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: '#b71c1c',
                padding: 10,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                Keyboard.dismiss();
                this.loginHandler('demo', 'demo123');
              }}>
              <Icon name="tv" color="white" />
              <Text style={{ color: 'white', marginLeft: 8 }}>Demo</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: 20,
            }}>
            <Text style={{ color: '#606060' }}>Version 1.0.11</Text>
            <Text style={{ color: '#606060' }}>by Batex Energy 2020</Text>
          </View>
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
