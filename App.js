import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default class MainApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          {/* LAST UPDATE SECTION */}
          <View style={{ flexDirection: "row", margin: 16 }}>
            <Text>Last Update:</Text>
            <Text style={{ paddingLeft: 16 }}>XXXX-XX-XX XX:XX:XX</Text>
          </View>

          {/* FLOWCHART SECTION */}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ alignItems: "center" }}>
              <Image source={require("./assets/img/solarPanel.png")} style={{ width: 50, height: 50 }} />
              <View style={{ flexDirection: "row", paddingTop: 6 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>XX.XX</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}> A</Text>
              </View>
              <Text>Charge</Text>
            </View>
            <View style={{ justifyContent: "center", margin: 4 }}>
              <Image source={require("./assets/img/staticArrow.png")} style={{ width: 30, height: 30 }} />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", borderWidth: 2, borderRadius: 8, paddingHorizontal: 8, marginVertical: 12 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>XXX</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>%</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>XX.XX</Text>
                <Text> V of </Text>
                <Text>XX.XX</Text>
                <Text> V</Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", margin: 4 }}>
              <Image source={require("./assets/img/staticArrow.png")} style={{ width: 30, height: 30 }} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Image source={require("./assets/img/loadOn.png")} style={{ width: 50, height: 50 }} />
              <View style={{ flexDirection: "row", paddingTop: 6 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>XX.XX</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}> A</Text>
              </View>
              <Text>Discharge</Text>
            </View>
          </View>

          {/* POWER SECTION */}
          <View style={{ justifyContent: "center", flexDirection: "row", marginBottom: 4 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Power: </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>XX.XX</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}> W</Text>
          </View>

          {/* VOLTAGE SECTION */}
          <View style={{ marginBottom: 4 }}>
            <View style={{ flexDirection: "row", marginLeft: 16, marginBottom: 8, alignItems: "center" }}>
              <Icon name="local-gas-station" />
              <Text style={{ fontWeight: "bold", fontSize: 16, letterSpacing: 3, marginLeft: 3 }}>Voltage</Text>
            </View>
            <View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Cell 1:</Text>
                <Text>XX.XX</Text>
                <Text> V</Text>
              </View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Cell 2:</Text>
                <Text>XX.XX</Text>
                <Text> V</Text>
              </View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Cell 3:</Text>
                <Text>XX.XX</Text>
                <Text> V</Text>
              </View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Cell 4:</Text>
                <Text>XX.XX</Text>
                <Text> V</Text>
              </View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Total :</Text>
                <Text>XX.XX</Text>
                <Text> V</Text>
              </View>
            </View>
          </View>

          {/* CLIMATE SECTION */}
          <View style={{ marginBottom: 4 }}>
            <View style={{ flexDirection: "row", marginLeft: 16, marginBottom: 8, alignItems: "center" }}>
              <Icon name="cloud" />
              <Text style={{ fontWeight: "bold", fontSize: 16, letterSpacing: 3, marginLeft: 3 }}>Climate</Text>
            </View>
            <View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Sensor 1:</Text>
                <Text>XX.XX</Text>
                <Text> °C</Text>
              </View>
            </View>
          </View>

          {/* LOCATION */}
          <View style={{ marginBottom: 4 }}>
            <View style={{ flexDirection: "row", marginLeft: 16, marginBottom: 8, alignItems: "center" }}>
              <Icon name="location-searching" />
              <Text style={{ fontWeight: "bold", fontSize: 16, letterSpacing: 3, marginLeft: 3 }}>Location</Text>
            </View>
            <View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Device Id:</Text>
                <Text>XX.XX</Text>
              </View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Device Name:</Text>
                <Text>XXXXXXX</Text>
              </View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Latitude:</Text>
                <Text>XX.XXXXX</Text>
              </View>
              <View style={{ backgroundColor: "#f8f8f8", paddingLeft: 44, marginBottom: 10, flexDirection: "row" }}>
                <Text>Longitude:</Text>
                <Text>XX.XXXXX</Text>
              </View>
            </View>
          </View>

        </View>

        {/* NAVIGATION BAR */}
        <View elevation={5} style={{ backgroundColor: "white", height: 55, flexDirection: "row", shadowColor: "#000000", elevation: 5, shadowRadius: 5, shadowOpacity: 1, shadowOffset: { width: 0, height: 3, } }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Icon
              name='location-on'
              color='#000000' />
            <Text>Maps</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Icon
              name='home'
              color='#000000' />
            <Text>Home</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Icon
              name='info'
              color='#000000' />
            <Text>Info</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "column",
    margin: 20,
  },
  imageFlowchartText: {
    alignItems: "flex-start"
  },
  imageFlowchartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flowchartText: {
    alignItems: "center",
  },
  imageFlowchartText: {
    margin: 10,
  },
});