import React from 'react';

import { Card } from 'react-bootstrap';

const CustomCard = ({ imgUrl, caption }) => {
  return (
    <Card style={{ width: '100%' }} className='mt-3 mb-3'>
      <Card.Img src={imgUrl} />
      <Card.Body>
        <Card.Title>{ caption }</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;