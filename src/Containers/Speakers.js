import React from 'react';
import {} from 'react-native';
import {Container, Text, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Expo from 'expo';

export default class Speakers extends React.Component {
    
     watchDetails = () => {
        this.props.navigation.navigate('speaker_details')
    }

  render() {
    return (
        <Container>
                <Content>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../img/speakers/cauti.jpg')} />
                        </Left>
                        <Body>
                            <Text>Dr. Daniel Cauti De la Cruz</Text>
                            <Text note>Cirujano Ortopedico - Subespecialidad en columna vertebral</Text>
                        </Body>
                        <Right>
                           
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../img/speakers/laos.jpg')} />
                        </Left>
                        <Body>
                            <Text>Dr. Eduardo J. Laos Plasier</Text>
                            <Text note>Medico Neurocirujano</Text>
                        </Body>
                        <Right>
                           
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../img/speakers/pascual.jpg')} />
                        </Left>
                        <Body>
                            <Text>Dr. Ronald Pascual Valverde.</Text>
                            <Text note>Medico Cirujano</Text>
                        </Body>
                        <Right>
                           
                        </Right>
                    </ListItem>
                </Content>
            </Container>
    );
  }
}
