import React from 'react'
import { Link } from 'react-router'
import '../css/profile.css'
import { getOrders } from '../redux/actions/orderActions'
import { loadCourses } from '../redux/actions/courseActions'
import { connect } from 'react-redux'

class Profile extends React.Component {
  componentWillMount() {
    this.props.loadCourses()
    this.props.getOrders()
  }
  getMyCourses(orders) {
    // 从所有的 order 中拿到我购买的所有商品的 Id
    let userId = localStorage.getItem('userId')
    let purchase = orders.filter(value => value.userId == userId)
    .map(item => item.courses)
    // [[1,2],[3,4]] => [1,2,3,4]
    let myPurchase = [].concat.apply([], purchase)
    return myPurchase
  }
  render() {
    let currentCourse
    let paidItems = this.getMyCourses(this.props.orders).map(item => {
      currentCourse = this.props.courses.filter(value => value._id == item)[0]
      if(typeof(currentCourse) == "undefined") { 
        return
      }
      return (
        <li className="course" key={item}>
          <div className="card">
            <img src={currentCourse.poster}/>
            <p className="title">{currentCourse.name}</p>
          </div>
        </li>
      )
    })
    return (
      <div className="profile">
        <h1 className="title-dark-bg">个人中心</h1>
        <div className="container">
          <Link className="button" to="/new-course">创建课程</Link>
          <Link className="button" to="/new-category">创建课程分类</Link>
        </div>
        <h1 className="page-title">已购课程</h1>
        <ul className="product-list container">
          {paidItems}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  courses: state.courses
})

export default connect(mapStateToProps, {loadCourses, getOrders})(Profile)