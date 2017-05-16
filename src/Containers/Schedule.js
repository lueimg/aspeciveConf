import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs  } from 'native-base';
import ScheduleList from '../Components/ScheduleList.js'

export default class Home extends React.Component {

  render() {
    return (
     <Content>
        <Tabs>
            <Tab heading="Dia 1">
                <ScheduleList />
            </Tab>
            <Tab heading="Dia 2">
                <Text>tab 2</Text>
            </Tab>
            <Tab heading="Dia 3">
                <Text>tab 3</Text>
            </Tab>
        </Tabs>
     </Content>
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
