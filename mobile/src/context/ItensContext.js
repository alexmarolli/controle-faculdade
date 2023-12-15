// ItensContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

<<<<<<< HEAD
=======

const ItensContext = createContext();

>>>>>>> 548bc4f9174bf88209cdde692321bb7e12cc9bac
const initialState = {
  itens: [],
};

const itensReducer = (state, action) => {
  switch (action.type) {
    case 'CADASTRAR_ITEM':
      return {
        itens: [...state.itens, action.payload],
      };
    // Adicione outros casos conforme necessário

    default:
      return state;
  }
};

const ItensProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itensReducer, initialState);

  useEffect(() => {
    console.log('State atualizado:', state);
  }, [state]);

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

<<<<<<< HEAD
=======
  const { state, dispatch } = context;

  useEffect(() => {
    console.log('Log do state atualizado:', state);
  }, [state]);

>>>>>>> 548bc4f9174bf88209cdde692321bb7e12cc9bac
  return context;
};

export { ItensProvider, useItens };
