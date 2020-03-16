import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../../styles/styles.js'

const LoadMod = () => {
    return (
        <View style={styles.flowchartWrap}>
            <Image source={require("../../assets/img/loadOff.png")} style={styles.flowchartImg} />
            <View style={{ flexDirection: "row", paddingTop: 6 }}>
                <Text style={styles.flowchartText}>XX.XX</Text>
                <Text style={styles.flowchartText}> A</Text>
            </View>
            <Text>Discharge</Text>
        </View>
    )
}

export default LoadMod;