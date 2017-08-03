import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import {gold, blue, skyblue, gray, white } from '../colors.js';

const HeaderWrapper = styled(View)`
    padding-vertical: 50px;
    align-items: center;
    background-color: ${white};
`;
const TextWrapper = styled(Text)`
    color: ${blue};
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;

export class Header extends React.PureComponent {
    render() {
        return (
            <HeaderWrapper>
                <TextWrapper>
                    III Congreso Cirugia Vertebral 2017
                </TextWrapper>
            </HeaderWrapper>
        );
    }
}


