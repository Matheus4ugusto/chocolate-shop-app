import {Text, View} from "react-native";
import {ProductInCartBox} from "../styles/cart.style";

const ProductCardInCart = () => {
    return(
        <ProductInCartBox>
            <View>
                <Text>Nome do produto</Text>
                <Text>Qtd.: 3</Text>
            </View>
            <View>
                <Text>
                    R$29,97
                </Text>
                <Text>
                </Text>
            </View>
        </ProductInCartBox>
    )
}

export default ProductCardInCart