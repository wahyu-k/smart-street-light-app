import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import * as action from '../../redux/action';

import AsyncStorage from '@react-native-community/async-storage';

class Maps extends Component {
  userId = 0;
  data = 0;
  constructor(props) {
    super(props);
  }

  render() {
    this.state = {
      markers: this.props.allData,
    };
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: parseFloat(this.props.allData[this.data].lat),
            longitude: parseFloat(this.props.allData[this.data].lng),
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}>
          {this.state.markers.map(marker => (
            <Marker
              key={marker.index}
              title={marker.index.toString()}
              description={marker.name}
              coordinate={{
                latitude: parseFloat(marker.lat),
                longitude: parseFloat(marker.lng),
              }}
            />
          ))}
        </MapView>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'flex-end',
            alignItems: 'center',
            bottom: 50,
          }}>
          <ScrollView
            horizontal={true}
            snapToStart
            style={{
              paddingLeft: 12,
            }}>
            {this.state.markers.map(marker => (
              <TouchableOpacity
                key={marker.index}
                activeOpacity={0.8}
                onPress={() => {
                  console.log('touch');
                  // this.data = marker.index;
                  // this.storeData('deviceId', this.data.toString());
                  // this.storeData('index', this.data.toString());
                  // this.forceUpdate();
                  // this.props.navigation.navigate('Home');
                }}>
                <View
                  style={{
                    backgroundColor: '#fefefe',
                    height: 80,
                    width: 270,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    marginRight: 12,
                  }}>
                  <Image
                    source={require('../../assets/img/streetLightAva.jpg')}
                    resizeMode="stretch"
                    style={{
                      resizeMode: 'cover',
                      height: 65,
                      width: 65,
                      marginRight: 16,
                      borderRadius: 50,
                    }}
                  />
                  <View>
                    <Text style={{fontWeight: 'bold'}}>{marker.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text>{marker.v_tot}</Text>
                      <Text style={{marginRight: 16}}> V</Text>
                      <Text>{marker.c}</Text>
                      <Text style={{marginRight: 16}}> A</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text>
                        {(marker.v_tot > 13.4
                          ? 100
                          : (marker.v_tot / 13.4) * 100
                        ).toFixed(0)}
                      </Text>
                      <Text style={{marginRight: 16}}> %</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    allData: state.allData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (userId, data) => dispatch(action.loadData(userId, data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    // ...StyleSheet.absoluteFillObject,
  },
});
