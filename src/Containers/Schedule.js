import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs  } from 'native-base';
import ScheduleList from '../Components/ScheduleList.js'

export default class Home extends React.Component {

  render() {
    return (
     <Container>
        <Tabs>
            <Tab heading="Jue 7">
                <ScheduleList />
            </Tab>
            <Tab heading="Vie 8">
                <ScheduleList />
            </Tab>
            <Tab heading="Sab 9">
                <ScheduleList />
            </Tab>
        </Tabs>
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
