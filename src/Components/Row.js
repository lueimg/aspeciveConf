import React from 'react';
import { } from 'react-native';
import { ListItem, Body, Text } from 'native-base';

export default class Row extends React.PureComponent {

     watchDetails = () => {
        this.props.nav.navigate('schedule_detail')
    }

    render() {
        const { item } = this.props;
        
        return (
            <ListItem button onPress={this.watchDetails}>
            <Body>
                <Text>{item.title}</Text>
                <Text note>{item.speaker}</Text>
                <Text note>{item.room}</Text>
            </Body>
        </ListItem>
        );
    }
}