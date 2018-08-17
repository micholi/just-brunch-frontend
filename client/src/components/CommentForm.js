import React, {Component} from 'react';
import { connect } from 'react-redux';
import {FormControl, FormGroup} from 'react-bootstrap';

class CommentForm extends Component {

  constructor() {
    super();

    this.state = {
      content: '' ,
      commenter: ''
    };
  }

  handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addComment, history } = this.props;
    addComment(this.state, history);
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
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br></br>

            <label>Your Name:</label>
            <FormControl
              type="text"
              name="commenter"
              value={this.state.cuisine}
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


//export default connect(null, { createRestaurant })(RestaurantNew)
export default CommentForm;
