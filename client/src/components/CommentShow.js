import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentShow extends Component {
  render() {
    const { content, commenter} = this.props;

    return (
      <div>
        <p>{content}</p>
        <p>{commenter}</p>
      </div>
    )
  }
}

export default CommentShow;
