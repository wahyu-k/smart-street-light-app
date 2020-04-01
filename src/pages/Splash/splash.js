import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Login/login';
import MainApp from '../MainApp/mainApp';
import * as action from '../../redux/action';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      isLogin: false,
      token: null,
    };
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('USER_ID');
      console.log(value);
      this.props.setUserId({userId: value});
      if (value !== null) {
        this.setState({
          isLogin: true,
          token: value,
        });
      } else {
        this.setState({
          isLogin: false,
          token: null,
        });
      }
    } catch (e) {
      alert(e);
    }
  };

  authHandler = () => {
    if (this.props.userId !== null) {
      return <MainApp />;
    } else {
      return <Login />;
    }
  };

  render() {
    return (
      <NavigationContainer>
        {/* <Text>TRIAL</Text> */}
        {this.authHandler()}
        {/* {console.log(`redux userid = ${this.props.userId}`)} */}
        {/* <MainApp /> */}
        {/* <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
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
