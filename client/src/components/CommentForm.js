import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions';
import {FormControl, FormGroup} from 'react-bootstrap';

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: '' ,
      commenter: '',
      restaurant_id: +this.props.restaurantId
    };
  }

  handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createComment, history } = this.props;
    createComment(this.state, history);
  }

  render(){
    return (
      <div className="container-fluid">
      <h6>Add Comment</h6>
        <form style={{ width: 600}} onSubmit={this.handleOnSubmit} >

          <FormGroup>

            <label>Comment:</label>
            <FormControl
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <br></br>

            <label>Your Name:</label>
            <FormControl
              type="text"
              name="commenter"
              value={this.state.commenter}
              onChange={this.handleChange}
            />
            <br></br>

            <button className="btn btn-sm btn-dark" type="submit">Submit Comment</button>

          </FormGroup>

        </form>
      </div>
    );
  }
}

export default connect(null, { createComment })(CommentForm)
