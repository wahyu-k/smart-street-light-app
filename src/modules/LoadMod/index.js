import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../../styles/styles.js'

const LoadMod = () => {
    return (
        <View style={styles.flowchartWrap}>
            <Image source={require("../../assets/img/loadOff.png")} style={styles.flowchartImg} />
            <View style={{ flexDirection: "row", paddingTop: 6 }}>
                <Text style={styles.ampereText}>XX.XX</Text>
                <Text style={styles.ampereText}> A</Text>
            </View>
            <Text>Discharge</Text>
        </View>
    )
}

export default LoadMod;