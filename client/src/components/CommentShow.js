import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'react-bootstrap';

const CommentShow = ({ comment }) => {
  return (
    <div>
      <ListGroupItem>{comment.content} {<br></br>} -{comment.commenter}</ListGroupItem>
    </div>
  )
}

export default CommentShow;
