import styled from "styled-components/native";

export const AuthContainer = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const AuthBox = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #5D2A0C;
  gap: 16px;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
`
export const AuthTitle = styled.Text`
  font-size: 35px;
  color: #F2E0C5;
`

export const AuthSubtitle = styled.Text`
  font-size: 17px;
  color: #F2E0C5;
`

export const SubmitButton = styled.TouchableOpacity<{height: string}>`
  background-color: #793914;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0 5px;
  text-align: center;
  height: ${({height}) => ( height ? `${height}%` : "0px")}
`

export const AuthTextInputLabel = styled.Text`
  font-size: 18px;
  color: #F2E0C5;
  
`
export const AuthTextInput = styled.TextInput<{ ref: any }>`
  background-color: #793914;
  font-size: 15px;
  padding: 3px;
  border-radius: 10px;
  color: #F2E0C5;
`