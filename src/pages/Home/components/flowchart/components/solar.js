import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../../../../styles/styles';

const Solar = props => {
  return (
    <View style={styles.flowchartWrap}>
      <Image
        source={require('../../../../../assets/img/solarPanel.png')}
        style={styles.flowchartImg}
      />
      <View style={styles.ampereTextView}>
        <Text style={styles.ampereText}>{props.c}</Text>
        <Text style={styles.ampereText}> A</Text>
      </View>
      <Text>Charge</Text>
    </View>
  );
};

export default Solar;