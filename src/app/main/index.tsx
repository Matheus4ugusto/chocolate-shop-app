import ProductCard from "../../components/ProductCard";
import {ProductsContainer} from "../../styles/main.style";

export default function Main(){
    return(
            <ProductsContainer>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </ProductsContainer>
    )
}