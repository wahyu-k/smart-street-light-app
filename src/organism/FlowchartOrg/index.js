import React, {Component} from 'react';
import {View} from 'react-native';
import ArrowAtom from '../../atoms/ArrowAtom';
import BatteryMod from '../../modules/BatteryMod';
import LoadMod from '../../modules/LoadMod';
import SolarPanelMod from '../../modules/SolarPanelMod';
import styles from '../../styles/styles.js';

export default FlowchartOrg = props => {
  return (
    <View style={styles.flowchartOrgWrap}>
      <SolarPanelMod c={props.chg}/>
      <ArrowAtom />
      <BatteryMod />
      <ArrowAtom />
      <LoadMod c={props.chg}/>
    </View>
  );
};
