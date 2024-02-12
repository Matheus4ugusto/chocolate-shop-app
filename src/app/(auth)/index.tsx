import {Platform, StatusBar, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../styles/auth.style";
import {Input} from "../../components/Input";
import {Link, router} from "expo-router";

export default function SignIn(){

    const login = () =>{
        router.push("/main")
    }

    return(
        <AuthContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AuthBox>
                <AuthTitle>Login</AuthTitle>
                <AuthSubtitle>Seja bem-vindo(a) de volta!</AuthSubtitle>
                <Input label="Email:"  keyboardType="email-address" placeholder={"Insira o seu email aqui..."}/>
                <Input label="Senha:"   passwordRules="" placeholder={"Insira a sua senha aqui..."}/>
                <SubmitButton onPress={login} height="10"><Text style={{fontSize: 25, color: "#F2E0C5"}}>Entrar</Text></SubmitButton>

                <Text style={{color: "#F2E0C5"}}>
                    Não possui uma conta? <Link style={{color: "#00a080"}} href="/signUp">Crie uma.</Link>
                </Text>
            </AuthBox>
        </AuthContainer>
)
}