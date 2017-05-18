import React from 'react';
import {} from 'react-native';
import {Container, Text, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export default class HeaderSection extends React.Component {

  render() {
    return (
     <Header>
        <Left>
            <Button transparent>
                <Icon name='menu' />
            </Button>
        </Left>
        <Body>
            <Title>III Congreso 2017</Title>
        </Body>
        
     </Header>
    );
  }
}
