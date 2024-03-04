export const moneyFormat = (price: number | undefined) => {
    if(price === undefined || price === null){
        return "NAN"
    }return price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
}