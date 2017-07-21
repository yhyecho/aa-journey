import React from 'react'
import { browserHistory } from 'react-router'
import { signin } from '../redux/actions/accountActions'
import { connect } from 'react-redux'
import '../css/signin.css'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    let _user = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.props.signin(_user)
    browserHistory.push('/')
  }
  render() {
    return (
      <div className='signin'>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>用户名</label>
            <input ref="username" type="text"/>
          </p>
          <p>
            <label>密码</label>
            <input ref="password" type="password"/>
          </p>
          <p>
            <label></label>
            <input className="submit button" type="submit" value="登录"/>
          </p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { signin })(SignIn)