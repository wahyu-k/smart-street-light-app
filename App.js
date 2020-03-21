import AsyncStorage from '@react-native-community/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import Home from './src/pages/Home';
import Info from './src/pages/Info';
import Login from './src/pages/Login';
import Maps from './src/pages/Maps';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

class Splash extends Component {
  state = {
    userId: '0',
  };
  constructor(props) {
    super(props);
  }
  getStoredData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.setState({userId: value});
        // console.log('ini');
        if (value !== '0') {
          this.props.navigation.navigate('Home');
        } else {
          this.props.navigation.navigate('Login');
        }
      }
    } catch (e) {}
  };
  render() {
    this.getStoredData('userId');
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default class MainApp extends Component {
  state = {
    userId: '0',
  };
  constructor(props) {
    super(props);
    this.getStoredData('userId');
  }
  getStoredData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.setState({userId: value});
      }
    } catch (e) {}
  };
  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {}
  };

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Home"
              component={TheMainApp}
              options={{
                animationTypeForReplace: 'pop',
                title: 'BATEX Energy',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#b71c1c',
                },
                headerRight: () => (
                  <Button
                    onPress={() => {
                      this.storeData('userId', '0');
                      this.getStoredData('userId');
                      // this.props.
                    }}
                    title="Info"
                    // color="#fff"
                  />
                ),
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

class TheMainApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#b71c1c" barStyle="light-content" />
        <Tab.Navigator
          backBehavior={'none'}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'Maps':
                  iconName = 'map-marker';
                  focused ? (size = size + 4) : (size = size);
                  break;
                case 'Home':
                  iconName = 'home';
                  focused ? (size = size + 4) : (size = size);
                  break;
                case 'Info':
                  iconName = 'info-circle';
                  focused ? (size = size + 4) : (size = size);
                  break;
              }
              return <Icons name={iconName} color={color} size={size} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#b71c1c',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Maps" component={Maps} />
          <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
      </View>
    );
  }
}
