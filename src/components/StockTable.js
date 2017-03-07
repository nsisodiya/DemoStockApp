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
  }

  render() {
    return <pre>{JSON.stringify(this.state, null, "\t")}</pre>;
  }
}
mixin(StockTable, [StoreLoaderMixin]);
export default StockTable;
