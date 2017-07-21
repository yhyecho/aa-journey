import React from 'react'
import axios from 'axios'
import config from '../config'
import { connect } from 'react-redux'
import { fetchCats } from '../redux/actions/catActions'
import { createCourse } from '../redux/actions/courseActions'
import { browserHistory } from 'react-router'
import '../css/new-course.css'

class NewCourse extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount() {
    this.props.fetchCats()
  }
  handleSubmit(e) {
    e.preventDefault()
    let course = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      poster: this.refs.poster.value,
      summary: this.refs.summary.value,
      categoryId: this.refs.categoryId.value
    }
    this.props.createCourse(course)
    browserHistory.push('/')
  }
  render() {
    let optionList = this.props.cats.map((item, i) => {
      return (
        <option value={item._id} key={i}>
          {item.name}
        </option>
      )
    })
    return (
      <div className="new-course">
        <h1 className="title-dark-bg">新建课程</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>课程名</label>
              <input type="text" ref="name" placeholder="e.g 小鸟课程" />
            </p>
            <p>
              <label>课程价格</label>
              <input type="text" ref="price" placeholder="e.g 12.5"/>
            </p>
            <p>
              <label>封面图</label>
              <input type="text" ref="poster" placeholder="e.g http://example.com/xxx.png" />
            </p>
            <p>
              <label>课程简介</label>
              <input type="textarea" ref="summary" placeholder="课程介绍内容" />
            </p>
            <p>
              <select name="categoryId" ref="categoryId">
                {optionList}
              </select>
            </p>
            <p>
              <input type="submit" className="submit"/>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cats: state.cats
})

export default connect(mapStateToProps, {fetchCats, createCourse})(NewCourse)