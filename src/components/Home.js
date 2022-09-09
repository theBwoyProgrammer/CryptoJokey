import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCrypto } from '../redux/API/fruitsfetch';
import View from './Assets/view.svg';

const Home = () => {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  useEffect(() => {
    if (crypto.length === 0) {
      dispatch(getCrypto());
    }
  }, [dispatch]);
  const [query, setQuery] = useState('');
  return (
    <div>
      <div className="headall">
        <input type="search" id="search" name="search" placeholder="Search Jokey" onChange={(event) => setQuery(event.target.value)} />
        <p className="jokey-coins">All Jokey Coins</p>
      </div>
      <>
        {crypto
          .filter((crypto) => {
            if (query === '') {
              return true;
            }
            if (crypto.name.toLowerCase().includes(query.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((crypto) => (
            <div className="cryptos" key={crypto.name}>
              <div className="namerow">
                <li className="name">{crypto.name}</li>
                <li className="change">
                  Price Change:
                  {' '}
                  {crypto.priceChange}
                </li>
                <li className="change">
                  Bid Price:
                  {' '}
                  {crypto.bidPrice}
                </li>
                <NavLink
                  className="align-self-center arrow"
                  to="/details"
                  state={crypto}
                >
                  <p className="details">
                    <li>
                      <img src={View} alt="" height={30} width={30} className="detailimg" />
                    </li>
                  </p>
                </NavLink>

              </div>
            </div>
          ))}
      </>
    </div>
  );
};

export default Home;
