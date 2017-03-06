import React from 'react';
import { render } from 'react-dom';
import './logic/Connector';
import './logic/TickerStore';
import StockTable from './components/StockTable';

render(<div>
  <h1>Simple Demo app by Narendra Sisodiya</h1>
  <StockTable/>
</div>, document.getElementById('root'));
