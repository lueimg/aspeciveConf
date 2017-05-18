import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Containers/Home.js';
import Expo from 'expo';

export default class App extends React.Component {

   constructor() {
      super();
      this.state = {
        isLoading: false,
        isReady: false,
      };
    }

    async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
       this.setState({isReady: true});

    }

  render() {

     if (!this.state.isReady) return <Expo.AppLoading />;

    return (
     <Home />
    );
  }
}