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
  height: 600px;
  margin: 0 auto;
`

export const ProductDescription = styled.Text`
text-align: center;
  color: #5D2A0C;
`

export const ProductPrice = styled.Text`
  color: #5D2A0C;  
`;

export const BuyProductButton = styled.Pressable`
  padding: 16px;
  margin: 16px auto 0 auto;
  border-radius: 10px;
  background-color: #5D2A0C;
  justify-content: center;
  align-items: center;
  text-align: center;
`