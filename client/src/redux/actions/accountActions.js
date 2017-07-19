import axios from 'axios'
import config from '../../config'

export function signin(user) {
  return dispatch => {
    axios.post(`${config.host}/user/signin`, user)
      .then(res => {
        dispatch({type: 'SIGN_IN', username: res.data.userName})
      })
      .catch(err => console.log(err))
  }
}