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
            <Link key="1" to="/"><Button>find a board</Button></Link>,

            this.props.user.token !== null
            ? <Link key="4" to="/"><Button>manage my boards</Button></Link> : "",
            
            <Link key="2" to="/create"><Button>create a new board</Button></Link>,
            
            this.props.user.token !== null 
            ? <Button key="3" onClick={this.props.logout}>logout</Button>
            : <Link key="3" to="/login"><Button>login</Button></Link>
          ]}
        />
      </div>
    )
  } 
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.authLogout()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)