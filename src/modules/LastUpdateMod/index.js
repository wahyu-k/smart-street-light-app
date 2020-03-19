import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/styles.js'

const LastUpdateMod = (props) => {
    return (
        <View style={{ flexDirection: "row", margin: 16 }}>
            <Text>Last Update:</Text>
            <Text style={styles.lastUpdateText}>{props.date}</Text>
        </View>
    )
}

export default LastUpdateMod;