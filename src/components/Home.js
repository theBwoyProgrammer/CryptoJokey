import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCrypto } from '../redux/API/fruitsfetch';

const Home = () => {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);

  return (
    <div>
      <>
        {crypto.map((crypto) => (
          <div key={crypto.id} className="cryptos">
            <div className="namerow">
              <li>{crypto.name}</li>
              <li>
                Price Change
                {' '}
                {crypto.priceChange}
              </li>
              <li>
                Bid Price
                {' '}
                {crypto.bidPrice}
              </li>
              <li><button type="button">Buy Crypto</button></li>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Home;
