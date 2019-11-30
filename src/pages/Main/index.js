import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { useDispatch, useSelector } from 'react-redux';

import { 
    Container,
    ProductContainer, 
    ProductImage, 
    ProductTitle, 
    ProductPrice, 
    AddButton,
    CartIconContainer,
    AmountInCart,
    AddButtonText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {

    const [ products, setProduct ] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const res = await api.get('products');

            const formattedData = res.data.map(product => ({
                ...product,
                formattedPrice: formatPrice(product.price),
            }));

            setProduct(formattedData);
        }

        loadProducts();
    }, []);

    const dispatch = useDispatch();

    function addProduct(product) {
        dispatch({
            type: '@cart/ADD',
            product,
        });
    };

    const amount = useSelector(
        state => state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;
            return amount;
    }, {}));

    return (
        <Container>
            <FlatList 
                data={products}
                renderItem={({ item }) => (
                    <ProductContainer>
                        <ProductImage source={{ uri: item.image }} />
                        <ProductTitle>{item.title}</ProductTitle>
                        <ProductPrice>{item.formattedPrice}</ProductPrice>
                        <AddButton onPress={() => addProduct(item)}>
                            <CartIconContainer>
                                <Icon name='add-shopping-cart' size={20} color='#fff'/>
                                <AmountInCart>{amount[item.id] || 0}</AmountInCart>
                            </CartIconContainer>
                            <AddButtonText>ADICIONAR</AddButtonText>
                        </AddButton>
                    </ProductContainer>
                )}
                keyExtractor={item => String(item.id)}
                horizontal
            />

        </Container>
        
    );
};

