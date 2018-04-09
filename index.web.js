// index.web.js
import React, { Component } from 'react';
// const React = require('react');
// const AppRegistry = require('reat-native').AppRegistry;
// const StyleSheet = require('reat-native').StyleSheet;
// const Text = require('reat-native').Text;
// const View = require('reat-native').View;
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import js from './index.js';

console.log('rustttt: ', js);

class App extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });

// ./node_modules/.bin/webpack-dev-server -d --config ./webpack.config.js --inline --hot --colors
