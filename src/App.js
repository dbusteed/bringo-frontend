import React, { Component } from 'react'
import './App.css'
import Board from './components/board'
import NavBar from './components/navbar'
import Login from './components/login'
import Main from './components/main'
import SignUp from './components/signup'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/auth'

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return (
      <Router>
        <NavBar {...this.props}/>
        <div className="main-container">
          <Route exact path="/" component={Main} />
          <Route path="/board/:id" component={Board} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
