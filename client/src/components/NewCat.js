import React from 'react'
import Header from './Header'
import axios from 'axios'
import config from '../config'
import { fetchCats } from '../redux/actions/catActions'
import { connect } from 'react-redux'


class NewCat extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     cats: []
  //   }
  // }
  componentWillMount() {
    // axios.get(`${config.host}/categorys`).then(res => {
    //   this.setState({
    //     cats: res.data.cats
    //   })
    // })
    this.props.fetchCats()
  }
  _updateCatList() {
    axios.get(`${config.host}/categorys`)
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
  _handleDelete(id) {
    let cats = this.state.cats
    cats = cats.filter(item => item._id != id)
    this.setState({cats})
    axios.delete(`${config.host}/category?id=${id}`)
      .then(res => {
        console.log(res)
      })
  }  
  render() {
    // let catList = this.state.cats.map((item, i) => {
    let catList = this.props.cats.map((item, i) => {
      return (  
        <li key={i}>
          {item.name} -- {item._id}
          <span onClick={this._handleDelete.bind(this, item._id)}> 删除 </span>
        </li>  
      )
    })
    return (
      <div>
        <ul>
          {catList.length != 0 ? catList : '暂无分类'}
        </ul>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input ref='catName' type='text' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cats: state.cats
})

export default connect(mapStateToProps, {fetchCats})(NewCat)