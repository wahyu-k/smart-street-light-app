import React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../../styles/styles.js'

const DataTitleMod = (props) => {
    return (
        <View style={styles.dataTitleWrap}>
            <Icon name={props.src}/>
            <Text style={styles.dataTitleText}>{props.title}</Text>
        </View>
    )
}

export default DataTitleMod;