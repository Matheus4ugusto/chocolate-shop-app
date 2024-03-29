import styled from "styled-components/native";

export const ProductsContainer = styled.ScrollView`

`

export const ProductCardBox = styled.Pressable`
  background-color: #e0e0e0;
  margin: 10px auto;
  border-radius: 10px;
  padding: 10px;
  width: 85%;
  align-items: center;
  gap: 7px;
`

export const ProductName = styled.Text`
  font-size: 20px;
  color: #5D2A0C;
`

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #5D2A0C;
`

export const ProductDescripton = styled.Text`
  font-size: 12px;
  color: #5D2A0C;
`

export const ProductImage = styled.Image`
  width: 200px;
  height: 300px;
  object-fit: contain;
`