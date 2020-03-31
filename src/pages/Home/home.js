import React, {Component} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import style from '../../additional/style';
import * as action from '../../redux/action';
import Climate from './components/data/climate';
import Location from './components/data/location';
import Voltage from './components/data/voltage';
import Flowchart from './components/flowchart/flowchart';
import LastUpdate from './components/lastUpdate';
import Power from './components/power';

const ROOT_STYLE = style.home;
const S_SCROLL_VIEW = ROOT_STYLE.scrollView;

class Home extends Component {
  componentDidMount() {
    this.props.loadData({userId: 1});
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView
        style={S_SCROLL_VIEW}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={() => this.props.loadData({userId: 1})}
          />
        }>
        <LastUpdate />
        <Flowchart />
        <Power />
        <Voltage />
        <Climate />
        <Location />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    allData: state.allData,
    isLoading: state.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: ({userId}) => dispatch(action.loadData({userId})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
