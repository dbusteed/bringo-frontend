import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'

const { TextArea } = Input;

class CreateBoard extends Component {
  state = {
    message: null,
    error: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post(config.BACKEND_URL+'/api/boards/new', {
          name: values.name,
          tiles: [...new Set(values.tiles.replace('|', '/').split('\n'))].join('|')
        })
        .then(res => {
          this.setState({message: "board successfully created!"})
        })
        .catch(err => {
          this.setState({message: "something went wrong...please try again later", error: true})
          console.log(err)
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let content;
    
    if (this.props.user.token == null) {
      
      content = (
        <p>
          you gotta<Link to="/login"> login </Link>before making a board
        </p>  
      )

    } else if (this.state.message !== null) {
      if (this.state.error) {
        content = (
          <p>{this.state.message}</p>
        )
      } else {
          content = (
            <div>
              <p>{this.state.message}</p>
              <br />
              <p>
                <a onClick={() => window.location.reload(false)}>make another board</a>
              </p>
            </div>
          )
      }
    } else {
      content = (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h1>create a new board</h1>
          <p><span style={{fontWeight: "bold"}}>tips:</span> add lots of tiles to make the board interesting!</p>
          <br />
          <Form.Item label="board name">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'please give your board a name!' }],
            })(
              <Input
                placeholder="cool board name"
              />,
            )}
          </Form.Item>
          <Form.Item label="board tiles (seperate with a new line)">
            {getFieldDecorator('tiles', {
              rules: [{ required: true, message: 'please give you board some tiles!' }],
            })(
              <TextArea rows={15}
                placeholder={"tile one text\ntile two text\nthe last tile!"}
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              create board
            </Button>
          </Form.Item>
        </Form>
      )
    }
    
    return (
      <div>
        {content}
      </div>
    );
  }
}

const WrappedCreateBoard = Form.create({ name: 'create_board' })(CreateBoard);

const mapStateToProps = state => {

  console.log(state)

  return {
    user: state.user
  } 
}

export default connect(mapStateToProps, null)(WrappedCreateBoard)