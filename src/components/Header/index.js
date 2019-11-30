import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

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
    const cartSize = useSelector(state => state.cart.length);

    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Logo source={logo} />
            </TouchableOpacity>
            <IconContainer onPress={() => navigation.navigate('Cart')}>
                <Icon name='shopping-basket' color='#FFF' size={24} />
                <BasketItemsAmount>{cartSize}</BasketItemsAmount>
            </IconContainer>
        </Container>
    );
};