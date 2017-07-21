import axios from 'axios'
import config from '../../config'

export function signin(user) {
  return dispatch => {
    axios.post(`${config.host}/user/signin`, user)
      .then(res => {
        localStorage.setItem('userId', res.data.userId)
        dispatch({type: 'SIGN_IN', username: res.data.userName})
      })
      .catch(err => console.log(err))
  }
}

export function fetchUser() {
  return dispatch => {
    let userId = localStorage.getItem('userId')
    if(userId) {
      axios.get(`${config.host}/user/${userId}`)
        .then(res => {
          dispatch({type: 'LOAD_USER', username: res.data.user.username})
        })
        .catch(err => console.log(err))
    }
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('userId')
    dispatch({type: 'LOG_OUT'})
  }
}