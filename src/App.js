import React from 'react';
import './App.css';
import Board from './components/board';
import NavBar from './components/navbar'
import Main from './components/main'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-container">
        <Route exact path="/" component={Main} />
        <Route path="/board/:id" component={Board} />
      </div>
    </Router>
  );
}

export default App;
