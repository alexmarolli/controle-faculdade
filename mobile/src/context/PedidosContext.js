import React, { createContext, useContext, useState, useEffect } from 'react';

export const PedidosContext = createContext();

const PedidoProvider = ({ children }) => {
    const [pedidos, setPedidos] = useState([]);

    return (
        <PedidosContext.Provider value={{ pedidos, setPedidos}}>
            {children}
        </PedidosContext.Provider>
    );
};


/*const PedidosReducer = (state, action) => {
    switch (action.type) {
        case 'cadastrar_pedido':
            return {
                ...state,
                pedidos: [...state.pedidos, action.payload],
            };
        default:
            return state;
    };
};
*/


const usePedidos = () => {
    const context = useContext(PedidosContext);
    
    if (!context) {
        throw new Error('UsePedidos deve ser utilizados dentro de um PedidosProvider');
    }
    return context;
};


export { PedidoProvider, usePedidos };