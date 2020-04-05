import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import style from '../../additional/style';
import * as action from '../../redux/action';
import Card from './components/card';

const ROOT_STYLE = style.maps;
const S_VIEW = ROOT_STYLE.map.view;
class Maps extends Component {
  render() {
    /* define region based on lat and lng store on redux
       this data based on each index selected */
    this.region = {
      latitude: parseFloat(this.props.allData[this.props.index].lat),
      longitude: parseFloat(this.props.allData[this.props.index].lng),
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    };

    /* mapping function to add marker based on all data on redux thunk
      this is array type */
    addMarker = () => {
      return this.props.allData.map(marker => (
        <Marker
          key={marker.index}
          title={marker.name}
          description={`Lat:${marker.lat} Lng:${marker.lng}`}
          coordinate={{
            latitude: parseFloat(marker.lat),
            longitude: parseFloat(marker.lng),
          }}
        />
      ));
    };

    // return the view displayed on user
    return (
      <View style={S_VIEW}>
        <MapView style={S_VIEW} region={this.region}>
          {addMarker()}
        </MapView>
        <Card />
      </View>
    );
  }
}

//  basic function to use redux props in this page
function mapStateToProps(state) {
  return {
    allData: state.allData,
    index: state.index,
  };
}

//  basic function to use redux action in this page
function mapDispatchToProps(dispatch) {
  return {
    setIndex: ({ index }) => dispatch(action.setIndex({ index })),
  };
}

//  connecting the map function with redux to this page
export default connect(mapStateToProps, mapDispatchToProps)(Maps);
