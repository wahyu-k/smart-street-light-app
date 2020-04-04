import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import style from '../../../additional/style';
import * as action from '../../../redux/action';

const ROOT_STYLE = style.maps.card;
const S_VIEW = ROOT_STYLE.view;
const S_BUTTON_VIEW = ROOT_STYLE.button.view;
const S_BUTTON_IMAGE = ROOT_STYLE.button.image;
const S_BUTTON_TITLE = ROOT_STYLE.button.title;

class Card extends Component {
  render() {
    /* percentage function that return the 100% value if
      the v_tot is more than 13.4 and than the valeu fixed to 0*/
    percentage = marker =>
      (marker.v_tot > 13.4 ? 100 : (marker.v_tot / 13.4) * 100).toFixed(0);

    // return the card to maps
    return (
      <View style={S_VIEW}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={288}>
          {this.props.allData.map(marker => (
            <TouchableOpacity
              key={marker.index}
              activeOpacity={0.7}
              onPress={() => {
                this.props.setIndex({ index: marker.index });
              }}>
              <View style={S_BUTTON_VIEW}>
                <Image
                  source={require('../../../assets/img/streetLightAva.jpg')}
                  resizeMode="stretch"
                  style={S_BUTTON_IMAGE}
                />
                <View>
                  <Text style={S_BUTTON_TITLE}>{marker.name}</Text>
                  <Text>{`${marker.v_tot} V   ${marker.c} A`}</Text>
                  <Text>{`${percentage(marker)}%`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

//  basic function to use userId redux props in this page
function mapStateToProps(state) {
  return {
    allData: state.allData,
    index: state.index,
  };
}

//  basic function to use setUserId redux action in this page
function mapDispatchToProps(dispatch) {
  return {
    setIndex: ({ index }) => dispatch(action.setIndex({ index })),
  };
}

//  connecting the map function with redux to this page
export default connect(mapStateToProps, mapDispatchToProps)(Card);
