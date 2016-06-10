/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//http://stackoverflow.com/questions/33196334/how-to-do-a-multi-page-app-in-react-native

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Navigator
} from 'react-native';

import Button from 'react-native-button';

var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';

var PageOne = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 2,});
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to KickXperience!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'royalblue'}}
            style={{fontSize: 20, color: 'white'}}
            onPress={() => this._handlePress()}>
            Press Me!
        </Button>
      
      </View>
    );
  }
});

var PageTwo = React.createClass({
  _handlePress() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'purple'}]}>
        <Button     
            style={{fontSize: 20, color: 'white'}}
            onPress={() => this._handlePress()}>
            Back!
        </Button>      
       </View>
    )
  },
});
                   
class reactNativeTest extends Component {

  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <PageOne navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    }
  }
        
  render() {
    return (
      <Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
