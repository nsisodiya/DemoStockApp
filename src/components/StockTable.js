/**
 * Created by narendrasisodiya on 07/03/17.
 */

import React, { Component } from 'react';
import mixin from '@nsisodiya/es6-mixins';
import loopObject from 'loopobject';
import Timeago from 'timeago.js';
import StoreLoaderMixin from './StoreLoaderMixin';
import TickerStore from '../logic/TickerStore';
import TickerPrice from './TickerPrice';

class StockTable extends Component {
  constructor() {
    super();
    this.store = TickerStore;
  }

  render() {
    return <div>
      <table>
        <thead>
        <tr>
          <th>Ticker</th>
          <th>Price</th>
          <th>Last Updated</th>
        </tr>
        </thead>
        <tbody>
        {
          loopObject(this.state.stockData, (v, stockName) =>
            <tr key={stockName}>
              <td>
                <div>{ stockName.toUpperCase() }</div>
              </td>
              <td>
                {(() => {
                  const oldProps = {};
                  if (v.length >= 2) {
                    oldProps.oldVal = v[v.length - 2].stockPrice;
                  }
                  return <TickerPrice {...oldProps} newVal={v[v.length - 1].stockPrice}/>;
                })()}
              </td>
              <td>{new Timeago().format(v[v.length - 1].time)}</td>
            </tr>, true)
        }
        </tbody>
      </table>
    </div>;
  }
}
mixin(StockTable, [StoreLoaderMixin]);
export default StockTable;
