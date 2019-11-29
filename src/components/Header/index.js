import React from 'react';

import { View, Image, Text } from 'react-native';

import logo from '../../assets/images/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
    Container,
    BasketItemsAmount,
    IconContainer,
    Logo
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header({ navigation }) {


    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Logo source={logo} />
            </TouchableOpacity>
            <IconContainer onPress={() => navigation.navigate('Cart')}>
                <Icon name='shopping-basket' color='#FFF' size={24} />
                <BasketItemsAmount>0</BasketItemsAmount>
            </IconContainer>
        </Container>
    );
};