/**
 * Created by narendrasisodiya on 06/03/17.
 */

import React from 'react';
import styled from 'styled-components';

function decideBackgroundColor(props) {
  let color;
  if (props.oldVal === undefined) {
    return 'white';
  }
  if (props.newVal < props.oldVal) {
    color = 'red';
  } else {
    color = 'green';
  }
  return color;
}
function decideColor(props) {
  let color;
  if (props.oldVal === undefined) {
    return 'black';
  }
  if (props.newVal < props.oldVal) {
    color = 'blue';
  } else {
    color = 'white';
  }
  return color;
}

const Label = styled.span`
  background: ${decideBackgroundColor};
  color: ${decideColor};
`;
function TickerPrice(props) {
  return <Label {...props}>{props.newVal}</Label>;
}

export default TickerPrice;
