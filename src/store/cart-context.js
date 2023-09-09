import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},              // for autocompletion
    removeItem: (id) => {},             // for autocompletion
    clearCart: () => {}                 // for autocompletion
});

export default CartContext;
