import React from 'react';
import { } from 'react-native';
import { ListItem, Body, Text } from 'native-base';

export default function Row({ item, nav }) {

    watchDetails = () => {
        nav.navigate('schedule_detail')
    }

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
