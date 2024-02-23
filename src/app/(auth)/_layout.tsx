import {Stack} from "expo-router";
import AuthContextProvider from "../../contexts/AuthContext";

export default function AuthLayout(){
    return(
        <AuthContextProvider>
            <Stack screenOptions={{
                animation: "ios",
            }}>
                <Stack.Screen name="index" options={{headerShown: false, title: "Início"}}/>
                <Stack.Screen name="signUp/index" options={{title: "Cadastro"}}/>
                <Stack.Screen name="OTP/index" options={{title: "OTP", headerTitleAlign: "center"}}/>
                <Stack.Screen name="OTP/code/index" options={{title: "Verificação de código", headerTitleAlign:"center"}} />
            </Stack>
        </AuthContextProvider>

    )
}