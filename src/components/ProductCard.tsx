import {ProductCardBox, ProductDescripton, ProductImage, ProductName, ProductPrice} from "../styles/main.style";
import { router} from "expo-router";
import React from "react";
import {productProps} from "../types/products";
import {moneyFormat} from "../utils/moneyFormat";

const ProductCard:React.FC<productProps> = ({id, name, image, price, description}) =>{

    const product = () =>{
        router.push(`/main/product/${id}`)
    }

    return(
        <ProductCardBox onPress={product}>
                        <ProductName>{name}</ProductName>
                        <ProductImage src={`http://192.168.1.111:8000/storage/products/${id}/${image}`}/>
                        <ProductDescripton>
                            {description}
                        </ProductDescripton>
                        <ProductPrice>{moneyFormat(price)}</ProductPrice>
        </ProductCardBox>
    )
}

export default ProductCard