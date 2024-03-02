import React from 'react';
import { Linking, Text } from 'react-native';
import { CartContainer, Button, TotalView } from '../../../styles/cart.style';
import { router } from 'expo-router';
import { useCart } from '../../../contexts/CartContext';
import { useMemo } from 'react';
import ProductCardInCart from '../../../components/ProductCardInCart';
import { moneyFormat } from '../../../utils/moneyFormat';
import { checkout, createOrder } from '../../../services/order.service';

export default function Cart() {
    const { cartProducts, clearCart } = useCart();

    const handleFinishPurchase = async () => {
        const order = await createOrder({
            products: cartProducts.map((product: any) => ({
                id: product.id as number,
                quantity: product.quantity as number,
            })),
        });
        console.log(order);
        const checkoutResponse = await checkout(order.id);
        await Linking.openURL(checkoutResponse.payment_url);
        clearCart();
    };

    const home = () => {
        router.push('/main');
    };

    const total = useMemo(
        () => cartProducts.reduce((act, cur) => act + cur.quantity * cur.price, 0),
        [cartProducts]
    );

    return (
        <CartContainer>
            {cartProducts.length ? (
                <>
                    {cartProducts.map(product => (
                        <ProductCardInCart key={product.id} {...product} />
                    ))}
                    <TotalView>
                        <Text>Total:</Text>
                        <Text>{moneyFormat(total)}</Text>
                    </TotalView>
                    <Button onPress={handleFinishPurchase} backgroundColor="079a07">
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>Finalizar compra</Text>
                    </Button>
                    <Button onPress={() => clearCart()} backgroundColor="FF0000FF">
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>Limpar carrinho</Text>
                    </Button>
                </>
            ) : (
                <Text>O Carrinho está vazio</Text>
            )}
        </CartContainer>
    );
}
