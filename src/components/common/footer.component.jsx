import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className='mt-1 text-center'>
      <h3>Demo React App.</h3>
      <p>{new Date().toDateString()}</p>
      <p>Khac Duy Lam</p>
    </footer>
  );
};

export default Footer
