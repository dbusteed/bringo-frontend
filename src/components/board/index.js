import React,{Component} from 'react'
import Tile from '../tile'
import './style.css'
import axios from 'axios'
import config from '../../config'

class Board extends Component {
  
  // get from the backend somehow
  tiles = [
    "test one",
    'test two',
    "test three"
  ]

  state = {
    name: '',
    tiles: []
  }

  componentDidMount() {
    axios.get(config.BACKEND_URL+`/api/boards?id=${this.props.match.params.id}`)
    .then( (res) => {
      this.setState({
        name: res.data[0].name,
        tiles: res.data[0].tiles.split('|')
        // make this a better way to distribute the tiles, not random
        // if it doesn't need to be (>24)
      })
    })
    .catch( (e) => {
      console.log(e)
    })
  }

  render() {
    return (
      <div className="board-container">
        <div className="board-title-container">
          <p>{this.state.name}</p>
        </div>
        <table className="board-table">
          <tbody>
            <tr>
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
            </tr>
            <tr>
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
            </tr>
            <tr>
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text="free space" />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
            </tr>
            <tr>
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
            </tr>
            <tr>
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
              <Tile text={this.state.tiles[Math.floor(Math.random()*this.state.tiles.length)]} />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board