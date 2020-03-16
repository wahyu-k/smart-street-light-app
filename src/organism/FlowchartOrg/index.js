import React from 'react'
import { View } from 'react-native'
import SolarPanelMod from '../../modules/SolarPanelMod';
import LoadMod from '../../modules/LoadMod';
import BatteryMod from '../../modules/BatteryMod';
import ArrowAtom from '../../atoms/ArrowAtom';
import styles from '../../styles/styles.js'

const FlowchartOrg = () => {
    return (
        <View style={styles.flowchartOrgWrap}>
            <SolarPanelMod />
            <ArrowAtom />
            <BatteryMod />
            <ArrowAtom />
            <LoadMod />
        </View>
    )
}

export default FlowchartOrg;