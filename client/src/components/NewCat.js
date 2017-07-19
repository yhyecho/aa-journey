import React from 'react'
import Header from './Header'
import axios from 'axios'
import config from '../config'

class NewCat extends React.Component {
  constructor() {
    super()
    this.state = {
      cats: []
    }
  }
  componentWillMount() {
    axios.get(`${config.host}/cats`).then(res => {
      this.setState({
        cats: res.data.cats
      })
    })
  }
  _updateCatList() {
    axios.get(`${config.host}/cats`)
      .then((res) => this.setState({cats: res.data.cats}))
      .catch(err => console.log(err))
  }
  _handleSubmit(e) {
    e.preventDefault()
    let catName = this.refs.catName.value
    this.refs.catName.value = ''
    let data = {name: catName}
    axios.post(`${config.host}/category`, data)
      .then((res) => {
        this._updateCatList()
      })
  }  
  render() {
    let catList = this.state.cats.map((item, i) => {
      return (
        <li key={i}>
          {item.name} -- {item._id}
        </li>  
      )
    })
    return (
      <div>
        <ul>
          {catList}
        </ul>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input ref='catName' type='text' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default NewCat