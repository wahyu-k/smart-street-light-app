import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/styles.js'

const BatteryMod = () => {
    return (
        <View style={styles.batteryWrap}>
            <View style={styles.flexToRow}>
                <Text style={styles.percentageText}>XXX</Text>
                <Text style={styles.percentageText}>%</Text>
            </View>
            <View style={styles.flexToRow}>
                <Text>XX.XX</Text>
                <Text> V of </Text>
                <Text>XX.XX</Text>
                <Text> V</Text>
            </View>
        </View>
    )
}

export default BatteryMod;