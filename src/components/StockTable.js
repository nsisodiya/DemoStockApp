/**
 * Created by narendrasisodiya on 07/03/17.
 */

import React, { Component } from 'react';
import mixin from '@nsisodiya/es6-mixins';
import StoreLoaderMixin from './StoreLoaderMixin';
import TickerStore from '../logic/TickerStore';

class StockTable extends Component {
  constructor() {
    super();
    this.store = TickerStore;
    console.log('');
  }

  render() {
    return <div>{JSON.stringify(this.state)}</div>;
  }
}
mixin(StockTable, [StoreLoaderMixin]);
export default StockTable;
