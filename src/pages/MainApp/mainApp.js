import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { default as Icon } from 'react-native-vector-icons/FontAwesome';
import icon from '../../additional/icon';
import AllData from '../AllData/allData';
import Header from '../components/header';
import Home from '../Home/home';
import Info from '../Info/info';
import Maps from '../Maps/maps';

const Tab = createBottomTabNavigator();
const ROOT_ICON = icon.mainApp;
const I_HOME = ROOT_ICON.bottomTab.home;
const I_MAPS = ROOT_ICON.bottomTab.maps;
const I_DATA = ROOT_ICON.bottomTab.data;
const I_INFO = ROOT_ICON.bottomTab.info;

/**display the mainapp with costumizing statusbar color
 * custom header, and tabnavigator
 */
class MainApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#b71c1c" barStyle="light-content" />
        <Header />
        <Tab.Navigator
          backBehavior={'none'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = I_HOME;
                  break;
                case 'Maps':
                  iconName = I_MAPS;
                  break;
                case 'Data':
                  iconName = I_DATA;
                  break;
                case 'Info':
                  iconName = I_INFO;
                  break;
              }
              return <Icon name={iconName} color={color} size={24} />;
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
      </View>
    );
  }
}

export default MainApp;
