import React, { Component } from 'react';
import { View } from 'react-native';
import LastUpdateMod from './src/modules/LastUpdateMod';
import PowerMod from './src/modules/PowerMod';
import BottomNavbarOrg from './src/organism/BottomNavbarOrg';
import DataClimateOrg from './src/organism/DataClimateOrg';
import DataLocationOrg from './src/organism/DataLocationOrg';
import DataVoltageOrg from './src/organism/DataVoltageOrg';
import FlowchartOrg from './src/organism/FlowchartOrg';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <LastUpdateMod />
          <FlowchartOrg />
          <PowerMod />
          <DataVoltageOrg />
          <DataClimateOrg />
          <DataLocationOrg />
        </View>
        <BottomNavbarOrg />
      </View>
    );
  }
}