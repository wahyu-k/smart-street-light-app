import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome';
import HeaderMod from './src/modules/HeaderMod';
import Home from './src/pages/Home';
import Info from './src/pages/Info';
import Maps from './src/pages/Maps';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#b71c1c"
        barStyle="light-content"
      />
      <HeaderMod />
      <Tab.Navigator
        backBehavior={"none"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Maps":
                iconName = "map-marker";
                focused ? size = size + 4 : size = size;
                break;
              case "Home":
                iconName = "home";
                focused ? size = size + 4 : size = size;
                break;
              case "Info":
                iconName = "info-circle";
                focused ? size = size + 4 : size = size;
                break;
            }
            return <Icons name={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#b71c1c",
          inactiveTintColor: "gray",
        }}
      >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Info" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer >



    // </NavigationContainer>

  );
}