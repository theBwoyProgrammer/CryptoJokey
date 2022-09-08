import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CRYPTO = 'fruitsfetch/fruits/FETCH_CRYRTO';
const BASE_URL = 'https://api2.binance.com/api/v3/ticker/24hr';
const initialState = [];

export const getCrypto = createAsyncThunk(
  FETCH_CRYPTO,
  async () => {
    const data = await fetch(`${BASE_URL}`);
    const response = await data.json();
    const slicedRes = response.slice(0, 20);
    const arr = [];
    slicedRes.map((res) => {
      arr.push(
        {
          id: res.firstId,
          name: res.symbol,
          priceChange: res.priceChange,
          lastPrice: res.lastPrice,
          bidPrice: res.bidPrice,
          volume: res.volume,
          priceChangePercent: res.priceChangePercent,
          weightedAvgPrice: res.weightedAvgPrice,
          quoteVolume: res.quoteVolume,
          count: res.count,
        },
      );
      return res;
    });
    return arr || [];
  },
);

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_CRYPTO}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

export default cryptoReducer;
