import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Button, Icon, Title, Body } from 'native-base';

import FooterSection from '../Components/Footer.js';
import HeaderSection from '../Components/Header.js';
import Schedule from './Schedule.js';
import Speakers from './Speakers.js';

export default class Home extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 'tab1'
    }

    this.updateScreen = this.updateScreen.bind(this);
  }

  updateScreen(tabName) {
    this.setState({currentScreen: tabName});
  }


  render() {
  let screen = <Schedule />;

  switch (this.state.currentScreen) {
    case 'tab1':
      screen = <Schedule />
      break;
    case 'tab2':
      screen = <Speakers />
      break;
    default:
      screen = <Schedule />
      break;
  }


    return (
      <Container>
        <HeaderSection/>
        {screen}
        <FooterSection updateScreen={this.updateScreen} />
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
