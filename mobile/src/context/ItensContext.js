// ItensContext.js
import React, { createContext, useContext, useReducer } from 'react';

const ItensContext = createContext();

const initialState = {
  itens: [], // Certifique-se de inicializar itens como um array vazio
};

const itensReducer = (state, action) => {
  switch (action.type) {
    case 'CADASTRAR_ITEM':
      return {
        ...state,
        itens: [...state.itens, action.payload],
      };
    // Adicione outros casos conforme necessário

    default:
      return state;
  }
};

const ItensProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itensReducer, initialState);

  return (
    <ItensContext.Provider value={{ state, dispatch }}>
      {children}
    </ItensContext.Provider>
  );
};


const useItens = () => {
  const context = useContext(ItensContext);

  if (!context) {
    throw new Error('useItens deve ser utilizado dentro de um ItensProvider');
  }

  console.log('Log do context', context);
  return context;
};

export { ItensProvider, useItens };
