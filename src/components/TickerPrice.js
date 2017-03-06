/**
 * Created by narendrasisodiya on 06/03/17.
 */

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
export default function TickerPrice(prop) {
  return <Title>{prop.newVal}</Title>;
}
