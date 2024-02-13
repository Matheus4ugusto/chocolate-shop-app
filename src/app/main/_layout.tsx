import {Stack, Tabs} from "expo-router";
import IconEntypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function MainLayout(){
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#793914",
            tabBarInactiveTintColor: "#5D2A0C",
        }}>
            <Tabs.Screen name="index" options={{
                title: "Início",
                tabBarIcon: ({color}) => <IconEntypo name="home" color={color} size={30}/>,
                tabBarLabelStyle: {
                    color: "#5D2A0C",
                    fontSize: 15
                },
                headerShown: false
            }}/>
            <Tabs.Screen name="cart/index" options={{
                title: "Carrinho",
                tabBarIcon: ({color}) => <IconEntypo name="shopping-cart" color={color} size={30}/>,
                tabBarLabelStyle:{
                    color: "#5D2A0C",
                    fontSize: 15
                },
                headerShown: false
            }}/>
            <Tabs.Screen name="profile/index" options={{
                title: "Perfil",
                tabBarIcon: ({color}) => <FontAwesome name="user" color={color} size={30} />,
                tabBarLabelStyle:{
                    color: "#5D2A0C",
                    fontSize: 15
                },
                headerShown: false
            }}/>
            <Tabs.Screen name="product/index" options={{
                href: null,
                headerShown: false
            }}/>
        </Tabs>
    )
}