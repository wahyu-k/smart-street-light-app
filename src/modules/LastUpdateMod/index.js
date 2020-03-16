import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/styles.js'

const LastUpdateMod = () => {
    return (
        <View style={{ flexDirection: "row", margin: 16 }}>
            <Text>Last Update:</Text>
            <Text style={styles.lastUpdateText}>XXXX-XX-XX XX:XX:XX</Text>
        </View>
    )
}

export default LastUpdateMod;