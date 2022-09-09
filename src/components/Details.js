/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <div>
        <p className="tradeRef">
          <a href="https://www.binance.com/en">Click to Trade on Binance</a>
        </p>
      </div>
      <div key={state.name} className="cryptosdetails">
        <div className="detailstaker">
          <li className="name">{state.name}</li>
          <li className="change">
            Volume:
            {' '}
            {state.volume}
          </li>
          <li className="change">
            %PriceChange:
            {' '}
            {state.priceChangePercent}
          </li>
          <li className="change">
            WeightedAvg:
            {' '}
            {state.weightedAvgPrice}
          </li>
          <li className="change">
            QuoteVol:
            {' '}
            {state.quoteVolume}
          </li>
        </div>
      </div>
      <div className="footerdiv">
        <p>
          This is site is to showcase the live crypto changes. Click link above above to trade on Binace.
        </p>
        <div className="divider"></div>
        <footer>
          <li>Made with 💗 by HatimDev-HE.</li>
          <li>
            &copy; CryptoJokey
            {' '}
            All Rights Reserved
          </li>
        </footer>
      </div>
    </>
  );
};

export default Details;
