import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from '../../styles/styles.js'

const BottomNavbarIconMod = (props) => {
    return (
        <View style={styles.navbarIcon} >
            <Icon
                name={props.icon}
                color={props.active ? "#BF0101" : "#000000"} />
            <Text style={{ color: props.active ? "#BF0101" : "#000000" }}>{props.title}</Text>
        </View>
    )
}

export default BottomNavbarIconMod;