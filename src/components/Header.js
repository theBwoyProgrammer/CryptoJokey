import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './Details';
import Home from './Home';
import Nav from './Nav';

function Header() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>

    </>
  );
}

export default Header;
