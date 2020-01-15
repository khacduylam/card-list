import React from 'react';

import { Navbar } from 'react-bootstrap';

const Header = (props) => {
  return (
    <header id='header'>
      <Navbar expand='lg'>
        {props.children}
      </Navbar>
    </header>
  );
};

export default Header;
