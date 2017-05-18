import React from 'react';
import {} from 'react-native';
import {Container, Text } from 'native-base';
import Expo from 'expo';

import FooterSection from '../Components/Footer.js';
import HeaderSection from '../Components/Header.js';

export default class Speakers extends React.Component {
    
    
  render() {
    return (
        <Container>
            <HeaderSection/>
            <Text>Speakers</Text>
            <FooterSection />
        </Container>
    );
  }
}
