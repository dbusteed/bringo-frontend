import React, { Component } from 'react'

class Thumbnail extends Component {

  render() {
    return (
      <div>
        <p>Thumbnail for "{this.props.name}"</p>
      </div>
    )
  }
}

export default Thumbnail