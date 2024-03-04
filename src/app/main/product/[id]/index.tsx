import {Text, View} from "react-native";
import {
    BuyProductButton, CounterButton, CounterText, CounterView,
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
import {useCart} from "../../../../contexts/CartContext";

export default function Product({params}: {params: {id: number}}){

    const {addToCart} = useCart()

    const [product, setProduct] = useState({} as productProps);
    const id = useGlobalSearchParams().id
    const [counter, setCounter] = useState<number>(1)
    const increment = () => {
      setCounter(counter + 1)
    }
    const decrement = () => {
      setCounter(counter -1)
    }


    useEffect(() => {

            const fetchData = async () =>{
                try {
                    const data = await getProductsById(Number(id))
                    setProduct(data)
                } catch (e) {
                    console.error(`Ops, algo deu errado. ${e}`)
                }
            }
            if(id){
                fetchData()
            }

    }, [id]);

    const handleAddToCart = () => {
        addToCart({...product, quantity: counter}, counter);
        setCounter(1)
    }


    return(
        <ProductContainer>
            <ProductName>
                {product.name}
            </ProductName>
            <ProductImage src={`http://192.168.1.113:8000/storage/products/${product.id}/${product.image}`}/>
                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <BuyProductButton onPress={() => handleAddToCart()}>
                        <Text style={{color: "#F2E0C5", textAlign: "center"}}>
                            Adicionar ao carrinho
                        </Text>
                    </BuyProductButton>
                    <CounterView>
                        <CounterButton bgColor="#989797" onPress={decrement} disabled={counter === 1}><CounterText  style={{fontSize: 30}}>-1</CounterText></CounterButton>
                        <CounterText style={{backgroundColor: "#c9c7c7"}}>
                            {counter}
                        </CounterText>
                        <CounterButton bgColor="#989797" onPress={increment}><CounterText style={{fontSize: 30}}>+1</CounterText></CounterButton>
                    </CounterView>
                </View>
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