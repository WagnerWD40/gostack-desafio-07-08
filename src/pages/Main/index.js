import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { 
    Container,
    ProductContainer, 
    ProductImage, 
    ProductTitle, 
    ProductPrice, 
    AddButton,
    AddButtonText,
} from './styles';

export default function Main() {
    // const DATA = [
    //     {
    //         id: '#259',
    //         image: 'https://static.netshoes.com.br/produtos/tenis-sneaker-meia-leve-calce-facil-vr/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x',
    //         title: 'Tênis AR Pretty Edition',
    //         price: 'R$ 199,99',
    //     },
    //     {
    //         id: '#258',
    //         image: 'https://static.netshoes.com.br/produtos/kit-2-pares-tenis-kappa-impact-masculino/04/D24-1981-304/D24-1981-304_detalhe2.jpg?ims=326x',
    //         title: 'Tênis AR Beautiful Edition',
    //         price: 'R$ 299,99',
    //     },
    //     {
    //         id: '#257',
    //         image: 'https://static.netshoes.com.br/produtos/tenis-esporte-adaption-masculino/14/KTM-0031-014/KTM-0031-014_detalhe2.jpg?ims=326x',
    //         title: 'Tênis AR Fifteen Edition',
    //         price: 'R$ 159,99',
    //     },
    // ];


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

    return (
        <Container>
            <FlatList 
                data={products}
                renderItem={({ item }) => (
                    <ProductContainer>
                        <ProductImage source={{ uri: item.image }} />
                        <ProductTitle>{item.title}</ProductTitle>
                        <ProductPrice>{item.formattedPrice}</ProductPrice>
                        <AddButton>
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

