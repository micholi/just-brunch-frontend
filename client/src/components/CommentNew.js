import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions';
import { FormControl, FormGroup } from 'react-bootstrap';

class CommentNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: '' ,
      commenter: '',
      restaurant_id: +this.props.restaurantId
    };
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state);
    console.log(this.state)
    this.setState({
    content: '',
    commenter: ''
    })
  }

  render(){
    return (
      <div className="comment-form">
      <p className="bold-text">Add Comment</p>
        <form onSubmit={this.handleOnSubmit} >

          <FormGroup>

            <label>Comment:</label>
            <FormControl
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Your Name:</label>
            <FormControl
              type="text"
              name="commenter"
              value={this.state.commenter}
              onChange={this.handleOnChange}
            />
            <br></br>

            <button className="btn btn-sm btn-dark" type="submit">Submit Comment</button>

          </FormGroup>

        </form>
      </div>
    );
  }
}

export default connect(null, { createComment })(CommentNew)
