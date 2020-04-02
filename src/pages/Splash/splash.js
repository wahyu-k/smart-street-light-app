import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {connect} from 'react-redux';
import * as action from '../../redux/action';
import Login from '../Login/login';
import MainApp from '../MainApp/mainApp';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      isLogin: false,
    };
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('USER_ID');
      console.log(value);
      if (value !== null) {
        this.props.setUserId({userId: value});
      }
    } catch (e) {
      alert(e);
    }
  };

  authHandler = () => {
    if (this.props.userId !== null) {
      if (this.props.userId !== '0') {
        return <MainApp />;
      } else {
        return <Login />;
      }
    } else {
      return this.Loading();
    }
  };

  Loading = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size={50} color="#BF0101" />
        <Text style={{marginTop: 8}}>Wait a second...</Text>
      </View>
    );
  };

  render() {
    return <NavigationContainer>{this.authHandler()}</NavigationContainer>;
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUserId: ({userId}) => dispatch(action.setUserId({userId})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
