import React from 'react';
import CommentShow from './CommentShow';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap'

const CommentsList = ({ comments }) => {

  const renderComments = comments.map(comment =>
    <CommentShow key={comment.id} comment={comment} />
  );

  return (
    <div className="container-fluid">
    <p>Comments:</p>
    <ListGroup>
      {renderComments}
      </ListGroup>
    </div>
  )
}

export default CommentsList;
