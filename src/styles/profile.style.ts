import styled from "styled-components/native";

export const UserContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const UserBox = styled.View`
  width: 80%;
  height: 70%;
  background-color: #e0e0e0;
  align-items: center;
  padding: 16px;
  gap: 10px;
`
export const UserNameBox = styled.View`
  background-color: #c9c7c7;
  width: 80%;
  gap: 5px;
`

export const UserEmailBox = styled.View`
  background-color: #c9c7c7;
  width: 80%;
  gap: 5px;
  margin-bottom: 5px;
`

export const LogOutButton = styled.Pressable`
  background-color: red;
  width: 50%;
  padding: 5px;
  border-radius: 10px;
`