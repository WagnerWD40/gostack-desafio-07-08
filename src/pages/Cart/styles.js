import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background: #191920;
`;

export const CartContainer = styled.View`
    background: #FFF;
    margin: 0 30px;
    border-radius: 4px;
    padding: 20px;
`;

export const ProductList = styled.FlatList`

`;

export const ProductContainer = styled.View`

`;

export const ProductInnerTopContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ProductImage = styled.Image`
    width: 80px;
    height: 80px;
`;

export const ProductDetails = styled.View`
    margin-left: 10px;
    max-width: 120px;
`;

export const ProductTitle = styled.Text`

`;

export const ProductPrice = styled.Text`
    font-weight: bold;
    margin: auto;
`;

export const ProductInnerBottomContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: #eee;
    min-height: 35px;
    border-radius: 4px;
    padding: 10px 10px;
    margin-top: 10px;
    align-items: center;
`;

export const AmountContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ProductAmount = styled.TextInput.attrs({
    readonly: true,
  })`
    background: #fff;
    padding: 3px;
    margin: 0 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 34px;
    text-align: center;
    font-size: 14px;
  `;

export const ProductSubtotal = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const TotalContainer = styled.View`
    margin: 25px;
`;

export const Total = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #aaa;
    text-align: center;
`;

export const TotalValor = styled.Text`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
`;

export const CheckoutButton = styled.TouchableOpacity`
    background: #7159c1;
    height: 40px;
    flex-direction: row;
    border-radius: 4px;
    margin-top: auto;
    align-items: center;
    justify-content: center;
`;


export const CheckoutButtonText = styled.Text`
    color: #fff;
    font-weight:bold;
`;
