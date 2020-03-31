import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

function Profile() {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();

  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;
}

class AllData extends Component {
  constructor(props) {
    super(props);
    console.log('const');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  deviceId = this.props.allData[this.props.index].device_id;
  render() {
    // console.log(JSON.stringify(this.props.allData[this.props.index], null, 2));
    return (
      <View style={{flex: 1}}>
        {/* {Profile()} */}
        <WebView
          source={{
            uri:
              'https://iot.arduinosolo.com/angular/index.html?device_id=' +
              this.deviceId,
          }}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
          // style={{marginTop: 20}}
        />
      </View>
    );
  }
  handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const {url} = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }
  };
}

function mapStatetoProps(state) {
  return {
    allData: state.allData,
    index: state.index,
  };
}

export default connect(mapStatetoProps)(AllData);
