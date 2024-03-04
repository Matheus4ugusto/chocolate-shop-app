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

    return(
        <UserContainer>
            <UserBox>
                <LogOutButton onPress={() => logout()}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "#fff"}}>Sair</Text>
                </LogOutButton>
            </UserBox>
        </UserContainer>
    )
}