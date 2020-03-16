import React from 'react'
import { Image, View } from 'react-native'
import styles from '../../styles/styles.js'

const ArrowAtom = () => {
    return (
        <View style={styles.arrowWrap}>
            <Image source={require("../../assets/img/staticArrow.png")} style={styles.arrowImg} />
        </View>
    )
}

export default ArrowAtom;