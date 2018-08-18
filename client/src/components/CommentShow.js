import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'react-bootstrap'

class CommentShow extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div>
        <ListGroupItem>{comment.content} - {comment.commenter}</ListGroupItem>
      </div>
    )
  }
}

export default CommentShow;
