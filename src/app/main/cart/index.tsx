import {Text} from "react-native";
import ProductCardInCart from "../../../components/ProductCardInCart";
import {CartContainer, CheckoutButton, TotalView} from "../../../styles/cart.style";
import {router} from "expo-router";

export default function Cart(){

    const home = () => {
        router.push("/main")
    }

    return(
        <CartContainer>
            <ProductCardInCart/>
            <ProductCardInCart/>
            <ProductCardInCart/>
            <ProductCardInCart/>
            <ProductCardInCart/>
            <TotalView>
                <Text>
                    Total:
                </Text>
                <Text>
                    R$139,85
                </Text>
            </TotalView>
            <CheckoutButton onPress={home}>
                <Text style={{fontSize: 18, textAlign: "center"}}>Finalizar compra</Text>
            </CheckoutButton>
        </CartContainer>
    )
}