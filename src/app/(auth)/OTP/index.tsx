import {Platform, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../../styles/auth.style";
import {Input} from "../../../components/Input";
import {router} from "expo-router";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {emailValidation} from "../../../validations/auth.validation";
import {useEffect} from "react";
import {useAuth} from "../../../contexts/AuthContext";

export default function OTP(){
    // @TODO fazer login por código de acesso único funcionar

    const {requestOTP} = useAuth()

    const {register, setValue, handleSubmit} = useForm({resolver: yupResolver(emailValidation)})

    useEffect(() => {
        register("email")
    }, [register]);

    return(
        <AuthContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AuthBox>
                <AuthTitle>Login</AuthTitle>
                <AuthSubtitle>Faça login via código de acesso único</AuthSubtitle>
                <Input label={"Email:"} placeholder={"Insira o seu email aqui..."} onChangeText={t => setValue("email", t)}/>
                <SubmitButton onPress={handleSubmit(requestOTP)} height="15"><Text style={{fontSize: 25, color: "#F2E0C5"}}>Solicitar código</Text></SubmitButton>
            </AuthBox>
        </AuthContainer>
    )
}