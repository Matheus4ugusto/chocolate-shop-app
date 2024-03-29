export interface productProps{
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    grammage: string;
    status: number;
}

export interface cartProductProps extends productProps{
    quantity: number
}