import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Card from '../card/card.component';

const CardBox = ({ data }) => {

  const collNum = data.length;
  const maxCollNum = 4;
  const rowNum  = Math.ceil(collNum / maxCollNum);

  const cardRows = [ ...new Array(rowNum).keys() ].map(row => {
    const subData = data.slice(row * maxCollNum, row * maxCollNum + maxCollNum);
    const cards = [ ...new Array(maxCollNum).keys() ].map(i => {
      const item = subData[i];
      return (
        item ? (
          <Col key={`col-${item.id}`}>
            <Card imgUrl={`https://robohash.org/${item.id}?set=set2`} caption={item.name} />
          </Col>
        ) : (
          <Col key={`col-${i}-padding`} />
        )
      );
    });

    return <Row key={`row-${row}`}>{cards}</Row>
  });

  return (
    <Container>{cardRows}</Container>
  );
};

export default CardBox;
