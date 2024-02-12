import {ProductCardBox, ProductDescripton, ProductImage, ProductName, ProductPrice} from "../styles/main.style";
import {View} from "react-native";
import {Link} from "expo-router";

const ProductCard = () =>{
    return(
        <ProductCardBox >
          <Link href={"/"}>
              <View style={{
                  gap: 7,
                  alignItems: "center"
              }}>
                  <ProductName>Nome do produto</ProductName>
                  <ProductImage src="https://placehold.co/200x300.png"/>
                  <ProductDescripton>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor convallis lacus a
                      posuere. Sed at nunc purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec vestibulum non est sit amet eleifend. Integer ac dignissim arcu, a pulvinar felis.
                      Fusce congue mi libero, at scelerisque erat scelerisque nec. Orci varius natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus. Vivamus sem metus, vehicula eget eros quis, pellentesque
                      interdum odio.
                  </ProductDescripton>
                  <ProductPrice>R$9,99</ProductPrice>
              </View>
          </Link>
        </ProductCardBox>
    )
}

export default ProductCard