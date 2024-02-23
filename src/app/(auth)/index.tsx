import {Platform, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../styles/auth.style";
import {Input} from "../../components/Input";
import {Link} from "expo-router";
import {useAuth} from "../../contexts/AuthContext";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginValidation} from "../../validations/auth.validation";
import {useEffect} from "react";

export default function SignIn(){
    const {signIn} = useAuth()
    const {register, setValue, handleSubmit} = useForm({resolver: yupResolver(loginValidation)})

    useEffect(() => {
        register("email");
        register("password");
    }, [register])


    return(
        <AuthContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AuthBox>
                <AuthTitle>Login</AuthTitle>
                <AuthSubtitle>Seja bem-vindo(a) de volta!</AuthSubtitle>
                <Input label="Email:"
                       keyboardType="email-address"
                       placeholder={"Insira o seu email aqui..."}
                       onChangeText={(t) => setValue("email", t)}/>
                <Input label="Senha:"
                       passwordRules=""
                       placeholder={"Insira a sua senha aqui..."}
                       onChangeText={(t) => setValue("password", t)}/>
                <SubmitButton
                    onPress={handleSubmit(signIn)}
                    height="10">
                    <Text
                    style={{fontSize: 25, color: "#F2E0C5"}}>
                    Entrar</Text></SubmitButton>

                <Text style={{color: "#F2E0C5"}}>
                    Não possui uma conta? <Link style={{color: "#00a080"}} href="/signUp">Crie uma.</Link>
                </Text>
                <Text style={{color: "#F2E0C5"}}>
                    <Link style={{color: "#00a080"}} href="/OTP">Deseja fazer login com um OTP?</Link>
                </Text>
            </AuthBox>
        </AuthContainer>
)
}