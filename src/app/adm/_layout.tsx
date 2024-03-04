import {Stack} from "expo-router";

export default function AdmLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{title: "Painel de administrador", headerTitleAlign: "center"}}/>
        </Stack>
    )
}