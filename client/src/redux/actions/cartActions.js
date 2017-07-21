import axios from 'axios'
import config from '../../config'
import { browserHistory } from 'react-router'

export function checkout(cart) {
  return dispatch => {
    let _order = {userId: localStorage.getItem('userId'), courses: cart}
    axios.post(`${config.host}/order/new`, _order)
      .then(res => {
        dispatch({type: 'CHECKOUT'})
        browserHistory.push('/profile')
      })
      .catch(err => console.log(err))
  }
}

export function addCourseToCart(courseId) {
  return dispatch => {
    dispatch({type: 'ADD_COURSE_TO_CART', courseId})
  }
}