import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentShow extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div>
        <p>{comment.content} - {comment.commenter}</p>
      </div>
    )
  }
}

export default CommentShow;
