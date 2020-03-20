import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import * as action from '../../redux/action';

class Maps extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props.loadDataBasedUser(1);
  // }
  render() {
    // console.log(this.props.alldata);
    this.lat = parseFloat(this.props.data.lat);
    this.lng = parseFloat(this.props.data.lng);
    this.state = {
      markers: this.props.alldata,
      // [
      //   {
      //     key: 1,
      //     title: 'hello',
      //     coordinates: {
      //       latitude: -7.450676,
      //       longitude: 110.828316,
      //     },
      //   },
      //   {
      //     key: 2,
      //     title: 'hello2',
      //     coordinates: {
      //       latitude: -7.560876,
      //       longitude: 110.828316,
      //     },
      //   },
      //   {
      //     key: 3,
      //     title: 'hello3',
      //     coordinates: {
      //       latitude: -7.670976,
      //       longitude: 110.828316,
      //     },
      //   },
      // ],
    };
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.lat,
            longitude: this.lng,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}>
          {this.state.markers.map(marker => (
            /* console.log(marker.lat),
              console.log(marker.lng), */
            <Marker
              key={marker.id}
              title={marker.device_id}
              description={marker.name}
              coordinate={{
                latitude: parseFloat(marker.lat),
                longitude: parseFloat(marker.lng),
              }}
              // key={marker.key}
            />
          ))}
        </MapView>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'flex-end',
            alignItems: 'center',
            ...StyleSheet.absoluteFillObject,
            // backgroundColor: '',
          }}>
          <View style={{backgroundColor: 'white', marginBottom: 30}}>
            {/* <Image source={require('../../assets/img/streetLightAva.jpg')} /> */}
            <Text>Test</Text>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    alldata: state.alldata,
  };
}

export default connect(mapStateToProps)(Maps);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
