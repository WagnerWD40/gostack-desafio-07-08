import React from 'react';

import { 
    Container,
    CartContainer,
    ProductList,
    ProductContainer,
    ProductInnerTopContainer,
    ProductImage,
    ProductDetails,
    ProductTitle,
    ProductPrice,
    ProductInnerBottomContainer,
    AmountContainer,
    ProductAmount,
    ProductSubtotal,
    TotalContainer,
    Total,
    TotalValor,
    CheckoutButton,
    CheckoutButtonText,
 } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Cart () {
    const CART_DATA = [
        {
            id: '#259',
            image: 'https://static.netshoes.com.br/produtos/tenis-sneaker-meia-leve-calce-facil-vr/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x',
            title: 'Tênis AR Pretty Edition',
            price: 'R$ 199,99',
            amount: 1,
        },
        {
            id: '#257',
            image: 'https://static.netshoes.com.br/produtos/tenis-esporte-adaption-masculino/14/KTM-0031-014/KTM-0031-014_detalhe2.jpg?ims=326x',
            title: 'Tênis AR Fifteen Edition',
            price: 'R$ 159,99',
            amount: 2,
        },
    ];

    return (
        <Container>
            <CartContainer>
                <ProductList
                    data={CART_DATA}
                    renderItem={({ item }) => (
                        <ProductContainer>
                            <ProductInnerTopContainer>
                                <ProductImage source={{ uri: item.image }} />
                                <ProductDetails>
                                    <ProductTitle>{item.title}</ProductTitle>
                                    <ProductPrice>{item.price}</ProductPrice>
                                </ProductDetails>
                                <TouchableOpacity>
                                    <Icon name='delete-forever' size={28} color='#7159c1' />
                                </TouchableOpacity>
                            </ProductInnerTopContainer>
                            <ProductInnerBottomContainer>
                                <AmountContainer>
                                    <TouchableOpacity>
                                        <Icon name='remove-circle-outline' size={20} color='#7159c1' />
                                    </TouchableOpacity>
                                    <ProductAmount>12</ProductAmount>
                                    <TouchableOpacity>
                                        <Icon name='add-circle-outline' size={20} color='#7159c1' />
                                    </TouchableOpacity>
                                </AmountContainer>
                                <ProductSubtotal>R$ 250,00</ProductSubtotal>
                            </ProductInnerBottomContainer>
                        </ProductContainer>
                    )}
                    keyExtractor={item => item.id}
                />
                <TotalContainer>
                    <Total>TOTAL</Total>
                    <TotalValor>R$ 1619,10</TotalValor>
                </TotalContainer>
                <CheckoutButton>
                    <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
                </CheckoutButton>
            </CartContainer>
        </Container>
    );
};

