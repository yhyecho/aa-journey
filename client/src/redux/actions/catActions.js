import axios from 'axios'
import config from '../../config'

export function fetchCats() {
  return dispatch => {
    axios.get(`${config.host}/categorys`)
      .then(res => {
        dispatch({type: 'LOAD_CATS', cats: res.data.cats})
      })
      .catch(err => console.log(err))
  }
}

export function createCat(name) {
  return dispatch => {
    axios.post(`${config.host}/category`, {name})
      .then(res => {
        dispatch({type: 'ADD_CAT', _id: res.data.category._id, name: name})
      })
      .catch(err => console.log(err))
  }
}

export function removeCat(id) {
  return dispatch => {
    axios.delete(`${config.host}/category?id=${id}`)
      .then(res => {
        dispatch({type: 'DEL_CAT', id})
      })
      .catch(err => console.log(err))
  }
}