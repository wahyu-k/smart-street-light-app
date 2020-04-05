import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as action from '../../redux/action';
import Login from '../Login/login';
import MainApp from '../MainApp/mainApp';

class Splash extends Component {
  /* Constructor get USER_ID data from Async Storage
    to restore latest login status for the first time app started*/
  constructor(props) {
    super(props);
    this.getData();
  }

  /*  getData async function used to get USER_ID data then the data
      to redux userId props */
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('USER_ID');
      console.log('asstore' + value);
      if (value !== null) {
        this.props.setLoginData({ loginData: { userId: value } });
      } else {
        this.props.setLoginData({ loginData: { userId: '0' } });
      }
    } catch (e) {
      alert(e);
    }
  };

  /*  authHandler function used to display which screen should be
      displayed to user based on userId redux props.
      When the state is in async function and not getting data
      yet, display the loading screen instate of MainApp or Login screen */
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

  /*  Loading function return View display to show the loading screen */
  Loading = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size={50} color="#BF0101" />
        <Text style={{ marginTop: 8 }}>Wait a second...</Text>
      </View>
    );
  };

  /*  render the display based on authHandler functiom wraped with Navigation
      Container which is contain the MainApp that have BottomTabNavigatior */
  render() {
    return <NavigationContainer>{this.authHandler()}</NavigationContainer>;
  }
}

//  basic function to use userId redux props in this page
function mapStateToProps(state) {
  return {
    userId: state.loginData.userId,
  };
}

//  basic function to use setUserId redux action in this page
function mapDispatchToProps(dispatch) {
  return {
    setLoginData: ({ loginData }) =>
      dispatch(action.setLoginData({ loginData })),
  };
}

//  connecting the map function with redux to this page
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
