import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/styles.js'

const DataValueMod = (props) => {
    return (
        <View style={styles.dataValueText}>
            <Text>{props.title}</Text>
            <Text>{props.value}</Text>
            <Text>{props.unit}</Text>
        </View>
    )
}

export default DataValueMod;