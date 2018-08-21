import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'react-bootstrap';

const CommentShow = ({ comment }) => {
  return (
    <div>
      <ListGroupItem>{comment.content} {<br></br>} <span className="italics"> -{comment.commenter}</span></ListGroupItem>
    </div>
  )
}

export default CommentShow;
