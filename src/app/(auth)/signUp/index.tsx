import {Platform, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../../styles/auth.style";
import {Input} from "../../../components/input/input";

export default function SignUp(){
    return(
        <AuthContainer {...Platform.OS === 'ios' && {behavior: "padding"}}>
            <AuthBox >
                <AuthTitle>Cadastre-se</AuthTitle>
                <AuthSubtitle>Seja muito bem-vindo(a)!</AuthSubtitle>
                <Input label={"Nome:"} placeholder={"Insira o seu nome aqui..."}/>
                <Input label={"Email:"} keyboardType={"email-address"} placeholder={"Insira o seu email aqui..."}/>
                <Input label={"Senha:"} secureTextEntry placeholder={"Insira a sua senha aqui..."}/>
                <Input label={"Confirmação da senha:"} secureTextEntry placeholder={"confirme a sua senha aqui..."}/>
                <SubmitButton height="8%"><Text style={{fontSize: 25, color: "#F2E0C5"}}>Criar Conta</Text></SubmitButton>
            </AuthBox>
        </AuthContainer>
)
}
