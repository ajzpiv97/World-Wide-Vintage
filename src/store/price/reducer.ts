import { GET_PRICES } from './action-types';

const initialState = {
  bid: {},
  ask: {}
}

export default (state = initialState, { type, payload }: any) => {
  switch(type) {
    case GET_PRICES:
    return { ...payload };

    default:
    return state;
  }
}
