import {Stack} from "expo-router";

export default function AuthLayout(){
    return(
        <Stack screenOptions={{
            animation: "ios",
        }}>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="signUp/index" options={{title: "Cadastro"}}/>
        </Stack>
    )
}