import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MainApp from './src/pages/MainApp/mainApp';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Login/login';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={{flex: 1}}>
          <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MainApp" component={MainApp} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    );
  }
}
export default App;
