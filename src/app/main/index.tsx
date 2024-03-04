import ProductCard from "../../components/ProductCard";
import {ProductsContainer} from "../../styles/main.style";
import {useEffect, useState} from "react";
import {getProducts} from "../../services/products.service";
import {productProps} from "../../types/products";

export default function Main(){

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data.data)
            }catch (e){
                console.error(`Ops, algo deu errado. ${e}`)
            }
        }
        fetchData();
    }, [])

    return(
            <ProductsContainer>
                {products?.map((item: productProps) => (
                    <ProductCard {...item} key={item.id}/>
                ))}
            </ProductsContainer>
    )
}