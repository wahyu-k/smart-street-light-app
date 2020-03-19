import React from 'react';
import { View } from 'react-native';
import DataTitleMod from '../../modules/DataTitleMod';
import DataValueMod from '../../modules/DataValueMod';
import styles from '../../styles/styles.js';

const DataVoltageOrg = props => {
  return (
    <View style={styles.dataWrapOrg}>
      <DataTitleMod title="Voltage" src="local-gas-station" />
      <DataValueMod title="Cell 1: " value={props.v1} unit=" V" />
      <DataValueMod title="Cell 2: " value={props.v2} unit=" V" />
      <DataValueMod title="Cell 3: " value={props.v3} unit=" V" />
      <DataValueMod title="Cell 4: " value={props.v4} unit=" V" />
      <DataValueMod title="Total : " value={props.v_tot} unit=" V" />
    </View>
  );
};

export default DataVoltageOrg;
