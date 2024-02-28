import styled from "styled-components/native";

export const ProductContainer = styled.ScrollView`
`

export const ProductName = styled.Text`
  font-size: 40px;
  text-align: center;
  padding: 16px 0;
  color: #5D2A0C;
`

export const ProductImage = styled.Image`
  width: 80%;
  height: 400px;
  margin: 0 auto;
  object-fit: contain;
`

export const ProductDescription = styled.Text`
text-align: center;
  color: #5D2A0C;
`

export const ProductPrice = styled.Text`
  color: #5D2A0C;  
`;

export const BuyProductButton = styled.TouchableOpacity`
  padding: 16px;
  margin: 16px auto 0 auto;
  border-radius: 10px;
  background-color: #5D2A0C;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const CounterView = styled.View`
  width: 30%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  gap: 2px;
`

export const CounterText = styled.Text`
  font-size: 30px;
  width: 40px;
  text-align: center;

`

export const CounterButton = styled.TouchableOpacity<{bgColor: string}>`
  background-color: ${({bgColor}) => bgColor}
`