import {Text, View} from "react-native";
import {ProductInCartBox} from "../styles/cart.style";
import {cartProductProps} from "../types/products";
import {moneyFormat} from "../utils/moneyFormat";

const ProductCardInCart = ({name, quantity, price}: cartProductProps) => {
    return(
        <ProductInCartBox>
            <View style={{flex: 1}}>
                <Text>{name}</Text>
                <Text>Qtd.: {quantity}</Text>
            </View>
            <View>
                <Text>
                    {moneyFormat(price * quantity)}
                </Text>
                <Text>
                </Text>
            </View>
        </ProductInCartBox>
    )
}

export default ProductCardInCart