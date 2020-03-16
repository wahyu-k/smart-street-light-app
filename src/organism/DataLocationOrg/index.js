import React from 'react';
import { View } from 'react-native';
import DataTitleMod from '../../modules/DataTitleMod';
import DataValueMod from '../../modules/DataValueMod';
import styles from '../../styles/styles.js';

const DataLocationOrg = () => {
    return (
        <View style={styles.dataWrapOrg}>
            <DataTitleMod title="Location" src="location-searching" />
            <DataValueMod title="Device Id: " value="XX.XX" />
            <DataValueMod title="Device Name: " value="XXXXXX" />
            <DataValueMod title="Latitude: " value="XX.XXXX" />
            <DataValueMod title="Longitude: " value="XX.XXXX" />
        </View>
    )
}

export default DataLocationOrg;