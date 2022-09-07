/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <div>
    <ul>
      <NavLink to="/"><li>Home</li></NavLink>
      <NavLink to="/details"><li>Details</li></NavLink>
    </ul>
  </div>
);
