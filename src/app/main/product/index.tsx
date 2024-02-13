import {Text, View} from "react-native";
import {
    BuyProductButton,
    ProductContainer,
    ProductImage,
    ProductName,
    ProductPrice
} from "../../../styles/product.style";
import {ProductDescripton} from "../../../styles/main.style";

export default function Product(){
    return(
        <ProductContainer>
            <ProductName>
                Nome do produto
            </ProductName>
            <ProductImage src="https://placehold.co/200x300.png"/>
            <BuyProductButton>
                <Text style={{color: "#F2E0C5", textAlign: "center"}}>
                    Adicionar ao carrinho
                </Text>
            </BuyProductButton>
            <View style={{width: "80%", marginLeft: "auto", marginRight: "auto", gap: 16, paddingTop: 16, marginBottom: 80}}>
                <ProductPrice>
                    R$9,99
                </ProductPrice>
                <ProductDescripton>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor convallis lacus a
                    posuere. Sed at nunc purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec vestibulum non est sit amet eleifend. Integer ac dignissim arcu, a pulvinar felis.
                    Fusce congue mi libero, at scelerisque erat scelerisque nec. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Vivamus sem metus, vehicula eget eros quis, pellentesque
                    interdum odio.
                </ProductDescripton>
            </View>
        </ProductContainer>
    )
}