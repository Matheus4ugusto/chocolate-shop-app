import {Platform, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../../styles/auth.style";
import {Input} from "../../../components/Input";

import {useAuth} from "../../../contexts/AuthContext";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerValidation} from "../../../validations/auth.validation";
import {useEffect} from "react";

export default function SignUp(){

    const {signUp} = useAuth()
    const {register, setValue, handleSubmit} = useForm({resolver: yupResolver(registerValidation)});
    useEffect(() => {
        register("name");
        register("email");
        register("password");
        register("password_confirmation");
    })

    return(
        <AuthContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AuthBox >
                <AuthTitle>Cadastre-se</AuthTitle>
                <AuthSubtitle>Seja muito bem-vindo(a)!</AuthSubtitle>
                <Input label={"Nome:"} placeholder={"Insira o seu nome aqui..."} onChangeText={(t) => setValue("name", t)}/>
                <Input label={"Email:"} keyboardType={"email-address"} placeholder={"Insira o seu email aqui..."} onChangeText={(t) => setValue("email", t)}/>
                <Input label={"Senha:"} secureTextEntry placeholder={"Insira a sua senha aqui..."} onChangeText={(t) => setValue("password", t)}/>
                <Input label={"Confirmação da senha:"} secureTextEntry placeholder={"Confirme a sua senha aqui..."} onChangeText={(t) => setValue("password_confirmation", t)}/>
                <SubmitButton onPress={handleSubmit(signUp)} height="10"><Text style={{fontSize: 25, color: "#F2E0C5"}}>Criar Conta</Text></SubmitButton>
            </AuthBox>
        </AuthContainer>
)
}
