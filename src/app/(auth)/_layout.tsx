import {Stack} from "expo-router";
import AuthContextProvider from "../../contexts/AuthContext";
import {ToastProvider} from "react-native-toast-notifications";

export default function AuthLayout(){
    return(
        <ToastProvider>
            <AuthContextProvider>
                <Stack screenOptions={{
                    animation: "ios",
                }}>
                    <Stack.Screen name="index" options={{headerShown: false, title: "Início"}}/>
                    <Stack.Screen name="signUp/index" options={{title: "Cadastro"}}/>
                    <Stack.Screen name="OTP/index" options={{title: "Código de acesso único", headerTitleAlign: "center"}}/>
                    <Stack.Screen name="OTP/code/index" options={{title: "Verificação", headerTitleAlign:"center"}} />
                </Stack>
            </AuthContextProvider>
        </ToastProvider>


    )
}