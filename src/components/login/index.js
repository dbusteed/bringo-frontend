import React, { Component } from 'react'
import { Form, Icon, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/auth'
import { Link } from 'react-router-dom'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.username, values.password)
      }
    })
    // this.props.history.push('/')
  }

  componentDidMount() {
    // console.log(this.props.history)
  }

  render() {  

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      )
    }

    const { getFieldDecorator } = this.props.form;
    
    return (

      <div>
        {errorMessage}

        {
          this.props.loading ?

          <Spin indicator={antIcon} />

          :

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                />,
                )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                />,
                )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                log in
              </Button>
              <span style={{marginLeft: '10px'}}>
                or
              </span>
              <Link to="/signup" style={{marginLeft: '10px'}}>
                signup here
              </Link>
            </Form.Item>
          </Form>
        }
      </div>
    );
  }
}

const WrappedLogin = Form.create({ name: 'login' })(Login);

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLogin)