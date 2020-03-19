import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/styles.js'

const PowerMod = (props) => {
    return (
        <View style={styles.powerWrap}>
            <Text style={styles.powerText}>Power: </Text>
            <Text style={styles.powerText}>{props.power}</Text>
            <Text style={styles.powerText}> W</Text>
        </View>
    )
}

export default PowerMod;