import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../../../../styles/styles';

const Load = props => {
  return (
    <View style={styles.flowchartWrap}>
      <Image
        source={
          props.chgLogic
            ? require('../../../../../assets/img/loadOff.png')
            : require('../../../../../assets/img/loadOn.png')
        }
        style={styles.flowchartImg}
      />
      <View style={{flexDirection: 'row', paddingTop: 6}}>
        <Text style={styles.ampereText}>{props.c}</Text>
        <Text style={styles.ampereText}> A</Text>
      </View>
      <Text>Discharge</Text>
    </View>
  );
};

export default Load;
