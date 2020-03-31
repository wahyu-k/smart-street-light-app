import React, {Component} from 'react';
import {
  RefreshControl,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import * as action from '../../redux/action';
import Climate from './components/data/climate';
import Location from './components/data/location';
import Voltage from './components/data/voltage';
import Flowchart from './components/flowchart/flowchart';
import LastUpdate from './components/lastUpdate';
import Power from './components/power';
import ShowAllData from './components/showAllData';

class Home extends Component {
  componentDidMount() {
    this.props.loadData({userId: 1});
    console.log(this.props.state);
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'white', position: 'relative'}}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={() => this.props.loadData({userId: 1})}
          />
        }>
        <View style={{flex: 1}}>
          <LastUpdate />
          <Flowchart />
          <Power />
          <Voltage />
          <Climate />
          <Location />
          {/* <ShowAllData navigation={this.navigation} /> */}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    allData: state.allData,
    isLoading: state.isLoading,
    state: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: ({userId}) => dispatch(action.loadData({userId})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
