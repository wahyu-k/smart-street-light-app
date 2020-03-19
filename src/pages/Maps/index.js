import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';

class Maps extends Component {
  render() {
    this.lat = parseFloat(this.props.data.lat);
    this.lng = parseFloat(this.props.data.lng);
    this.state = {
      markers: [
        {
          key: 1,
          title: 'hello',
          coordinates: {
            latitude: -7.450676,
            longitude: 110.828316,
          },
        },
        {
          key: 2,
          title: 'hello2',
          coordinates: {
            latitude: -7.560876,
            longitude: 110.828316,
          },
        },
        {
          key: 3,
          title: 'hello3',
          coordinates: {
            latitude: -7.670976,
            longitude: 110.828316,
          },
        },
      ],
    };
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.lat,
            longitude: this.lng,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
          }}>
          {this.state.markers.map(marker => (
            <Marker
              title={marker.title}
              coordinate={marker.coordinates}
              key={marker.key}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(Maps);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
