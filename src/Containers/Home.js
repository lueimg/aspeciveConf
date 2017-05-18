import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Button, Icon, Title, Body } from 'native-base';
import Schedule from './Schedule.js';
import FooterSection from '../Components/Footer.js';
import HeaderSection from '../Components/Header.js';

export default class Home extends React.Component {
    
  render() {
    return (
      <Container>
        <HeaderSection/>
        <Schedule />
        <FooterSection />
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
