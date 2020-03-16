import React from 'react'
import { View } from 'react-native'
import styles from '../../styles/styles.js'
import BottomNavbarIconMod from '../../modules/BottomNavbarIconMod';

const BottomNavbarOrg = () => {
    return (
        <View style={styles.navbarWrap}>
            <BottomNavbarIconMod icon="location-on" title="Maps" />
            <BottomNavbarIconMod icon="home" title="Home" active/>
            <BottomNavbarIconMod icon="info" title="Info" />
        </View>
    )
}

export default BottomNavbarOrg;