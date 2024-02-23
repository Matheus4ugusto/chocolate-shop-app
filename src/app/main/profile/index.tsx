import {Text} from "react-native";
import {
    AdmButton,
    LogOutButton,
    UserBox,
    UserContainer,
    UserEmailBox,
    UserNameBox
} from "../../../styles/profile.style";

import {router} from "expo-router";
import {useAuth} from "../../../contexts/AuthContext";

export default function Profile(){

    const {logout} = useAuth()


    const administrator = () => {
        router.push("/adm/")
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
                <LogOutButton onPress={() => logout()}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "#fff"}}>Sair</Text>
                </LogOutButton>
                <AdmButton onPress={administrator}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "#fff"}}>Painel de administrador</Text>
                </AdmButton>
            </UserBox>
        </UserContainer>
    )
}