import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import {default as Icon} from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import AllData from './src/pages/AllData';
import Home from './src/pages/Home/home';
import Info from './src/pages/Info';
import Maps from './src/pages/Maps';
import store from './src/redux/store';
const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <NavigationContainer>
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
                    case 'Data':
                      iconName = 'table';
                      focused ? (size = size + 4) : (size = size);
                      break;
                    case 'Info':
                      iconName = 'info-circle';
                      focused ? (size = size + 4) : (size = size);
                      break;
                  }
                  return <Icon name={iconName} color={color} size={size} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#b71c1c',
                inactiveTintColor: 'gray',
              }}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Maps" component={Maps} />
              <Tab.Screen name="Data" component={AllData} />
              <Tab.Screen name="Info" component={Info} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

export default App;
