import { create } from "zustand";
const useShoppingCartStore = create((set) => {
    return {
        cartItems: [],

        addToCart: (product) => {
            set((state) => {
                const itemExists = state.cartItems.find(item => item.id === product.id);

                if (itemExists) {
                    return {
                        cartItems: state.cartItems.map(item =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + product.quantity }
                                : item
                        )
                    };
                } else {
                    return {
                        cartItems: [...state.cartItems, product]
                    };
                }
            });
        },
        removeFromCart: (productId) => {
            set((state) => {
                const itemExists = state.cartItems.find(item => item.id === productId);

                if (itemExists) {
                    if (itemExists.quantity > 1) {
                        return {
                            cartItems: state.cartItems.map(item =>
                                item.id === productId
                                    ? { ...item, quantity: item.quantity - 1 }
                                    : item
                            )
                        };
                    } else {
                        return {
                            cartItems: state.cartItems.filter(item => item.id !== productId)
                        };
                    }
                }
            });
        },

    }
})
export default useShoppingCartStore