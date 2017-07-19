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

import colors from '../colors.js';

const defaultValues = {
  activeTintColor: colors.white,
  activeBackgroundColor: colors.blue2
}

const IOSTabBarOptions = {
  ...defaultValues,
}

const ANDtabBarOptions = {
  ...defaultValues,
  style: {
    backgroundColor: colors.gray
  },
  labelStyle: {
    color: colors.white,
    fontSize: 10,
  },
  
  indicatorStyle: {
    backgroundColor: colors.white
  },
}

const defaultHeaderStyles = {
  paddingTop: 30,
  height: 70,
  shadowColor: 'transparent',
  border: 'none'
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