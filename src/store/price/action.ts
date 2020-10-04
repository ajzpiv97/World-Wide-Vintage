import { actionObject } from '../../utils';
import { GET_PRICES } from './action-types';

export const getPrices = (ask: number, bid: number, length: number) => {
  const bidArray = [];
  const askArray = [];

  for(let i = 0; i < length; i++) {
    bidArray.push(_getRandomArbitrary(0, bid));
    askArray.push(_getRandomArbitrary(0, ask));
  }

  const bestBid = bidArray.reduce(_reducer) / length;
  const bestAsk = askArray.reduce(_reducer) / length;

  const prices = {
    bid: {
      prices: bidArray,
      bestRate: bestBid
    },
    ask: {
      prices: askArray,
      bestRate: bestAsk
    }
  }

  return actionObject(GET_PRICES, prices);
}

const _getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

const _reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
