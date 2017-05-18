import React from 'react';
import { } from 'react-native';
import { ListItem, Body, Text } from 'native-base';

export default function Row({ item }) {

    return (
        <ListItem button>
            <Body>
                <Text>{item.title}</Text>
                <Text note>{item.speaker}</Text>
                <Text note>{item.room}</Text>
            </Body>
        </ListItem>
    );
}