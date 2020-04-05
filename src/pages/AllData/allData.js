import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';

class AllData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  hideSpinner() {
    this.setState({
      visible: false,
    });
  }
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
          onLoad={() => this.hideSpinner()}
          source={{
            uri: `https://iot.arduinosolo.com/angular/index.html?device_id=${deviceId}`,
          }}
          onError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            alert(nativeEvent.description);
          }}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}
            color="#81AD2F"
            size={60}
          />
        )}
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
