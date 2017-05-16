import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs, List, ListItem  } from 'native-base';

export default class ScheduleList extends React.Component {
  render() {
    return (
     <Container>
        <Content>
            <List>
                <ListItem >
                    <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem>
                    <Text>Nathaniel Clyne</Text>
                </ListItem>
                <ListItem>
                    <Text>Dejan Lovren</Text>
                </ListItem>
            </List>
        </Content>
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
