import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../../../styles/styles.js';

const List = props => {
  return (
    <View style={styles.dataValueText}>
      <Text>{props.title}</Text>
      <Text>{props.value}</Text>
      <Text>{props.unit}</Text>
    </View>
  );
};

export default List;
