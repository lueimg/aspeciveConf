import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import Schedule from './Schedule.js';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>Congreso</Title>
            </Body>
            <Right />
        </Header>
        <Schedule />
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Aspecive</Text>
                </Button>
            </FooterTab>
        </Footer>
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
