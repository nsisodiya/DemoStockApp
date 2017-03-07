/**
 * Created by narendrasisodiya on 07/03/17.
 */


import { createStore } from '@nsisodiya/flux';

/* eslint no-param-reassign: ["off"] */

const TickerStore = createStore({
  INIT(state) {
    state.stockData = {};
  },
  NEW_UPDATE_CAME_FROM_SERVER(state, update) {
    update.forEach((v) => {
      const stockName = v[0];
      const stockPrice = v[1];
      if (state.stockData[stockName] === undefined) {
        state.stockData[stockName] = [];
      }
      state.stockData[stockName].push({
        stockPrice,
        time: Date.now(),
      });
    });
  },
});

export default TickerStore;
