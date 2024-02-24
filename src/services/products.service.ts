import {api} from "./api";

export const getProducts = async () => {
    const {data} = await api.get("/products")
    return data;
}

export const getProductsById = async (id: number)=> {
    const {data} = await api.get(`/products/${id}`)
    return data
}