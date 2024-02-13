import {Platform, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../../styles/auth.style";
import {Input} from "../../../components/Input";
import {router} from "expo-router";

export default function OTP(){

    const register = () =>{
        router.push("/OTP/code")
    }

    return(
        <AuthContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AuthBox>
                <AuthTitle>Login</AuthTitle>
                <AuthSubtitle>Faça login via OTP</AuthSubtitle>
                <Input label={"Email:"} placeholder={"Insira o seu email aqui..."} />
                <SubmitButton onPress={register} height="15"><Text style={{fontSize: 25, color: "#F2E0C5"}}>Soliciar código</Text></SubmitButton>
            </AuthBox>
        </AuthContainer>
    )
}