import React from 'react'
import axios from 'axios'
import config from '../config'

class Course extends React.Component {
  constructor() {
    super()
    this.state = {
      cats: []
    }
  }
  _getCategorys() {
    axios.get(`${config.host}/categorys`)
      .then((res) => {
        this.setState({cats: res.data.cats})
      })
      .catch(err => console.log(err))
  }
  componentWillMount() {
    this._getCategorys()
  }
  _handleSubmit(e) {
    e.preventDefault()
    let course = {
      name: this.refs.name.value,
      summary: this.refs.summary.value,
      price: this.refs.price.value,
      poster: this.refs.poster.value,
      categoryId: this.refs.categoryId.value
    }
    console.log(course)
    axios.post(`${config.host}/course/new`, course)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  render() {
    let optionList = this.state.cats.map((item, i) => {
      return (
        <option value={item._id} key={i}>
          {item.name}
        </option>
      )
    })
    return (
      <div className="course">
        <span>新建课程</span>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <p>
            <label>name</label>
            <input ref='name' type="text"/>
          </p>
          <p>
            <label>summary</label>
            <input ref='summary' type="text"/>
          </p>
          <p>
            <label>price</label>
            <input ref='price' type="text"/>
          </p>
          <p>
            <label>poster</label>
            <input ref='poster' type="text"/>
          </p>
          <p>
            <select name="categoryId" ref="categoryId">
              {optionList}
            </select>
          </p>
          <p>
            <input type="submit"/>
          </p>
        </form>
      </div>
    )
  }

}

export default Course