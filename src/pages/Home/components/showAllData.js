import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

ShowAllData = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('allData')}>
      <Text>Show All Data</Text>
    </TouchableOpacity>
  );
};

export default ShowAllData;
