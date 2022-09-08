import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCrypto } from '../redux/API/fruitsfetch';
import { getCryptoId } from '../redux/details/showDetails';

const Home = () => {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  useEffect(() => {
    if (crypto.length === 0) {
      dispatch(getCrypto());
    }
  }, [dispatch]);

  const getId = (e) => {
    const detail = crypto.find((c) => c.name === e.target.id);
    dispatch(getCryptoId(detail));
  };
  return (
    <div>
      <p className="jokey-coins">All Jokey Coins</p>
      <>
        {crypto.map((crypto) => (
          <div key={crypto.name} className="cryptos">
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
              <Link to="/Details" id={crypto.name} onClick={getId}>
                View
              </Link>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Home;
