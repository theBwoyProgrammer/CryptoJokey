import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './API/fruitsfetch';
import detailsReducer from './details/showDetails';

const rootReducer = { crypto: cryptoReducer, details: detailsReducer };

const store = configureStore({ reducer: rootReducer });
export default store;
