import {Platform, Text} from "react-native";
import {AuthBox, AuthContainer, AuthSubtitle, AuthTitle, SubmitButton} from "../../../../styles/auth.style";
import {Input} from "../../../../components/Input";
import {router} from "expo-router";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {codeValidation} from "../../../../validations/auth.validation";
import {useEffect} from "react";
import {useAuth} from "../../../../contexts/AuthContext";

export default function Code(){

    const {loginOTP} = useAuth()

    const {register, setValue, handleSubmit} = useForm({resolver: yupResolver(codeValidation)})

    useEffect(() => {
        register("email");
        register("token");
    }, [register]);

    const login = () =>{
        router.push("/main")
    }

    return(
        <AuthContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AuthBox>
                <AuthTitle>Login</AuthTitle>
                <AuthSubtitle>Faça login via código de acesso único</AuthSubtitle>
                <Input label="Email" placeholder="Insira seu Email aqui..." onChangeText={t => setValue("email", t)}/>
                <Input label="Código" placeholder="Insira seu código aqui..." onChangeText={t => setValue("token", t)}/>
                <SubmitButton onPress={handleSubmit(loginOTP)} height="15"><Text style={{fontSize: 25, color: "#F2E0C5"}}>Entrar</Text></SubmitButton>
            </AuthBox>
        </AuthContainer>
    )
}