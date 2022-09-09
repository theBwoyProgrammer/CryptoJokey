/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';
import mic from './Assets/mic.svg';
import Back from './Assets/caret-left.svg';
import gear from './Assets/gear.svg';

function Nav() {
  return (
    <>
      <div className="topnav">
        <li className="navHome">
          <NavLink to="/">
            <img src={Back} alt="" height={30} width={30} />
          </NavLink>
        </li>
        <li className="topHome">JokeR</li>
        <li><img src={mic} alt="" width={30} height={30} /></li>
        <li><img src={gear} alt="" width={30} height={30} /></li>
      </div>

      <div className="headall">
        <header>Welcome to CryptoJokey</header>
        <p className="slogan">&lsquo;In crypto we roll&lsquo;</p>
      </div>

    </>
  );
}

export default Nav;
