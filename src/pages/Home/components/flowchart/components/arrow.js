import React from 'react';
import {Image, View} from 'react-native';
import styles from '../../../../../styles/styles';

const Arrow = () => {
  return (
    <View style={styles.arrowWrap}>
      <Image
        source={require('../../../../../assets/img/staticArrow.png')}
        style={{...styles.arrowImg}}
      />
    </View>
  );
};

export default Arrow;
