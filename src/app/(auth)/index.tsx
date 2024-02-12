import {Platform, StatusBar, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../styles/auth.style";
import {Input} from "../../components/input/input";
import {Link, router} from "expo-router";

export default function SignIn(){

    const login = () =>{
        router.push("/main")
    }

    return(
        <AuthContainer {...Platform.OS === 'ios' && {behavior: "padding"}}>
            <AuthBox>
                <AuthTitle>Login</AuthTitle>
                <AuthSubtitle>Seja bem-vindo(a) de volta!</AuthSubtitle>
                <Input label="Email:"  keyboardType="email-address" placeholder={"Insira o seu email aqui..."}/>
                <Input label="Senha:"   passwordRules="" placeholder={"Insira a sua senha aqui..."}/>
                <SubmitButton height="10%" onPress={login}><Text style={{fontSize: 25, color: "#F2E0C5"}}>Entrar</Text></SubmitButton>

                <Text style={{color: "#F2E0C5"}}>
                    Não possui uma conta? <Link style={{color: "#00a080"}} href="/signUp">Crie uma.</Link>
                </Text>
            </AuthBox>
        </AuthContainer>
)
}
