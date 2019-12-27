import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import * as actions from '../../store/actions/auth'
import { PageHeader, Button } from 'antd'

class NavBar extends Component {

  render() {
    return (
      <div>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
            marginBottom: '15px'
          }}
          title="bringo"
          extra={[
            <Link key="1" to="/"><Button>view all boards</Button></Link>,
            <Link key="2" to="/"><Button>create a new board</Button></Link>,
            this.props.isAuthenticated 
            ? <Button key="3" onClick={this.props.logout}>logout</Button>
            : <Link key="3" to="/login"><Button>login</Button></Link>
          ]}
        />
      </div>
    )
  } 
}
  
const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.authLogout()) 
  }
}

export default connect(null, mapDispatchToProps)(NavBar)