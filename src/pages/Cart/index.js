import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
    Container,
    CartContainer,
    EmptyCart,
    EmptyCartText,
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

import { formatPrice } from '../../util/format';

export default function Cart () {

    const cart = useSelector(state => state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })));

    const total = formatPrice(cart.reduce(
        (total, product) => total + product.price * product.amount, 0
    ));

    const dispatch = useDispatch();

    function removeFromCart(product) {
        dispatch({
            type: '@cart/REMOVE',
            product,
        });
    };

    function incrementAmount(product) {
        dispatch({
            type: '@cart/UPDATE',
            product,
            newProductAmount: product.amount + 1,
        });
    };

    function decrementAmount(product) {
        dispatch({
            type: '@cart/UPDATE',
            product,
            newProductAmount: product.amount - 1,
        });
    };

    return (
        <Container>
            <CartContainer>
                {cart.length > 0 ? (
                    <>
                    <ProductList
                    data={cart}
                    renderItem={({ item }) => (
                        <ProductContainer>
                            <ProductInnerTopContainer>
                                <ProductImage source={{ uri: item.image }} />
                                <ProductDetails>
                                    <ProductTitle>{item.title}</ProductTitle>
                                    <ProductPrice>{item.formattedPrice}</ProductPrice>
                                </ProductDetails>
                                <TouchableOpacity onPress={() => removeFromCart(item)}>
                                    <Icon name='delete-forever' size={28} color='#7159c1' />
                                </TouchableOpacity>
                            </ProductInnerTopContainer>
                            <ProductInnerBottomContainer>
                                <AmountContainer>
                                    <TouchableOpacity onPress={() => decrementAmount(item)}>
                                        <Icon name='remove-circle-outline' size={20} color='#7159c1' />
                                    </TouchableOpacity>
                                    <ProductAmount>{item.amount}</ProductAmount>
                                    <TouchableOpacity onPress={() => incrementAmount(item)}>
                                        <Icon name='add-circle-outline' size={20} color='#7159c1' />
                                    </TouchableOpacity>
                                </AmountContainer>
                                <ProductSubtotal>{item.subtotal}</ProductSubtotal>
                            </ProductInnerBottomContainer>
                        </ProductContainer>
                    )}
                    keyExtractor={item => String(item.id)}
                    />
                    <TotalContainer>
                        <Total>TOTAL</Total>
                        <TotalValor>{total}</TotalValor>
                    </TotalContainer>
                    <CheckoutButton>
                        <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
                    </CheckoutButton>
                </>
                ) : (
                    <EmptyCart>                   
                        <Icon name='remove-shopping-cart' size={100} color='#eee' />
                        <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
                    </EmptyCart>
                )}
            </CartContainer>
        </Container>
    );
};

