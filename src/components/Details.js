import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCrypto } from '../redux/API/fruitsfetch';

const Details = () => {
  const crypto = useSelector((state) => state.details);
  console.log(crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (crypto.length === 0) {
      dispatch(getCrypto());
    }
  }, [dispatch]);

  return (
    <>
      <NavLink to="/">
        <li>Back</li>
      </NavLink>
      <div className="detail-li">
        <div key={crypto.name} className="cryptos">
          <div className="namerow">
            <li>{crypto.name}</li>
            <li>
              volume:
              {' '}
              {crypto.volume}
            </li>
            <li>
              priceChangePercent:
              {' '}
              {crypto.priceChangePercent}
            </li>
            <li>
              weightedAvgPrice:
              {' '}
              {crypto.weightedAvgPrice}
            </li>
            <li>
              quoteVolume:
              {' '}
              {crypto.quoteVolume}
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
