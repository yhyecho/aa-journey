import React from 'react'
import axios from 'axios'
import config from '../config'
import { browserHistory } from 'react-router'

class SignUp extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    let _user = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    axios.post(`${config.host}/user/signup`, _user)
      .then(res => {
        console.log(res)
        browserHistory.push('/')
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>
            <label>用户名</label>
            <input ref="username" type="text"/>
          </p>
          <p>
            <label>密码</label>
            <input ref="password" type="password"/>
          </p>
          <p>
            <label>确认密码</label>
            <input ref="password"  type="password"/>
          </p>
          <p>
            <input type="submit" value="注册"/>
          </p>
        </form>
      </div>
    )
  }
}

export default SignUp