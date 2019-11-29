import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background: #191920;
    padding: 30px 0;
    align-content: center;
`;

export const ProductContainer = styled.View`
    background: #fff;
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    width: 220px;
    max-height: 360px;
`;

export const ProductImage = styled.Image`
    height: 200px;
    width: 200px;
`;

export const ProductTitle = styled.Text`
    color: #333;
    font-size: 16px;
    margin-top: 10px;
`;

export const ProductPrice = styled.Text`
    margin: 14px 0px;
    font-size: 24px;
    margin-top: 4px;
    font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
    background: #7159c1;
    height: 40px;
    flex-direction: row;
    border-radius: 4px;
    margin-top: auto;
    align-items: center;
    justify-content: center;
`;

export const AddButtonText = styled.Text`
    color: #fff;
`;
