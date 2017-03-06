import React from 'react';
import { render } from 'react-dom';
import TickerPrice from './components/TickerPrice';

render(<div>
  <h1>Hello world Great</h1>
  <TickerPrice oldVal={ 34 } newVal={ 45 }></TickerPrice>
  <TickerPrice newVal={ 45 }></TickerPrice>
  <TickerPrice oldVal={ 64 } newVal={ 45 }></TickerPrice>
  <TickerPrice oldVal={ 45 } newVal={ 45 }></TickerPrice>
</div>, document.getElementById('root'));
