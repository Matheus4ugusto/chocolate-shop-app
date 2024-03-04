import styled from "styled-components/native";

export const CartContainer = styled.View`
  width: 100%;
  height: 100%;
  gap: 10px;
  align-items: center;
  padding-top: 30px;
`;

export const ProductInCartBox = styled.View`
  background-color: #e0e0e0;
  width: 80%;
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`

export const TotalView = styled.View`
  width: 80%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled.Pressable<{ backgroundColor: string }>`
  background-color: #${({backgroundColor}) => backgroundColor};
  width: 40%;
  height: 5%;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;
`