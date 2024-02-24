import {Text, View} from "react-native";
import {
    BuyProductButton,
    ProductContainer,
    ProductImage,
    ProductName,
    ProductPrice
} from "../../../../styles/product.style";
import {ProductDescripton} from "../../../../styles/main.style";
import {useEffect, useState} from "react";
import {productProps} from "../../../../types/products";
import {getProductsById} from "../../../../services/products.service";
import {useGlobalSearchParams, useLocalSearchParams, usePathname} from "expo-router";
import {number} from "yup";
import {log} from "expo/build/devtools/logger";
import {moneyFormat} from "../../../../utils/moneyFormat";

export default function Product({params}: {params: {id: number}}){
    const [product, setProduct] = useState({} as productProps);
    const id = useGlobalSearchParams().id


    useEffect(() => {

            const fetchData = async () =>{
                try {
                    const data = await getProductsById(Number(id))
                    setProduct(data)
                    console.log(data)
                } catch (e) {
                    console.error(`Ops, algo deu errado. ${e}`)
                }
            }
            if(id){
                fetchData()
            }

    }, [id]);


    return(
        <ProductContainer>
            <ProductName>
                {product.name}
            </ProductName>
            <ProductImage src={`http://192.168.1.111:8000/storage/products/${product.id}/${product.image}`}/>
            <BuyProductButton>
                <Text style={{color: "#F2E0C5", textAlign: "center"}}>
                    Adicionar ao carrinho
                </Text>
            </BuyProductButton>
            <View style={{width: "80%", marginLeft: "auto", marginRight: "auto", gap: 16, paddingTop: 16, marginBottom: 80}}>
                <ProductPrice>
                    {moneyFormat(product.price)}
                </ProductPrice>
                <ProductDescripton>
                    {product.description}
                </ProductDescripton>
            </View>
        </ProductContainer>
    )
}