import React from 'react';
import { View } from 'react-native';
import DataTitleMod from '../../modules/DataTitleMod';
import DataValueMod from '../../modules/DataValueMod';
import styles from '../../styles/styles.js';

const DataClimateOrg = () => {
    return (
        <View style={styles.dataWrapOrg}>
            <DataTitleMod title="Climate" src="cloud" />
            <DataValueMod title="Sensor 1: " value="XX.XX" unit=" °C" />
        </View>
    )
}

export default DataClimateOrg;