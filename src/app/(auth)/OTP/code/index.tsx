import {Platform, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../../../styles/auth.style";
import {Input} from "../../../../components/Input";
import {router} from "expo-router";

export default function Code(){

    const login = () =>{
        router.push("/main")
    }

    return(
        <AuthContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AuthBox>
                <AuthTitle>Login</AuthTitle>
                <AuthSubtitle>Faça login via OTP</AuthSubtitle>
                <Input label="Código" placeholder="Insira seu código aqui..." />
                <SubmitButton onPress={login} height="15"><Text style={{fontSize: 25, color: "#F2E0C5"}}>Entrar</Text></SubmitButton>
            </AuthBox>
        </AuthContainer>
    )
}