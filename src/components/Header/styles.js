import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    background: #191920;
    max-height: 70px;
    padding: 10px;
    justify-content: space-between;
`;

export const IconContainer = styled.TouchableOpacity`

`;

export const BasketItemsAmount = styled.Text`
    position: absolute;
    text-align: center;
    top: -8px;
    right: -8px;
    min-width: 18px;
    min-height: 18px;
    background: #7159c1;
    color: #fff;
    font-size: 12px;
    padding: 2px;
    border-radius: 9px;
    overflow: hidden;
`;

export const Logo = styled.Image`
    width: 185px;
    resizeMode: contain;
`;