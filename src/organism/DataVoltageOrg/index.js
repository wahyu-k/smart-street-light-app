import React from 'react'
import { View } from 'react-native'
import DataTitleMod from '../../modules/DataTitleMod';
import DataValueMod from '../../modules/DataValueMod';
import styles from '../../styles/styles.js'

const DataVoltageOrg = () => {
    return (
        <View style={styles.dataWrapOrg}>
            <DataTitleMod title="Voltage" src="local-gas-station" />
            <DataValueMod title="Cell 1: " value="XX.XX" unit=" V" />
            <DataValueMod title="Cell 2: " value="XX.XX" unit=" V" />
            <DataValueMod title="Cell 3: " value="XX.XX" unit=" V" />
            <DataValueMod title="Cell 4: " value="XX.XX" unit=" V" />
            <DataValueMod title="Total : " value="XX.XX" unit=" V" />
        </View>
    )
}

export default DataVoltageOrg;