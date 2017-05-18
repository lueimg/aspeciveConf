import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Separator } from 'native-base';

export default function SeparatorRow({ item }) {

    return (
        <Separator bordered>
            <Text>{item.hour}</Text>
        </Separator>
    );
}