import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Left, Button, Icon, Title, Body, Tabs, Tab, Text, FooterTab } from 'native-base';
import { TabNavigator, Tabbar } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Schedule from './Schedule.js'
import Speakers from './Speakers.js'

const MainScreen = TabNavigator({
  Agenda: { 
    screen: Schedule,
    navigationOptions: {
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
      title: 'Ponentes'
    }
  },
}, {
  tabBarPosition: 'bottom', 
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#e91e63',
    
  },
});

export default MainScreen;