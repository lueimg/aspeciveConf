import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { Container, Header, Left, Button, Icon, Title, Body, Tabs, Tab, Text, FooterTab } from 'native-base';
import { TabNavigator, Tabbar } from "react-navigation";
import {Ionicons} from 'react-native-vector-icons';

import Schedule from './Schedule.js'
import Speakers from './Speakers.js'
import PostersScreen from './PostersScreen.js';
import MasScreen from './MasScreen.js'
// https://oblador.github.io/react-native-vector-icons/
const colors = {
  white: "#fff",
  gold: '#B58926',
  blue: '#001B31', // #031353
  blue2: '#031353',
  skyblue: '#A2C3CA',
  gray: '#989596'
}


const defaultValues = {
  activeTintColor: colors.white,
  activeBackgroundColor: colors.gold
}

const IOSTabBarOptions = {
  ...defaultValues,
}

const ANDtabBarOptions = {
  ...defaultValues,
  style: {
    backgroundColor: colors.white
  },
  labelStyle: {
    color: '#001E35',
    fontSize: 10,
  },
  
  indicatorStyle: {
    backgroundColor: '#d9bf83',
  },
}

const defaultHeaderStyles = {
  paddingTop: 20
}



const MainScreen = TabNavigator({
  Agenda: { 
    screen: Schedule,
    navigationOptions: {
      headerStyle: defaultHeaderStyles,
      title: 'Agenda',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name="ios-calendar"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },

  Ponentes: { 
    screen: Speakers,
    navigationOptions: {
      headerStyle: defaultHeaderStyles,
      title: 'Ponentes',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name="ios-person"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },

  Sponsors: {
    screen: PostersScreen,
    navigationOptions: {
      title: 'Sponsors',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name="ios-link"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },

  Mas: {
    screen: MasScreen,
    navigationOptions: {
      title: 'Mas',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name="ios-more"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },


}, {
  tabBarPosition: 'bottom', 
  tabBarOptions:   Platform.OS === 'ios' ?  IOSTabBarOptions :  ANDtabBarOptions     
});

export default MainScreen;