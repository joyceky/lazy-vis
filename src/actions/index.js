import axios from 'axios';

const URL = 'https://lazybuffs.herokuapp.com/dispatch/charts-data';

export const FETCH_ORDERS = 'FETCH_ORDERS';

export function fetchOrders() {
  const request = axios.get(URL);

  return {
     type: FETCH_ORDERS,
     payload: request
   };
}
