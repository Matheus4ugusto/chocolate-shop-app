import {Text} from "react-native";
import {LogOutButton, UserBox, UserContainer, UserEmailBox, UserNameBox} from "../../../styles/profile.style";
import {push} from "expo-router/build/global-state/routing";
import {router} from "expo-router";

export default function Profile(){

    const logout = () => {
        router.push("/")
    }

    return(
        <UserContainer>
            <UserBox>
                <UserNameBox>
                    <Text style={{fontSize: 20}}>Nome do usuário:</Text>
                    <Text style={{fontSize: 20}}>Teste Testando Testilson</Text>
                </UserNameBox>
                <UserEmailBox>
                    <Text style={{fontSize: 20}}>Email do usuário:</Text>
                    <Text style={{fontSize: 20}}>teste@testilson.com</Text>
                </UserEmailBox>
                <LogOutButton onPress={logout}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "#fff"}}>Sair</Text>
                </LogOutButton>
            </UserBox>
        </UserContainer>
    )
}