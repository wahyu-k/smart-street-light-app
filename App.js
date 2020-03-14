import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class MainApp extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <Text style={styles.lastUpdateText}>Last Update:</Text>
        </View>
        <View style={styles.imageFlowchartView}>
          <View>
            <Text style={styles.imageFlowchartText}>0.0 A</Text>
            <Text style={styles.imageFlowchartText}>Charge</Text>
          </View>
          <View>
            <Text style={styles.imageFlowchartText}>>></Text>
          </View>
          <View>
            <Text style={styles.imageFlowchartText}>100%</Text>
            <Text style={styles.imageFlowchartText}>13.4 V of 13.4 V</Text>
          </View>
          <View>
            <Text style={styles.imageFlowchartText}>>></Text>
          </View>
          <View>
            <Text style={styles.imageFlowchartText}>0.0 A</Text>
            <Text style={styles.imageFlowchartText}>Discharge</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "column",
  },
  imageFlowchartText: {
    alignItems: "flex-start"
  },
  imageFlowchartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageFlowchartText: {
    margin: 10,
  },
});