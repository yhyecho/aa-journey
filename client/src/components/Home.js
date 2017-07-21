import React from 'react'
import Header from './Header'
import '../css/home.css'
import { connect } from 'react-redux'
import { loadCourses } from '../redux/actions/courseActions'
import Cart from './Cart'
import { addCourseToCart } from '../redux/actions/cartActions'

class Home extends React.Component {
  componentWillMount() {
    this.props.loadCourses()
  }
  handleClick(id) {
    this.props.addCourseToCart(id)
  }
  render() {
    let courseList = this.props.courses.map((item, i) => (
      <li key={i} className="course">
        <div className="card">
          <img src={item.poster} />
          <p className="title">{item.name}</p>
          <div className="buy" onClick={() => this.handleClick(item._id)}>购买</div>
        </div>
      </li>
    ))
    return (
      <div className="home">
        <h1 className="page-title"> 所有课程 </h1>
        <ul className="course-list container">
          {courseList}
        </ul>
        <Cart />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses
})

export default connect(mapStateToProps, {loadCourses, addCourseToCart})(Home)