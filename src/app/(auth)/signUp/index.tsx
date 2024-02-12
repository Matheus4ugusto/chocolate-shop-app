import {Platform, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../../styles/auth.style";
import {Input} from "../../../components/Input";
import {router} from "expo-router";

export default function SignUp(){

    const register = () =>{
        router.push("/main")
    }

    return(
        <AuthContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AuthBox >
                <AuthTitle>Cadastre-se</AuthTitle>
                <AuthSubtitle>Seja muito bem-vindo(a)!</AuthSubtitle>
                <Input label={"Nome:"} placeholder={"Insira o seu nome aqui..."}/>
                <Input label={"Email:"} keyboardType={"email-address"} placeholder={"Insira o seu email aqui..."}/>
                <Input label={"Senha:"} secureTextEntry placeholder={"Insira a sua senha aqui..."}/>
                <Input label={"Confirmação da senha:"} secureTextEntry placeholder={"Confirme a sua senha aqui..."}/>
                <SubmitButton onPress={register} height="10"><Text style={{fontSize: 25, color: "#F2E0C5"}}>Criar Conta</Text></SubmitButton>
            </AuthBox>
        </AuthContainer>
)
}
