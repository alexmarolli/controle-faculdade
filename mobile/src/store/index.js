import {createStore} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import asyncStore from "@react-native-async-storage/async-storage";

import Reducers from "../reducers";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key:'aulamobile',
    store:asyncStore,
    timeout:0,
};

const persistReducer = persistReducer(persistConfig, Reducers);

export const Store = createStore(persistReducer);
export const persistor = persistStore(Store); 