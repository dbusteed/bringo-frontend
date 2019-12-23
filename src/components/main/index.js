import React, { Component } from 'react'
import axios from 'axios'
import Thumbnail from '../thumbnail'
import config from '../../config'
import { Link } from 'react-router-dom'

class Main extends Component {
  state = {
    tileData: []
  }

  // get info about the boards
  componentDidMount() {
    axios.get(config.BACKEND_URL+'/api/boards')
      .then( (res) => {
        this.setState({tileData: res.data.map( (obj) => [obj.id, obj.name] )})
        console.log(this.state.tileData)
      })
      .catch( (e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <p>this is the the main page</p>
        <p>this is where the all the boards are listed</p>
        {
          this.state.tileData.map( (tile, index) => (
            <Link key={index} to={`/board/${tile[0]}`}>
              <Thumbnail name={tile[1]} />
            </Link>
          ))
        }
      </div>
    )
  }
}

export default Main