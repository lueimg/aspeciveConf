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
                    <ListItem avatar onPress={this.watchDetails}>
                        <Left>
                            <Thumbnail source={require('../img/contacts/atul.png')} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                           
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../img/contacts/atul.png')} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                           
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../img/contacts/atul.png')} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                           
                        </Right>
                    </ListItem>
                </Content>
            </Container>
    );
  }
}
