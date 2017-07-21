import axios from 'axios'
import config from '../../config'

export function getOrders() {
  return dispatch => {
    axios.get(`${config.host}/orders`)
      .then(res => {
        let orders = res.data.orders
        dispatch({type: 'GET_ORDERS', orders})
      })
  }
}