import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';

class AllData extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    let deviceId = this.props.allData[this.props.index].device_id;
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{
            uri: `https://iot.arduinosolo.com/angular/index.html?device_id=${deviceId}`,
          }}
        />
      </View>
    );
  }
}

function mapStatetoProps(state) {
  return {
    allData: state.allData,
    index: state.index,
  };
}

export default connect(mapStatetoProps)(AllData);
