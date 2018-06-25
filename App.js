import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './source/Router';
import 'expo' ;

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
      <Router/>
      </View>
    );
  }
}


