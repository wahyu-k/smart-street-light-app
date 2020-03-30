import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import * as action from '../../redux/action';

class Maps extends Component {
  componentDidMount() {
    console.log('cdm');
    console.log(JSON.stringify(this.props.allData, null, 1));
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: parseFloat(this.props.allData[this.props.index].lat),
            longitude: parseFloat(this.props.allData[this.props.index].lng),
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}>
          {this.props.allData.map(marker => (
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
            {this.props.allData.map(marker => (
              <TouchableOpacity
                key={marker.index}
                activeOpacity={0.1}
                onPress={() => {
                  console.log(marker.index);
                  this.props.setIndex({index: marker.index});
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
    allData: state.allData,
    index: state.index,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setIndex: ({index}) => dispatch(action.setIndex({index})),
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
