import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './API/fruitsfetch';

const rootReducer = { crypto: cryptoReducer };

const store = configureStore({ reducer: rootReducer });
export default store;
